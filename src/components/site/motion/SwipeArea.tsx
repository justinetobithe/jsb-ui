"use client";

import { useRef } from "react";

type Props = {
    children: React.ReactNode;
    onLeft?: () => void;
    onRight?: () => void;
    className?: string;
};

export default function SwipeArea({ children, onLeft, onRight, className }: Props) {
    const startX = useRef(0);
    const startY = useRef(0);
    const dragging = useRef(false);
    const locked = useRef<"x" | "y" | null>(null);

    const threshold = 55;

    return (
        <div
            className={className}
            style={{ touchAction: "pan-y" }}
            onPointerDown={(e) => {
                if (e.pointerType === "mouse" && e.buttons !== 1) return;
                dragging.current = true;
                locked.current = null;
                startX.current = e.clientX;
                startY.current = e.clientY;
            }}
            onPointerMove={(e) => {
                if (!dragging.current) return;

                const dx = e.clientX - startX.current;
                const dy = e.clientY - startY.current;

                if (!locked.current) {
                    locked.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
                }

                if (locked.current === "x") {
                    if (Math.abs(dx) > 10) e.currentTarget.setPointerCapture(e.pointerId);
                }
            }}
            onPointerUp={(e) => {
                if (!dragging.current) return;
                dragging.current = false;

                const dx = e.clientX - startX.current;
                const dy = e.clientY - startY.current;

                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
                    if (dx < 0) onLeft?.();
                    else onRight?.();
                }

                locked.current = null;
            }}
            onPointerCancel={() => {
                dragging.current = false;
                locked.current = null;
            }}
        >
            {children}
        </div>
    );
}