"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export function SkillsSection() {
  const { t } = useLanguage()
  const skills = t.skills as any;

  return (
    <section id="skills" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Decor (Đổi sang màu sáng) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600"
          >
            {skills.title}
          </motion.h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {skills.desc}
          </p>
        </div>

        {/* Căn giữa Tabs */}
        <Tabs defaultValue="technical" className="w-full flex flex-col items-center">
          
          {/* TabsList */}
          <TabsList className="inline-flex h-auto p-1 bg-white rounded-full border border-slate-200 mb-12 shadow-sm">
            <TabsTrigger 
                value="domain" 
                className="px-6 md:px-8 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 hover:text-blue-600 transition-all"
            >
              Domain
            </TabsTrigger>
            <TabsTrigger 
                value="technical" 
                className="px-6 md:px-8 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 hover:text-blue-600 transition-all"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger 
                value="soft" 
                className="px-6 md:px-8 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-500 hover:text-blue-600 transition-all"
            >
              Soft
            </TabsTrigger>
          </TabsList>

          {/* 1. DOMAIN KNOWLEDGE TAB */}
          <TabsContent value="domain" className="w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-2">
                {skills.domain.map((item: any, i: number) => (
                  <Card key={i} className="bg-white border-l-[6px] border-l-emerald-500 border-y border-r border-slate-200 rounded-r-xl shadow-sm hover:shadow-md hover:bg-emerald-50/30 transition-all flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                        <Image 
                          src={item.icon || "/skills/healthcare.svg"} 
                          alt={item.name} 
                          width={40} 
                          height={40} 
                          className="w-10 h-10 object-contain"
                        />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.name}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </Card>
                ))}
            </motion.div>
          </TabsContent>

          {/* 2. TECHNICAL SKILLS TAB */}
          <TabsContent value="technical" className="w-full">
            <div className="text-center mb-8">
               <p className="text-sm text-slate-500 italic flex items-center justify-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                 {skills.note}
               </p>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 md:grid-cols-2">
              {skills.technical.map((category: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-6 text-slate-800 border-l-4 border-blue-600 pl-4">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {category.tools.map((tool: any, toolIdx: number) => (
                      <TooltipProvider key={toolIdx}>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <div className="aspect-square bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all cursor-pointer group p-3">
                              <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
                                  <Image 
                                    src={tool.icon} 
                                    alt={tool.name} 
                                    fill 
                                    className="object-contain"
                                  />
                              </div>
                              <span className="text-[11px] font-semibold text-slate-600 group-hover:text-blue-700 text-center px-1 leading-tight transition-colors">
                                  {tool.name}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-800 border-slate-700 text-white p-4 max-w-[240px] shadow-xl z-50">
                            <p className="font-bold text-blue-300 mb-2 text-sm uppercase tracking-wide">{tool.name}</p>
                            <p className="text-xs text-slate-300 leading-relaxed">{tool.desc}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>

          {/* 3. SOFT SKILLS TAB */}
          <TabsContent value="soft" className="w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-2">
                {skills.soft.map((item: any, i: number) => (
                  <Card key={i} className="bg-white border-l-[6px] border-l-orange-500 border-y border-r border-slate-200 rounded-r-xl shadow-sm hover:shadow-md hover:bg-orange-50/30 transition-all flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 bg-orange-50 p-3 rounded-lg border border-orange-100">
                        <Image 
                          src={item.icon || "/skills/leadership.svg"} 
                          alt={item.name} 
                          width={40} 
                          height={40} 
                          className="w-10 h-10 object-contain"
                        />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-600 mb-2">{item.name}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </Card>
                ))}
            </motion.div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}