"use client";

import { useMemo, useState } from "react";
import Section from "@/components/site/Section";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Sparkles, ShieldCheck, Send, CheckCircle2, XCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const loopEase = [0.42, 0, 0.58, 1] as const;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="min-w-0 grid gap-2">
            <label className="text-xs font-semibold text-navy-700">{label}</label>
            {children}
        </div>
    );
}

export default function Page() {
    const prefersReducedMotion = useReducedMotion();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const statusText = useMemo(() => {
        if (status === "sending") return "Sending...";
        if (status === "success") return "Message sent. We’ll get back to you soon.";
        if (status === "error") return "Something went wrong. Please try again.";
        return "";
    }, [status]);

    const wrap = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 12,
            filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.65, ease },
        },
    };

    const card = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
        show: (d: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease, delay: d },
        }),
    };

    const glow = prefersReducedMotion
        ? undefined
        : {
            animate: { y: [0, -10, 0], scale: [1, 1.03, 1] },
            transition: { duration: 7, repeat: Infinity, ease: loopEase },
        };

    const drift = prefersReducedMotion
        ? undefined
        : {
            animate: { x: [0, 18, 0], y: [0, -10, 0] },
            transition: { duration: 10, repeat: Infinity, ease: loopEase },
        };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;

        setStatus("sending");
        window.setTimeout(() => {
            const ok = Math.random() > 0.12;
            setStatus(ok ? "success" : "error");
            window.setTimeout(() => setStatus("idle"), ok ? 3500 : 4500);
        }, 900);
    };

    return (
        <Section className="pt-10 pb-14 sm:pt-14">
            <motion.div
                variants={wrap}
                initial="hidden"
                animate="show"
                className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,#f3ece2,rgba(243,236,226,0.78))] p-4 sm:p-6 md:p-10"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(255,255,255,0.85),transparent_55%),radial-gradient(700px_circle_at_95%_25%,rgba(11,27,54,0.14),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(194,150,74,0.16),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.18)_1px,transparent_0)] [background-size:28px_28px]" />

                <motion.div
                    className="pointer-events-none absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(194,150,74,0.55),transparent_60%)] blur-2xl"
                    animate={glow?.animate}
                    transition={glow?.transition}
                />
                <motion.div
                    className="pointer-events-none absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(11,27,54,0.55),transparent_62%)] blur-2xl"
                    animate={drift?.animate}
                    transition={drift?.transition}
                />
                <motion.div
                    className="pointer-events-none absolute left-1/3 -bottom-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(194,150,74,0.35),transparent_65%)] blur-2xl"
                    animate={glow?.animate}
                    transition={glow?.transition}
                />

                <div className="relative grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
                    <motion.div
                        variants={card}
                        custom={0.05}
                        initial="hidden"
                        animate="show"
                        className="rounded-3xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6 md:p-8"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-900">
                            <Sparkles className="h-4 w-4 text-gold-600" />
                            Get in touch
                        </div>

                        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl md:text-4xl">
                            Contact JSB Lifestyle & Resorts
                        </h1>

                        <p className="mt-3 max-w-xl text-sm text-navy-700 sm:text-[0.95rem]">
                            Inquiries for reservations, dining, events, or partnerships. Send a message and our team will reply as soon as possible.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <motion.div
                                whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="rounded-2xl border border-black/10 bg-white p-4"
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold text-navy-700">
                                    <Clock className="h-4 w-4 text-gold-600" />
                                    Hours
                                </div>
                                <div className="mt-2 text-sm font-semibold text-navy-950">Daily • 9:00 AM – 6:00 PM</div>
                                <div className="mt-1 text-xs text-navy-600">Philippine Time</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="rounded-2xl border border-black/10 bg-white p-4"
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold text-navy-700">
                                    <MapPin className="h-4 w-4 text-gold-600" />
                                    Location
                                </div>
                                <div className="mt-2 text-sm font-semibold text-navy-950">Sindangan, Zamboanga del Norte</div>
                                <div className="mt-1 text-xs text-navy-600">Resort & Lifestyle Destination</div>
                            </motion.div>
                        </div>

                        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Full name">
                                    <motion.input
                                        whileFocus={{ scale: prefersReducedMotion ? 1 : 1.01 }}
                                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                        name="name"
                                        placeholder="Juan Dela Cruz"
                                        className="h-11 w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-navy-950 outline-none ring-offset-2 placeholder:text-navy-400 focus:ring-2 focus:ring-gold-500/40"
                                    />
                                </Field>

                                <Field label="Email">
                                    <motion.input
                                        whileFocus={{ scale: prefersReducedMotion ? 1 : 1.01 }}
                                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                        name="email"
                                        type="email"
                                        placeholder="you@email.com"
                                        className="h-11 w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-navy-950 outline-none ring-offset-2 placeholder:text-navy-400 focus:ring-2 focus:ring-gold-500/40"
                                    />
                                </Field>
                            </div>

                            <Field label="Subject">
                                <motion.input
                                    whileFocus={{ scale: prefersReducedMotion ? 1 : 1.01 }}
                                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                    name="subject"
                                    placeholder="Reservation inquiry"
                                    className="h-11 w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 text-sm text-navy-950 outline-none ring-offset-2 placeholder:text-navy-400 focus:ring-2 focus:ring-gold-500/40"
                                />
                            </Field>

                            <Field label="Message">
                                <motion.textarea
                                    whileFocus={{ scale: prefersReducedMotion ? 1 : 1.01 }}
                                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                    name="message"
                                    placeholder="Tell us your preferred dates, number of guests, and any special requests..."
                                    className="min-h-[150px] w-full min-w-0 resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-navy-950 outline-none ring-offset-2 placeholder:text-navy-400 focus:ring-2 focus:ring-gold-500/40"
                                />
                            </Field>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <motion.button
                                    type="submit"
                                    whileTap={{ scale: 0.98 }}
                                    whileHover={status === "sending" ? undefined : { y: prefersReducedMotion ? 0 : -1 }}
                                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                    disabled={status === "sending"}
                                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-900 disabled:opacity-70 sm:w-auto"
                                >
                                    <motion.span
                                        animate={status === "sending" && !prefersReducedMotion ? { rotate: 360 } : { rotate: 0 }}
                                        transition={status === "sending" ? { duration: 0.9, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                                        className="inline-flex"
                                    >
                                        <Send className="h-4 w-4" />
                                    </motion.span>
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </motion.button>

                                <div className="flex items-center gap-2 text-xs text-navy-600">
                                    <ShieldCheck className="h-4 w-4 text-gold-600" />
                                    We’ll connect this to your Laravel API endpoint next.
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {status !== "idle" ? (
                                    <motion.div
                                        key={status}
                                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                                        transition={{ duration: 0.35, ease }}
                                        className={[
                                            "mt-1 flex items-start gap-2 rounded-2xl border p-4 text-sm",
                                            status === "success" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-800" : "",
                                            status === "error" ? "border-red-500/20 bg-red-500/10 text-red-800" : "",
                                            status === "sending" ? "border-black/10 bg-white text-navy-800" : "",
                                        ].join(" ")}
                                    >
                                        {status === "success" ? <CheckCircle2 className="mt-0.5 h-5 w-5" /> : null}
                                        {status === "error" ? <XCircle className="mt-0.5 h-5 w-5" /> : null}
                                        {status === "sending" ? <Send className="mt-0.5 h-5 w-5" /> : null}
                                        <div className="min-w-0">{statusText}</div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={card}
                        custom={0.12}
                        initial="hidden"
                        animate="show"
                        className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] p-4 text-white shadow-sm sm:p-6 md:p-8"
                    >
                        <div className="text-sm font-semibold tracking-tight">JSB Lifestyle & Resorts</div>
                        <div className="mt-2 text-sm text-white/75">For reservations, events, and general inquiries — reach us through the details below.</div>

                        <div className="mt-6 grid gap-4">
                            <motion.div
                                whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                    <Mail className="h-4 w-4 text-gold-400" />
                                    Email
                                </div>
                                <div className="mt-2 text-sm font-semibold">info@jsblifestyleandresorts.com</div>
                                <div className="mt-1 text-xs text-white/60">We typically reply within 24–48 hours.</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
                                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                    <Phone className="h-4 w-4 text-gold-400" />
                                    Phone
                                </div>
                                <div className="mt-2 text-sm font-semibold">+63 XXX XXX XXXX</div>
                                <div className="mt-1 text-xs text-white/60">Available during business hours.</div>
                            </motion.div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <div className="text-xs font-semibold text-white/70">Admin Access</div>
                                <div className="mt-2 text-sm text-white/80">
                                    Use the <span className="font-semibold text-white">Admin</span> button in the header to log in and manage content.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                            <div className="text-xs font-semibold text-white/70">Tip</div>
                            <div className="mt-2 text-sm text-white/80">For faster assistance, include preferred dates, number of guests, and any special requests.</div>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                            <motion.span
                                aria-hidden
                                className="inline-flex h-2 w-2 rounded-full bg-gold-400"
                                animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                                transition={prefersReducedMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: loopEase }}
                            />
                            Premium service • Tranquil surroundings • Thoughtful experiences
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}