import type { StateCreator } from "zustand";
import type { AppStateActions, AppStateDefinition } from "./App";
import type { UserStateActions, UserStateDefinition } from "./User";

export interface CombinedState {
    app: AppStateDefinition & AppStateActions;
    user: UserStateDefinition & UserStateActions;
}

export type StateSlice<T> = StateCreator<CombinedState, [], [], T>;