"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Section from "@/components/site/Section";
import PrimaryButton from "@/components/site/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    ChevronDown,
    ChevronUp,
    Leaf,
    MapPin,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
    Utensils,
    Users,
} from "lucide-react";
import Reveal from "@/components/site/motion/Reveal";
import TiltCard from "@/components/site/motion/TiltCard";
import SwipeArea from "@/components/site/motion/SwipeArea";
import Dots from "@/components/site/motion/Dots";
import useAutoAdvance from "@/components/site/motion/useAutoAdvance";

const booking = [
    { title: "Dining", desc: "Seasonal menus, signature dishes, and warm service to elevate every meal.", href: "/dining", image: "/site/booking-dining.jpg", icon: Utensils },
    { title: "Rooms & Suites", desc: "Comfort-first rooms with thoughtful layouts and premium details.", href: "/rooms", image: "/site/booking-rooms.jpg", icon: CalendarDays },
    { title: "Events", desc: "Meeting-ready spaces and celebrations designed with care and flexibility.", href: "/events", image: "/site/booking-events.jpg", icon: Users },
];

const offers = [
    { title: "Stay & Save", desc: "Book multiple nights and enjoy special savings for longer stays.", href: "/rooms", image: "/site/offer-1.jpg", cta: "View Details", tag: "Best Value" },
    { title: "Dine with Delight", desc: "Enjoy curated dining experiences designed for comfort and flavor.", href: "/dining", image: "/site/offer-2.jpg", cta: "View Details", tag: "Chef’s Pick" },
    { title: "Extra Extravaganza", desc: "Host your next event with venue perks and memorable service.", href: "/events", image: "/site/offer-3.jpg", cta: "View Details", tag: "Popular" },
];

const heroSlides = [
    { title: "Comfort that feels effortless", desc: "Discover a refined stay surrounded by nature, elevated by service, and designed for rest, dining, and unforgettable gatherings.", image: "/site/hero.jpg", badge: "JSB Lifestyle & Resorts", primaryHref: "/rooms", primaryText: "Explore Rooms", secondaryHref: "/contact", secondaryText: "Contact" },
    { title: "Dining crafted with warmth", desc: "Seasonal flavors, signature dishes, and an inviting ambiance—perfect for families and celebrations.", image: "/site/booking-dining.jpg", badge: "Dining Experience", primaryHref: "/dining", primaryText: "Explore Dining", secondaryHref: "/contact", secondaryText: "Reserve" },
    { title: "Events made memorable", desc: "Meeting-ready spaces and celebrations designed with care, flexibility, and premium service.", image: "/site/booking-events.jpg", badge: "Meetings & Events", primaryHref: "/events", primaryText: "View Venues", secondaryHref: "/contact", secondaryText: "Inquire" },
];

const testimonials = [
    { name: "Maria S.", role: "Weekend Guest", quote: "The rooms were spotless, the staff were incredibly helpful, and the peaceful surroundings made our stay unforgettable.", rating: 5 },
    { name: "Joshua P.", role: "Family Stay", quote: "Our kids loved the activities. Dining was excellent, and the service felt premium without being intimidating.", rating: 5 },
    { name: "Aileen R.", role: "Event Organizer", quote: "Smooth coordination, beautiful venue, and responsive support. Our event was a success from start to finish.", rating: 5 },
];

const faqs = [
    { q: "What are your check-in and check-out times?", a: "Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request." },
    { q: "How soon will you reply to inquiries?", a: "We typically reply within 24–48 hours. For urgent concerns, please include your preferred dates and contact number." },
    { q: "Do you accept event reservations?", a: "Yes. We support meetings, celebrations, and private events. Share your estimated guest count and event date to get a tailored proposal." },
];

function clampIndex(i: number, len: number) {
    if (i < 0) return len - 1;
    if (i >= len) return 0;
    return i;
}

