import type User from "@/types/User";
import { api } from "./api";
import apiError from "./apiError";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export interface LoginResponse {
    data: {
        token: string;
        user: User;
    };
}

export const login = async (
    email: string,
    password: string
): Promise<[LoginResponse | null, string | null]> => {
    try {
        const { data } = await api.post<LoginResponse>("/api/login", {
            email,
            password,
        });
        return [data, null];
    } catch (err) {
        return [null, apiError(err)];
    }
};

export const logout = async (): Promise<void> => {
    await api.post("/api/logout");
};

export const useLogout = () => {
    return useMutation({
        mutationFn: logout,
        onSettled: () => {
            signOut({ callbackUrl: "/login" });
        },
    });
};