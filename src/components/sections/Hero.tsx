"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import VideoProfile from "@/components/sections/VideoProfile";
import BoardOfMilestones from "@/components/sections/BoardOfMilestones";

const FILOSOFI_COLORS = [
    { gradient: "from-secondary/20 to-secondary/5", text: "text-secondary", border: "border-secondary/20" },
    { gradient: "from-primary/20 to-primary/5", text: "text-primary", border: "border-primary/20" },
    { gradient: "from-gold/20 to-gold/5", text: "text-amber-600", border: "border-gold/20" },
    { gradient: "from-accent-pink/20 to-accent-pink/5", text: "text-pink-500", border: "border-accent-pink/20" },
];

export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section
                id="hero"
                className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-8 lg:pt-32 lg:pb-24"
            >
                {/* Background effects */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(130,115,216,0.15)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(246,134,235,0.06)_0%,transparent_50%)]" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(130,115,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(130,115,216,0.4) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                {/* Main two-column layout */}
                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
                    {/* ── LEFT: Logo + Cabinet Name ── */}
                    <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Image
                                src="/logo-niskalarasi.png"
                                alt="Niskalarasi Logo"
                                width={300}
                                height={150}
                                className="h-16 w-auto sm:h-24 md:h-28 lg:h-36"
                                priority
                            />
                        </motion.div>

                        <motion.p
                            className="mt-3 text-xs font-semibold tracking-[0.15em] text-secondary sm:mt-4 sm:text-sm sm:tracking-[0.25em]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            HMSI ITS — Cabinet {SITE_DATA.cabinet.year}
                        </motion.p>

                        <motion.h1
                            className="gradient-text mt-2 font-extrabold tracking-tight sm:mt-3"
                            style={{ fontSize: "clamp(1.75rem, 6vw, 4rem)" }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            NISKALARASI
                        </motion.h1>

                        <motion.p
                            className="mt-1 text-lg font-light tracking-wider sm:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            2025
                        </motion.p>

                        <motion.div
                            className="mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-secondary/50 to-transparent lg:from-secondary/50 lg:via-secondary/20 lg:to-transparent"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 80, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1.4 }}
                        />

                        <motion.p
                            className="mt-4 max-w-xs text-sm font-normal leading-relaxed tracking-wide sm:text-base"
                            style={{ color: "var(--th-text-secondary)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.7 }}
                        >
                            {SITE_DATA.cabinet.tagline}
                        </motion.p>
                    </div>

                    {/* ── RIGHT: Bento Grid ── */}
                    <div className="flex w-full flex-1 flex-col lg:items-start lg:w-1/2 mt-8 lg:mt-0">
                        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Identity Card (Top Left) */}
                            <motion.div
                                className="col-span-1 h-full"
                                id="filosofi"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <div className="glass-card flex flex-col justify-between w-full h-full rounded-2xl p-5 sm:p-6">
                                    <div>
                                        <p className="text-[10px] font-semibold tracking-[0.3em] text-secondary uppercase sm:text-xs">
                                            Identity
                                        </p>
                                        <h2
                                            className="mt-1 text-lg font-bold tracking-tight sm:text-xl"
                                            style={{ color: "var(--th-text)" }}
                                        >
                                            Who We Are
                                        </h2>
                                        <p
                                            className="mt-2 text-[10px] leading-relaxed sm:text-xs"
                                            style={{ color: "var(--th-text-secondary)" }}
                                        >
                                            The <strong>Information Systems Student Association</strong> (HMSI) is the official student
                                            organization of the Department of Information Systems at <strong>Institut Teknologi
                                                Sepuluh Nopember (ITS)</strong>, Surabaya.
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {["Dept. of Information Systems", "ITS Surabaya", "156 Members"].map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase sm:text-[10px]"
                                                    style={{ background: "var(--th-card-hover)", color: "var(--th-text-muted)", border: "1px solid var(--th-border)" }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Open modal button */}
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className="group mt-4 flex items-center justify-center gap-2 rounded-full w-full py-2 text-[10px] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] sm:text-xs"
                                        style={{
                                            background: "var(--th-bg-alt)",
                                            border: "1px solid var(--th-border)",
                                            color: "var(--th-text-secondary)",
                                        }}
                                    >
                                        Discover Our Philosophy
                                        <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Video Profile Card (Top Right) */}
                            <div className="col-span-1 h-full">
                                <VideoProfile />
                            </div>

                            {/* Board of Milestones Card (Bottom, Full Width) */}
                            <div className="col-span-1 sm:col-span-2">
                                <BoardOfMilestones />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Philosophy Modal ── */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm"
                            style={{ background: "var(--th-overlay)" }}
                            onClick={() => setModalOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal content */}
                        <motion.div
                            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl shadow-2xl"
                            style={{ background: "var(--th-card-hover)", border: "1px solid var(--th-border)" }}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
                        >
                            {/* Header */}
                            <div className="sticky top-0 z-20 px-5 py-5 backdrop-blur-xl sm:px-6" style={{ background: "var(--th-card)", borderBottom: "1px solid var(--th-border)" }}>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-bold tracking-[0.3em] text-secondary uppercase">Our Identity</p>
                                        <h3 className="mt-1 text-2xl font-bold sm:text-3xl" style={{ color: "var(--th-text)" }}>
                                            Niskalarasi Philosophy
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-lg transition-colors"
                                        style={{ border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                                        aria-label="Close modal"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-8 p-5 sm:p-6">
                                {/* ── About HMSI ── */}
                                <div className="rounded-xl p-4" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                    <h4 className="text-center text-lg font-bold sm:text-xl" style={{ color: "var(--th-text)" }}>
                                        HMSI ITS
                                    </h4>
                                    <p className="mt-1 text-center text-xs font-semibold tracking-wider text-secondary uppercase sm:text-sm">
                                        Himpunan Mahasiswa Sistem Informasi
                                    </p>
                                    <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        The <strong>Information Systems Student Association</strong> (HMSI) is the official student
                                        organization of the Department of Information Systems at <strong>Institut Teknologi
                                            Sepuluh Nopember (ITS)</strong>, Surabaya. HMSI serves as a platform for students to grow
                                        academically, professionally, and socially — fostering leadership, innovation, and
                                        a strong sense of community.
                                    </p>
                                    <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        Tracing its roots back to June 2001 in room TC 103-104, HMSI was born during an era when Information Systems was still nestled within the Informatics Engineering department. This association was forged when IS students collectively chose to branch out from HMTC to define their own identity. This milestone didn't just create a new student body; it catalyzed the evolution of Information Systems into a fully independent department, elevating its status from a mere study program to a standalone academic entity.
                                    </p>
                                    <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-2">
                                        {["Dept. of Information Systems", "ITS Surabaya", "156 Members", `Cabinet ${SITE_DATA.cabinet.year}`].map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase sm:text-xs"
                                                style={{ background: "var(--th-card)", color: "var(--th-text-muted)", border: "1px solid var(--th-border)" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ── Niskalarasi Philosophy ── */}
                                <div>
                                    <h4 className="mb-4 text-center text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--th-text-muted)" }}>
                                        The Name &ldquo;Niskalarasi&rdquo;
                                    </h4>

                                    {/* Syllable chips */}
                                    <div className="mb-5 flex flex-wrap justify-center gap-2">
                                        {SITE_DATA.filosofi.map((item, i) => {
                                            const color = FILOSOFI_COLORS[i];
                                            return (
                                                <div
                                                    key={item.syllable}
                                                    className={`rounded-full border bg-gradient-to-r px-4 py-1.5 text-sm font-bold ${color.gradient} ${color.text} ${color.border}`}
                                                >
                                                    {item.syllable} <span className="font-normal opacity-70">{item.word}</span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Filosofi detail cards */}
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {SITE_DATA.filosofi.map((item, i) => {
                                            const color = FILOSOFI_COLORS[i];
                                            return (
                                                <motion.div
                                                    key={item.syllable}
                                                    className={`rounded-xl border p-4 ${color.border}`}
                                                    style={{ background: "var(--th-bg-alt)" }}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.08 }}
                                                >
                                                    <p className={`text-xl font-extrabold ${color.text}`}>{item.syllable}</p>
                                                    <p className="mt-1 text-base font-bold" style={{ color: "var(--th-text)" }}>{item.word}</p>
                                                    <p className="mt-1 text-xs italic leading-relaxed" style={{ color: "var(--th-text-muted)" }}>{item.etymology}</p>
                                                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>{item.description}</p>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* ── Logo Philosophy ── */}
                                <div>
                                    <h4 className="mb-4 text-center text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--th-text-muted)" }}>
                                        Logo Philosophy
                                    </h4>

                                    <div className="mx-auto mb-5 flex justify-center">
                                        <div className="glow-ring rounded-2xl p-5 sm:p-8" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                            <Image
                                                src="/logo-niskalarasi.png"
                                                alt="Niskalarasi Logo"
                                                width={400}
                                                height={200}
                                                className="max-h-20 w-auto object-contain sm:max-h-28 md:max-h-36"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        {SITE_DATA.logoFilosofi.map((item, i) => (
                                            <motion.div
                                                key={item.title}
                                                className="rounded-xl p-3 text-center"
                                                style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.06 + 0.2 }}
                                            >
                                                <p className="text-sm font-bold" style={{ color: "var(--th-text)" }}>{item.title}</p>
                                                <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>{item.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
