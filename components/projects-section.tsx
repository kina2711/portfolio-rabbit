"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FolderGit2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function ProjectsSection() {
  const { t } = useLanguage()
  
  // Ép kiểu mảng dự án thành any[] để TypeScript không báo lỗi khi gọi .slug
  const projects = t.projects.list as any[];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration nhẹ */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200/[0.04] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.projects.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.projects.desc}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-full"
            >
              {/* Bao quanh Card bằng Link tới slug */}
              <Link href={`/projects/${project.slug || '#'}`} className="block h-full group">
                
                <Card className="h-full flex flex-col border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden relative">
                  
                  <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start mb-4">
                      {/* Icon Folder */}
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FolderGit2 className="h-6 w-6" />
                      </div>
                      
                      {/* Mũi tên chỉ hướng thay vì icon GitHub (để gợi ý người dùng bấm vào xem chi tiết) */}
                      <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[56px]" title={project.title}>
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex-1 px-6 pb-6 pt-0 flex flex-col">
                    <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="font-medium text-xs bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors border-none">
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 3 && <span className="text-xs text-slate-400 self-center">+{project.tags.length - 3}</span>}
                        </div>

                        <div className="text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100 font-medium flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                           <span className="truncate">{project.metrics}</span>
                        </div>
                    </div>
                  </CardContent>
                </Card>

              </Link>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}