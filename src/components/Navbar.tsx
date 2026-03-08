"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
    { href: "#hero", label: "Home" },
    { href: "#video", label: "Video" },
    { href: "#filosofi", label: "Identity" },
    { href: "#performance", label: "Performance" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={scrolled ? {
                background: "var(--th-card)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--th-border)",
                boxShadow: "0 2px 12px var(--th-shadow)",
            } : { background: "transparent" }}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                <a href="#hero" className="flex items-center gap-3">
                    <Image
                        src="/logo-niskalarasi.png"
                        alt="HMSI Niskalarasi"
                        width={48}
                        height={24}
                        className="h-8 w-auto sm:h-10"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-[0.15em] uppercase sm:text-base" style={{ color: "var(--th-text)" }}>
                            HMSI ITS
                        </span>
                        <span className="text-xs font-medium tracking-wider text-secondary">
                            Niskalarasi 2025
                        </span>
                    </div>
                </a>

                {/* Desktop */}
                <div className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-primary"
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="flex flex-col gap-1.5 lg:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span className="block h-[2px] w-6" style={{ background: "var(--th-text)" }} animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
                    <motion.span className="block h-[2px] w-6" style={{ background: "var(--th-text)" }} animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
                    <motion.span className="block h-[2px] w-6" style={{ background: "var(--th-text)" }} animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="lg:hidden"
                        style={{ background: "var(--th-card)", borderTop: "1px solid var(--th-border)" }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-5 px-6 py-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-semibold tracking-wider uppercase transition-colors hover:text-primary"
                                    style={{ color: "var(--th-text-secondary)" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
