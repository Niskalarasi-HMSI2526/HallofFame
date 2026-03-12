"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trophy, Target, Briefcase, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { ROLE_ORDER, ROLE_COLORS, type Department, type Member } from "@/constants/data";

function getRoleBadge(role: string) {
    const colors = ROLE_COLORS[role] || "bg-slate-100 text-slate-600 border-slate-200";
    return `inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${colors}`;
}

function groupMembersByRole(members: Member[]) {
    const grouped = new Map<string, Member[]>();
    const sorted = [...members].sort((a, b) => (ROLE_ORDER[a.role] ?? 99) - (ROLE_ORDER[b.role] ?? 99));
    for (const member of sorted) {
        const existing = grouped.get(member.role) || [];
        existing.push(member);
        grouped.set(member.role, existing);
    }
    return grouped;
}

export default function DepartmentModal({
    department,
    onClose,
}: {
    department: Department | null;
    onClose: () => void;
}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    // Reset carousel index when department changes
    useEffect(() => {
        setCurrentImage(0);
    }, [department]);

    // Auto-slide carousel
    useEffect(() => {
        if (!department?.gallery || department.gallery.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % department.gallery!.length);
        }, 4000); // 4 seconds auto slide
        return () => clearInterval(interval);
    }, [department, currentImage]);

    return (
        <AnimatePresence>
            {department && (
                <motion.div
                    className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{ background: "var(--th-overlay)" }}
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl shadow-2xl"
                        style={{ background: "var(--th-card-hover)", border: "1px solid var(--th-border)" }}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-20 px-5 py-5 backdrop-blur-xl sm:px-6" style={{ background: "var(--th-card)", borderBottom: "1px solid var(--th-border)" }}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm font-bold tracking-[0.3em] text-secondary uppercase">Department</p>
                                    <h3 className="mt-1 text-2xl font-bold sm:text-3xl" style={{ color: "var(--th-text)" }}>
                                        {department.name}
                                    </h3>
                                    <p className="mt-1 text-base" style={{ color: "var(--th-text-muted)" }}>
                                        {department.members.length} members
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-lg transition-colors"
                                    style={{ border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        <div className="p-5 space-y-6 sm:p-6">

                            {/* ── Image Gallery Carousel ── */}
                            {department.gallery && department.gallery.length > 0 && (
                                <div className="relative w-full overflow-hidden rounded-xl bg-black/5" style={{ aspectRatio: "16/9", border: "1px solid var(--th-border)" }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImage}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={department.gallery[currentImage]}
                                                alt={`${department.name} Gallery ${currentImage + 1}`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {department.gallery.length > 1 && (
                                        <>
                                            {/* Left/Right Buttons */}
                                            <button
                                                onClick={() => setCurrentImage((prev) => (prev === 0 ? department.gallery!.length - 1 : prev - 1))}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:left-4"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={() => setCurrentImage((prev) => (prev + 1) % department.gallery!.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:right-4"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={20} />
                                            </button>

                                            {/* Indicator Dots */}
                                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-4">
                                                {department.gallery.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentImage(idx)}
                                                        className={`h-1.5 rounded-full transition-all ${currentImage === idx ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                                                            }`}
                                                        aria-label={`Go to image ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* ── Role & Function ── */}
                            {department.roleFunction && (
                                <div className="rounded-xl p-4" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                    <div className="mb-2 flex items-center gap-2">
                                        <Briefcase size={16} className="text-secondary" />
                                        <h4 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                            Role & Function
                                        </h4>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {department.roleFunction}
                                    </p>
                                </div>
                            )}

                            {/* ── Agendas & Initiatives ── */}
                            {department.agendas && department.agendas.length > 0 && (
                                <div className="rounded-xl p-4" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                    <div className="mb-3 flex items-center gap-2">
                                        <Target size={16} className="text-secondary" />
                                        <h4 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                            Agendas & Initiatives
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {department.agendas.map((agenda) => (
                                            <span
                                                key={agenda}
                                                className="rounded-full px-3 py-1 text-xs font-medium"
                                                style={{ background: "var(--th-card)", color: "var(--th-text-secondary)", border: "1px solid var(--th-border)" }}
                                            >
                                                {agenda}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ── Goals & Skills ── */}
                            {department.goals && (
                                <div className="rounded-xl p-4" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                    <div className="mb-2 flex items-center gap-2">
                                        <Trophy size={16} className="text-gold" />
                                        <h4 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                            Goals & Skills Acquired
                                        </h4>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {department.goals}
                                    </p>
                                </div>
                            )}

                            {/* ── Achievement Highlight ── */}
                            {department.achievementHighlight && (
                                <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg, rgba(213,172,60,0.08), rgba(130,115,216,0.08))", border: "1px solid var(--th-border)" }}>
                                    <div className="mb-2 flex items-center gap-2">
                                        <Award size={16} className="text-amber-500" />
                                        <h4 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                            Key Achievements
                                        </h4>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                                        {department.achievementHighlight}
                                    </p>
                                </div>
                            )}

                            {/* ── Members ── */}
                            <div>
                                <h4 className="mb-4 text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                    Full Roster
                                </h4>
                                <div className="space-y-6">
                                    {Array.from(groupMembersByRole(department.members).entries()).map(
                                        ([role, members]) => (
                                            <div key={role}>
                                                <div className="mb-3 flex items-center gap-3">
                                                    <span className={getRoleBadge(role)}>{role}</span>
                                                    <div className="h-[1px] flex-1" style={{ background: "var(--th-border)" }} />
                                                </div>
                                                <div className="grid gap-3 sm:grid-cols-2">
                                                    {members.map((member) => (
                                                        <button
                                                            key={member.name}
                                                            onClick={() => setSelectedMember(member)}
                                                            className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all hover:scale-[1.02]"
                                                            style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}
                                                        >
                                                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-secondary/15 bg-secondary/10">
                                                                {member.photo ? (
                                                                    <Image src={member.photo} alt={member.name} width={44} height={44} className="member-photo" />
                                                                ) : (
                                                                    <span className="text-sm font-bold text-secondary">{member.name.charAt(0)}</span>
                                                                )}
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm font-semibold sm:text-base leading-tight" style={{ color: "var(--th-text)" }}>
                                                                    {member.name}
                                                                </p>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Member Details Pop-up Modal */}
                    <AnimatePresence>
                        {selectedMember && (
                            <motion.div
                                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="absolute inset-0 backdrop-blur-md bg-white/40 dark:bg-black/60"
                                    onClick={() => setSelectedMember(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                                <motion.div
                                    className="relative flex w-full max-w-md flex-col items-center rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900 sm:p-10"
                                    style={{ border: "2px solid var(--th-border)" }}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                >
                                    <button
                                        onClick={() => setSelectedMember(null)}
                                        className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                        style={{ color: "var(--th-text-muted)" }}
                                    >
                                        ✕
                                    </button>

                                    <div className="mb-4 overflow-hidden rounded-full border-[6px] shadow-2xl ring-4 ring-secondary/20" style={{ borderColor: "var(--th-card)" }}>
                                        {selectedMember.photo ? (
                                            <Image
                                                src={selectedMember.photo}
                                                alt={selectedMember.name}
                                                width={220}
                                                height={220}
                                                className="h-44 w-44 object-cover sm:h-52 sm:w-52"
                                            />
                                        ) : (
                                            <div className="flex h-44 w-44 items-center justify-center bg-secondary/10 sm:h-52 sm:w-52">
                                                <span className="text-6xl font-bold text-secondary">{selectedMember.name.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <h4 className="text-center text-xl font-extrabold sm:text-2xl" style={{ color: "var(--th-text)" }}>
                                        {selectedMember.name}
                                    </h4>

                                    <p className="mt-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-secondary sm:text-base">
                                        {selectedMember.role}
                                    </p>
                                    <p className="mt-1 text-center text-xs font-semibold" style={{ color: "var(--th-text-muted)" }}>
                                        {department.name}
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
