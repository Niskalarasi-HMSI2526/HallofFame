"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SITE_DATA } from "@/constants/data";

const FILOSOFI_COLORS = [
    { gradient: "from-secondary/20 to-secondary/5", text: "text-secondary", border: "border-secondary/20" },
    { gradient: "from-primary/20 to-primary/5", text: "text-primary", border: "border-primary/20" },
    { gradient: "from-gold/20 to-gold/5", text: "text-amber-600", border: "border-gold/20" },
    { gradient: "from-accent-pink/20 to-accent-pink/5", text: "text-pink-500", border: "border-accent-pink/20" },
];

export default function Filosofi() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="filosofi" className="section-padding">
            <div className="mx-auto max-w-6xl">
                {/* Header — always visible */}
                <motion.div
                    className="mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        Identity
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Who We Are
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        HMSI ITS &middot; Cabinet Niskalarasi 2024/2025
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Expand Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
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
                        {isOpen ? "Show Less" : "Discover Our Identity"}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown size={16} />
                        </motion.div>
                    </button>
                </motion.div>

                {/* All content hidden until expanded */}
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
                                {/* ── About HMSI ── */}
                                <motion.div
                                    className="glass-card glow-ring mx-auto mb-10 max-w-3xl rounded-2xl p-6 sm:p-8"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-center text-lg font-bold sm:text-xl" style={{ color: "var(--th-text)" }}>
                                        HMSI ITS
                                    </h3>
                                    <p className="mt-1 text-center text-xs font-semibold tracking-wider text-secondary uppercase sm:text-sm">
                                        Himpunan Mahasiswa Sistem Informasi
                                    </p>
                                    <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed sm:text-base" style={{ color: "var(--th-text-secondary)" }}>
                                        The <strong>Information Systems Student Association</strong> (HMSI) is the official student
                                        organization of the Department of Information Systems at <strong>Institut Teknologi
                                            Sepuluh Nopember (ITS)</strong>, Surabaya. HMSI serves as a platform for students to grow
                                        academically, professionally, and socially — fostering leadership, innovation, and
                                        a strong sense of community.
                                    </p>
                                    <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-3">
                                        {["Dept. of Information Systems", "ITS Surabaya", "156 Members"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase sm:text-xs"
                                                style={{ background: "var(--th-card-hover)", color: "var(--th-text-muted)", border: "1px solid var(--th-border)" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* ── Niskalarasi Philosophy ── */}
                                <h3 className="mb-5 text-center text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--th-text-muted)" }}>
                                    Niskalarasi Philosophy
                                </h3>

                                {/* Syllable chips */}
                                <div className="mb-6 flex flex-wrap justify-center gap-3">
                                    {SITE_DATA.filosofi.map((item, i) => {
                                        const color = FILOSOFI_COLORS[i];
                                        return (
                                            <div
                                                key={item.syllable}
                                                className={`rounded-full border bg-gradient-to-r px-4 py-2 text-sm font-bold ${color.gradient} ${color.text} ${color.border}`}
                                            >
                                                {item.syllable} <span className="font-normal opacity-70">{item.word}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Filosofi detail cards */}
                                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                    {SITE_DATA.filosofi.map((item, i) => {
                                        const color = FILOSOFI_COLORS[i];
                                        return (
                                            <motion.div
                                                key={item.syllable}
                                                className={`glass-card rounded-2xl border p-5 ${color.border}`}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <p className={`text-2xl font-extrabold ${color.text}`}>{item.syllable}</p>
                                                <p className="mt-2 text-lg font-bold" style={{ color: "var(--th-text)" }}>{item.word}</p>
                                                <p className="mt-1 text-xs italic leading-relaxed" style={{ color: "var(--th-text-muted)" }}>{item.etymology}</p>
                                                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>{item.description}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* ── Logo Philosophy ── */}
                                <h3 className="mb-5 mt-10 text-center text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--th-text-muted)" }}>
                                    Logo Philosophy
                                </h3>

                                <div className="mx-auto mb-6 flex justify-center">
                                    <div className="glow-ring glass-card rounded-3xl p-6 sm:p-10">
                                        <Image
                                            src="/logo-niskalarasi.png"
                                            alt="Niskalarasi Logo"
                                            width={400}
                                            height={200}
                                            className="max-h-24 w-auto object-contain sm:max-h-32 md:max-h-40"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                    {SITE_DATA.logoFilosofi.map((item, i) => (
                                        <motion.div
                                            key={item.title}
                                            className="glass-card rounded-xl p-4 text-center"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.08 + 0.2 }}
                                        >
                                            <p className="text-sm font-bold" style={{ color: "var(--th-text)" }}>{item.title}</p>
                                            <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
