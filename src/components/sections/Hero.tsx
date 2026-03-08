"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(130,115,216,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(246,134,235,0.06)_0%,transparent_50%)]" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(130,115,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(130,115,216,0.4) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
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
                        className="h-28 w-auto sm:h-36 md:h-44"
                        priority
                    />
                </motion.div>

                <motion.p
                    className="mt-5 text-base font-semibold tracking-[0.3em] text-secondary sm:mt-6 sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    HMSI ITS — Kabinet {SITE_DATA.cabinet.year}
                </motion.p>

                <motion.h1
                    className="gradient-text mt-4 text-6xl font-extrabold tracking-tight sm:text-8xl md:text-9xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    NISKALARASI
                </motion.h1>

                <motion.p
                    className="mt-3 text-2xl font-light tracking-wider text-th-muted sm:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    style={{ color: "var(--th-text-muted)" }}
                >
                    2025
                </motion.p>

                <motion.div
                    className="mt-6 h-[2px] w-20 bg-gradient-to-r from-transparent via-secondary/50 to-transparent sm:w-28"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 112, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.4 }}
                />

                <motion.p
                    className="mt-6 max-w-lg text-lg font-normal leading-relaxed tracking-wide sm:text-xl"
                    style={{ color: "var(--th-text-secondary)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                >
                    {SITE_DATA.cabinet.tagline}
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator absolute bottom-8 flex flex-col items-center gap-2 sm:bottom-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
            >
                <span className="text-sm font-medium tracking-[0.3em] uppercase" style={{ color: "var(--th-text-faint)" }}>
                    Scroll
                </span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ color: "var(--th-text-faint)" }}>
                    <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
                    <motion.circle
                        cx="8" cy="8" r="2" fill="currentColor"
                        animate={{ cy: [8, 16, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>
        </section>
    );
}
