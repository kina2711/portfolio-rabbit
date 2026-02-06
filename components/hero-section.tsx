"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-50 pt-20 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl z-10">
        <div className="flex flex-col items-center text-center space-y-6">
            
            {/* --- 1. AVATAR --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Thai Trung Kien"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* --- 2. TEXT --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
            >
                <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                    Data Analyst & Analytics Engineer
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                    {t.hero.title.replace("Hi, I'm ", "").replace("Chào, mình là ", "")}
                </h1>
                <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                    {t.hero.desc}
                </p>
            </motion.div>

            {/* --- 3. CONTACT ME BUTTON --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-2"
            >
                <Link href="https://calendly.com/kienthai2711/30min" target="_blank" rel="noopener noreferrer">
                    <Button 
                        size="lg" 
                        className="rounded-full px-8 h-12 bg-blue-900 hover:bg-blue-800 text-white font-medium text-lg transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
                    >
                        {t.nav.contact} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </motion.div>

            {/* --- 4. SOCIAL ICONS --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-6 justify-center items-center pt-4"
            >
                <SocialLink 
                  href="https://github.com/kina2711" 
                  src="/skills/github.svg" 
                  alt="GitHub" 
                />
                
                <SocialLink 
                  href="https://linkedin.com/in/your-linkedin-id" 
                  src="/skills/LinkedIn.svg" 
                  alt="LinkedIn" 
                />
                
                <SocialLink 
                  href="mailto:kienthai2711@gmail.com" 
                  src="/skills/gmail.svg" 
                  alt="Email" 
                />
            </motion.div>

        </div>
      </div>
    </section>
  )
}

// Component Social Link
function SocialLink({ href, src, alt }: { href: string; src: string; alt: string }) {
    return (
        <Link 
          href={href} 
          target="_blank" 
          className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex items-center justify-center w-14 h-14"
        >
            <div className="relative w-7 h-7">
              <Image 
                src={src} 
                alt={alt} 
                fill 
                className="object-contain" 
              />
            </div>
        </Link>
    )
}