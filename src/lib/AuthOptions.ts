import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/AuthenticationAPI";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const email = credentials?.email ?? "";
                const password = credentials?.password ?? "";

                const [response, error] = await login(email, password);

                if (error) throw new Error(error);

                if (response?.data) {
                    return {
                        ...response.data.user,
                        auth_token: response.data.token,
                    } as any;
                }

                return null;
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
        error: "/unauthenticated",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const u = user as any;
                token.id = u.id;
                token.email = u.email;
                token.name = u.name;
                token.contact_number = u.contact_number;
                token.role = u.role;
                token.image = u.image ?? null;
                token.auth_token = u.auth_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...(session.user || {}),
                id: token.id as string,
                email: token.email as string,
                name: token.name as string,
                contact_number: token.contact_number as string,
                role: token.role as string,
                image: (token.image as string | null) ?? null,
                auth_token: token.auth_token as string,
            } as any;

            return session;
        },
    },
};

export default authOptions;