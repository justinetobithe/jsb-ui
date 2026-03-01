"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/site/Section";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import HoverCard from "@/components/site/motion/HoverCard";
import TagPill from "@/components/site/ui/TagPill";
import FeaturePill from "@/components/site/ui/FeaturePill";
import {
    BadgeCheck,
    BedDouble,
    CalendarDays,
    Coffee,
    Leaf,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
    Wifi,
    ArrowRight,
    Check,
} from "lucide-react";

type Room = {
    key: string;
    name: string;
    tag: string;
    desc: string;
    price: string;
    hero: string;
    shots: string[];
    highlights: string[];
    amenities: { icon: any; label: string }[];
    size: string;
    sleeps: string;
    bed: string;
};

const ROOMS: Room[] = [
    {
        key: "executive",
        name: "Executive Twin",
        tag: "Best for Friends",
        desc: "A practical, comfortable room with the essentials done right—ideal for quick stays and restful nights.",
        price: "From ₱4,999 / night",
        hero: "/site/rooms-executive.jpg",
        shots: ["/site/rooms-executive.jpg", "/site/rooms-hero.jpg", "/site/rooms-deluxe.jpg"],
        highlights: ["2 Single Beds", "Work Desk", "City / Nature View"],
        amenities: [
            { icon: Wifi, label: "Fast Wi-Fi" },
            { icon: Coffee, label: "Breakfast Option" },
            { icon: ShieldCheck, label: "Secure & Maintained" },
        ],
        size: "28–32 sqm",
        sleeps: "2 guests",
        bed: "Twin beds",
    },
    {
        key: "deluxe",
        name: "Deluxe",
        tag: "Most Popular",
        desc: "Bright, calm, and polished—an easy choice for business trips or relaxed weekends.",
        price: "From ₱5,999 / night",
        hero: "/site/rooms-deluxe.jpg",
        shots: ["/site/rooms-deluxe.jpg", "/site/rooms-hero.jpg", "/site/rooms-suite.jpg"],
        highlights: ["1 Queen Bed", "Premium Linens", "Spacious Bath"],
        amenities: [
            { icon: Wifi, label: "Fast Wi-Fi" },
            { icon: Leaf, label: "Quiet Ambience" },
            { icon: BadgeCheck, label: "Attentive Service" },
        ],
        size: "32–38 sqm",
        sleeps: "2 guests",
        bed: "Queen bed",
    },
    {
        key: "suite",
        name: "Suite",
        tag: "Signature",
        desc: "More room to settle in—great for longer stays, families, and guests who want extra space.",
        price: "From ₱8,999 / night",
        hero: "/site/rooms-suite.jpg",
        shots: ["/site/rooms-suite.jpg", "/site/rooms-hero.jpg", "/site/rooms-deluxe.jpg"],
        highlights: ["Separate Lounge", "Extra Space", "Family-ready"],
        amenities: [
            { icon: Users, label: "Family Friendly" },
            { icon: BedDouble, label: "Extra Comfort" },
            { icon: Sparkles, label: "Signature Feel" },
        ],
        size: "45–58 sqm",
        sleeps: "3–4 guests",
        bed: "Queen + lounge",
    },
];

function TabButton({
    active,
    onClick,
    title,
    sub,
}: {
    active: boolean;
    onClick: () => void;
    title: string;
    sub: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "w-full rounded-2xl border px-4 py-3 text-left transition",
                active
                    ? "border-navy-950 bg-navy-950 text-white shadow-sm"
                    : "border-black/10 bg-white/75 text-navy-950 hover:bg-white",
            ].join(" ")}
        >
            <div className="text-sm font-semibold">{title}</div>
            <div className={["mt-0.5 text-xs", active ? "text-white/75" : "text-navy-700"].join(" ")}>{sub}</div>
        </button>
    );
}

