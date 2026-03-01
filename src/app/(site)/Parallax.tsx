"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
    children,
    speed = 0.18,
    className = "",
}: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}) {
    const { scrollY } = useScroll();
    const range = useMemo(() => Math.max(80, Math.min(220, 140 + speed * 260)), [speed]);
    const y = useTransform(scrollY, (v) => -v * speed);

    return (
        <motion.div
            className={className}
            style={{ y }}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ translateY: range * 0 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}