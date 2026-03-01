import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            contact_number: string;
            role: string;
            image: string | null;
            auth_token: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        name: string;
        email: string;
        contact_number: string;
        role: string;
        image: string | null;
        auth_token: string;
    }
}