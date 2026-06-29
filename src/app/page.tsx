import React from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import AboutSection from "@/components/sections/AboutSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import PlatformsSection from "@/components/sections/PlatformsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <AboutSection />
      <PlatformsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
