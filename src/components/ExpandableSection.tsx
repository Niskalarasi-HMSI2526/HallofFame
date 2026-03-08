"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableSectionProps {
    id: string;
    number?: string;
    label: string;
    title: string;
    subtitle?: string;
    preview?: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function ExpandableSection({
    id,
    number,
    label,
    title,
    subtitle,
    preview,
    children,
    defaultOpen = false,
}: ExpandableSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section id={id} className="section-padding">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {number && (
                        <span
                            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold tracking-[0.3em] uppercase"
                            style={{
                                background: "var(--th-card)",
                                border: "1px solid var(--th-border)",
                                color: "var(--th-text-muted)",
                            }}
                        >
                            {number}
                        </span>
                    )}
                    <p className="mt-2 text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        {label}
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        {title}
                    </h2>
                    {subtitle && (
                        <p
                            className="mx-auto mt-3 max-w-lg text-sm leading-relaxed sm:text-base"
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            {subtitle}
                        </p>
                    )}
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Preview (always visible) */}
                {preview && (
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {preview}
                    </motion.div>
                )}

                {/* Expand/Collapse Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                        style={{
                            background: isOpen ? "var(--th-card-hover)" : "var(--th-card)",
                            border: "1px solid var(--th-border)",
                            color: "var(--th-text-secondary)",
                            boxShadow: `0 2px 12px var(--th-shadow)`,
                        }}
                    >
                        {isOpen ? "Show Less" : "View Details"}
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={16} />
                        </motion.div>
                    </button>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8">{children}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
