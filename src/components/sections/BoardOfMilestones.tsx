"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Users, Target, Briefcase, Zap, Globe, ShieldCheck } from "lucide-react";
import GaugeChart from "@/components/GaugeChart";

export const PORTFOLIO_DATA = {
    header: {
        title: "Board of Milestones",
        subtitle: "Integrated Performance & Impact Portfolio of HMSI Niskalarasi Cabinet."
    },
    vision_mission: {
        vision: "To realize HMSI as a progressive, professional, and family-oriented platform for student development.",
        missions: [
            { id: "M1", title: "Progressive", desc: "Escalating Information Systems students' resources to grow and establish a platform for academic and non-academic achievement.", achievement: "96.71%" },
            { id: "M2", title: "Solidarity", desc: "Fostering a caring sense of solidarity that positively impacts the environment, upholds students' social values, patriotism, and harmony.", achievement: "100%" },
            { id: "M3", title: "Professional", desc: "Initiating the development of a professional and highly dedicated organization that contributes to departments and the broader community in the field of information technology.", achievement: "100%" }
        ]
    },
    bento_cards: [
        {
            id: "executive_summary",
            category: "1. Executive Summary",
            previewTitle: "Cabinet Performance Index",
            previewNumber: "96.71%",
            previewSubtitle: "Overall IPMS Score",
            size: "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2",
            icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
            image: "", // Add your image path here, e.g., "/images/milestones/executive.jpg"
            modalContent: {
                heading: "The Executive Summary (Numbers Speak Louder)",
                body: "In this section, we showcase the true power of the management scale we handled.\n- **Total Human Capital Managed:** Led and supervised a dynamic team comprising **150+ talented functionaries**.\n- **Overall Organizational KPI:** Successfully achieved an average work program completion rate of **96.71%** across all operational lines.\n- **Revenue Generation:** Managed an independent business cycle with total profit reaching **Rp8.000.000** (achieving **133%** of the initial target).\n- **Digital Branding Authority:** Awarded **1st Place at Media Excellence Summit** and recognized as the **Most Published Student Organization**, establishing HMSI as the highest standard for digital publication within the university.\n- **Public Reach & Growth:** Successfully increased digital content engagement by **800%** above target through social campaigns and profile features."
            }
        },
        {
            id: "corporate_mapping",
            category: "2. Corporate Mapping",
            previewTitle: "The Core Engine",
            previewNumber: "8 + 1",
            previewSubtitle: "Depts & BPH",
            size: "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1 lg:col-start-3",
            icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
            image: "",
            modalContent: {
                heading: "Corporate-Style Organizational Mapping",
                body: "Shifting the perspective on HMSI's structure into integrated corporate functions:\n- **Executive Leadership (C-Suite):** President (Strategic Vision), VP (Operations), Gen. Treas (Finance), Gen. Sec (Regulations/SOP).\n- **Business Development & Revenue (ES):** Responsible for the organization's *retail operations* and *revenue streams*.\n- **Corporate Communications & Creative Agency (IM):** Manages *branding*, multimedia, and *social media presence*.\n- **Talent Management & People Ops (HRD):** Focuses on *onboarding*, performance evaluation, and *career preparation*.\n- **Strategic Partnerships & External Relations (EA):** Manages B2B relationships with industry, alumni, and external institutions.\n- **Research, Innovation, & Technical Training (RnD):** The center for technical *hard-skill* development and scientific paper production.\n- **Corporate Social Responsibility (CSR) & Community Engagement (SocDev):** Manages community service programs and social impact.\n- **Student Affairs & Customer Success (SWF):** Ensures the welfare, advocacy, and satisfaction of our main constituents.\n- **Workplace Culture & Employee Engagement (IA):** Builds an inclusive, harmonious, and productive work environment."
            }
        },
        {
            id: "star_revenue",
            category: "3. Revenue & Operational Scale",
            previewTitle: "IS Store",
            previewNumber: "Rp8M",
            previewSubtitle: "Financial Independence",
            size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
            icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
            image: "",
            modalContent: {
                heading: "STAR Method: Revenue & Operational Scale (ES & VP)",
                body: "**Situation/Task:** The organization required strong independent funding to support large-scale programs without relying entirely on campus bureaucracy.\n- **Action:** Optimized the **IS Store** business unit by increasing restock frequency up to **4x a month** and diversifying products. Managerially, the Vice President executed strict control over the business department's KPIs to ensure targets were met.\n- **Result:** Generated a total profit of **Rp8.000.000**, surpassing the target by **133%**, and built a disciplined internal supply chain system."
            }
        },
        {
            id: "star_virality",
            category: "4. Digital Virality",
            previewTitle: "National Brand",
            previewNumber: "1st",
            previewSubtitle: "Brand Excellence",
            size: "col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1",
            icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
            image: "",
            modalContent: {
                heading: "STAR Method: National Brand Excellence (IM & SocDev)",
                body: "**Situation/Task:** Elevate the organization's visibility and educate the public through high-quality digital content.\n- **Action:** Implemented an *omnichannel* strategy across YouTube, Instagram, and TikTok, and participated in media excellence competitions to validate quality.\n- **Result:** Achieved **1st Place at the National Level** in student organization publication and hit a content view count reaching **10,293 views** (shattering the initial target of 500 views)."
            }
        },
        {
            id: "star_event",
            category: "5. External Validation",
            previewTitle: "B2B Synergy",
            previewNumber: "310%",
            previewSubtitle: "Strategic Networking",
            size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 lg:col-start-4",
            icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
            image: "",
            modalContent: {
                heading: "External Validation & Strategic Networking (EA & RnD)",
                body: "Proving that this organization has strong connections with the professional world:\n- **Corporate Partners:** Successfully conducted *B2B pitching* and industry visits with participant turnout skyrocketing to **310% of the target**.\n- **Scientific Recognition:** The RnD Department successfully catalyzed the production of **16 scientific papers**, demonstrating the organization's intellectual quality well above average standards.\n- **Stakeholder Trust:** Maintained Student Service Satisfaction (CSAT) levels at **96-99%**, proving high trust from constituents."
            }
        },
        {
            id: "compliance",
            category: "6. Audit & Compliance",
            previewTitle: "Financial Integrity",
            previewNumber: "100%",
            previewSubtitle: "Internal Control",
            size: "col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 lg:col-start-1",
            icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
            image: "",
            modalContent: {
                heading: "Governance, Audit, & Compliance (GenTre & GenSec)",
                body: "Showcasing that HMSI's internal management is highly organized and transparent:\n- **Financial Integrity:** Achieved a financial administration compliance rate (**SPJ**) of **100%** and periodically published financial reports to the public via 'HMSI Treasure'.\n- **Internal Control:** Managed the organizational asset database with a security level of **100% (zero loss/damage)** and ensured all correspondence was digitally documented in real-time.\n- **Performance Tracking:** Implemented a **'Functionary Report Card'** system to quantitatively evaluate **150+ members**, producing accurate data for leadership promotion."
            }
        },
        {
            id: "legacy",
            category: "7. Sustainability",
            previewTitle: "Sustainable Systems",
            previewNumber: "Legacy",
            previewSubtitle: "Proof of Good Management",
            size: "col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1",
            icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8" />,
            color: "bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400",
            image: "",
            modalContent: {
                heading: "Legacy & Sustainability",
                body: "HMSI Niskalarasi is not just about a single term; it is about sustainability:\n- **Standard Operating Procedures (SOP):** Left a legacy of comprehensive **HMSI SOPs** for administration, finance, and inventory management to guide the next cabinet.\n- **Leadership Pipeline:** Successfully conducted succession planning through the **'EB Internship'** and **'Niskalarasi Relay'** programs, ensuring future leaders already possess standard skill-sets.\n- **Institutional Memory:** Built the **HMSI Docs** system and the **EA-Connect** alumni database reaching **60% data completeness**, a valuable asset for long-term organizational development."
            }
        }
    ]
};

