"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Github, FolderGit2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.projects.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.projects.desc}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 group rounded-xl overflow-hidden">
                <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <FolderGit2 className="h-6 w-6" />
                        </div>
                        <Link href={project.link} target="_blank">
                             <Github className="h-5 w-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
                        </Link>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1" title={project.title}>
                        {project.title}
                    </h3>
                </CardHeader>
                <CardContent className="flex-1 px-6 pb-6 pt-0">
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                     <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="font-normal text-xs bg-slate-100 text-slate-600">
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 3 && <span className="text-xs text-slate-400 self-center">+{project.tags.length - 3}</span>}
                    </div>
                     <div className="text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded border border-emerald-100 font-medium">
                        Result: {project.metrics}
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}