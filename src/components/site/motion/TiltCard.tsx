"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
    children,
    className = "",
    tilt = 16,
    lift = 6,
}: {
    children: React.ReactNode;
    className?: string;
    tilt?: number;
    lift?: number;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rxRaw = useTransform(y, [-1, 1], [tilt, -tilt]);
    const ryRaw = useTransform(x, [-1, 1], [-tilt, tilt]);

    const rx = useSpring(rxRaw, { stiffness: 260, damping: 26 });
    const ry = useSpring(ryRaw, { stiffness: 260, damping: 26 });

    const transform = useMotionTemplate`perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0px)`;

    return (
        <motion.div
            className={className}
            style={{ transform }}
            onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                x.set((px - 0.5) * 2);
                y.set((py - 0.5) * 2);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            whileHover={{ y: -lift }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
            {children}
        </motion.div>
    );
}