// Formatting helper for modal body text (handles bullets and bolding)
const formatModalText = (text: string) => {
    // Split into paragraphs and lists
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];

    lines.forEach((line, i) => {
        // Handle bolding markers
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const formattedLine = parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="font-semibold" style={{ color: "var(--th-text)" }}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });

        // Group list items
        if (line.trim().startsWith('- ')) {
            currentList.push(
                <li key={`li-${i}`} className="ml-4 pl-1" style={{ color: "var(--th-text-secondary)" }}>
                    <span className="inline-block leading-relaxed">{formattedLine.slice(1)}</span>
                </li>
            );
        } else {
            // Push existing list if we have one
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`ul-${i}`} className="mb-4 mt-2 list-outside list-disc space-y-2 pl-4">
                        {currentList}
                    </ul>
                );
                currentList = [];
            }

            // Push the normal paragraph (ignore empty lines)
            if (line.trim()) {
                elements.push(
                    <p key={`p-${i}`} className="mb-3 leading-relaxed" style={{ color: "var(--th-text-secondary)" }}>
                        {formattedLine}
                    </p>
                );
            }
        }
    });

    // Cleanup any trailing list
    if (currentList.length > 0) {
        elements.push(
            <ul key={`ul-end`} className="mb-4 mt-2 list-outside list-disc space-y-2 pl-4">
                {currentList}
            </ul>
        );
    }

    return elements;
};

