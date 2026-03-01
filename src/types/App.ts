export interface AppStateDefinition {
    isSidebarOpen: boolean;
}

export interface AppStateActions {
    toggleIsSidebarOpen: (open: boolean) => void;
}