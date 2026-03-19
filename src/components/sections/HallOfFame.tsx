"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/constants/data";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type GalleryItem = typeof GALLERY_ITEMS[0];

export default function HallOfFame() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openModal = (item: GalleryItem) => {
        setCurrentImage(0);
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setLightboxIndex(null);
    };

    return (
        <section id="gallery" className="section-padding">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-secondary uppercase sm:text-base">
                        The Memories
                    </p>
                    <h2
                        className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                        style={{ color: "var(--th-text)" }}
                    >
                        Hall of Fame
                    </h2>
                    <p
                        className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--th-text-muted)" }}
                    >
                        Key moments and milestones from Cabinet Niskalarasi&apos;s journey
                    </p>
                    <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
                    {GALLERY_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="glass-card glass-card-hover group flex cursor-pointer flex-col overflow-hidden rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
                            viewport={{ once: true }}
                            onClick={() => openModal(item)}
                        >
                            {/* Card Image Thumbnail */}
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={item.photos[0]}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {item.photos.length > 1 && (
                                    <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                                        + {item.photos.length - 1} photos
                                    </div>
                                )}
                            </div>

                            {/* Caption area - Title only! */}
                            <div className="flex flex-1 flex-col justify-center p-4 text-center sm:p-5">
                                <h3 className="text-sm font-bold sm:text-base" style={{ color: "var(--th-text)" }}>
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Detail Pop-up Modal ── */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 backdrop-blur-sm"
                            style={{ background: "var(--th-overlay)" }}
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl shadow-2xl"
                            style={{ background: "var(--th-card-hover)", border: "1px solid var(--th-border)" }}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between border-b px-5 py-4 backdrop-blur-xl sm:px-6" style={{ background: "var(--th-card)", borderColor: "var(--th-border)" }}>
                                <h3 className="text-lg font-bold sm:text-xl line-clamp-1" style={{ color: "var(--th-text)" }}>
                                    {selectedItem.title}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{ color: "var(--th-text-muted)", border: "1px solid var(--th-border)" }}
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
                                {/* Carousel */}
                                <div className="relative w-full overflow-hidden rounded-xl bg-black/5" style={{ aspectRatio: "16/9", border: "1px solid var(--th-border)" }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImage}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 cursor-pointer"
                                            onClick={() => setLightboxIndex(currentImage)}
                                        >
                                            <Image
                                                src={selectedItem.photos[currentImage]}
                                                alt={`${selectedItem.title} ${currentImage + 1}`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                            {/* Fullscreen hint */}
                                            <div className="absolute top-2 right-2 rounded-full bg-black/40 p-1.5 text-white/80 backdrop-blur-sm sm:top-3 sm:right-3 transition-opacity">
                                                <Maximize2 size={14} />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {selectedItem.photos.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setCurrentImage((prev) => (prev === 0 ? selectedItem.photos.length - 1 : prev - 1))}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={() => setCurrentImage((prev) => (prev + 1) % selectedItem.photos.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                                                {selectedItem.photos.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentImage(idx)}
                                                        className={`h-1.5 rounded-full transition-all ${currentImage === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="rounded-xl p-4 sm:p-5" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                    <h4 className="mb-2 text-sm font-bold tracking-wider uppercase" style={{ color: "var(--th-text-muted)" }}>
                                        Event Details
                                    </h4>
                                    <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--th-text-secondary)" }}>
                                        {selectedItem.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Lightbox Fullscreen Overlay ── */}
            <AnimatePresence>
                {lightboxIndex !== null && selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute top-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm sm:top-6 sm:left-6">
                            {lightboxIndex + 1} / {selectedItem.photos.length}
                        </div>

                        {selectedItem.photos.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev! === 0 ? selectedItem.photos.length - 1 : prev! - 1); }}
                                    className="absolute left-2 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 sm:left-6"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % selectedItem.photos.length); }}
                                    className="absolute right-2 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 sm:right-6"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            </>
                        )}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                className="relative max-h-[85vh] max-w-[90vw]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedItem.photos[lightboxIndex]}
                                    alt={`${selectedItem.title} ${lightboxIndex + 1}`}
                                    width={1400}
                                    height={900}
                                    className="max-h-[85vh] w-auto rounded-lg object-contain"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
