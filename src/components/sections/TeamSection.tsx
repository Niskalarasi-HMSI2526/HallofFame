"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Crown, Users, ChevronDown } from "lucide-react";
import { SITE_DATA, ROLE_ORDER, type Department } from "@/constants/data";
import DepartmentModal from "@/components/DepartmentModal";
import GaugeChart from "@/components/GaugeChart";

const DEPT_COLORS: Record<string, { color: string; border: string; bg: string }> = {
    hrd: { color: "#F686EB", border: "border-[#F686EB]/30", bg: "from-[#F686EB]/15 to-[#F686EB]/3" },
    ia: { color: "#562FCC", border: "border-[#562FCC]/30", bg: "from-[#562FCC]/15 to-[#562FCC]/3" },
    swf: { color: "#3D4AEC", border: "border-[#3D4AEC]/30", bg: "from-[#3D4AEC]/15 to-[#3D4AEC]/3" },
    rnd: { color: "#8273D8", border: "border-[#8273D8]/30", bg: "from-[#8273D8]/15 to-[#8273D8]/3" },
    im: { color: "#6B6BF0", border: "border-[#6B6BF0]/30", bg: "from-[#6B6BF0]/15 to-[#6B6BF0]/3" },
    ea: { color: "#D5AC3C", border: "border-[#D5AC3C]/30", bg: "from-[#D5AC3C]/15 to-[#D5AC3C]/3" },
    es: { color: "#FF6B9D", border: "border-[#FF6B9D]/30", bg: "from-[#FF6B9D]/15 to-[#FF6B9D]/3" },
    socdev: { color: "#28258D", border: "border-[#28258D]/30", bg: "from-[#28258D]/15 to-[#28258D]/3" },
};

