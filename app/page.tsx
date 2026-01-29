"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar" // Import Navbar
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-cert-section"
import { useLanguage } from "@/components/language-provider"
import { ProgressBar } from "@/components/progress-bar"
import { RightClickNav } from "@/components/right-click-nav"

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">
          {t.footer.text} <span className="font-bold text-white">Thai Trung Kien</span>
        </p>
        <p className="text-xs opacity-60">© 2026. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <ProgressBar />
      <Navbar /> {/* Thêm Navbar vào đây */}
      
      <RightClickNav>
        <main className="min-h-screen bg-white text-slate-900 font-sans relative">
          <div id="hero"><HeroSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="experience"><ExperienceSection /></div>
          <div id="skills"><SkillsSection /></div>
          <div id="projects"><ProjectsSection /></div>
          <div id="education"><EducationSection /></div>
          <Footer />
        </main>
      </RightClickNav>
    </LanguageProvider>
  )
}