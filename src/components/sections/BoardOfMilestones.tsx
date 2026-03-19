"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Users, Target, Briefcase, Zap, Globe, ShieldCheck, ChevronRight } from "lucide-react";
import GaugeChart from "@/components/GaugeChart";

import { PORTFOLIO_DATA } from "@/constants/data";

const ICON_MAP: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
    Users: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
    Briefcase: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />,
    Globe: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
    Zap: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    Target: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8" />
};

// Formatting helper for modal body text (handles bullets and bolding)
const formatModalText = (text: string) => {
    // Split into paragraphs and lists
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];

    lines.forEach((line, i) => {
        // Handle bolding markers
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const formattedLine = parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="font-semibold" style={{ color: "var(--th-text)" }}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });

        // Group list items
        if (line.trim().startsWith('- ')) {
            currentList.push(
                <li key={`li-${i}`} className="ml-4 pl-1" style={{ color: "var(--th-text-secondary)" }}>
                    <span className="inline-block leading-relaxed">{formattedLine.slice(1)}</span>
                </li>
            );
        } else {
            // Push existing list if we have one
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`ul-${i}`} className="mb-4 mt-2 list-outside list-disc space-y-2 pl-4">
                        {currentList}
                    </ul>
                );
                currentList = [];
            }

            // Push the normal paragraph (ignore empty lines)
            if (line.trim()) {
                elements.push(
                    <p key={`p-${i}`} className="mb-3 leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                        {formattedLine}
                    </p>
                );
            }
        }
    });

    // Cleanup any trailing list
    if (currentList.length > 0) {
        elements.push(
            <ul key={`ul-end`} className="mb-4 mt-2 list-outside list-disc space-y-2 pl-4">
                {currentList}
            </ul>
        );
    }

    return elements;
};