export default function BoardOfMilestones() {
    const [selectedCard, setSelectedCard] = useState<typeof PORTFOLIO_DATA.bento_cards[0] | null>(null);

    return (
        <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "transparent" }}>
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header & Vision */}
                <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div className="max-w-3xl">
                        <div
                            className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                            style={{ background: "var(--th-card)", border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                        >
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Performance & Achievements
                        </div>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl" style={{ color: "var(--th-text)" }}>
                            {PORTFOLIO_DATA.header.title}
                        </h2>
                        <p className="text-lg sm:text-xl" style={{ color: "var(--th-text-secondary)" }}>
                            {PORTFOLIO_DATA.header.subtitle}
                        </p>
                    </div>

                    {/* Gauge Chart Metric */}
                    <div className="flex-shrink-0 md:pl-12">
                        <GaugeChart
                            value={96.71}
                            label="IPMS SCORE"
                            color="#10b981"
                            size={160}
                        />
                    </div>
                </div>

                {/* Vision & Missions Grid */}
                <div className="mb-16 grid gap-6 lg:grid-cols-4">
                    <div
                        className="rounded-2xl p-6 shadow-sm lg:col-span-1"
                        style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                    >
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-secondary">Our Vision</h3>
                        <p className="text-lg font-medium leading-relaxed" style={{ color: "var(--th-text)" }}>
                            "{PORTFOLIO_DATA.vision_mission.vision}"
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3 lg:col-span-3">
                        {PORTFOLIO_DATA.vision_mission.missions.map((mission) => (
                            <div
                                key={mission.id}
                                className="flex flex-col rounded-2xl p-6 shadow-sm"
                                style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold" style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}>
                                        {mission.id}
                                    </span>
                                    <span className="font-mono text-xl font-bold text-emerald-500">
                                        {mission.achievement}
                                    </span>
                                </div>
                                <h4 className="mb-2 text-lg font-bold" style={{ color: "var(--th-text)" }}>{mission.title}</h4>
                                <p className="flex-1 text-sm" style={{ color: "var(--th-text-secondary)" }}>{mission.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
                    {PORTFOLIO_DATA.bento_cards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            onClick={() => setSelectedCard(card)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 0.98 }}
                            className={`group relative cursor-pointer overflow-hidden rounded-3xl p-8 shadow-sm transition-all hover:shadow-md ${card.size} flex flex-col justify-between`}
                            style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                        >

                            {card.image && (
                                <div className="absolute inset-0 z-0 overflow-hidden flex items-end justify-end">
                                    <div className="relative h-[80%] w-[80%]">
                                        <Image
                                            src={card.image}
                                            alt={card.previewTitle}
                                            fill
                                            className="object-contain object-bottom right-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Gradient to ensure text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--th-card)] via-[var(--th-card)]/80 to-transparent"></div>
                                </div>
                            )}

                            <div className="relative z-10 flex items-start justify-between">
                                <span
                                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md"
                                    style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)", color: "var(--th-text-muted)" }}
                                >
                                    {card.category}
                                </span>
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-md shadow-sm`} style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}>
                                    {card.icon}
                                </div>
                            </div>

                            <div className="relative z-10 mt-6">
                                <p className="mb-1 text-sm font-medium uppercase tracking-wider text-secondary">
                                    {card.previewSubtitle}
                                </p>
                                <h3 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-sm" style={{ color: "var(--th-text)" }}>
                                    {card.previewNumber}
                                </h3>
                                <p className="text-lg font-medium drop-shadow-sm" style={{ color: "var(--th-text-secondary)" }}>
                                    {card.previewTitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Modal Pop-up (Shadcn Dialog style) */}
            <AnimatePresence>
                {selectedCard && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="fixed inset-0 z-[100] cursor-pointer bg-slate-900/40 backdrop-blur-sm dark:bg-black/60"
                            aria-hidden="true"
                        />

                        <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                                style={{ background: "var(--th-card)", border: "1px solid var(--th-border)" }}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between border-b px-6 py-4 sticky top-0 z-20 backdrop-blur-md" style={{ borderColor: "var(--th-border)", background: "var(--th-card)" }}>
                                    <span
                                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                                        style={{ background: "var(--th-bg-alt)", color: "var(--th-text-muted)" }}
                                    >
                                        {selectedCard.category}
                                    </span>
                                    <button
                                        onClick={() => setSelectedCard(null)}
                                        className="rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                        style={{ color: "var(--th-text-muted)" }}
                                    >
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>

                                {/* Modal Content Scrollable Area */}
                                <div className="overflow-y-auto">
                                    {/* Photo in Modal */}
                                    {selectedCard.image && (
                                        <div className="relative h-64 sm:h-80 w-full bg-black/5 dark:bg-white/5 border-b flex items-center justify-center p-6" style={{ borderColor: "var(--th-border)" }}>
                                            <div className="relative w-full h-full max-w-md">
                                                <Image
                                                    src={selectedCard.image}
                                                    alt={selectedCard.previewTitle}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                                        <h3 className="mb-2 text-5xl font-extrabold tracking-tight sm:text-6xl" style={{ color: "var(--th-text)" }}>
                                            {selectedCard.previewNumber}
                                        </h3>
                                        <p className="mb-8 text-xl font-medium" style={{ color: "var(--th-text-secondary)" }}>
                                            {selectedCard.previewTitle}
                                        </p>

                                        <div className="rounded-2xl p-6" style={{ background: "var(--th-bg-alt)", border: "1px solid var(--th-border)" }}>
                                            <h4 className="mb-4 text-xl font-bold" style={{ color: "var(--th-text)" }}>
                                                {selectedCard.modalContent.heading}
                                            </h4>

                                            <div className="prose max-w-none">
                                                {formatModalText(selectedCard.modalContent.body)}
                                            </div>

                                            {(selectedCard.modalContent as any).list && (
                                                <ul className="mt-4 space-y-3">
                                                    {(selectedCard.modalContent as any).list.map((item: string, idx: number) => {
                                                        const [boldPart, rest] = item.split(' - ');
                                                        return (
                                                            <li key={idx} className="flex gap-3" style={{ color: "var(--th-text-secondary)" }}>
                                                                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                                                <span>
                                                                    <strong className="font-semibold" style={{ color: "var(--th-text)" }}>{boldPart}</strong>
                                                                    {rest && ` - ${rest}`}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
