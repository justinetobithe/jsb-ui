import type { StateSlice } from "@/types/store";
import type { AppStateActions, AppStateDefinition } from "@/types/App";

export const createAppSlice: StateSlice<AppStateDefinition & AppStateActions> = (set) => ({
    isSidebarOpen: false,
    toggleIsSidebarOpen: (open) =>
        set((state) => ({
            ...state,
            app: {
                ...state.app,
                isSidebarOpen: open,
            },
        })),
});