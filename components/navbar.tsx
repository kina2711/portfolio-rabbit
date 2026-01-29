"use client"

import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: t.nav.toc.items[1].label },
    { href: "#experience", label: t.nav.toc.items[2].label },
    { href: "#skills", label: t.nav.toc.items[3].label },
    { href: "#projects", label: t.nav.toc.items[4].label },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex h-full items-center justify-between">
        
        {/* --- 1. LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group" onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-600 transition-colors shadow-sm">
            <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-cover"
                priority
            />
          </div>
        </Link>

        {/* --- 2. DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Nút đổi ngôn ngữ */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="font-medium text-slate-600 hover:text-blue-600 w-12"
          >
            {language === "en" ? "VN" : "EN"}
          </Button>
        </nav>

        {/* --- 3. MOBILE NAV --- */}
        <div className="md:hidden flex items-center gap-4">
           <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="font-medium text-slate-600"
          >
            {language === "en" ? "VN" : "EN"}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-slate-600 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}