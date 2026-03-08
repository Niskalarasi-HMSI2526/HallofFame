"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";

// ===== Particle definition =====
interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
    speed: number;
    twinkleSpeed: number;
    twinkleOffset: number;
    vx: number;
    vy: number;
    rotation: number;
    rotSpeed: number;
    layer: number; // 0=back, 1=mid, 2=front (parallax)
}

// ===== Draw a 5-pointed star shape =====
function drawStarShape(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
    const spikes = 5;
    const outerR = size;
    const innerR = size * 0.4;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (Math.PI / spikes) * i - Math.PI / 2;
        ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    }
    ctx.closePath();
}

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const scrollRef = useRef(0);
    const particlesRef = useRef<Particle[]>([]);
    const linesRef = useRef<[number, number][]>([]);
    const themeRef = useRef(theme);
    themeRef.current = theme;

    // Create particles
    const initParticles = useCallback((w: number, h: number) => {
        const count = theme === "dark"
            ? Math.min(Math.floor((w * h) / 6000), 200)
            : Math.min(Math.floor(w / 18), 50);

        const particles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const layer = Math.random() < 0.2 ? 2 : Math.random() < 0.5 ? 1 : 0;
            const x = Math.random() * w;
            const y = Math.random() * h;
            particles.push({
                x, y, baseX: x, baseY: y,
                size: theme === "dark"
                    ? (Math.random() * 2 + 0.5) * (layer === 2 ? 1.5 : 1)
                    : Math.random() * 5 + 3,
                opacity: Math.random() * 0.5 + 0.2,
                speed: (Math.random() * 0.3 + 0.1) * (layer + 1) * 0.5,
                twinkleSpeed: Math.random() * 0.004 + 0.001,
                twinkleOffset: Math.random() * Math.PI * 2,
                vx: 0, vy: 0,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.015,
                layer,
            });
        }

        particlesRef.current = particles;

        // Constellation lines (dark mode only)
        if (theme === "dark") {
            const lines: [number, number][] = [];
            const bright = particles.filter((p) => p.size > 1.5);
            for (let i = 0; i < bright.length; i++) {
                for (let j = i + 1; j < bright.length; j++) {
                    const dx = bright[i].x - bright[j].x;
                    const dy = bright[i].y - bright[j].y;
                    if (Math.sqrt(dx * dx + dy * dy) < 150 && Math.random() > 0.5) {
                        lines.push([particles.indexOf(bright[i]), particles.indexOf(bright[j])]);
                    }
                }
            }
            linesRef.current = lines;
        }
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        initParticles(w, h);

        // Mouse tracking
        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const onMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };
        const onScroll = () => {
            scrollRef.current = window.scrollY;
        };
        const onResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            initParticles(w, h);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        let time = 0;

        const animate = () => {
            time++;
            ctx.clearRect(0, 0, w, h);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const scroll = scrollRef.current;
            const isDark = themeRef.current === "dark";
            const particles = particlesRef.current;

            if (isDark) {
                // ========== DARK MODE: Constellation Starfield ==========

                // Draw constellation lines
                for (const [a, b] of linesRef.current) {
                    const pA = particles[a];
                    const pB = particles[b];
                    if (!pA || !pB) continue;
                    const parallaxA = (scroll * pA.layer * 0.03) % h;
                    const parallaxB = (scroll * pB.layer * 0.03) % h;
                    const yA = ((pA.y - parallaxA) % h + h) % h;
                    const yB = ((pB.y - parallaxB) % h + h) % h;

                    // Skip lines that wrap
                    if (Math.abs(yA - yB) > 200) continue;

                    const alpha = 0.05 + Math.sin(time * 0.002 + a) * 0.03;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(130, 115, 216, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(pA.x, yA);
                    ctx.lineTo(pB.x, yB);
                    ctx.stroke();
                }

                // Draw stars
                for (const p of particles) {
                    const parallax = (scroll * p.layer * 0.03) % h;
                    const py = ((p.y - parallax) % h + h) % h;

                    // Mouse interaction — repulse nearby stars
                    const dmx = p.x - mx;
                    const dmy = py - my;
                    const dist = Math.sqrt(dmx * dmx + dmy * dmy);
                    const influence = 120;
                    let offX = 0, offY = 0;
                    if (dist < influence && dist > 0) {
                        const force = (1 - dist / influence) * 25;
                        offX = (dmx / dist) * force;
                        offY = (dmy / dist) * force;
                    }

                    const drawX = p.x + offX;
                    const drawY = py + offY;

                    const twinkle = Math.sin(time * p.twinkleSpeed + p.twinkleOffset);
                    const alpha = Math.max(0.1, p.opacity + twinkle * 0.3);
                    const glow = p.size + twinkle * 0.5;

                    // Glow
                    const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, glow * 4);
                    grad.addColorStop(0, `rgba(255, 207, 74, ${alpha * 0.25})`);
                    grad.addColorStop(1, "rgba(255, 207, 74, 0)");
                    ctx.beginPath();
                    ctx.fillStyle = grad;
                    ctx.arc(drawX, drawY, glow * 4, 0, Math.PI * 2);
                    ctx.fill();

                    // Core
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 245, 220, ${Math.min(alpha + 0.3, 1)})`;
                    ctx.arc(drawX, drawY, glow * 0.5, 0, Math.PI * 2);
                    ctx.fill();
                }

            } else {
                // ========== LIGHT MODE: Falling Star Snowflakes ==========

                for (const p of particles) {
                    // Fall
                    p.y += p.speed;
                    p.rotation += p.rotSpeed;

                    // Drift with scroll speed
                    const scrollSpeed = Math.abs(scroll - (p as any)._lastScroll || 0);
                    (p as any)._lastScroll = scroll;
                    p.x += Math.sin(time * 0.003 + p.twinkleOffset) * 0.3;
                    p.y += Math.min(scrollSpeed * 0.02, 1);

                    // Wrap
                    if (p.y > h + 20) { p.y = -20; p.x = Math.random() * w; }
                    if (p.x < -20) p.x = w + 20;
                    if (p.x > w + 20) p.x = -20;

                    // Mouse interaction — push away
                    const dmx = p.x - mx;
                    const dmy = p.y - my;
                    const dist = Math.sqrt(dmx * dmx + dmy * dmy);
                    let offX = 0, offY = 0;
                    if (dist < 100 && dist > 0) {
                        const force = (1 - dist / 100) * 15;
                        offX = (dmx / dist) * force;
                        offY = (dmy / dist) * force;
                    }

                    const drawX = p.x + offX;
                    const drawY = p.y + offY;

                    ctx.save();
                    ctx.translate(drawX, drawY);
                    ctx.rotate(p.rotation);
                    ctx.globalAlpha = p.opacity;

                    drawStarShape(ctx, 0, 0, p.size);
                    ctx.fillStyle = "rgba(130, 115, 216, 0.4)";
                    ctx.fill();
                    ctx.strokeStyle = "rgba(86, 47, 204, 0.12)";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();

                    ctx.restore();
                }
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [theme, initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[1]"
            aria-hidden="true"
        />
    );
}
