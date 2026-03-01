import Link from "next/link";
import Image from "next/image";
import Section from "@/components/site/Section";
import { Facebook, Instagram, Youtube } from "lucide-react";

const explore = [
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/dining", label: "Dining" },
    { href: "/events", label: "Meetings & Events" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
];

const support = [
    { href: "/contact", label: "Customer Support" },
    { href: "/contact", label: "Terms & Conditions" },
    { href: "/contact", label: "Accommodations Terms" },
    { href: "/contact", label: "Site Usage Agreement" },
];

export default function SiteFooter() {
    return (
        <footer className="mt-16 border-t border-black/10 bg-[#efe6db]">
            <Section className="py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-gold-500/10 sm:h-[72px] sm:w-[72px] md:h-20 md:w-20">
                                <Image src="/jsb_logo.png" alt="JSB Lifestyle & Resorts" fill className="object-contain p-1 sm:p-1.5" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold tracking-tight text-navy-950">JSB Lifestyle & Resorts</div>
                                <div className="text-sm text-navy-600">Comfort • Nature • Experience</div>
                            </div>
                        </div>

                        <div className="max-w-sm text-sm text-navy-700">
                            World-class service in tranquil surroundings, with inspiring design and transformative experiences.
                        </div>

                        <div className="text-sm text-navy-800">
                            <div className="font-semibold text-navy-950">Address</div>
                            <div>Sindangan, Zamboanga del Norte</div>
                        </div>

                        <div className="text-sm text-navy-800">
                            <div className="font-semibold text-navy-950">Email</div>
                            <div>info@jsblifestyleandresorts.com</div>
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                            <Link
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-navy-950 transition hover:bg-white"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-navy-950 transition hover:bg-white"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-navy-950 transition hover:bg-white"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                            <div className="text-sm font-semibold text-navy-950">Find & Book</div>
                            <div className="mt-3 grid gap-2">
                                {explore.map((l) => (
                                    <Link key={`${l.href}-${l.label}`} href={l.href} className="text-sm text-navy-700 transition hover:text-navy-950">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-navy-950">Support</div>
                            <div className="mt-3 grid gap-2">
                                {support.map((l) => (
                                    <Link key={`${l.href}-${l.label}`} href={l.href} className="text-sm text-navy-700 transition hover:text-navy-950">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="text-sm font-semibold text-navy-950">Check-in / Check-out</div>
                        <div className="text-sm text-navy-700">
                            <div>Check-in: 2:00 PM</div>
                            <div>Check-out: 12:00 PM</div>
                        </div>

                        <div className="pt-4 text-sm font-semibold text-navy-950">Need assistance?</div>
                        <div className="text-sm text-navy-700">
                            <div className="font-semibold text-navy-950">+63 XXX XXX XXXX</div>
                            <div className="mt-1">Please do not hesitate to contact us, we’re happy to help.</div>
                        </div>

                        <Link href="/contact" className="inline-flex rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-900">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t border-black/10 pt-6 text-center text-xs text-navy-700">
                    © {new Date().getFullYear()} JSB Lifestyle & Resorts. All rights reserved.
                </div>
            </Section>
        </footer>
    );
}