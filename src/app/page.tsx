"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import StarField from "@/components/StarField";
import Hero from "@/components/sections/Hero";
import VideoProfile from "@/components/sections/VideoProfile";
import ProofSection from "@/components/sections/ProofSection";
import TeamSection from "@/components/sections/TeamSection";
import HallOfFame from "@/components/sections/HallOfFame";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <StarField />
      <Navbar />
      <ThemeToggle />
      <main>
        {/* 1. The Hook */}
        <Hero />

        {/* 2. The Journey */}
        <VideoProfile />

        {/* 3. The Proof */}
        <ProofSection />

        {/* 5. The Team (BPH + Departments) */}
        <TeamSection />

        {/* 6. The Memories */}
        <HallOfFame />
      </main>
      <Footer />
    </>
  );
}
