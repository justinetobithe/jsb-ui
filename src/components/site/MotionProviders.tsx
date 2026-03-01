"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function MotionProviders({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.2,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });

        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}