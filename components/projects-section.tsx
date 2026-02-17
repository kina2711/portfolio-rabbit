"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  const allProjects = t.projects.list as any[];

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.tags.some((tag: string) => tag.includes(activeCategory) || (activeCategory === "Product" && (tag.includes("Banking") || tag.includes("Product")))));

  return (
    <section id="projects" className="py-24 bg-slate-50 min-h-screen relative">
      {/* Background */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-12 bg-amber-500 rounded-full"></span>
                <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">My Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.projects.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl">{t.projects.desc}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR FILTER */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-white sticky top-24">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Filter By</div>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-semibold transition-all duration-300",
                        isActive 
                          ? "bg-slate-900 text-amber-400 shadow-lg shadow-slate-900/20 transform translate-x-1" // Active: Nền đen chữ vàng
                          : "text-slate-500 hover:bg-amber-50 hover:text-amber-700"
                      )}
                    >
                      <div className={cn("p-2 rounded-xl transition-colors", isActive ? "bg-white/10 text-amber-400" : "bg-slate-100 text-slate-400")}>
                         <Icon className="w-4 h-4" />
                      </div>
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="flex-1">
            <motion.div layout className="grid gap-8 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.slug || index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/projects/${project.slug || '#'}`} className="block h-full group">
                      <div className="h-full bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-amber-100/50 hover:border-amber-200 transition-all duration-500 flex flex-col relative overflow-hidden">
                        
                        {/* Glow Effect on Hover */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Top Row: Icon + Tag */}
                        <div className="flex justify-between items-start mb-8 relative z-10">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-amber-500/30">
                             <FolderGit2 className="w-7 h-7" />
                          </div>
                          <div className="bg-slate-50 px-4 py-2 rounded-full text-xs font-bold text-slate-500 border border-slate-100 group-hover:bg-white group-hover:text-amber-600 transition-colors">
                            {project.tags[0]}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Bottom Metric Pill */}
                        <div className="mt-auto relative z-10">
                           <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-6 group-hover:scale-[1.02] transition-transform origin-left">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Result</span>
                              </div>
                              <p className="text-sm font-semibold text-white leading-snug">
                                {project.metrics}
                              </p>
                           </div>

                           <div className="flex items-center text-sm font-bold text-slate-900 group-hover:gap-2 transition-all">
                                See Case Study <ArrowRight className="w-4 h-4 ml-2 text-amber-500" />
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