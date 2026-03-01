// import type { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { login } from "@/lib/AuthenticationAPI";

// const authOptions: AuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             authorize: async (credentials) => {
//                 const email = credentials?.email ?? "";
//                 const password = credentials?.password ?? "";

//                 const [response, error] = await login(email, password);

//                 if (error) throw new Error(error);

//                 if (response?.data) {
//                     return {
//                         ...response.data.user,
//                         auth_token: response.data.token,
//                     } as any;
//                 }

//                 return null;
//             },
//         }),
//     ],
//     session: { strategy: "jwt" },
//     pages: {
//         signIn: "/login",
//         error: "/unauthenticated",
//     },
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 const u = user as any;
//                 token.id = u.id;
//                 token.email = u.email;
//                 token.name = u.name;
//                 token.contact_number = u.contact_number;
//                 token.role = u.role;
//                 token.image = u.image ?? null;
//                 token.auth_token = u.auth_token;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             session.user = {
//                 ...(session.user || {}),
//                 id: token.id as string,
//                 email: token.email as string,
//                 name: token.name as string,
//                 contact_number: token.contact_number as string,
//                 role: token.role as string,
//                 image: (token.image as string | null) ?? null,
//                 auth_token: token.auth_token as string,
//             } as any;

//             return session;
//         },
//     },
// };

// export default authOptions;

// /src/lib/authOptions.ts

import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/AuthenticationAPI";

type LoginUser = {
  id: string | number;
  email: string;
  name: string;
  contact_number?: string | null;
  role?: string | null;
  image?: string | null;
};

type AuthorizeReturn = LoginUser & { auth_token: string };

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const api = process.env.NEXT_PUBLIC_API_URL;
 
          if (!api) return null;

          const email = credentials?.email?.trim() ?? "";
          const password = credentials?.password ?? "";

          if (!email || !password) return null;

          const [response, error] = await login(email, password);

          if (error) return null;

          const data = response?.data;
          if (!data?.user || !data?.token) return null;

          const u = data.user as LoginUser;

          const user: AuthorizeReturn = {
            id: u.id,
            email: u.email,
            name: u.name,
            contact_number: u.contact_number ?? null,
            role: u.role ?? null,
            image: u.image ?? null,
            auth_token: data.token as string,
          };

          return user as any;
        } catch {
          return null;
        }
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
        token.contact_number = u.contact_number ?? null;
        token.role = u.role ?? null;
        token.image = u.image ?? null;
        token.auth_token = u.auth_token ?? null;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...(session.user || {}),
        id: (token.id as string) ?? "",
        email: (token.email as string) ?? "",
        name: (token.name as string) ?? "",
        contact_number: (token.contact_number as string | null) ?? null,
        role: (token.role as string | null) ?? null,
        image: (token.image as string | null) ?? null,
        auth_token: (token.auth_token as string | null) ?? null,
      } as any;

      return session;
    },
  },
};

export default authOptions;