"use client";

import { motion } from "framer-motion";

export default function HoverCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}