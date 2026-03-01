import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import { toast } from "sonner";
import authOptions from "@/lib/AuthOptions";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

type ClientSession = Awaited<ReturnType<typeof getSession>>;
let lastSession: ClientSession | null = null;

api.interceptors.request.use(async (config) => {
    config.headers = config.headers ?? {};

    if (typeof window === "undefined") {
        const session = await getServerSession(authOptions);

        if (session?.user?.auth_token) {
            (config.headers as any).Authorization = `Bearer ${session.user.auth_token}`;
        } else {
            delete (config.headers as any).Authorization;
        }

        return config;
    }

    if (!lastSession || (lastSession.expires && Date.now() > Date.parse(lastSession.expires))) {
        lastSession = await getSession();
    }

    if (lastSession?.user?.auth_token) {
        (config.headers as any).Authorization = `Bearer ${lastSession.user.auth_token}`;
    } else {
        delete (config.headers as any).Authorization;
    }

    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
                toast.error("Your session has expired. Please login again.");
                await signOut({ callbackUrl: "/login" });
                return Promise.reject(error);
            }

            const message =
                (error.response?.data as any)?.message ||
                (error.response?.data as any)?.error ||
                error.message ||
                "Something went wrong";

            toast.error(message);
        }

        return Promise.reject(error);
    }
);