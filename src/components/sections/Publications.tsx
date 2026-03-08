"use client";

import { motion } from "framer-motion";
import { BookOpen, Podcast, ShoppingBag, ExternalLink } from "lucide-react";

const PUBLICATIONS = [
    {
        title: "GengSI Magazine",
        description:
            "The official digital magazine of HMSI ITS, covering student life, insights, and community stories from the Information Systems department.",
        icon: BookOpen,
        color: "#562FCC",
        link: "#",
    },
    {
        title: "OBSESI Podcast",
        description:
            "Our podcast series exploring campus experiences, career insights, and conversations with industry leaders and alumni.",
        icon: Podcast,
        color: "#3D4AEC",
        link: "#",
    },
    {
        title: "IS Store",
        description:
            "Official merchandise and products from HMSI ITS — representing the pride and identity of our Information Systems community.",
        icon: ShoppingBag,
        color: "#F686EB",
        link: "#",
    },
];

export default function Publications() {
    return (
        <section id="publications" className="section-padding">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Archive
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Our Publications
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        Creative works and media produced by Cabinet Niskalarasi
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Cards */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
                    {PUBLICATIONS.map((pub, i) => {
                        const Icon = pub.icon;
                        return (
                            <motion.a
                                key={pub.title}
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card glass-card-hover group block rounded-2xl p-5 sm:p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Icon */}
                                <div
                                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${pub.color}20, ${pub.color}08)`,
                                    }}
                                >
                                    <Icon size={24} style={{ color: pub.color }} />
                                </div>

                                {/* Content */}
                                <h3
                                    className="text-base font-bold sm:text-lg"
                                    style={{ color: "var(--th-text)" }}
                                >
                                    {pub.title}
                                </h3>
                                <p
                                    className="mt-2 text-xs leading-relaxed sm:text-sm"
                                    style={{ color: "var(--th-text-secondary)" }}
                                >
                                    {pub.description}
                                </p>

                                {/* Link indicator */}
                                <div
                                    className="mt-4 flex items-center gap-1 text-xs font-semibold tracking-wide uppercase transition-colors group-hover:text-secondary"
                                    style={{ color: "var(--th-text-faint)" }}
                                >
                                    Visit
                                    <ExternalLink size={12} />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.p
                    className="mt-6 text-center text-xs italic sm:text-sm"
                    style={{ color: "var(--th-text-faint)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Replace the links above with actual publication URLs
                </motion.p>
            </div>
        </section>
    );
}
