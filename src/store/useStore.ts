import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import deepmerge from "deepmerge";
import type { CombinedState } from "@/types/store";
import { createAppSlice } from "./createAppSlice";
import { createUserSlice } from "./createUserSlice";

const useStore = create<CombinedState>()(
    devtools(
        persist(
            immer((...api) => ({
                app: createAppSlice(...api),
                user: createUserSlice(...api),
            })),
            {
                name: "jsb-state",
                partialize: (state) => ({
                    app: state.app,
                    user: state.user,
                }),
                merge: (persistedState, currentState) =>
                    deepmerge(currentState, persistedState as Partial<CombinedState>) as CombinedState,
            }
        )
    )
);

export default useStore;