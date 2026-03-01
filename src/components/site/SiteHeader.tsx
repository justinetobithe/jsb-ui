"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const nav = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/dining", label: "Dining" },
    { href: "/events", label: "Events" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SiteHeader() {
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();
    const [open, setOpen] = useState(false);
    const items = useMemo(() => nav, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const headerAnim = prefersReducedMotion
        ? {}
        : { initial: { y: -10, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.45, ease } };

    const overlayAnim = prefersReducedMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
        : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2, ease } };

    const panelAnim = prefersReducedMotion
        ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
        : {
            initial: { opacity: 0, y: -10, scale: 0.98, filter: "blur(6px)" },
            animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            exit: { opacity: 0, y: -8, scale: 0.98, filter: "blur(6px)" },
            transition: { duration: 0.24, ease },
        };

    return (
        <>
            <motion.header
                {...headerAnim}
                className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/70"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(900px_circle_at_10%_0%,rgba(194,150,74,0.10),transparent_55%),radial-gradient(800px_circle_at_95%_0%,rgba(11,27,54,0.10),transparent_55%)]" />

                <div className="relative mx-auto w-full max-w-6xl px-4">
                    <div className="flex items-center justify-between py-3">
                        <Link href="/" className="group flex items-center gap-3">
                            <motion.div
                                whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.02 }}
                                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-gold-500/10 sm:h-[72px] sm:w-[72px] md:h-20 md:w-20"
                            >
                                <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_40%_30%,rgba(194,150,74,0.22),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                                <Image src="/jsb_logo.png" alt="JSB Lifestyle & Resorts" fill className="object-contain p-1 sm:p-1.5" priority />
                            </motion.div>

                            <div className="leading-tight">
                                <div className="text-[0.95rem] font-semibold tracking-tight text-navy-950 sm:text-base md:text-lg">
                                    JSB Lifestyle & Resorts
                                </div>
                                <div className="text-xs text-navy-600 sm:text-sm">Comfort • Nature • Experience</div>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-1 md:flex">
                            {items.map((i) => {
                                const active = pathname === i.href;
                                return (
                                    <motion.div key={i.href} whileHover={prefersReducedMotion ? undefined : { y: -1 }} transition={{ type: "spring", stiffness: 520, damping: 30 }}>
                                        <Link
                                            href={i.href}
                                            className={cn(
                                                "relative rounded-xl px-3 py-2 text-sm text-navy-700 transition hover:bg-navy-950/5 hover:text-navy-950",
                                                active && "bg-navy-950/5 font-semibold text-navy-950"
                                            )}
                                        >
                                            {i.label}
                                            {active ? (
                                                <motion.span
                                                    layoutId="active-nav"
                                                    className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gold-500"
                                                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                                                />
                                            ) : null}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        <motion.button
                            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-navy-950 md:hidden"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {open ? (
                    <motion.div className="fixed inset-0 z-[60] md:hidden" {...overlayAnim}>
                        <button
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                            className="absolute inset-0 bg-black/20"
                        />

                        <motion.div
                            {...panelAnim}
                            className="absolute left-0 right-0 top-[72px] mx-auto w-full max-w-6xl px-4"
                        >
                            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-xl">
                                <div className="px-4 py-3">
                                    <div className="grid gap-1">
                                        {items.map((i) => {
                                            const active = pathname === i.href;
                                            return (
                                                <Link
                                                    key={i.href}
                                                    href={i.href}
                                                    onClick={() => setOpen(false)}
                                                    className={cn(
                                                        "rounded-xl px-4 py-3 text-sm text-navy-700 transition hover:bg-navy-950/5 hover:text-navy-950",
                                                        active && "bg-navy-950/5 font-semibold text-navy-950"
                                                    )}
                                                >
                                                    {i.label}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-3 rounded-xl border border-black/10 bg-[#efe6db]/40 p-3">
                                        <div className="text-xs font-semibold text-navy-950">Quick note</div>
                                        <div className="mt-1 text-xs text-navy-700">
                                            For reservations and inquiries, visit the Contact page.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}