"use client";

import { motion } from "framer-motion";

export default function VideoProfile() {
    return (
        <motion.div
            className="glass-card flex flex-col justify-between w-full h-full rounded-2xl p-5 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-60px" }}
        >
            <div className="mb-4">
                <p className="text-[10px] font-semibold tracking-[0.3em] text-secondary uppercase sm:text-xs text-center">
                    The Journey
                </p>
                <h2
                    className="mt-1 text-lg font-bold tracking-tight sm:text-xl text-center"
                    style={{ color: "var(--th-text)" }}
                >
                    A Year of Impact
                </h2>
                <p
                    className="mt-1 text-[10px] leading-relaxed sm:text-xs text-center"
                    style={{ color: "var(--th-text-muted)" }}
                >
                    Relive the spirit of Cabinet Niskalarasi through our journey
                </p>
            </div>

            <div className="relative w-full flex-1 min-h-[160px] lg:min-h-[180px] mt-4 rounded-xl overflow-hidden shadow-sm" style={{ border: "1px solid var(--th-border)" }}>
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&rel=0&modestbranding=1"
                    title="HMSI Niskalarasi Aftermovie"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </motion.div>
    );
}
