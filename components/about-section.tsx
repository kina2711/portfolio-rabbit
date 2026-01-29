"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Code, Target } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: t.about.cards.bg.title,
      desc: t.about.cards.bg.desc,
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: t.about.cards.tech.title,
      desc: t.about.cards.tech.desc,
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: t.about.cards.goal.title,
      desc: t.about.cards.goal.desc,
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-600 inline-block"></span>
              {t.about.title}
            </h2>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight mb-6">
                Turning raw data into <br />
                <span className="text-blue-600">actionable insights</span>
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              {t.about.desc}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="relative h-full min-h-[300px] rounded-2xl bg-slate-100 p-8 flex items-center justify-center border border-slate-200"
          >
             <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-blue-200">2026</div>
                <p className="text-xl font-medium text-slate-500">Ready for new challenges</p>
             </div>
             {/* Decor blobs */}
             <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
             <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 w-fit p-3 rounded-lg bg-blue-50 border border-blue-100">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}