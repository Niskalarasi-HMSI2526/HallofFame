"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import StarField from "@/components/StarField";
import Hero from "@/components/sections/Hero";
import Filosofi from "@/components/sections/Filosofi";
import Leaders from "@/components/sections/Leaders";
import Performance from "@/components/sections/Performance";
import Achievements from "@/components/sections/Achievements";
import Departments from "@/components/sections/Departments";
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
        <Hero />
        <Filosofi />
        <Leaders />
        <Performance />
        <Achievements />
        <Departments />
      </main>
      <Footer />
    </>
  );
}
