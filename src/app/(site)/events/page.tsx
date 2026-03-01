"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/site/Section";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import { BadgeCheck, CalendarDays, Sparkles, Users } from "lucide-react";

const eventTypes = [
    { title: "Meetings", desc: "A focused environment for teams, planning sessions, and private discussions.", icon: Users, image: "/site/booking-events.jpg" },
    { title: "Conferences", desc: "Adaptable setups for larger gatherings with supportive service and flexibility.", icon: BadgeCheck, image: "/site/offer-3.jpg" },
    { title: "Celebrations", desc: "Beautiful spaces for moments worth remembering—designed with care and warmth.", icon: Sparkles, image: "/site/hero.jpg" },
];

const inclusions = [
    { title: "Flexible layouts", desc: "Arrange seating and flow based on your program and guest count." },
    { title: "On-site support", desc: "Responsive coordination from inquiry through event day." },
    { title: "Comfort-first spaces", desc: "Clean, maintained, and welcoming for guests and organizers." },
    { title: "Dining options", desc: "Ask about set meals, snack breaks, and family-style bundles." },
];

export default function Page() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(11,27,54,0.12),transparent_60%),radial-gradient(900px_circle_at_85%_10%,rgba(194,150,74,0.14),transparent_62%)]" />
                    <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
                </div>

                <Section className="pt-12 pb-10">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <Reveal>
                            <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur md:p-10">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                    <CalendarDays className="h-4 w-4 text-gold-600" />
                                    Events at JSB
                                </div>
                                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 md:text-5xl">Meetings and celebrations, done right.</h1>
                                <p className="mt-4 text-sm text-navy-700 md:text-base">
                                    From intimate gatherings to larger programs—our team supports your plans with thoughtful coordination, calm surroundings, and a polished guest experience.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                        Inquire for Events
                                    </Link>
                                    <Link href="/dining" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5">
                                        Explore Dining
                                    </Link>
                                </div>

                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {inclusions.map((x) => (
                                        <div key={x.title} className="rounded-2xl border border-black/10 bg-white/85 p-4">
                                            <div className="text-sm font-semibold text-navy-950">{x.title}</div>
                                            <div className="mt-1 text-xs text-navy-700">{x.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <TiltCard className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                                <div className="relative h-[380px] w-full md:h-[520px]">
                                    <Image src="/site/booking-events.jpg" alt="Events" fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/12 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="rounded-3xl border border-white/12 bg-white/10 p-5 text-white backdrop-blur">
                                            <div className="text-sm font-semibold">Plan with confidence</div>
                                            <div className="mt-1 text-xs text-white/75">Share your date, estimated guest count, and event type—we’ll recommend the best setup.</div>
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
                            <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Event types</div>
                            <div className="mx-auto mt-2 max-w-2xl text-sm text-navy-700">Choose the experience you’re planning—then we’ll tailor the details around it.</div>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {eventTypes.map((e, idx) => {
                            const Icon = e.icon;
                            return (
                                <Reveal key={e.title} delay={0.05 * idx}>
                                    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 420, damping: 28 }} className="overflow-hidden rounded-3xl border border-black/10 bg-white/85 shadow-sm backdrop-blur">
                                        <div className="relative h-44 w-full">
                                            <Image src={e.image} alt={e.title} fill className="object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/18 via-transparent to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="text-lg font-semibold text-navy-950">{e.title}</div>
                                            </div>
                                            <div className="mt-2 text-sm text-navy-700">{e.desc}</div>
                                            <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                                                Request a Proposal
                                            </Link>
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