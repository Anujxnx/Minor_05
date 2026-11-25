import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { HeroSection } from '../components/landing/HeroSection'
import { AboutSection } from '../components/landing/AboutSection'
import { HowItWorksSection } from '../components/landing/HowItWorksSection'
import { FeaturesSection } from '../components/landing/FeaturesSection'
import { CtaSection } from '../components/landing/CtaSection'
import { Footer } from '../components/layout/Footer'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F2] selection:bg-[#800020] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