function AmenityChip({ icon: Icon, label }: { icon: any; label: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-semibold text-navy-950 backdrop-blur">
            <Icon className="h-4 w-4 text-navy-950" />
            {label}
        </div>
    );
}

function Spec({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur">
            <div className="text-[11px] font-semibold text-navy-600">{label}</div>
            <div className="mt-1 text-sm font-semibold text-navy-950">{value}</div>
        </div>
    );
}

export default function Page() {
    const [active, setActive] = useState<string>(ROOMS[1].key);
    const room = useMemo(() => ROOMS.find((r) => r.key === active) ?? ROOMS[0], [active]);

    return (
        <>
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(194,150,74,0.38),transparent_62%)] blur-2xl" />
                    <div className="absolute -right-28 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(11,27,54,0.34),transparent_62%)] blur-2xl" />
                    <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.12)_1px,transparent_0)] [background-size:30px_30px]" />
                </div>

                <Section className="relative pt-12">
                    <div className="grid gap-10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                        <Reveal>
                            <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8">
                                <div className="flex items-center justify-between gap-3">
                                    <TagPill tone="light" text="Rooms & Suites" />
                                    <div className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-800">
                                        <Star className="h-4 w-4" />
                                        Guest favorite
                                    </div>
                                </div>

                                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">
                                    Thoughtful rooms, easy comfort
                                </h1>

                                <p className="mt-3 text-sm text-navy-700">
                                    Pick a room that matches your stay. Clean finishes, calm atmosphere, and service that feels personal.
                                </p>

                                <div className="mt-6 grid gap-3">
                                    <TabButton
                                        active={active === "executive"}
                                        onClick={() => setActive("executive")}
                                        title="Executive Twin"
                                        sub="Essentials done right • Twin beds"
                                    />
                                    <TabButton
                                        active={active === "deluxe"}
                                        onClick={() => setActive("deluxe")}
                                        title="Deluxe"
                                        sub="Bright & calm • Most requested"
                                    />
                                    <TabButton
                                        active={active === "suite"}
                                        onClick={() => setActive("suite")}
                                        title="Suite"
                                        sub="Extra space • Lounge feel"
                                    />
                                </div>

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    <Spec label="Size" value={room.size} />
                                    <Spec label="Sleeps" value={room.sleeps} />
                                    <Spec label="Bed" value={room.bed} />
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
                                    >
                                        Request Availability
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5"
                                    >
                                        Ask for Rates
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.06}>
                            <div className="relative">
                                <TiltCard className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                                    <div className="relative h-[380px] w-full md:h-[480px]">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={room.hero}
                                                initial={{ opacity: 0, scale: 1.01 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.01 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute inset-0"
                                            >
                                                <Image src={room.hero} alt={room.name} fill className="object-cover" priority />
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/18 to-transparent" />

                                        <div className="absolute left-6 top-6">
                                            <TagPill text={room.tag} tone="dark" />
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                                                <div>
                                                    <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{room.name}</div>
                                                    <div className="mt-2 max-w-xl text-sm text-white/80">{room.desc}</div>
                                                </div>

                                                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
                                                    <div className="text-[11px] font-semibold text-white/70">Starting rate</div>
                                                    <div className="mt-0.5 text-sm font-semibold">{room.price}</div>
                                                </div>
                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {room.amenities.map((a) => (
                                                    <AmenityChip key={a.label} icon={a.icon} label={a.label} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>

                                <div className="mt-4 grid gap-4 md:grid-cols-3">
                                    {room.shots.slice(0, 3).map((src, idx) => (
                                        <HoverCard key={`${room.key}-${idx}`} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                                            <div className="relative h-28 w-full">
                                                <Image src={src} alt="Room preview" fill className="object-cover" />
                                            </div>
                                        </HoverCard>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            </section>

            <section className="relative bg-[#fbf8f2]">
                <Section className="py-12">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <Reveal>
                            <FeaturePill icon={BadgeCheck} title="Premium Service" desc="Warm support from inquiry to check-out." />
                        </Reveal>
                        <Reveal delay={0.05}>
                            <FeaturePill icon={Wifi} title="Fast Wi-Fi" desc="Reliable connection for work and leisure." />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <FeaturePill icon={Leaf} title="Calm Destination" desc="Quiet surroundings and relaxed pace." />
                        </Reveal>
                    </div>

                    <Reveal delay={0.08}>
                        <div className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
                            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-navy-950">
                                        <Sparkles className="h-4 w-4 text-gold-600" />
                                        What’s included
                                    </div>
                                    <div className="mt-4 text-2xl font-semibold tracking-tight text-navy-950">
                                        Details guests appreciate most
                                    </div>
                                    <div className="mt-2 text-sm text-navy-700">
                                        Comfort, cleanliness, and a calm place to reset—built into every room category.
                                    </div>

                                    <div className="mt-5 grid gap-2">
                                        {room.highlights.map((h) => (
                                            <div key={h} className="flex items-start gap-2 text-sm text-navy-800">
                                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-gold-200">
                                                    <Check className="h-3.5 w-3.5" />
                                                </span>
                                                <span className="min-w-0">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <HoverCard className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] p-6 text-white shadow-sm">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                                            <BedDouble className="h-5 w-5" />
                                        </div>
                                        <div className="mt-4 text-sm font-semibold">Comfort-first beds</div>
                                        <div className="mt-1 text-xs text-white/75">Premium linens and restful support.</div>
                                    </HoverCard>

                                    <HoverCard className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                            <CalendarDays className="h-5 w-5" />
                                        </div>
                                        <div className="mt-4 text-sm font-semibold text-navy-950">Flexible stays</div>
                                        <div className="mt-1 text-xs text-navy-700">Weekends, events, and longer plans.</div>
                                    </HoverCard>

                                    <HoverCard className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <div className="mt-4 text-sm font-semibold text-navy-950">Secure & maintained</div>
                                        <div className="mt-1 text-xs text-navy-700">Consistent upkeep and a safe feel.</div>
                                    </HoverCard>

                                    <HoverCard className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#c2964a,#a77a32)] p-6 text-white shadow-sm">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                                            <Coffee className="h-5 w-5" />
                                        </div>
                                        <div className="mt-4 text-sm font-semibold">Dining options</div>
                                        <div className="mt-1 text-xs text-white/85">Ask about breakfast and bundles.</div>
                                    </HoverCard>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {ROOMS.map((r) => (
                                <HoverCard key={r.key} className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="text-sm font-semibold text-navy-950">{r.name}</div>
                                        <div className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-800">{r.size}</div>
                                    </div>
                                    <div className="mt-2 text-sm text-navy-700">{r.desc}</div>
                                    <div className="mt-4 text-sm font-semibold text-navy-950">{r.price}</div>

                                    <button
                                        type="button"
                                        onClick={() => setActive(r.key)}
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5"
                                    >
                                        View this room <ArrowRight className="h-4 w-4" />
                                    </button>
                                </HoverCard>
                            ))}
                        </div>
                    </Reveal>
                </Section>
            </section>

            <section className="relative bg-[#fbf8f2]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(11,27,54,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(194,150,74,0.12),transparent_55%)]" />
                <Section className="py-14">
                    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] px-6 py-10 text-white shadow-sm md:px-10">
                        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:24px_24px]" />
                        <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-gold-400" />
                                    Room Inquiry
                                </div>
                                <div className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                                    Need photos, rates, or availability?
                                </div>
                                <div className="mt-2 text-sm text-white/80">
                                    Share your dates and guest count. We’ll respond with the best options for your stay.
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 md:justify-end">
                                <Link href="/contact" className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
                                    Contact Us
                                </Link>
                                <Link href="/dining" className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                    Explore Dining
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            </section>
        </>
    );
}