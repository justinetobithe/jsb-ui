"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/site/Section";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import { BadgeCheck, Leaf, MapPin, Sparkles, ShieldCheck, ExternalLink } from "lucide-react";

const pillars = [
    { title: "Mission", desc: "Deliver exceptional hospitality with comfort, care, and consistency.", icon: BadgeCheck },
    { title: "Sustainability", desc: "Respect nature and reduce environmental impact through mindful practices.", icon: Leaf },
    { title: "Experience", desc: "Spaces and service designed to rejuvenate, inspire, and feel effortless.", icon: Sparkles },
];

const csr = [
    { title: "Green Footprints", desc: "Conservation-forward habits that support local nature and reduce waste." },
    { title: "Community engagement", desc: "Meaningful participation with the local community through initiatives and partnerships." },
    { title: "Responsible comfort", desc: "Better guest experiences with practical, sustainable improvements." },
];

const MAP_EMBED =
    "https://maps.google.com/maps?ll=8.576379,123.357439&z=17&t=m&hl=en&gl=PH&mapclient=embed&cid=10926883620242246052&output=embed";

const MAP_LINK =
    "https://maps.google.com/maps?ll=8.576379,123.357439&z=17&t=m&hl=en&gl=PH&cid=10926883620242246052";

export default function Page() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="relative h-[340px] w-full md:h-[420px]">
                    <Image src="/site/hero.jpg" alt="About JSB" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-white/55" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl font-semibold tracking-tight text-gold-700 md:text-5xl"
                            >
                                Get to know us more!
                            </motion.div>
                            <div className="mx-auto mt-3 max-w-2xl text-sm text-navy-800/80 md:text-base">
                                JSB Lifestyle and Resorts is a calm destination designed for comfort, nature, and meaningful experiences in Sindangan, Zamboanga del Norte.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section className="py-14">
                <Reveal>
                    <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur md:p-10">
                        <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">About JSB</div>
                        <div className="mt-3 max-w-3xl text-sm text-navy-700 md:text-base">
                            We’re committed to warm hospitality and well-maintained spaces—where guests can rest, dine, celebrate, and reconnect with nature in a calm, welcoming setting.
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {pillars.map((p) => {
                                const Icon = p.icon;
                                return (
                                    <div key={p.title} className="rounded-2xl border border-black/10 bg-white p-5">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="mt-3 text-sm font-semibold text-navy-950">{p.title}</div>
                                        <div className="mt-1 text-xs text-navy-700">{p.desc}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>
            </Section>

            <section className="relative bg-[#efe6db]">
                <Section className="py-14">
                    <Reveal>
                        <div className="text-center">
                            <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Corporate Social Responsibility</div>
                            <div className="mx-auto mt-2 max-w-2xl text-sm text-navy-700">Experience nature, embrace sustainability—small actions that add up.</div>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                        <Reveal>
                            <TiltCard className="overflow-hidden rounded-3xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                                <div className="relative h-[260px] w-full md:h-full md:min-h-[340px]">
                                    <Image src="/site/offer-1.jpg" alt="CSR" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
                                            <div className="text-xs font-semibold text-white/75">CSR initiative</div>
                                            <div className="mt-0.5 text-sm font-semibold">Green Footprints</div>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur md:p-10">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                    <Leaf className="h-4 w-4 text-gold-600" />
                                    Sustainability focus
                                </div>

                                <div className="mt-4 text-lg font-semibold text-navy-950">Experience Nature, Embrace Sustainability</div>
                                <div className="mt-2 text-sm text-navy-700">
                                    Our approach prioritizes conservation-forward practices that protect local beauty while supporting guests and community through meaningful efforts.
                                </div>

                                <div className="mt-6 grid gap-3">
                                    {csr.map((c) => (
                                        <div key={c.title} className="rounded-2xl border border-black/10 bg-white p-5">
                                            <div className="text-sm font-semibold text-navy-950">{c.title}</div>
                                            <div className="mt-1 text-xs text-navy-700">{c.desc}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/contact" className="rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                        Contact Us
                                    </Link>
                                    <Link href="/experience" className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5">
                                        Explore Experience
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            </section>

            <Section className="py-14">
                <Reveal>
                    <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur md:p-10">
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="min-w-0">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                    <MapPin className="h-4 w-4 text-gold-600" />
                                    Location
                                </div>

                                <div className="mt-4 text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Zamboanga del Norte</div>

                                <div className="mt-3 text-sm text-navy-700 md:text-base">
                                    Located in Sindangan, JSB Lifestyle and Resorts is a calm destination for leisure stays and corporate gatherings—surrounded by nature and designed for comfort, dining, and celebration.
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <div className="mt-3 text-sm font-semibold text-navy-950">Comfort-first</div>
                                        <div className="mt-1 text-xs text-navy-700">Clean, maintained spaces and calm surroundings.</div>
                                    </div>

                                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                            <BadgeCheck className="h-5 w-5" />
                                        </div>
                                        <div className="mt-3 text-sm font-semibold text-navy-950">Warm service</div>
                                        <div className="mt-1 text-xs text-navy-700">A team that supports your stay with care.</div>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href={MAP_LINK}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
                                    >
                                        Open in Google Maps
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5"
                                    >
                                        Contact for directions
                                    </Link>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                                <div className="relative h-[320px] w-full sm:h-[360px] md:h-[420px] lg:h-[420px]">
                                    <iframe
                                        title="JSB Lifestyle & Resorts Map"
                                        src={MAP_EMBED}
                                        className="absolute inset-0 h-full w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Section>
        </>
    );
}