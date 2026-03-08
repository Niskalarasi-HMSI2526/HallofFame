"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

                        {/* Members */}
                        <div className="p-5 space-y-8 sm:p-6">
                            {Array.from(groupMembersByRole(department.members).entries()).map(
                                ([role, members]) => (
                                    <div key={role}>
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className={getRoleBadge(role)}>{role}</span>
                                            <div className="h-[1px] flex-1" style={{ background: "var(--th-border)" }} />
                                        </div>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            {members.map((member) => (
                                                <div
                                                    key={member.name}
                                                    className="flex items-center gap-3 rounded-xl p-3 transition-colors"
                                                    style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}
                                                >
                                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-secondary/15 bg-secondary/10">
                                                        {member.photo ? (
                                                            <Image src={member.photo} alt={member.name} width={44} height={44} className="member-photo" />
                                                        ) : (
                                                            <span className="text-sm font-bold text-secondary">{member.name.charAt(0)}</span>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="truncate text-base font-semibold" style={{ color: "var(--th-text)" }}>
                                                            {member.name}
                                                        </p>
                                                        {member.nrp && (
                                                            <p className="text-sm" style={{ color: "var(--th-text-muted)" }}>{member.nrp}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
