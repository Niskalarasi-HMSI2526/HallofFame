"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

/* Placeholder gallery items — replace with actual milestone photos */
const GALLERY_ITEMS = [
    {
        title: "Strategic Partnership with PT Inalum",
        description: "Community Service collaboration 2025",
        photo: "/logo-niskalarasi.png",
    },
    {
        title: "Industry Synergy with Telkomsel",
        description: "Company Visit Surabaya 2025",
        photo: "/logo-niskalarasi.png",
    },
    {
        title: "Ormawa Visit 2025",
        description: "HIMASTA UNAIR & HMTG ITS exchange visit",
        photo: "/logo-niskalarasi.png",
    },
    {
        title: "Alumni Synergy Revitalization",
        description: "IKASI 2025-2030 program launch",
        photo: "/logo-niskalarasi.png",
    },
    {
        title: "Best Information Media KM ITS",
        description: "Award-winning media coverage 2025",
        photo: "/logo-niskalarasi.png",
    },
    {
        title: "Top 10 PPK ORMAWA ITS",
        description: "Internal Selection Achievement 2025",
        photo: "/logo-niskalarasi.png",
    },
];

export default function HallOfFame() {
    return (
        <section id="gallery" className="section-padding">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Memories
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Hall of Fame
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        Key moments and milestones from Cabinet Niskalarasi&apos;s journey
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid gap-4 grid-cols-2 sm:gap-5 md:grid-cols-3">
                    {GALLERY_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="glass-card glass-card-hover group relative overflow-hidden rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                        >
                            {/* Image placeholder */}
                            <div
                                className="flex aspect-square items-center justify-center"
                                style={{ background: "var(--th-bg-alt)" }}
                            >
                                <Camera
                                    size={32}
                                    className="text-secondary/30"
                                />
                            </div>

                            {/* Caption overlay */}
                            <div
                                className="absolute inset-x-0 bottom-0 p-3 sm:p-4"
                                style={{
                                    background:
                                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                }}
                            >
                                <p className="text-xs font-bold text-white sm:text-sm">
                                    {item.title}
                                </p>
                                <p className="mt-0.5 text-[10px] text-white/70 sm:text-xs">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="mt-6 text-center text-xs italic sm:text-sm"
                    style={{ color: "var(--th-text-faint)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Add milestone photos to &ldquo;/public/photos/gallery/&rdquo; to populate this section
                </motion.p>
            </div>
        </section>
    );
}
