import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PrimaryButton({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30",
                className
            )}
        >
            {children}
        </Link>
    );
}