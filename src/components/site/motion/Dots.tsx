"use client";

import React from "react";

export default function Dots({
    active,
    total,
    onPick,
    activeClassName = "w-7 bg-gold-500",
    idleClassName = "w-2.5 bg-white/40 hover:bg-white/60",
}: {
    active: number;
    total: number;
    onPick: (i: number) => void;
    activeClassName?: string;
    idleClassName?: string;
}) {
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={["h-2.5 rounded-full transition", i === active ? activeClassName : idleClassName].join(" ")}
                />
            ))}
        </div>
    );
}