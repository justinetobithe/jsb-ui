"use client";

import { useEffect } from "react";

export default function useAutoAdvance(enabled: boolean, delayMs: number, cb: () => void) {
    useEffect(() => {
        if (!enabled) return;
        const t = setInterval(cb, delayMs);
        return () => clearInterval(t);
    }, [enabled, delayMs, cb]);
}