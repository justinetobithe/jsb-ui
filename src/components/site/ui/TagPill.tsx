import { Sparkles } from "lucide-react";

export default function TagPill({
    text,
    tone = "dark",
}: {
    text: string;
    tone?: "dark" | "light";
}) {
    const base =
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold";
    const dark =
        "border border-white/15 bg-white/10 text-white backdrop-blur";
    const light =
        "border border-black/10 bg-white/80 text-navy-950 backdrop-blur";
    return (
        <div className={`${base} ${tone === "dark" ? dark : light}`}>
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            {text}
        </div>
    );
}