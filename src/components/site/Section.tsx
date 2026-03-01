import { cn } from "@/lib/utils";

export default function Section({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <section className={cn("mx-auto w-full max-w-6xl px-4", className)}>{children}</section>;
}