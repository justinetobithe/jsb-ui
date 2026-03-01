"use client";

import { motion } from "framer-motion";

export default function FeaturePill({
    icon: Icon,
    title,
    desc,
}: {
    icon: any;
    title: string;
    desc: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur"
        >
            <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                    <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-navy-950">{title}</div>
                    <div className="mt-1 text-xs text-navy-700">{desc}</div>
                </div>
            </div>
        </motion.div>
    );
}