"use client";

import { motion } from "framer-motion";

export default function VideoProfile() {
    return (
        <section id="video" className="section-padding">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    className="mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Journey
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        A Year of Impact
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        Relive the spirit of Cabinet Niskalarasi through our journey
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                <motion.div
                    className="glow-ring glass-card overflow-hidden rounded-2xl sm:rounded-3xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&rel=0&modestbranding=1"
                            title="HMSI Niskalarasi Aftermovie"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>

                <motion.p
                    className="mt-4 text-center text-xs italic sm:text-sm"
                    style={{ color: "var(--th-text-faint)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Replace with the official HMSI Niskalarasi aftermovie video URL
                </motion.p>
            </div>
        </section>
    );
}
