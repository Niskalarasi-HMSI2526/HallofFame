"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import Image from "next/image";
import { Infinity as InfinityIcon, Cog, Gauge, Star } from "lucide-react";

const FILOSOFI_COLORS = [
    { bg: "from-secondary/12 to-secondary/5", accent: "text-secondary", border: "border-secondary/20" },
    { bg: "from-primary/12 to-primary/5", accent: "text-primary", border: "border-primary/20" },
    { bg: "from-gold-light/18 to-gold-light/5", accent: "text-amber-600", border: "border-gold-light/30" },
    { bg: "from-accent-pink/12 to-accent-pink/5", accent: "text-pink-500", border: "border-accent-pink/20" },
];

const LOGO_ELEMENT_COLORS = [
    { bg: "from-primary/10", accent: "text-primary", color: "#3D4AEC" },
    { bg: "from-gold-light/15", accent: "text-amber-600", color: "#D5AC3C" },
    { bg: "from-secondary/10", accent: "text-secondary", color: "#562FCC" },
    { bg: "from-accent-pink/10", accent: "text-pink-500", color: "#F686EB" },
];

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
    infinity: InfinityIcon,
    cog: Cog,
    gauge: Gauge,
    star: Star,
};

export default function Filosofi() {
    return (
        <section id="filosofi" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(130,115,216,0.08)_0%,transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Section header */}
                <motion.div
                    className="mb-14 text-center sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        Makna di Balik Nama
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ color: "var(--th-text)" }}>
                        Filosofi Niskalarasi
                    </h2>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Filosofi Name Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {SITE_DATA.filosofi.map((item, i) => {
                        const color = FILOSOFI_COLORS[i];
                        return (
                            <motion.div
                                key={item.syllable}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`glass-card glass-card-hover relative overflow-hidden border ${color.border} p-6 sm:p-7`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg}`} />
                                <div className="relative z-10">
                                    <p className={`text-3xl font-extrabold sm:text-4xl ${color.accent}`}>
                                        {item.syllable}
                                    </p>
                                    <p className="mt-2 text-xl font-bold sm:text-2xl" style={{ color: "var(--th-text)" }}>
                                        {item.word}
                                    </p>
                                    <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Filosofi Logo */}
                <motion.div
                    className="mt-24 text-center sm:mt-28"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        Elemen Visual
                    </p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--th-text)" }}>
                        Filosofi Logo
                    </h3>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                <motion.div
                    className="mx-auto mt-10 flex justify-center sm:mt-14"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="glow-ring glass-card rounded-3xl p-8 sm:p-14">
                        <Image
                            src="/logo-niskalarasi.png"
                            alt="Niskalarasi Logo"
                            width={400}
                            height={200}
                            className="h-28 w-auto sm:h-36 md:h-44"
                        />
                    </div>
                </motion.div>

                {/* Logo element cards */}
                <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
                    {SITE_DATA.logoFilosofi.map((item, i) => {
                        const color = LOGO_ELEMENT_COLORS[i];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="glass-card glass-card-hover relative overflow-hidden p-6 text-center sm:p-7"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} to-transparent`} />
                                <div className="relative z-10">
                                    {(() => {
                                        const IconComp = ICON_MAP[item.icon];
                                        return IconComp ? <IconComp size={36} color={color.color} /> : <span className="text-4xl">{item.icon}</span>;
                                    })()}
                                    <p className={`mt-3 text-base font-bold tracking-[0.2em] uppercase ${color.accent}`}>
                                        {item.title}
                                    </p>
                                    <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Visi & Misi */}
                <motion.div
                    className="mt-24 text-center sm:mt-28"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        Arah Gerak Kabinet
                    </p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--th-text)" }}>
                        Visi & Misi
                    </h3>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Visi */}
                <motion.div
                    className="mx-auto mt-10 max-w-3xl sm:mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="glass-card relative overflow-hidden p-7 text-center sm:p-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
                        <div className="relative z-10">
                            <p className="text-sm font-bold tracking-[0.3em] text-secondary uppercase">
                                Visi
                            </p>
                            <p className="mt-5 text-xl font-semibold leading-relaxed sm:text-2xl md:text-3xl" style={{ color: "var(--th-text)" }}>
                                &ldquo;{SITE_DATA.cabinet.vision}&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Misi */}
                <div className="mx-auto mt-6 max-w-3xl space-y-4 sm:mt-8">
                    {SITE_DATA.cabinet.missions.map((mission, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="glass-card relative overflow-hidden p-5 sm:p-7"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                            <div className="relative z-10 flex gap-4 sm:gap-5">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-secondary/20 bg-secondary/10">
                                    <span className="text-lg font-bold text-secondary">
                                        {i + 1}
                                    </span>
                                </div>
                                <p className="text-base leading-relaxed sm:text-lg" style={{ color: "var(--th-text-secondary)" }}>
                                    {mission}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