/* ── Photo Carousel ── */
function PhotoCarousel({ photos, name }: { photos: string[]; name: string }) {
    const [cur, setCur] = useState(0);

    if (!photos || photos.length === 0) {
        return (
            <div
                className="flex h-28 w-full items-center justify-center rounded-xl sm:h-32"
                style={{ background: "var(--th-bg-alt)", border: "1px dashed var(--th-border)" }}
            >
                <p className="text-[10px] italic" style={{ color: "var(--th-text-faint)" }}>
                    No gallery photos yet
                </p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-28 w-full sm:h-32">
                <Image src={photos[cur]} alt={`${name} gallery ${cur + 1}`} fill className="object-cover" />
            </div>
            {photos.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {photos.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCur(i); }}
                            className="h-1.5 rounded-full transition-all"
                            style={{
                                width: i === cur ? 16 : 6,
                                background: i === cur ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ── Leader person row ── */
function PersonRow({
    photo,
    name,
    role,
    color,
    size = "md",
}: {
    photo?: string;
    name: string;
    role: string;
    color: string;
    size?: "md" | "sm";
}) {
    const sz = size === "sm" ? "h-8 w-8" : "h-9 w-9";
    return (
        <div className="flex items-center gap-2.5">
            <div
                className={`flex ${sz} shrink-0 items-center justify-center overflow-hidden rounded-full`}
                style={{ background: `${color}18`, border: `1.5px solid ${color}30` }}
            >
                {photo ? (
                    <Image src={photo} alt={name} width={36} height={36} className="h-full w-full object-cover" />
                ) : (
                    <span className="text-xs font-bold" style={{ color }}>{name.charAt(0)}</span>
                )}
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium sm:text-sm" style={{ color: "var(--th-text-secondary)" }}>
                    {name}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: `${color}CC` }}>
                    {role}
                </p>
            </div>
        </div>
    );
}

export default function TeamSection() {
    const [selected, setSelected] = useState<Department | null>(null);
    const [bphOpen, setBphOpen] = useState(false);

    const bph = SITE_DATA.departments.find((d) => d.id === "bph");
    const departments = SITE_DATA.departments.filter((d) => d.id !== "bph");
    const totalMembers = SITE_DATA.departments.reduce(
        (acc, d) => acc + d.members.length,
        0
    );

    const sorted = bph
        ? [...bph.members].sort(
            (a, b) => (ROLE_ORDER[a.role] ?? 99) - (ROLE_ORDER[b.role] ?? 99)
        )
        : [];
    const president = sorted.find((m) => m.role === "President");
    const vps = sorted.filter((m) => m.role === "Vice President");
    const secretaries = sorted.filter((m) => m.role === "General Secretary");
    const treasurers = sorted.filter((m) => m.role === "General Treasurer");

    const bphColor = "#D5AC3C";

    return (
        <>
            <section id="team" className="section-padding relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(130,115,216,0.06)_0%,transparent_60%)]" />

                <div className="relative z-10 mx-auto max-w-7xl">
                    {/* Header */}
                    <motion.div
                        className="mb-10 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                            The People Behind It All
                        </p>
                        <h2
                            className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                            style={{ color: "var(--th-text)" }}
                        >
                            Our Team
                        </h2>
                        <p
                            className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            {SITE_DATA.departments.length} divisions &middot; {totalMembers} dedicated members
                        </p>
                        <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                    </motion.div>

                    {/* ──────── EXECUTIVE BOARD (BPH) ──────── */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Compact BPH Card — styled like a department card */}
                        <div
                            className={`glass-card glass-card-hover mx-auto max-w-sm cursor-pointer overflow-hidden rounded-2xl border-2 p-4 text-left transition-all sm:p-5`}
                            style={{ borderColor: `${bphColor}30` }}
                            onClick={() => setSelected(bph || null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-[${bphColor}]/10 to-[${bphColor}]/2`} />
                            <div className="relative z-10">
                                {/* Top: Logo + Name + Count */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {bph?.logo && (
                                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg" style={{ background: `${bphColor}18`, border: `1px solid ${bphColor}30` }}>
                                                <Image src={bph.logo} alt="BPH" width={24} height={24} className="h-6 w-6 object-contain" />
                                            </div>
                                        )}
                                        {!bph?.logo && (
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${bphColor}18`, border: `1px solid ${bphColor}30` }}>
                                                <Crown size={18} style={{ color: bphColor }} />
                                            </div>
                                        )}
                                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: bphColor }}>
                                            BPH
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium" style={{ color: "var(--th-text-muted)" }}>
                                        {bph?.members.length || 7} members
                                    </span>
                                </div>

                                {/* Name */}
                                <h4 className="mt-2 text-base font-bold leading-snug sm:text-lg" style={{ color: "var(--th-text)" }}>
                                    Executive Board
                                </h4>

                                {/* Gallery Carousel */}
                                <div className="mt-3">
                                    <PhotoCarousel photos={bph?.gallery || []} name="Executive Board" />
                                </div>

                                {/* IPMS Gauge */}
                                <div className="mt-3 flex items-center justify-center">
                                    <GaugeChart
                                        value={bph?.performance || 96.24}
                                        size={100}
                                        strokeWidth={7}
                                        color={bphColor}
                                        label="IPMS"
                                        showValue
                                        animated
                                    />
                                </div>

                                {/* President */}
                                {president && (
                                    <div className="mt-3">
                                        <PersonRow photo={president.photo} name={president.name} role="President" color={bphColor} />
                                    </div>
                                )}

                                {/* Vice Presidents */}
                                {vps.length > 0 && (
                                    <div className="mt-2 space-y-1.5">
                                        {vps.map((vp) => (
                                            <PersonRow key={vp.name} photo={vp.photo} name={vp.name} role="Vice President" color={`${bphColor}AA`} size="sm" />
                                        ))}
                                    </div>
                                )}

                                {/* Tap hint */}
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-[10px] tracking-wide" style={{ color: "var(--th-text-faint)" }}>
                                        Tap for details →
                                    </span>
                                    <span className="text-secondary">→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ──────── DEPARTMENTS ──────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className="mb-2 text-center text-xs font-bold tracking-[0.25em] uppercase sm:text-sm"
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            <Users size={14} className="mr-1.5 inline text-secondary" />
                            Departments
                        </h3>
                        <p className="mb-6 text-center text-xs sm:text-sm" style={{ color: "var(--th-text-faint)" }}>
                            Tap any department to view the full roster
                        </p>

                        <div className="grid gap-4 grid-cols-1 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {departments.map((dept, i) => {
                                const head = dept.members.find((m) => m.role === "Head of Department");
                                const deputy = dept.members.find((m) => m.role === "Deputy Head of Department");
                                const deptColor = DEPT_COLORS[dept.id] || {
                                    color: "#8273D8",
                                    border: "border-[#8273D8]/30",
                                    bg: "from-[#8273D8]/15 to-[#8273D8]/3",
                                };

                                return (
                                    <motion.button
                                        key={dept.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                        viewport={{ once: true }}
                                        className={`glass-card glass-card-hover relative cursor-pointer overflow-hidden border-2 ${deptColor.border} p-4 text-left sm:p-5`}
                                        onClick={() => setSelected(dept)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${deptColor.bg}`} />
                                        <div className="relative z-10">
                                            {/* Top: Name + Member Count */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {dept.logo && (
                                                        <div
                                                            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg"
                                                            style={{ background: `${deptColor.color}18`, border: `1px solid ${deptColor.color}30` }}
                                                        >
                                                            <Image src={dept.logo} alt={dept.name} width={24} height={24} className="h-6 w-6 object-contain" />
                                                        </div>
                                                    )}
                                                    <span
                                                        className="text-sm font-bold tracking-wider uppercase"
                                                        style={{ color: deptColor.color }}
                                                    >
                                                        {dept.id.toUpperCase()}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-medium" style={{ color: "var(--th-text-muted)" }}>
                                                    {dept.members.length} members
                                                </span>
                                            </div>

                                            {/* Department Name */}
                                            <h4 className="mt-2 text-base font-bold leading-snug sm:text-lg" style={{ color: "var(--th-text)" }}>
                                                {dept.name}
                                            </h4>

                                            {/* Gallery Carousel */}
                                            <div className="mt-3">
                                                <PhotoCarousel photos={dept.gallery || []} name={dept.name} />
                                            </div>

                                            {/* Performance Gauge */}
                                            {dept.performance !== undefined && dept.performance > 0 && (
                                                <div className="mt-3 flex items-center justify-center">
                                                    <GaugeChart
                                                        value={dept.performance}
                                                        size={100}
                                                        strokeWidth={7}
                                                        color={deptColor.color}
                                                        label="IPMS"
                                                        showValue
                                                        animated
                                                    />
                                                </div>
                                            )}

                                            {/* Kadep */}
                                            {head && (
                                                <div className="mt-3">
                                                    <PersonRow
                                                        photo={head.photo}
                                                        name={head.name}
                                                        role="Head"
                                                        color={deptColor.color}
                                                    />
                                                </div>
                                            )}

                                            {/* Wakadep */}
                                            {deputy && (
                                                <div className="mt-2">
                                                    <PersonRow
                                                        photo={deputy.photo}
                                                        name={deputy.name}
                                                        role="Vice Head"
                                                        color={`${deptColor.color}AA`}
                                                        size="sm"
                                                    />
                                                </div>
                                            )}

                                            {/* Tap hint */}
                                            <div className="mt-3 flex items-center justify-between">
                                                <span className="text-[10px] tracking-wide" style={{ color: "var(--th-text-faint)" }}>
                                                    Tap for details →
                                                </span>
                                                <span className="text-base" style={{ color: `${deptColor.color}60` }}>→</span>
                                            </div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Total badge */}
                        <motion.p
                            className="mt-8 text-center text-sm font-medium"
                            style={{ color: "var(--th-text-muted)" }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {totalMembers} members across {SITE_DATA.departments.length} divisions
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {selected && (
                <DepartmentModal
                    department={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
}
