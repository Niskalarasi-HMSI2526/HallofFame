"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initial load handler
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const attemptPlay = () => {
            if (audio.paused) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                            setHasInteracted(true);
                            removeListeners();
                        })
                        .catch(() => {
                            // Autoplay blocked by browser (normal behavior)
                            setIsPlaying(false);
                        });
                }
            }
        };

        const removeListeners = () => {
            document.removeEventListener("click", attemptPlay);
            document.removeEventListener("scroll", attemptPlay);
            document.removeEventListener("touchstart", attemptPlay);
            document.removeEventListener("keydown", attemptPlay);
        };

        // Attach listeners to catch the first user interaction
        document.addEventListener("click", attemptPlay, { passive: true });
        document.addEventListener("scroll", attemptPlay, { passive: true });
        document.addEventListener("touchstart", attemptPlay, { passive: true });
        document.addEventListener("keydown", attemptPlay, { passive: true });

        // Try to autoplay once on mount immediately
        attemptPlay();

        return removeListeners;
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        setHasInteracted(true);

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play()
                .then(() => setIsPlaying(true))
                .catch(err => console.error("Error playing audio:", err));
        }
    };

    return (
        <div
            className="fixed bottom-6 left-6 z-[100]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <audio
                ref={audioRef}
                src="/audio/bgm.mp3"
                loop
                preload="auto"
                autoPlay
            />

            <div className="relative flex items-center">
                {/* Floating Tooltip */}
                <AnimatePresence>
                    {(isHovered || (!hasInteracted && !isPlaying)) && (
                        <motion.div
                            initial={{ opacity: 0, x: -10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0.9 }}
                            className="absolute left-[calc(100%+12px)] whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-md sm:text-sm"
                            style={{
                                background: "var(--th-card)",
                                border: "1px solid var(--th-border)",
                                color: "var(--th-text)"
                            }}
                        >
                            {isPlaying ? "Music Playing" : "Play BGM"}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Play Button */}
                <motion.button
                    onClick={togglePlay}
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full shadow-2xl backdrop-blur-md transition-all sm:h-14 sm:w-14"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: "var(--th-card-hover)",
                        border: "1px solid var(--th-border)",
                        color: isPlaying ? "var(--th-text)" : "var(--th-text-muted)"
                    }}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                    {/* Rotating Background Glow when playing */}
                    {isPlaying && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-secondary/20"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    )}

                    {/* Spinning ring when playing */}
                    {isPlaying && (
                        <motion.div
                            className="absolute inset-0 rounded-full border border-secondary/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                    )}

                    <div className="relative z-10 flex items-center justify-center">
                        {isPlaying ? (
                            <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
                        )}
                    </div>
                </motion.button>
            </div>
        </div>
    );
}
