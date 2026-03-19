"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import { Trophy, Handshake, Globe, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CATEGORY_STYLES: Record<string, { Icon: LucideIcon; accent: string; color: string; bg: string }> = {
    "Achievement & Recognitions": { Icon: Trophy, accent: "text-amber-600", color: "#D5AC3C", bg: "from-gold-light/15 to-transparent" },
    "Strategic Partnership & Social Impact": { Icon: Handshake, accent: "text-secondary", color: "#562FCC", bg: "from-secondary/10 to-transparent" },
    "External Networking": { Icon: Globe, accent: "text-primary", color: "#3D4AEC", bg: "from-primary/10 to-transparent" },
};

export default function Achievements() {
    return (
        <section id="achievements" className="section-padding relative">
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(213,172,60,0.05)_0%,transparent_60%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    className="mb-14 text-center sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        Our Milestones
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" style={{ color: "var(--th-text)" }}>
                        Achievements
                    </h2>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-3 2xl:gap-8">
                    {SITE_DATA.achievements.map((category, i) => {
                        const style = CATEGORY_STYLES[category.category] || { Icon: Sparkles, accent: "text-secondary", color: "#8273D8", bg: "from-dark/5 to-transparent" };
                        const { Icon } = style;
                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="glass-card glass-card-hover relative overflow-hidden p-7"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${style.bg}`} />
                                <div className="relative z-10">
                                    <Icon size={32} color={style.color} strokeWidth={1.8} />
                                    <h3 className={`mt-4 text-base font-bold tracking-wider uppercase ${style.accent}`}>
                                        {category.category}
                                    </h3>
                                    <ul className="mt-5 space-y-3">
                                        {category.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-base" style={{ color: "var(--th-text-secondary)" }}>
                                                <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary/40" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
