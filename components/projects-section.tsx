"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderGit2, ArrowRight, LayoutGrid, Database, LineChart, Stethoscope, Gamepad2, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "All", label: "All Projects", icon: LayoutGrid },
  { id: "Healthcare", label: "Healthcare", icon: Stethoscope },
  { id: "Data Engineering", label: "Data Engineering", icon: Database },
  { id: "Marketing", label: "Marketing Analytics", icon: LineChart },
  { id: "Game", label: "Game Analytics", icon: Gamepad2 },
  { id: "Product", label: "Product & Banking", icon: ShoppingCart },
]

export function ProjectsSection() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  
  // Lấy danh sách dự án và ép kiểu
  const allProjects = t.projects.list as any[];

  // Lọc dự án
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.tags.some((tag: string) => tag.includes(activeCategory) || (activeCategory === "Product" && (tag.includes("Banking") || tag.includes("Product")))));

  return (
    <section id="projects" className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t.projects.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl">{t.projects.desc}</p>
        </div>

        {/* Layout chính */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. SIDEBAR FILTER */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 sticky top-24">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Categories</div>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200",
                        isActive 
                          ? "bg-slate-900 text-white shadow-md transform scale-105" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <Icon className={cn("w-4 h-4", isActive ? "text-slate-200" : "text-slate-400")} />
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 2. PROJECT GRID */}
          <div className="flex-1">
            <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.slug || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/projects/${project.slug || '#'}`} className="block h-full group">
                      <div className="h-full bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col relative overflow-hidden">
                        
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[4rem] -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity" />

                        {/* Card Header */}
                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                             <FolderGit2 className="w-6 h-6" />
                          </div>
                          <div className="bg-slate-50 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-100 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                            {project.tags[0]}
                          </div>
                        </div>

                        {/* Card Title & Desc */}
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Metrics "Pill" */}
                        <div className="mt-auto">
                           <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-100/50 mb-5">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Impact</span>
                              </div>
                              <p className="text-sm font-semibold text-emerald-900 leading-snug">
                                {project.metrics}
                              </p>
                           </div>

                           {/* Footer Action */}
                           <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                              <div className="flex -space-x-2">
                                {[1,2].map(i => (
                                  <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-400">
                                    {i === 1 ? 'ME' : 'AI'}
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center text-sm font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                                View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                              </div>
                           </div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}