export default function BoardOfMilestones() {
    const [selectedCard, setSelectedCard] = useState<typeof PORTFOLIO_DATA.bento_cards[0] | null>(null);
    const [mainModalOpen, setMainModalOpen] = useState(false);

    useEffect(() => {
        if (mainModalOpen || selectedCard) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mainModalOpen, selectedCard]);

    return (
        <>
            {/* ── PREVIEW CARD ── */}
            <motion.div
                className="glass-card glow-ring flex w-full flex-col items-center rounded-2xl p-6 text-center sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-40px" }}
            >
                <div
                    className="mb-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider uppercase"
                    style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                >
                    <TrendingUp className="mr-1.5 h-3 w-3 text-emerald-500" />
                    Performance & Achievements
                </div>
                <h2 className="mb-2 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl" style={{ color: "var(--th-text)" }}>
                    {PORTFOLIO_DATA.header.title}
                </h2>
                <p className="mb-4 text-xs sm:text-sm leading-relaxed max-w-md" style={{ color: "var(--th-text-secondary)" }}>
                    {PORTFOLIO_DATA.header.subtitle}
                </p>
                
                <div className="mb-6 scale-75 origin-top sm:scale-90">
                    <GaugeChart
                        value={96.71}
                        label="IPMS SCORE"
                        color="#10b981"
                        size={120}
                    />
                </div>

                <button
                    onClick={() => setMainModalOpen(true)}
                    className="group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105 sm:text-sm shadow-sm hover:shadow-md"
                    style={{
                        background: "var(--th-card)",
                        border: "1px solid var(--th-border)",
                        color: "var(--th-text)",
                        boxShadow: "0 2px 12px var(--th-shadow)",
                    }}
                >
                    Discover Our Milestones
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5 text-secondary" />
                </button>
            </motion.div>

            {/* ── MAIN MODAL (The Full Board) ── */}
            <AnimatePresence>
                {mainModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm"
                            style={{ background: "var(--th-overlay)" }}
                            onClick={() => setMainModalOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative z-10 max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl shadow-2xl"
                            style={{ background: "var(--th-bg)", border: "1px solid var(--th-border)" }}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
                        >
                            {/* Header sticky */}
                            <div className="sticky top-0 z-20 px-5 py-5 backdrop-blur-xl sm:px-8 border-b" style={{ borderColor: "var(--th-border)", background: "var(--th-card)" }}>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="pr-2">
                                        <p className="text-xs font-bold tracking-[0.2em] text-secondary uppercase sm:text-sm">Performance & Achievements</p>
                                        <h3 className="mt-1 text-xl font-bold break-words sm:text-3xl" style={{ color: "var(--th-text)" }}>
                                            {PORTFOLIO_DATA.header.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setMainModalOpen(false)}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-colors bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
                                        style={{ color: "var(--th-text-muted)" }}
                                        aria-label="Close modal"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="p-5 sm:p-8 space-y-12">
                                {/* Gauge Chart Header in Modal */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-4 border-b border-white/5" style={{ borderColor: "var(--th-border)" }}>
                                    <p className="text-lg sm:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {PORTFOLIO_DATA.header.subtitle}
                                    </p>
                                    <div className="flex-shrink-0">
                                        <GaugeChart
                                            value={96.71}
                                            label="IPMS SCORE"
                                            color="#10b981"
                                            size={140}
                                        />
                                    </div>
                                </div>

                                {/* Vision & Missions Grid */}
                                <div className="grid gap-6 lg:grid-cols-4">
                                    <div
                                        className="rounded-2xl p-6 shadow-sm lg:col-span-1"
                                        style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                                    >
                                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-secondary">Our Vision</h3>
                                        <p className="text-lg font-medium leading-relaxed" style={{ color: "var(--th-text)" }}>
                                            "{PORTFOLIO_DATA.vision_mission.vision}"
                                        </p>
                                    </div>
                                    <div className="grid gap-6 sm:grid-cols-3 lg:col-span-3">
                                        {PORTFOLIO_DATA.vision_mission.missions.map((mission) => (
                                            <div
                                                key={mission.id}
                                                className="flex flex-col rounded-2xl p-6 shadow-sm"
                                                style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                                            >
                                                <div className="mb-3 flex items-center justify-between">
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold" style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}>
                                                        {mission.id}
                                                    </span>
                                                    <span className="font-mono text-xl font-bold text-emerald-500">
                                                        {mission.achievement}
                                                    </span>
                                                </div>
                                                <h4 className="mb-2 text-lg font-bold" style={{ color: "var(--th-text)" }}>{mission.title}</h4>
                                                <p className="flex-1 text-sm" style={{ color: "var(--th-text-secondary)" }}>{mission.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bento Grid */}
                                <div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
                                    {PORTFOLIO_DATA.bento_cards.map((card, i) => (
                                        <motion.div
                                            key={card.id}
                                            onClick={() => setSelectedCard(card)}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.5) }}
                                            whileHover={{ scale: 0.98 }}
                                            className={`group relative cursor-pointer overflow-hidden rounded-3xl p-8 shadow-sm transition-all hover:shadow-md ${card.size} flex flex-col justify-between`}
                                            style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                                        >
                                            {card.image && (
                                                <div className="absolute inset-0 z-0 overflow-hidden flex items-end justify-end">
                                                    <div className="relative h-[80%] w-[80%]">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.previewTitle}
                                                            fill
                                                            className="object-contain object-bottom right-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--th-card)] via-[var(--th-card)]/80 to-transparent"></div>
                                                </div>
                                            )}

                                            <div className="relative z-10 flex items-start justify-between">
                                                <span
                                                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md"
                                                    style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                                                >
                                                    {card.category}
                                                </span>
                                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-md shadow-sm`} style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}>
                                                    {ICON_MAP[card.icon as keyof typeof ICON_MAP]}
                                                </div>
                                            </div>

                                            <div className="relative z-10 mt-6">
                                                <p className="mb-1 text-sm font-medium uppercase tracking-wider text-secondary">
                                                    {card.previewSubtitle}
                                                </p>
                                                <h3 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-sm" style={{ color: "var(--th-text)" }}>
                                                    {card.previewNumber}
                                                </h3>
                                                <p className="text-lg font-medium drop-shadow-sm" style={{ color: "var(--th-text-secondary)" }}>
                                                    {card.previewTitle}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── DETAIL MODAL (Pop-up inside Pop-up) ── */}
            <AnimatePresence>
                {selectedCard && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="fixed inset-0 z-[100] cursor-pointer bg-slate-900/40 backdrop-blur-sm dark:bg-black/60"
                            aria-hidden="true"
                        />

                        <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                                style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 z-20 backdrop-blur-md gap-4" style={{ borderColor: "var(--th-border)", background: "var(--th-card)" }}>
                                    <span
                                        className="inline-flex items-center rounded-full px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider max-w-[80%]"
                                        style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}
                                    >
                                        {selectedCard.category}
                                    </span>
                                    <button
                                        onClick={() => setSelectedCard(null)}
                                        className="rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                        style={{ color: "var(--th-text-muted)" }}
                                    >
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>

                                {/* Modal Content Scrollable Area */}
                                <div className="overflow-y-auto">
                                    {/* Photo in Modal */}
                                    {selectedCard.image && (
                                        <div className="relative h-64 sm:h-80 w-full bg-black/5 dark:bg-white/5 border-b flex items-center justify-center p-6" style={{ borderColor: "var(--th-border)" }}>
                                            <div className="relative w-full h-full max-w-md">
                                                <Image
                                                    src={selectedCard.image}
                                                    alt={selectedCard.previewTitle}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                                        <h3 className="mb-2 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{ color: "var(--th-text)" }}>
                                            {selectedCard.previewNumber}
                                        </h3>
                                        <p className="mb-6 sm:mb-8 text-sm sm:text-lg md:text-xl font-medium" style={{ color: "var(--th-text-secondary)" }}>
                                            {selectedCard.previewTitle}
                                        </p>

                                        <div className="rounded-2xl p-6" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                            <h4 className="mb-4 text-xl font-bold" style={{ color: "var(--th-text)" }}>
                                                {selectedCard.modalContent.heading}
                                            </h4>

                                            <div className="prose max-w-none">
                                                {formatModalText(selectedCard.modalContent.body)}
                                            </div>

                                            {(selectedCard.modalContent as any).list && (
                                                <ul className="mt-4 space-y-3">
                                                    {(selectedCard.modalContent as any).list.map((item: string, idx: number) => {
                                                        const [boldPart, rest] = item.split(' - ');
                                                        return (
                                                            <li key={idx} className="flex gap-3" style={{ color: "var(--th-text-secondary)" }}>
                                                                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                                                <span>
                                                                    <strong className="font-semibold" style={{ color: "var(--th-text)" }}>{boldPart}</strong>
                                                                    {rest && ` - ${rest}`}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
