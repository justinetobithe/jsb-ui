"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/site/Section";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import { CalendarDays, ChefHat, Leaf, MapPin, Sparkles, Utensils } from "lucide-react";

const highlights = [
    { title: "Local Heritage", desc: "Comforting flavors inspired by Sindangan and the wider Zamboanga del Norte region.", icon: Leaf },
    { title: "Modern Comfort", desc: "Familiar favorites prepared with a refined, contemporary touch.", icon: ChefHat },
    { title: "Warm Service", desc: "Thoughtful hospitality that makes every meal feel special.", icon: Sparkles },
];

const menus = [
    { title: "All-day Dining", desc: "Balanced options from light bites to hearty mains, perfect for families and groups.", image: "/site/booking-dining.jpg" },
    { title: "Signature Plates", desc: "Resort favorites crafted for shareable moments and memorable flavors.", image: "/site/offer-2.jpg" },
    { title: "Celebration Sets", desc: "Pre-arranged bundles for birthdays, reunions, and intimate gatherings.", image: "/site/offer-3.jpg" },
];

export default function Page() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(194,150,74,0.18),transparent_55%),radial-gradient(900px_circle_at_85%_10%,rgba(11,27,54,0.14),transparent_60%)]" />
                    <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
                </div>

                <Section className="pt-12 pb-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <Reveal>
                            <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur md:p-10">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                    <Utensils className="h-4 w-4 text-gold-600" />
                                    Dining at JSB
                                </div>
                                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 md:text-5xl">Modern flavors. Local soul.</h1>
                                <p className="mt-4 text-sm text-navy-700 md:text-base">
                                    From comforting regional inspiration to familiar favorites—enjoy warm service and a calm ambiance designed for families, celebrations, and restful weekends.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                        Reserve a Table
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5">
                                        Ask for Menu
                                    </Link>
                                </div>

                                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                    {highlights.map((h) => {
                                        const Icon = h.icon;
                                        return (
                                            <div key={h.title} className="rounded-2xl border border-black/10 bg-white/85 p-4">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="mt-3 text-sm font-semibold text-navy-950">{h.title}</div>
                                                <div className="mt-1 text-xs text-navy-700">{h.desc}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <TiltCard className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                                <div className="relative h-[360px] w-full md:h-[460px]">
                                    <Image src="/site/booking-dining.jpg" alt="JSB Dining" fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/12 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                            <div>
                                                <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">A calm dining atmosphere</div>
                                                <div className="mt-2 max-w-xl text-sm text-white/80">Designed for warm conversations, family meals, and celebrations.</div>
                                            </div>
                                            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
                                                <div className="text-[11px] font-semibold text-white/70">Location</div>
                                                <div className="mt-0.5 flex items-center gap-2 text-sm font-semibold">
                                                    <MapPin className="h-4 w-4 text-gold-300" />
                                                    Sindangan, Zamboanga del Norte
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </Reveal>
                    </div>
                </Section>
            </section>

            <section className="relative bg-[#efe6db]">
                <Section className="py-14">
                    <Reveal>
                        <div className="flex flex-col gap-2 text-center">
                            <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Dining experiences</div>
                            <div className="mx-auto max-w-2xl text-sm text-navy-700">
                                Choose your pace—quick comfort, signature plates, or curated sets for gatherings.
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {menus.map((m, idx) => (
                            <Reveal key={m.title} delay={0.05 * idx}>
                                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 420, damping: 28 }} className="overflow-hidden rounded-3xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                                    <div className="relative h-44 w-full">
                                        <Image src={m.image} alt={m.title} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/18 via-transparent to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-lg font-semibold text-navy-950">{m.title}</div>
                                        <div className="mt-2 text-sm text-navy-700">{m.desc}</div>
                                        <div className="mt-5 flex gap-3">
                                            <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                                Inquire
                                            </Link>
                                            <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5">
                                                Reserve
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.08}>
                        <div className="mt-10 rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] px-7 py-10 text-white shadow-sm md:px-10">
                            <div className="grid gap-6 md:grid-cols-2 md:items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold">
                                        <CalendarDays className="h-4 w-4 text-gold-300" />
                                        Dining inquiry
                                    </div>
                                    <div className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Planning a family meal or celebration?</div>
                                    <div className="mt-2 text-sm text-white/80">
                                        Tell us your date and group size. We’ll recommend the best setup and menu direction.
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 md:justify-end">
                                    <Link href="/contact" className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
                                        Contact Us
                                    </Link>
                                    <Link href="/events" className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                        View Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </Section>
            </section>
        </>
    );
}