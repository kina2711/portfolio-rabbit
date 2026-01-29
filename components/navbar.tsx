"use client"

import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Globe, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Hiệu ứng đổi màu nền khi cuộn trang
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
    // Đóng sheet trên mobile khi click
    const element = document.querySelector(href)
    if (element) {
      e.preventDefault()
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  // Component Nút chọn ngôn ngữ
  const LanguageDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 font-medium text-slate-600 hover:text-blue-600">
          <Globe className="h-4 w-4" />
          {language === "en" ? "ENG" : "VN"}
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
          ᴇɴ English (ENG)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("vi")} className="cursor-pointer">
          🇻🇳 Tiếng Việt (VN)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3"
          : "bg-white/50 backdrop-blur-sm border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex h-full items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group" onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-600 transition-colors shadow-sm bg-white">
            <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-cover"
                priority
            />
          </div>
        </Link>

        {/* --- DESKTOP NAV --- */}
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
          
          {/* Nút đổi ngôn ngữ dạng Dropdown */}
          <div className="pl-4 border-l border-slate-200">
             <LanguageDropdown />
          </div>
        </nav>

        {/* --- MOBILE NAV --- */}
        <div className="md:hidden flex items-center gap-2">
          {/* Nút đổi ngôn ngữ trên Mobile */}
          <LanguageDropdown />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* Thêm Title ẩn */}
              <SheetTitle className="hidden">Navigation Menu</SheetTitle>

              <div className="flex flex-col h-full">
                {/* Logo trong menu mobile */}
                <div className="py-6 border-b mb-6">
                    <span className="font-bold text-xl text-slate-900">Menu</span>
                </div>

                {/* MENU LINKS */}
                <nav className="flex flex-col gap-6 items-start pl-4"> 
                  {/* items-start: Căn trái | pl-4: Thụt vào 1 tab so với lề */}
                  
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-lg font-medium text-slate-600 hover:text-blue-600 flex items-center gap-3 w-full"
                    >
                      {/* Thêm dấu gạch nhỏ trang trí */}
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}