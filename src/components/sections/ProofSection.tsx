"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Trophy, TrendingUp, Award, Handshake, Globe, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import GaugeChart from "@/components/GaugeChart";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
    "Achievement & Recognitions": Award,
    "Strategic Partnership & Social Impact": Handshake,
    "External Networking": Globe,
};

export default function ProofSection() {
    const [isOpen, setIsOpen] = useState(false);
    const { ipms } = SITE_DATA.cabinet;
    const totalAchievements = SITE_DATA.achievements.reduce(
        (acc, cat) => acc + cat.items.length,
        0
    );

    const breakdownItems = [
        { label: "Progressive", value: ipms.breakdown.progressive, color: "#562FCC" },
        { label: "Professional", value: ipms.breakdown.professional, color: "#3D4AEC" },
        { label: "Solidarity", value: ipms.breakdown.solidarity, color: "#F686EB" },
    ];

    return (
        <section id="performance" className="section-padding">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Proof
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Performance & Achievements
                    </h2>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Compact Preview — always visible */}
                <motion.div
                    className="grid gap-4 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* IPMS Score Card */}
                    <div
                        className="glass-card flex items-center gap-5 rounded-2xl p-5 sm:p-6"
                    >
                        <div className="h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                            <GaugeChart value={ipms.overall} size={96} />
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                IPMS Score
                            </p>
                            <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--th-text)" }}>
                                {ipms.overall}%
                            </p>
                            <p className="mt-1 text-xs" style={{ color: "var(--th-text-faint)" }}>
                                Cabinet Performance Index
                            </p>
                        </div>
                    </div>

                    {/* Achievement Count Card */}
                    <div
                        className="glass-card flex items-center gap-5 rounded-2xl p-5 sm:p-6"
                    >
                        <div
                            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl sm:h-24 sm:w-24"
                            style={{ background: "linear-gradient(135deg, rgba(213,172,60,0.15), rgba(255,207,74,0.08))" }}
                        >
                            <Trophy size={36} className="text-gold" />
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                Achievements
                            </p>
                            <p className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--th-text)" }}>
                                {totalAchievements}
                            </p>
                            <p className="mt-1 text-xs" style={{ color: "var(--th-text-faint)" }}>
                                Awards & milestones earned
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Expand Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                        style={{
                            background: isOpen ? "var(--th-card-hover)" : "var(--th-card)",
                            border: "1px solid var(--th-border)",
                            color: "var(--th-text-secondary)",
                            boxShadow: "0 2px 12px var(--th-shadow)",
                        }}
                    >
                        {isOpen ? "Show Less" : "View Full Breakdown"}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown size={16} />
                        </motion.div>
                    </button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8">
                                {/* IPMS Breakdown */}
                                <h3 className="mb-4 text-lg font-bold" style={{ color: "var(--th-text)" }}>
                                    <TrendingUp size={18} className="mr-2 inline text-secondary" />
                                    IPMS Breakdown
                                </h3>
                                <div className="mb-8 grid gap-3 sm:grid-cols-3">
                                    {breakdownItems.map((item, i) => (
                                        <motion.div
                                            key={item.label}
                                            className="glass-card rounded-xl p-4 text-center"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <p className="text-xs font-bold tracking-wider uppercase" style={{ color: item.color }}>
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-2xl font-extrabold" style={{ color: "var(--th-text)" }}>
                                                {item.value}%
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mission Achievement */}
                                <h3 className="mb-4 text-lg font-bold" style={{ color: "var(--th-text)" }}>
                                    <Sparkles size={18} className="mr-2 inline text-gold" />
                                    Vision & Missions
                                </h3>
                                <div className="mb-8 glass-card rounded-xl p-5">
                                    <p className="text-sm font-bold tracking-wider text-secondary uppercase">Vision</p>
                                    <p className="mt-2 text-sm italic leading-relaxed sm:text-base" style={{ color: "var(--th-text-secondary)" }}>
                                        &ldquo;{SITE_DATA.cabinet.vision}&rdquo;
                                    </p>
                                    <div className="mt-4 space-y-2">
                                        {SITE_DATA.cabinet.missions.map((mission, idx) => (
                                            <div key={idx} className="flex gap-3 text-sm" style={{ color: "var(--th-text-secondary)" }}>
                                                <span className="mt-0.5 shrink-0 text-xs font-bold text-secondary">
                                                    M{idx + 1}
                                                </span>
                                                <span className="leading-relaxed">{mission}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements List */}
                                <h3 className="mb-4 text-lg font-bold" style={{ color: "var(--th-text)" }}>
                                    <Trophy size={18} className="mr-2 inline text-gold" />
                                    Achievements & Awards
                                </h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {SITE_DATA.achievements.map((category, i) => {
                                        const Icon = CATEGORY_ICONS[category.category] || Sparkles;
                                        return (
                                            <motion.div
                                                key={category.category}
                                                className="glass-card rounded-xl p-4 sm:p-5"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 + 0.3 }}
                                            >
                                                <div className="mb-3 flex items-center gap-2">
                                                    <Icon size={16} className="text-secondary" />
                                                    <p className="text-xs font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                                        {category.category}
                                                    </p>
                                                </div>
                                                <ul className="space-y-2">
                                                    {category.items.map((item, j) => (
                                                        <li
                                                            key={j}
                                                            className="flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                                                            style={{ color: "var(--th-text-secondary)" }}
                                                        >
                                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
