"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import { Users, Crown, Building2, ArrowDown } from "lucide-react";

export default function OrgStructure() {
    const totalMembers = SITE_DATA.departments.reduce(
        (acc, dept) => acc + dept.members.length,
        0
    );
    const deptCount = SITE_DATA.departments.length;
    const bph = SITE_DATA.departments.find((d) => d.id === "bph");
    const depts = SITE_DATA.departments.filter((d) => d.id !== "bph");

    return (
        <section id="structure" className="section-padding">
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
                        The Blueprint
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Organization Structure
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-lg text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        {deptCount} divisions &middot; {totalMembers} dedicated members building the future of HMSI
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Org Chart */}
                <div className="flex flex-col items-center gap-4">
                    {/* Top: BPH */}
                    <motion.div
                        className="glass-card glow-ring w-full max-w-xs rounded-2xl p-5 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Crown size={28} className="mx-auto mb-2 text-gold" />
                        <p className="text-base font-bold sm:text-lg" style={{ color: "var(--th-text)" }}>
                            {bph?.name || "Executive Board (BPH)"}
                        </p>
                        <p className="mt-1 text-xs font-medium" style={{ color: "var(--th-text-muted)" }}>
                            {bph?.members.length || 7} members &middot; Cabinet Leadership
                        </p>
                    </motion.div>

                    {/* Connector */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-6 w-px bg-gradient-to-b from-secondary/40 to-secondary/10" />
                        <ArrowDown size={16} className="text-secondary/40" />
                    </motion.div>

                    {/* Department Grid */}
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                            {depts.map((dept, i) => (
                                <motion.div
                                    key={dept.id}
                                    className="glass-card rounded-xl p-3 text-center sm:p-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Building2
                                        size={18}
                                        className="mx-auto mb-1.5 text-secondary/60"
                                    />
                                    <p
                                        className="text-[11px] font-bold leading-tight sm:text-xs"
                                        style={{ color: "var(--th-text)" }}
                                    >
                                        {dept.name}
                                    </p>
                                    <p
                                        className="mt-1 text-[10px]"
                                        style={{ color: "var(--th-text-faint)" }}
                                    >
                                        {dept.members.length} members
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Total Badge */}
                    <motion.div
                        className="mt-2 rounded-full px-5 py-2 text-center text-xs font-bold tracking-wider uppercase"
                        style={{
                            background: "var(--th-card)",
                            border: "1px solid var(--th-border)",
                            color: "var(--th-text-muted)",
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Users size={14} className="mr-1.5 inline" />
                        {totalMembers} Total Members
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
