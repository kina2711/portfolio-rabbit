"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
        className="text-slate-600 hover:text-blue-600 font-medium gap-2"
      >
        <Globe className="h-4 w-4" />
        {language === 'en' ? 'VN' : 'EN'}
      </Button>
  )
}