"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const { t } = useLanguage()
  const experienceData = t.experience as any;

  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            {experienceData.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{experienceData.desc}</p>
        </div>
        
        <div className="relative">
          {/* Đường kẻ dọc */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {experienceData.jobs.map((job: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
                >
                  
                  {/* --- CỘT TRÁI --- */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pr-16"}`}>
                    {isEven ? (
                      <ExperienceContent job={job} align="right" />
                    ) : (
                      <ExperienceImage job={job} />
                    )}
                  </div>

                  {/* --- DOT TIMELINE --- */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-amber-500 rounded-full transform -translate-x-1/2 mt-1 md:mt-0 z-10 shadow-sm"></div>

                  {/* --- CỘT PHẢI --- */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pl-16" : "md:pl-16 md:text-left"}`}>
                    {isEven ? (
                      <ExperienceImage job={job} />
                    ) : (
                      <ExperienceContent job={job} align="left" />
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceContent({ job, align }: { job: any, align: "left" | "right" }) {
  return (
    <div className={`flex flex-col ${align === "right" ? "md:items-end" : "md:items-start"}`}>
      
      <div className={`flex flex-wrap items-center gap-3 mb-3 ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
            <Calendar className="h-4 w-4" />
            {job.period}
        </div>
        
        {/* Location Tag */}
        {job.location && (
          <Badge className="bg-slate-900 text-slate-100 hover:bg-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5 font-medium border border-slate-700 shadow-sm">
             <MapPin className="h-3 w-3 text-amber-400 fill-amber-400" />
             {job.location}
          </Badge>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-1">
          {job.title}
      </h3>

      <div className="text-lg font-medium text-amber-700 mb-4">
          {job.company}
      </div>

      <ul className={`space-y-2 text-slate-600 leading-relaxed text-sm ${align === "right" ? "text-left md:text-right" : "text-left"}`}>
          {job.description.map((desc: string, i: number) => (
              <li key={i} className="opacity-90">{desc}</li>
          ))}
      </ul>
    </div>
  )
}

function ExperienceImage({ job }: { job: any }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white group bg-slate-100 hover:shadow-2xl hover:shadow-amber-100/50 hover:border-amber-100 transition-all duration-300 hover:-translate-y-1">
        <Image 
            src={job.image || "/placeholder-user.jpg"} 
            alt={job.company}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-60"></div>
    </div>
  )
}