function StarRow({ count }: { count: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={["h-4 w-4", i < count ? "text-gold-400" : "text-white/25"].join(" ")}
                    fill={i < count ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
}

function FeaturePill({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="group rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur"
        >
            <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-400 shadow-sm transition group-hover:bg-navy-900">
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

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
    return (
        <motion.button
            type="button"
            onClick={onToggle}
            whileTap={{ scale: 0.99 }}
            className="w-full rounded-2xl border border-black/10 bg-white/80 p-5 text-left shadow-sm backdrop-blur"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-navy-950">{q}</div>
                {open ? <ChevronUp className="h-5 w-5 text-navy-700" /> : <ChevronDown className="h-5 w-5 text-navy-700" />}
            </div>
            <AnimatePresence initial={false}>
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="mt-3 text-sm text-navy-700">{a}</div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.button>
    );
}

export default function Page() {
    const [heroIndex, setHeroIndex] = useState(0);
    const [heroPaused, setHeroPaused] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [faqOpen, setFaqOpen] = useState<number | null>(0);

    const heroLen = heroSlides.length;
    const testimonialLen = testimonials.length;

    useAutoAdvance(!heroPaused, 4500, () => setHeroIndex((i) => clampIndex(i + 1, heroLen)));
    useAutoAdvance(true, 6500, () => setTestimonialIndex((i) => clampIndex(i + 1, testimonialLen)));

    const hero = useMemo(() => heroSlides[heroIndex], [heroIndex]);
    const testi = useMemo(() => testimonials[testimonialIndex], [testimonialIndex]);

    return (
        <>
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(194,150,74,0.55),transparent_62%)] blur-2xl" />
                    <div className="absolute -right-28 top-10 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(11,27,54,0.55),transparent_62%)] blur-2xl" />
                    <div className="absolute left-1/3 -bottom-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(194,150,74,0.30),transparent_65%)] blur-2xl" />
                    <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.18)_1px,transparent_0)] [background-size:30px_30px]" />
                </div>

                <SwipeArea
                    onLeft={() => setHeroIndex((i) => clampIndex(i + 1, heroLen))}
                    onRight={() => setHeroIndex((i) => clampIndex(i - 1, heroLen))}
                    className="touch-pan-y"
                >
                    <div className="relative" onMouseEnter={() => setHeroPaused(true)} onMouseLeave={() => setHeroPaused(false)}>
                        <div className="relative h-[560px] w-full md:h-[640px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hero.image}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.01 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image src={hero.image} alt={hero.title} fill priority className="object-cover" />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-navy-950/55" />
                            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-navy-950/25 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="mx-auto w-full max-w-6xl px-4">
                                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <motion.div
                                            key={hero.title}
                                            initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
                                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                                                <Sparkles className="h-4 w-4 text-gold-300" />
                                                {hero.badge}
                                            </div>

                                            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">{hero.title}</h1>
                                            <p className="mt-4 max-w-xl text-sm text-white/85 md:text-base">{hero.desc}</p>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                <PrimaryButton href={hero.primaryHref}>{hero.primaryText}</PrimaryButton>
                                                <motion.div whileTap={{ scale: 0.98 }}>
                                                    <Link
                                                        href={hero.secondaryHref}
                                                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                                                    >
                                                        {hero.secondaryText}
                                                    </Link>
                                                </motion.div>
                                            </div>

                                            <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                                <FeaturePill icon={BadgeCheck} title="Premium Service" desc="Thoughtful support from inquiry to check-out." />
                                                <FeaturePill icon={Leaf} title="Nature & Comfort" desc="Tranquil surroundings designed for rest." />
                                                <FeaturePill icon={ShieldCheck} title="Trusted Experience" desc="Clean, safe, and consistently maintained." />
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="hidden lg:block">
                                        <TiltCard className="relative ml-auto max-w-md rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-lg backdrop-blur">
                                            <div className="text-sm font-semibold">Plan your visit</div>
                                            <div className="mt-2 text-sm text-white/75">Choose what you’d like to book—rooms, dining, or events.</div>

                                            <div className="mt-5 grid gap-3">
                                                {booking.map((b) => {
                                                    const Icon = b.icon;
                                                    return (
                                                        <Link
                                                            key={b.title}
                                                            href={b.href}
                                                            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                                                                    <Icon className="h-5 w-5" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm font-semibold">{b.title}</div>
                                                                    <div className="text-xs text-white/65">Explore options</div>
                                                                </div>
                                                            </div>
                                                            <span className="text-white/60 transition group-hover:translate-x-0.5">→</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>

                                            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                                                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                                                    <MapPin className="h-4 w-4 text-gold-300" />
                                                    Sindangan, Zamboanga del Norte
                                                </div>
                                                <div className="mt-1 text-xs text-white/60">Peaceful destination • Warm hospitality • Memorable design</div>
                                            </div>
                                        </TiltCard>
                                    </div>
                                </div>

                                <div className="mt-10 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <motion.button
                                            whileTap={{ scale: 0.98 }}
                                            aria-label="Previous slide"
                                            onClick={() => setHeroIndex((i) => clampIndex(i - 1, heroLen))}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                                        >
                                            <ArrowLeft className="h-5 w-5" />
                                        </motion.button>
                                        <motion.button
                                            whileTap={{ scale: 0.98 }}
                                            aria-label="Next slide"
                                            onClick={() => setHeroIndex((i) => clampIndex(i + 1, heroLen))}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.button>
                                    </div>

                                    <Dots active={heroIndex} total={heroLen} onPick={setHeroIndex} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwipeArea>
            </section>

            <section className="relative bg-[#efe6db]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
                <Section className="py-14">
                    <Reveal>
                        <div className="text-center">
                            <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Select Type of Booking</div>
                            <div className="mt-2 text-sm text-navy-700">Choose your stay, dining, or event experience with JSB.</div>
                        </div>
                    </Reveal>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {booking.map((b, idx) => {
                            const Icon = b.icon;
                            return (
                                <Reveal key={b.title} delay={0.06 * idx}>
                                    <TiltCard className="group overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-sm backdrop-blur">
                                        <div className="relative h-44 w-full">
                                            <Image src={b.image} alt={b.title} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-gold-300">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="text-lg font-semibold text-navy-950">{b.title}</div>
                                            </div>
                                            <div className="mt-2 text-sm text-navy-700">{b.desc}</div>
                                            <Link
                                                href={b.href}
                                                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/5"
                                            >
                                                Explore
                                            </Link>
                                        </div>
                                    </TiltCard>
                                </Reveal>
                            );
                        })}
                    </div>
                </Section>
            </section>

            <Section className="py-14">
                <Reveal>
                    <div className="text-center">
                        <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Frequently Asked Questions</div>
                        <div className="mx-auto mt-2 max-w-2xl text-sm text-navy-700">Quick answers for check-in times, inquiry response, and event reservations.</div>
                    </div>
                </Reveal>

                <div className="mt-8 grid gap-4">
                    {faqs.map((f, idx) => (
                        <Reveal key={f.q} delay={0.04 * idx}>
                            <FAQItem q={f.q} a={f.a} open={faqOpen === idx} onToggle={() => setFaqOpen((v) => (v === idx ? null : idx))} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            <section className="relative bg-[#efe6db]">
                <Section className="py-14">
                    <Reveal>
                        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                            <div>
                                <div className="text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">Guest Testimonials</div>
                                <div className="mt-2 text-sm text-navy-700">Real feedback from stays, family visits, and hosted events.</div>
                            </div>

                            <div className="flex items-center gap-2">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    aria-label="Previous testimonial"
                                    onClick={() => setTestimonialIndex((i) => clampIndex(i - 1, testimonialLen))}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/80 text-navy-950 shadow-sm transition hover:bg-navy-950/5"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    aria-label="Next testimonial"
                                    onClick={() => setTestimonialIndex((i) => clampIndex(i + 1, testimonialLen))}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/80 text-navy-950 shadow-sm transition hover:bg-navy-950/5"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </motion.button>
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                        <Reveal>
                            <motion.div
                                key={testi.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-300">
                                        <Quote className="h-6 w-6" />
                                    </div>
                                    <StarRow count={testi.rating} />
                                </div>

                                <div className="mt-4 text-base font-semibold text-navy-950">{testi.name}</div>
                                <div className="mt-1 text-xs font-semibold text-navy-600">{testi.role}</div>

                                <div className="mt-4 text-sm leading-relaxed text-navy-700">“{testi.quote}”</div>

                                <div className="mt-6 flex items-center justify-between">
                                    <div className="text-xs text-navy-600">
                                        {testimonialIndex + 1} / {testimonialLen}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {Array.from({ length: testimonialLen }).map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setTestimonialIndex(i)}
                                                aria-label={`Pick testimonial ${i + 1}`}
                                                className={["h-2.5 rounded-full transition", i === testimonialIndex ? "w-7 bg-gold-500" : "w-2.5 bg-navy-950/10 hover:bg-navy-950/20"].join(" ")}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] p-7 text-white shadow-sm">
                                <div className="text-sm font-semibold">Why guests come back</div>
                                <div className="mt-2 text-sm text-white/75">Premium service, thoughtful spaces, and a calm atmosphere—built for real rest.</div>

                                <div className="mt-6 grid gap-3">
                                    {[
                                        { icon: BadgeCheck, title: "Clean & well-maintained", desc: "Comfort-first spaces with consistent upkeep." },
                                        { icon: Leaf, title: "Nature-forward design", desc: "Relax with scenery and peaceful surroundings." },
                                        { icon: ShieldCheck, title: "Safe & dependable", desc: "A stay you can trust for family and events." },
                                    ].map((x) => {
                                        const Icon = x.icon;
                                        return (
                                            <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold">{x.title}</div>
                                                        <div className="mt-1 text-xs text-white/70">{x.desc}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <motion.div whileTap={{ scale: 0.98 }}>
                                        <Link href="/contact" className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
                                            Contact Us
                                        </Link>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.98 }}>
                                        <Link href="/experience" className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                            Explore Experience
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            </section>

            <section className="relative bg-[#fbf8f2]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(11,27,54,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(194,150,74,0.12),transparent_55%)]" />
                <Section className="py-14">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(180deg,#0b1b36,#09152b)] px-6 py-10 text-white shadow-sm md:px-10">
                            <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:24px_24px]" />
                            <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                                        <Utensils className="h-4 w-4 text-gold-300" />
                                        Dining Inquiry
                                    </div>
                                    <div className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                                        Planning a meal during your stay?
                                    </div>
                                    <div className="mt-2 text-sm text-white/80">
                                        Send your preferred date and time. We’ll confirm availability and options.
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 md:justify-end">
                                    <Link href="/contact" className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">
                                        Contact Us
                                    </Link>
                                    <Link href="/rooms" className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                        View Rooms
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