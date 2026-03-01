"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type AppDialogOptions = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    contentClassName?: string;
};

type AppDialogContextValue = {
    openDialog: (options: AppDialogOptions) => void;
    closeDialog: () => void;
};

const AppDialogContext = createContext<AppDialogContextValue | null>(null);

export function useAppDialog() {
    const ctx = useContext(AppDialogContext);
    if (!ctx) throw new Error("useAppDialog must be used within AppDialogProvider");
    return ctx;
}

export default function AppDialogProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<AppDialogOptions>({});

    const closeDialog = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openDialog = useCallback((next: AppDialogOptions) => {
        setOptions(next);
        setIsOpen(true);
    }, []);

    const value = useMemo(() => ({ openDialog, closeDialog }), [openDialog, closeDialog]);

    return (
        <AppDialogContext.Provider value={value}>
            {children}

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className={options.contentClassName}>
                    {(options.title || options.description) && (
                        <DialogHeader>
                            {options.title && <DialogTitle>{options.title}</DialogTitle>}
                            {options.description && <DialogDescription>{options.description}</DialogDescription>}
                        </DialogHeader>
                    )}

                    {options.content}

                    {options.footer && <DialogFooter>{options.footer}</DialogFooter>}
                </DialogContent>
            </Dialog>
        </AppDialogContext.Provider>
    );
}