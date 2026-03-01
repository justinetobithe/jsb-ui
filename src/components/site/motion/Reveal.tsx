
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({
    children,
    delay = 0,
    y = 14,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
}) {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ y, opacity: 0, filter: "blur(6px)" }}
            animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)" } : undefined}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}