import { Home, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AppRoute {
    route: string;
    title: string;
    icon?: LucideIcon;
    roles: string[];
    isSidebarVisible: boolean;
    child_routes: AppRoute[];
}

export const routes: AppRoute[] = [
    {
        route: "/home",
        title: "Home",
        icon: Home,
        roles: ["admin"],
        isSidebarVisible: true,
        child_routes: [],
    },
    {
        route: "/profile",
        title: "Profile",
        icon: User,
        roles: ["admin"],
        isSidebarVisible: true,
        child_routes: [],
    },
];