"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import GaugeChart from "@/components/GaugeChart";

export default function Performance() {
    const { ipms } = SITE_DATA.cabinet;

    const breakdownItems = [
        {
            label: "Progresif",
            value: ipms.breakdown.progresif,
            color: "#562FCC",
            bg: "from-[#562FCC]/20 to-[#562FCC]/5",
            border: "border-[#562FCC]/25",
        },
        {
            label: "Professional",
            value: ipms.breakdown.professional,
            color: "#3D4AEC",
            bg: "from-[#3D4AEC]/20 to-[#3D4AEC]/5",
            border: "border-[#3D4AEC]/25",
        },
        {
            label: "Kekeluargaan",
            value: ipms.breakdown.kekeluargaan,
            color: "#F686EB",
            bg: "from-[#F686EB]/20 to-[#F686EB]/5",
            border: "border-[#F686EB]/25",
        },
    ];

    return (
        <section id="performance" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(61,74,236,0.06)_0%,transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    className="mb-14 text-center sm:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                        Performance & Identity
                    </p>
                    <h2
                        className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        IPMS Score
                    </h2>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Bento Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Overall Score — large card with big gauge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="glass-card relative overflow-hidden sm:col-span-2 lg:row-span-2"
                        style={{ border: "2px solid rgba(213,172,60,0.3)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-light/20 via-gold-light/5 to-secondary/8" />
                        <div className="relative z-10 flex h-full flex-col items-center justify-center py-10 text-center sm:py-14">
                            <p
                                className="text-base font-bold tracking-[0.3em] uppercase"
                                style={{ color: "#D5AC3C" }}
                            >
                                Overall Score
                            </p>
                            <div className="mt-6 sm:mt-8">
                                <GaugeChart
                                    value={ipms.overall}
                                    size={220}
                                    strokeWidth={14}
                                    color="#D5AC3C"
                                    showValue
                                    animated
                                />
                            </div>
                            <p
                                className="mt-3 text-lg font-medium"
                                style={{ color: "var(--th-text-muted)" }}
                            >
                                IPMS Performance Index
                            </p>
                        </div>
                    </motion.div>

                    {/* Breakdown cards with gauge charts */}
                    {breakdownItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (i + 1) * 0.12 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`glass-card glass-card-hover relative overflow-hidden border-2 ${item.border}`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.bg}`}
                            />
                            <div className="relative z-10 flex flex-col items-center py-6 text-center sm:py-8">
                                <p
                                    className="text-sm font-semibold tracking-[0.2em] uppercase"
                                    style={{ color: "var(--th-text-muted)" }}
                                >
                                    Misi
                                </p>
                                <p
                                    className="mt-1 text-base font-bold tracking-wider"
                                    style={{ color: item.color }}
                                >
                                    {item.label}
                                </p>
                                <div className="mt-4">
                                    <GaugeChart
                                        value={item.value}
                                        size={130}
                                        strokeWidth={10}
                                        color={item.color}
                                        showValue
                                        animated
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Vision card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="glass-card relative overflow-hidden p-6 sm:col-span-2 sm:p-7 lg:col-span-1"
                        style={{ border: "2px solid rgba(61,74,236,0.2)" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                        <div className="relative z-10">
                            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
                                Visi Kabinet
                            </p>
                            <p
                                className="mt-3 text-base leading-relaxed italic sm:text-lg"
                                style={{ color: "var(--th-text-secondary)" }}
                            >
                                &ldquo;{SITE_DATA.cabinet.vision}&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
