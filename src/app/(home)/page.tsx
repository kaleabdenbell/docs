"use client";
import { Navbar } from "@/components/Landing/Navbar";
import { HeroSection } from "@/components/Landing/Hero";
import { FeaturesSection } from "@/components/Landing/FeaturesSection";
import { CTASection } from "@/components/Landing/CTA";
import { Footer } from "@/components/Landing/Footer";
import { CollaborationSection } from "@/components/Landing/CollaborationSection";
import { LanguageProvider } from "@/hooks/use-language";

const Home = () => {
  return (
    <div className="min-h-screen">
      <LanguageProvider>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CollaborationSection />
      <CTASection />
      <Footer />
      </LanguageProvider>
    </div>
  );
};

export default Home;