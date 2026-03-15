"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: "var(--th-bg)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,115,216,0.12)_0%,transparent_70%)]" />

            <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <Image
                        src="/logo-niskalarasi.png"
                        alt="Niskalarasi Logo"
                        width={140}
                        height={70}
                        className="h-20 w-auto sm:h-24"
                        priority
                    />
                </motion.div>

                <motion.p
                    className="pulse-loader mt-6 text-base font-semibold tracking-[0.3em] text-secondary uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    HMSI ITS
                </motion.p>

                <motion.h1
                    className="gradient-text mt-3 text-4xl font-bold tracking-[0.08em] uppercase sm:text-5xl sm:tracking-[0.15em] md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Niskalarasi
                </motion.h1>

                <motion.div
                    className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ duration: 1.5, delay: 1 }}
                />

                <motion.p
                    className="mt-4 text-base font-light tracking-[0.4em] uppercase"
                    style={{ color: "var(--th-text-muted)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    2025 / 2026
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
