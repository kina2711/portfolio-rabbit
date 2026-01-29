"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
} from "@/components/ui/context-menu"
import { useLanguage } from "@/components/language-provider"
import { ArrowUpRight } from "lucide-react"

export function RightClickNav({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 bg-white/95 backdrop-blur-md border-slate-200 shadow-xl">
        <ContextMenuLabel className="text-blue-600 font-bold">{t.nav.toc.title}</ContextMenuLabel>
        <ContextMenuSeparator />
        {t.nav.toc.items.map((item, index) => (
          <ContextMenuItem 
            key={index} 
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="ml-auto h-3 w-3 opacity-50" />
          </ContextMenuItem>
        ))}
        <ContextMenuSeparator />
        <div className="px-2 py-1.5 text-xs text-slate-400 text-center italic">
          Right click to navigate
        </div>
      </ContextMenuContent>
    </ContextMenu>
  )
}