"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface GaugeChartProps {
    value: number;        // 0-100
    size?: number;        // px
    strokeWidth?: number;
    color?: string;       // hex color
    label?: string;
    showValue?: boolean;
    animated?: boolean;
}

export default function GaugeChart({
    value,
    size = 140,
    strokeWidth = 10,
    color = "#562FCC",
    label,
    showValue = true,
    animated = true,
}: GaugeChartProps) {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [animatedValue, setAnimatedValue] = useState(animated ? 0 : value);

    useEffect(() => {
        if (!animated || !isInView) return;
        const startTime = Date.now();
        const duration = 1800;
        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimatedValue(eased * value);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [isInView, value, animated]);

    const currentValue = animated ? animatedValue : value;
    const radius = (size - strokeWidth) / 2;
    const cx = size / 2;
    const cy = size / 2;

    // Semicircle arc (180 degrees, from left to right — bottom half is open)
    const circumference = Math.PI * radius;
    const offset = circumference - (currentValue / 100) * circumference;

    // Create arc path for background and progress
    const arcPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`;

    // Needle angle: -180 (left) to 0 (right)
    const needleAngle = -180 + (currentValue / 100) * 180;

    // Colored ticks for the speedometer effect
    const tickCount = 20;
    const ticks = Array.from({ length: tickCount + 1 }, (_, i) => {
        const angle = -180 + (i / tickCount) * 180;
        const rad = (angle * Math.PI) / 180;
        const innerR = radius - strokeWidth / 2 - 4;
        const outerR = radius + strokeWidth / 2 + 2;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        const isMajor = i % 5 === 0;
        return { x1, y1, x2, y2, isMajor, pct: (i / tickCount) * 100 };
    });

    return (
        <div className="flex flex-col items-center gap-1">
            <svg ref={ref} width={size} height={size * 0.62} viewBox={`0 0 ${size} ${size * 0.62}`} className="overflow-visible">
                {/* Tick marks */}
                {ticks.map((tick, i) => (
                    <line
                        key={i}
                        x1={tick.x1}
                        y1={tick.y1}
                        x2={tick.x2}
                        y2={tick.y2}
                        stroke={tick.pct <= currentValue ? color : "var(--th-text-faint)"}
                        strokeWidth={tick.isMajor ? 2 : 1}
                        opacity={tick.pct <= currentValue ? 0.8 : 0.2}
                        strokeLinecap="round"
                    />
                ))}

                {/* Background arc */}
                <path
                    d={arcPath}
                    fill="none"
                    stroke="var(--th-text-faint)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    opacity={0.15}
                />

                {/* Progress arc */}
                <path
                    d={arcPath}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        filter: `drop-shadow(0 0 6px ${color}40)`,
                        transition: animated ? undefined : "stroke-dashoffset 0.5s ease",
                    }}
                />

                {/* Needle */}
                <g transform={`rotate(${needleAngle} ${cx} ${cy})`}>
                    <line
                        x1={cx}
                        y1={cy}
                        x2={cx + radius * 0.72}
                        y2={cy}
                        stroke={color}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                    />
                    <circle cx={cx} cy={cy} r={4} fill={color} />
                    <circle cx={cx} cy={cy} r={2} fill="var(--th-bg)" />
                </g>
            </svg>

            {/* Value */}
            {showValue && (
                <p className="text-2xl font-extrabold sm:text-3xl" style={{ color: "var(--th-text)" }}>
                    {currentValue.toFixed(2)}%
                </p>
            )}

            {/* Label */}
            {label && (
                <p className="text-sm font-semibold tracking-wider uppercase" style={{ color }}>
                    {label}
                </p>
            )}
        </div>
    );
}
