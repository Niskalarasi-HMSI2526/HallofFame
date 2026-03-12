"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_DATA, type Department } from "@/constants/data";
import DepartmentModal from "@/components/DepartmentModal";

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

function PhotoCarousel({ photos, deptName }: { photos: string[]; deptName: string }) {
    const [current, setCurrent] = useState(0);

    if (!photos || photos.length === 0) {
        return (
            <div className="flex h-28 w-full items-center justify-center rounded-xl sm:h-32" style={{ background: "var(--th-bg-alt)", border: "1px dashed var(--th-border)" }}>
                <p className="text-xs italic" style={{ color: "var(--th-text-faint)" }}>
                    No gallery photos yet
                </p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-28 w-full sm:h-32">
                <Image
                    src={photos[current]}
                    alt={`${deptName} gallery ${current + 1}`}
                    fill
                    className="object-cover"
                />
            </div>
            {photos.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {photos.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                            className="h-1.5 rounded-full transition-all"
                            style={{
                                width: i === current ? 16 : 6,
                                background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Departments() {
    const [selected, setSelected] = useState<Department | null>(null);
    const departments = SITE_DATA.departments.filter((d) => d.id !== "bph");

    return (
        <>
            <section id="departments" className="section-padding relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(130,115,216,0.06)_0%,transparent_60%)]" />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <motion.div
                        className="mb-14 text-center sm:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="text-base font-semibold tracking-[0.3em] text-secondary uppercase">
                            Our Departments
                        </p>
                        <h2
                            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                            style={{ color: "var(--th-text)" }}
                        >
                            The Team
                        </h2>
                        <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                        <p
                            className="mx-auto mt-5 max-w-md text-lg"
                            style={{ color: "var(--th-text-muted)" }}
                        >
                            Click on any department to see the full member roster
                        </p>
                    </motion.div>


                    <div className="grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
                        {departments.map((dept, i) => {
                            const head = dept.members.find(
                                (m) => m.role === "Head of Department"
                            );
                            const deputy = dept.members.find(
                                (m) => m.role === "Deputy Head of Department"
                            );
                            const deptColor = DEPT_COLORS[dept.id] || {
                                color: "#8273D8",
                                border: "border-[#8273D8]/30",
                                bg: "from-[#8273D8]/15 to-[#8273D8]/3",
                            };

                            return (
                                <motion.button
                                    key={dept.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`glass-card glass-card-hover relative cursor-pointer overflow-hidden border-2 ${deptColor.border} p-5 text-left sm:p-6`}
                                    onClick={() => setSelected(dept)}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${deptColor.bg}`}
                                    />
                                    <div className="relative z-10">
                                        {/* Top: Logo + Badge + Member Count */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                {/* Department Logo */}
                                                <div
                                                    className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl"
                                                    style={{
                                                        background: `${deptColor.color}18`,
                                                        border: `1.5px solid ${deptColor.color}30`,
                                                    }}
                                                >
                                                    {dept.logo ? (
                                                        <Image
                                                            src={dept.logo}
                                                            alt={dept.name}
                                                            width={28}
                                                            height={28}
                                                            className="h-7 w-7 object-contain"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = "none";
                                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                                                            }}
                                                        />
                                                    ) : null}
                                                    <span
                                                        className={`text-sm font-bold ${dept.logo ? "hidden" : ""}`}
                                                        style={{ color: deptColor.color }}
                                                    >
                                                        {dept.id.toUpperCase().slice(0, 2)}
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-sm font-bold tracking-wider uppercase"
                                                    style={{ color: deptColor.color }}
                                                >
                                                    {dept.id.toUpperCase()}
                                                </span>
                                            </div>
                                            <span
                                                className="text-sm font-medium"
                                                style={{ color: "var(--th-text-muted)" }}
                                            >
                                                {dept.members.length} members
                                            </span>
                                        </div>

                                        {/* Department Name */}
                                        <h3
                                            className="mt-4 text-lg font-bold leading-snug sm:text-xl"
                                            style={{ color: "var(--th-text)" }}
                                        >
                                            {dept.name}
                                        </h3>

                                        {/* Gallery Carousel */}
                                        <div className="mt-4">
                                            <PhotoCarousel
                                                photos={dept.gallery || []}
                                                deptName={dept.name}
                                            />
                                        </div>


                                        {/* Kadep */}
                                        {head && (
                                            <div className="mt-4 flex items-center gap-3">
                                                <div
                                                    className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
                                                    style={{
                                                        background: `${deptColor.color}18`,
                                                        border: `1.5px solid ${deptColor.color}30`,
                                                    }}
                                                >
                                                    {head.photo ? (
                                                        <Image
                                                            src={head.photo}
                                                            alt={head.name}
                                                            width={36}
                                                            height={36}
                                                            className="member-photo"
                                                        />
                                                    ) : (
                                                        <span
                                                            className="text-xs font-bold"
                                                            style={{ color: deptColor.color }}
                                                        >
                                                            {head.name.charAt(0)}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className="text-[10px] font-bold tracking-wider uppercase"
                                                        style={{ color: deptColor.color }}
                                                    >
                                                        Head
                                                    </p>
                                                    <p
                                                        className="truncate text-sm font-medium"
                                                        style={{ color: "var(--th-text-secondary)" }}
                                                    >
                                                        {head.name}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Wakadep */}
                                        {deputy && (
                                            <div className="mt-2.5 flex items-center gap-3">
                                                <div
                                                    className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
                                                    style={{
                                                        background: `${deptColor.color}10`,
                                                        border: `1.5px solid ${deptColor.color}20`,
                                                    }}
                                                >
                                                    {deputy.photo ? (
                                                        <Image
                                                            src={deputy.photo}
                                                            alt={deputy.name}
                                                            width={36}
                                                            height={36}
                                                            className="member-photo"
                                                        />
                                                    ) : (
                                                        <span
                                                            className="text-xs font-bold"
                                                            style={{ color: deptColor.color }}
                                                        >
                                                            {deputy.name.charAt(0)}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className="text-[10px] font-bold tracking-wider uppercase"
                                                        style={{ color: `${deptColor.color}AA` }}
                                                    >
                                                        Vice Head
                                                    </p>
                                                    <p
                                                        className="truncate text-sm font-medium"
                                                        style={{ color: "var(--th-text-secondary)" }}
                                                    >
                                                        {deputy.name}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-4 flex items-center justify-between">
                                            <span
                                                className="text-xs"
                                                style={{ color: "var(--th-text-faint)" }}
                                            >
                                                Tap for details →
                                            </span>
                                            <span
                                                className="text-base font-medium"
                                                style={{ color: `${deptColor.color}60` }}
                                            >
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    <motion.p
                        className="mt-12 text-center text-base"
                        style={{ color: "var(--th-text-muted)" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {SITE_DATA.departments.reduce(
                            (acc, d) => acc + d.members.length,
                            0
                        )}{" "}
                        members across {SITE_DATA.departments.length} divisions
                    </motion.p>
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
