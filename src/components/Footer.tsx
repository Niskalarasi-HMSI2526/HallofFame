"use client";

import { SITE_DATA } from "@/constants/data";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{ background: "var(--th-bg-alt)", borderTop: "1px solid var(--th-border)" }}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
                    <Image
                        src="/logo-niskalarasi.png"
                        alt="HMSI Niskalarasi"
                        width={100}
                        height={50}
                        className="h-14 w-auto opacity-60 sm:h-16"
                    />
                    <div>
                        <p className="text-lg font-bold tracking-[0.2em] uppercase" style={{ color: "var(--th-text)" }}>
                            HMSI ITS
                        </p>
                        <p className="mt-1 text-base font-medium tracking-[0.2em] text-secondary uppercase">
                            Kabinet {SITE_DATA.cabinet.name} {SITE_DATA.cabinet.year}
                        </p>
                    </div>

                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

                    <p className="max-w-md text-base leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                        {SITE_DATA.cabinet.tagline}
                    </p>

                    <p className="max-w-lg text-base leading-relaxed italic" style={{ color: "var(--th-text-muted)" }}>
                        &ldquo;{SITE_DATA.cabinet.vision}&rdquo;
                    </p>

                    <p className="mt-4 text-sm" style={{ color: "var(--th-text-faint)" }}>
                        &copy; {new Date().getFullYear()} Himpunan Mahasiswa Sistem Informasi — Institut Teknologi Sepuluh Nopember
                    </p>
                </div>
            </div>
        </footer>
    );
}
