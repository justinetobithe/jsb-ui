// import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";
// import { routes } from "@/utils/routes";

// export default withAuth(
//     function middleware(request: NextRequestWithAuth) {
//         let unauthorized = false;
//         const authenticated = !!request.nextauth.token;

//         const isAuthPage =
//             request.nextUrl.pathname.startsWith("/login") ||
//             request.nextUrl.pathname.startsWith("/register");

//         let isRouteFound = false;

//         routes.forEach((item) => {
//             if (request.nextUrl.pathname.startsWith(item.route)) {
//                 isRouteFound = true;

//                 if (
//                     request.nextauth.token &&
//                     !item.roles.includes(request.nextauth.token?.role)
//                 ) {
//                     unauthorized = true;
//                 }
//             }

//             if (item.child_routes.length) {
//                 item.child_routes.forEach((v) => {
//                     if (request.nextUrl.pathname.startsWith(v.route)) {
//                         isRouteFound = true;

//                         if (
//                             request.nextauth.token &&
//                             !v.roles.includes(request.nextauth.token?.role)
//                         ) {
//                             unauthorized = true;
//                         }
//                     }
//                 });
//             }
//         });

//         if (!isRouteFound) {
//             return NextResponse.next();
//         }

//         if (authenticated && unauthorized && request.nextUrl.pathname !== "/") {
//             return NextResponse.rewrite(new URL("/unauthorized", request.url));
//         }

//         if (isAuthPage) {
//             if (authenticated) {
//                 return NextResponse.redirect(new URL("/home", request.url));
//             }
//             return NextResponse.next();
//         }

//         if (!authenticated) {
//             if (request.nextUrl.pathname !== "/") {
//                 return NextResponse.redirect(new URL("/login", request.url));
//             }
//         }

//         return NextResponse.next();
//     },
//     {
//         callbacks: {
//             authorized: () => true,
//         },
//         pages: {
//             signIn: "/login",
//         },
//     }
// );

// export const config = {
//     matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
export function middleware() {
    return NextResponse.next();
}
export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};