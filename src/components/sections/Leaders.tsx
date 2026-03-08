"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import Image from "next/image";

export default function Leaders() {
    const bph = SITE_DATA.departments.find((d) => d.id === "bph");
    if (!bph) return null;

    const president = bph.members.find((m) => m.role === "President");
    const vps = bph.members.filter((m) => m.role === "Vice President");
    const secretaries = bph.members.filter((m) => m.role === "General Secretary");
    const treasurers = bph.members.filter((m) => m.role === "General Treasurer");

    return (
        <section id="leaders" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,115,216,0.06)_0%,transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    className="mb-14 text-center sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        The Leaders
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ color: "var(--th-text)" }}>
                        Executive Board
                    </h2>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* President */}
                {president && (
                    <motion.div
                        className="mx-auto mb-14 max-w-lg sm:mb-18"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="glass-card glass-card-hover relative overflow-hidden p-8 text-center sm:p-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-gold-light/12 to-transparent" />
                            <div className="relative z-10">
                                <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-gold-light/40 bg-gold-light/15 sm:h-32 sm:w-32">
                                    {president.photo ? (
                                        <Image src={president.photo} alt={president.name} width={128} height={128} className="member-photo" />
                                    ) : (
                                        <span className="text-4xl font-bold text-amber-600">{president.name.charAt(0)}</span>
                                    )}
                                </div>
                                <p className="mt-4 text-sm font-bold tracking-[0.3em] text-amber-600 uppercase">
                                    President
                                </p>
                                <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: "var(--th-text)" }}>
                                    {president.name}
                                </h3>
                                {president.nrp && (
                                    <p className="mt-2 text-base" style={{ color: "var(--th-text-muted)" }}>{president.nrp}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Vice Presidents */}
                <div className="mb-14 grid gap-5 sm:mb-18 sm:grid-cols-2">
                    {vps.map((vp, i) => (
                        <motion.div
                            key={vp.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="glass-card glass-card-hover relative overflow-hidden p-7 text-center sm:p-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent" />
                            <div className="relative z-10">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-accent-purple/25 bg-accent-purple/12 sm:h-24 sm:w-24">
                                    {vp.photo ? (
                                        <Image src={vp.photo} alt={vp.name} width={96} height={96} className="member-photo" />
                                    ) : (
                                        <span className="text-3xl font-bold text-secondary">{vp.name.charAt(0)}</span>
                                    )}
                                </div>
                                <p className="mt-3 text-sm font-bold tracking-[0.3em] text-secondary uppercase">
                                    Vice President
                                </p>
                                <h3 className="mt-3 text-xl font-bold sm:text-2xl" style={{ color: "var(--th-text)" }}>
                                    {vp.name}
                                </h3>
                                {vp.nrp && (
                                    <p className="mt-1 text-base" style={{ color: "var(--th-text-muted)" }}>{vp.nrp}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secretaries & Treasurers */}
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
                    {[...secretaries, ...treasurers].map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="glass-card glass-card-hover p-5 text-center sm:p-6"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-primary/10 sm:h-18 sm:w-18">
                                {member.photo ? (
                                    <Image src={member.photo} alt={member.name} width={72} height={72} className="member-photo" />
                                ) : (
                                    <span className="text-xl font-bold text-primary">{member.name.charAt(0)}</span>
                                )}
                            </div>
                            <p className="mt-2 text-xs font-bold tracking-[0.2em] text-primary uppercase sm:text-sm">
                                {member.role}
                            </p>
                            <h4 className="mt-2 text-base font-semibold sm:text-lg" style={{ color: "var(--th-text)" }}>
                                {member.name}
                            </h4>
                            {member.nrp && (
                                <p className="mt-1 text-sm" style={{ color: "var(--th-text-muted)" }}>{member.nrp}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
