"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/site/Section";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import { Leaf, Sparkles, Waves } from "lucide-react";

const items = [
    { title: "Water Retreat Sanctuary", desc: "A tranquil escape designed for relaxation and renewal.", icon: Waves, image: "/site/hero.jpg" },
    { title: "Serene Surroundings", desc: "A calm ambiance to refresh your body and soul.", icon: Leaf, image: "/site/rooms-hero.jpg" },
    { title: "Transformative Moments", desc: "Simple experiences that feel deeply restorative.", icon: Sparkles, image: "/site/offer-1.jpg" },
];

const moments = [
    { title: "Slow mornings", desc: "Quiet light, calm views, and unhurried pacing." },
    { title: "Family-friendly comfort", desc: "Spaces that feel easy for groups and kids." },
    { title: "Nature-forward atmosphere", desc: "A setting designed to help you reset." },
    { title: "Warm hospitality", desc: "A team that supports your stay without fuss." },
];

export default function Page() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(194,150,74,0.16),transparent_55%),radial-gradient(900px_circle_at_85%_10%,rgba(11,27,54,0.14),transparent_62%)]" />
                    <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
                </div>

                <Section className="pt-12 pb-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <Reveal>
                            <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur md:p-10">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                    <Sparkles className="h-4 w-4 text-gold-600" />
                                    Experience
                                </div>
                                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 md:text-5xl">Escape to calm. Return refreshed.</h1>
                                <p className="mt-4 text-sm text-navy-700 md:text-base">
                                    Experience JSB as a quiet sanctuary—built for rest, family time, and simple moments that feel meaningful.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link href="/rooms" className="inline-flex items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                        Explore Rooms
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5">
                                        Plan Your Visit
                                    </Link>
                                </div>

                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {moments.map((m) => (
                                        <div key={m.title} className="rounded-2xl border border-black/10 bg-white/85 p-4">
                                            <div className="text-sm font-semibold text-navy-950">{m.title}</div>
                                            <div className="mt-1 text-xs text-navy-700">{m.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <TiltCard className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                                <div className="relative h-[380px] w-full md:h-[520px]">
                                    <Image src="/site/rooms-hero.jpg" alt="Experience JSB" fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/12 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="rounded-3xl border border-white/12 bg-white/10 p-5 text-white backdrop-blur">
                                            <div className="text-sm font-semibold">A sanctuary feel</div>
                                            <div className="mt-1 text-xs text-white/75">Tranquil setting, clean spaces, and warm hospitality.</div>
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
                        <div className="text-center">
                            <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Signature experience points</div>
                            <div className="mx-auto mt-2 max-w-2xl text-sm text-navy-700">Simple, polished, and designed for real rest.</div>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {items.map((i, idx) => {
                            const Icon = i.icon;
                            return (
                                <Reveal key={i.title} delay={0.05 * idx}>
                                    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 420, damping: 28 }} className="overflow-hidden rounded-3xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                                        <div className="relative h-44 w-full">
                                            <Image src={i.image} alt={i.title} fill className="object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/18 via-transparent to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="text-lg font-semibold text-navy-950">{i.title}</div>
                                            </div>
                                            <div className="mt-2 text-sm text-navy-700">{i.desc}</div>
                                        </div>
                                    </motion.div>
                                </Reveal>
                            );
                        })}
                    </div>
                </Section>
            </section>
        </>
    );
}