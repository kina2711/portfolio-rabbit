"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  const { t } = useLanguage()
  
  // Ép kiểu any
  const edu = t.education as any;

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* --- PHẦN 1: HỌC VẤN --- */}
        <div className="mb-24">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <div className="p-4 bg-blue-50 rounded-full text-blue-600">
               <GraduationCap className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{edu.school}</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        </div>

        <div>
          {/* Header Section */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-2"
            >
              <div className="w-4 h-4 rounded-full bg-slate-300"></div>
              {/* Tiêu đề màu Cam */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-orange-500">
                {edu.certTitle}
              </h3>
            </motion.div>

            <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 font-bold text-xl ml-7"
            >
              {edu.certDesc}
            </motion.p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edu.certs && edu.certs.map((cert: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
                  <CardContent className="p-6 flex flex-col items-center h-full">

                    <div className="w-full aspect-square relative mb-6 bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-colors">
                      <Image 
                        src={cert.image} 
                        alt={cert.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Tên Cert */}
                    <div className="text-center mt-auto">
                      <h4 className="font-bold text-slate-800 text-base mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                      <Badge variant="outline" className="text-slate-500 border-slate-200 font-normal">
                        {cert.issuer}
                      </Badge>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}