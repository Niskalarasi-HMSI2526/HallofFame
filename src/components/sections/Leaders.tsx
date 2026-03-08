"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SITE_DATA, ROLE_ORDER } from "@/constants/data";

export default function Leaders() {
    const [isOpen, setIsOpen] = useState(false);

    const bph = SITE_DATA.departments.find((d) => d.id === "bph");
    if (!bph) return null;

    const sorted = [...bph.members].sort(
        (a, b) => (ROLE_ORDER[a.role] ?? 99) - (ROLE_ORDER[b.role] ?? 99)
    );

    const president = sorted.find((m) => m.role === "President");
    const vps = sorted.filter((m) => m.role === "Vice President");
    const secretaries = sorted.filter((m) => m.role === "General Secretary");
    const treasurers = sorted.filter((m) => m.role === "General Treasurer");

    return (
        <section id="leaders" className="section-padding">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Captains
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Executive Board
                    </h2>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Compact Preview — President + VPs */}
                <motion.div
                    className="mb-6 flex flex-wrap items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* VPs on the sides, President in center */}
                    {[vps[0], president, vps[1]].filter(Boolean).map((member, i) => {
                        if (!member) return null;
                        const isPresident = member.role === "President";
                        return (
                            <div key={member.name} className="flex flex-col items-center">
                                <div
                                    className={`relative overflow-hidden rounded-full ${isPresident ? "h-24 w-24 sm:h-28 sm:w-28" : "h-18 w-18 sm:h-20 sm:w-20"}`}
                                    style={{
                                        border: isPresident
                                            ? "3px solid #D5AC3C"
                                            : "2px solid var(--th-border)",
                                        width: isPresident ? undefined : "4.5rem",
                                        height: isPresident ? undefined : "4.5rem",
                                    }}
                                >
                                    {member.photo ? (
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="flex h-full w-full items-center justify-center text-lg font-bold"
                                            style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}
                                        >
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <p
                                    className={`mt-2 text-center font-bold ${isPresident ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}
                                    style={{ color: "var(--th-text)" }}
                                >
                                    {member.name.split(" ").slice(0, 2).join(" ")}
                                </p>
                                <p
                                    className="text-[10px] font-medium tracking-wider uppercase"
                                    style={{ color: isPresident ? "#D5AC3C" : "var(--th-text-muted)" }}
                                >
                                    {member.role}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Expand Button */}
                <div className="flex justify-center">
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
                        {isOpen ? "Show Less" : `See All ${bph.members.length} Members`}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown size={16} />
                        </motion.div>
                    </button>
                </div>

                {/* Expanded — Full BPH Grid */}
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
                                {/* Secretaries & Treasurers */}
                                <div className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-4">
                                    {[...secretaries, ...treasurers].map((member, i) => (
                                        <motion.div
                                            key={member.name}
                                            className="glass-card flex flex-col items-center rounded-2xl p-4 text-center"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                        >
                                            <div
                                                className="relative mb-3 h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20"
                                                style={{ border: "2px solid var(--th-border)" }}
                                            >
                                                {member.photo ? (
                                                    <Image
                                                        src={member.photo}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className="flex h-full w-full items-center justify-center font-bold"
                                                        style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}
                                                    >
                                                        {member.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-xs font-bold sm:text-sm" style={{ color: "var(--th-text)" }}>
                                                {member.name}
                                            </p>
                                            <p className="mt-1 text-[10px] font-medium tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                                {member.role}
                                            </p>
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
