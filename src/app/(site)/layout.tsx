import MotionProviders from "@/components/site/MotionProviders";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionProviders>
            <div className="min-h-[100dvh] bg-[#fbf8f2] overflow-x-hidden">
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_10%,rgba(194,150,74,0.10),transparent_60%),radial-gradient(900px_circle_at_88%_12%,rgba(11,27,54,0.12),transparent_62%),radial-gradient(900px_circle_at_50%_115%,rgba(11,27,54,0.06),transparent_62%)]" />
                    <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(11,27,54,0.12)_1px,transparent_0)] [background-size:26px_26px]" />
                </div>

                <SiteHeader />
                <main className="min-h-[70dvh]">{children}</main>

                <div className="bg-[#efe6db]">
                    <div className="h-10 bg-gradient-to-b from-[#fbf8f2] to-[#efe6db]" />
                    <SiteFooter />
                </div>
            </div>
        </MotionProviders>
    );
}