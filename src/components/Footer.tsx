"use client";

import Image from "next/image";
import { SITE_DATA } from "@/constants/data";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://instagram.com/hmsi_its",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/company/hmsi-its",
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:hmsi@its.ac.id",
    },
];

export default function Footer() {
    return (
        <footer
            className="section-padding pb-8"
            style={{
                background:
                    "linear-gradient(to bottom, var(--th-bg), var(--th-bg-alt))",
            }}
        >
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    {/* Logo & Name */}
                    <Image
                        src="/logo-niskalarasi.png"
                        alt="HMSI ITS"
                        width={100}
                        height={50}
                        className="h-12 w-auto sm:h-14"
                    />
                    <p
                        className="mt-3 text-base font-bold tracking-[0.3em] uppercase sm:text-lg"
                        style={{ color: "var(--th-text)" }}
                    >
                        HMSI ITS
                    </p>
                    <p className="mt-1 text-sm font-medium tracking-[0.2em] text-secondary uppercase">
                        Cabinet {SITE_DATA.cabinet.name} {SITE_DATA.cabinet.year}
                    </p>

                    {/* Social Links */}
                    <div className="mt-6 flex items-center gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: "var(--th-card)",
                                        border: "1px solid var(--th-border)",
                                        color: "var(--th-text-muted)",
                                    }}
                                    aria-label={social.label}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Address */}
                    <div
                        className="mt-6 flex items-start gap-2 text-xs leading-relaxed sm:text-sm"
                        style={{ color: "var(--th-text-faint)" }}
                    >
                        <MapPin size={14} className="mt-0.5 shrink-0" />
                        <span>
                            Department of Information Systems, Institut Teknologi Sepuluh Nopember (ITS), Surabaya
                        </span>
                    </div>

                    {/* Tagline */}
                    <p
                        className="mt-5 text-sm font-medium tracking-wide"
                        style={{ color: "var(--th-text-secondary)" }}
                    >
                        {SITE_DATA.cabinet.tagline}
                    </p>

                    {/* Vision */}
                    <p
                        className="mt-2 max-w-md text-xs italic leading-relaxed sm:text-sm"
                        style={{ color: "var(--th-text-faint)" }}
                    >
                        &ldquo;{SITE_DATA.cabinet.vision}&rdquo;
                    </p>

                    {/* Copyright */}
                    <div
                        className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                    />
                    <p className="mt-4 text-xs" style={{ color: "var(--th-text-faint)" }}>
                        &copy; {new Date().getFullYear()} Information Systems Student Association &mdash; Institut Teknologi Sepuluh Nopember (ITS)
                    </p>
                </div>
            </div>
        </footer>
    );
}
