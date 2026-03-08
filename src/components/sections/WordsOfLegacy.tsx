"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown } from "lucide-react";
import Image from "next/image";

interface LegacyQuote {
    name: string;
    role: string;
    photo: string;
    quote: string;
}

const LEGACY_QUOTES: LegacyQuote[] = [
    {
        name: "Arkaan Hilmi Suharsoyo",
        role: "President of HMSI ITS",
        photo: "/photos/bph/5026221140.jpg",
        quote:
            "Cabinet Niskalarasi has been a journey of growth, resilience, and togetherness. Every challenge we faced shaped us into a stronger family. I am proud of what we have accomplished together — this legacy belongs to all 156 of us.",
    },
    {
        name: "Anas Ghifari Kemaputra",
        role: "Vice President",
        photo: "/photos/bph/5026221155.jpg",
        quote:
            "Leading alongside an incredible team has taught me that true leadership is about empowering others. Niskalarasi proved that when we believe in our people, extraordinary things happen.",
    },
    {
        name: "Moehammad Fazle Mawla Sidiki",
        role: "Vice President",
        photo: "/photos/bph/5026221110.jpg",
        quote:
            "Niskalarasi is not just a cabinet name — it\u2019s a movement. From certainty to escalation, we have embodied every syllable. This year\u2019s work will echo through the generations that follow us.",
    },
];

export default function WordsOfLegacy() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="legacy" className="section-padding">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        Words of Legacy
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        From Our Leaders
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        Heartfelt reflections from the people who led Cabinet Niskalarasi
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                <div className="space-y-4 sm:space-y-5">
                    {LEGACY_QUOTES.map((leader, i) => (
                        <motion.div
                            key={leader.name}
                            className="glass-card overflow-hidden rounded-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() =>
                                    setExpandedIndex(expandedIndex === i ? null : i)
                                }
                                className="flex w-full items-center gap-4 p-4 text-left transition-colors sm:gap-5 sm:p-6"
                                style={{ color: "var(--th-text)" }}
                            >
                                {/* Photo */}
                                <div
                                    className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16"
                                    style={{ border: "2px solid var(--th-border)" }}
                                >
                                    <Image
                                        src={leader.photo}
                                        alt={leader.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Name & Role */}
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-base font-bold sm:text-lg">
                                        {leader.name}
                                    </p>
                                    <p
                                        className="text-xs font-medium sm:text-sm"
                                        style={{ color: "var(--th-text-muted)" }}
                                    >
                                        {leader.role}
                                    </p>
                                </div>

                                {/* Quote icon + Chevron */}
                                <div className="flex shrink-0 items-center gap-2">
                                    <Quote
                                        size={18}
                                        className="text-secondary opacity-50"
                                    />
                                    <motion.div
                                        animate={{
                                            rotate: expandedIndex === i ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown
                                            size={18}
                                            style={{
                                                color: "var(--th-text-muted)",
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </button>

                            {/* Expanded Quote */}
                            <AnimatePresence>
                                {expandedIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="border-t px-5 py-5 sm:px-8 sm:py-6"
                                            style={{
                                                borderColor: "var(--th-border)",
                                            }}
                                        >
                                            <div className="relative">
                                                <Quote
                                                    size={32}
                                                    className="absolute -left-1 -top-1 text-secondary/15"
                                                />
                                                <p
                                                    className="pl-6 text-sm leading-relaxed italic sm:text-base sm:leading-loose"
                                                    style={{
                                                        color: "var(--th-text-secondary)",
                                                    }}
                                                >
                                                    &ldquo;{leader.quote}&rdquo;
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
