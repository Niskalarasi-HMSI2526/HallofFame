"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Star position follows the progress bar end
    const starLeft = useTransform(scaleX, [0, 1], ["0%", "100%"]);

    return (
        <div className="fixed top-0 left-0 right-0 z-[90]">
            {/* Progress bar */}
            <motion.div
                className="h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-gold-light"
                style={{ scaleX }}
            />

            {/* Yellow star indicator */}
            <motion.div
                className="absolute top-[-6px]"
                style={{ left: starLeft, x: "-50%" }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    <Star
                        size={16}
                        fill="#FFCF4A"
                        color="#D5AC3C"
                        strokeWidth={1.5}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
