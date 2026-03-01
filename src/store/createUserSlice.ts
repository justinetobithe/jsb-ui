import type { StateSlice } from "@/types/store";
import type { UserStateActions, UserStateDefinition } from "@/types/User";

export const createUserSlice: StateSlice<UserStateDefinition & UserStateActions> = (set) => ({
    user: null,
    setUser: (user) =>
        set((state) => ({
            ...state,
            user: {
                ...state.user,
                user,
            },
        })),
});