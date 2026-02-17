"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Search, BarChart3, Cloud, Settings, Award, Cpu, Globe } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor*/}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-300/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* CỘT TRÁI: Text Content & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <span className="h-1 w-12 bg-amber-500 rounded-full"></span>
                <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Turning raw data <br/>
              into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">actionable insight</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed text-justify mb-10">
              {t.about.desc}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
                 {/* Card 1: Domain Expertise */}
                 <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 relative overflow-hidden">
                    {/* Icon nền mờ trang trí */}
                    <Globe className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 group-hover:text-amber-50 transition-colors" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                            <Award className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                            {t.about.cards.bg.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                            {t.about.cards.bg.desc}
                        </p>
                    </div>
                 </div>

                 {/* Card 2: Technical Strength */}
                 <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 relative overflow-hidden">
                    {/* Icon nền mờ trang trí */}
                    <Cpu className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-50 group-hover:text-amber-50 transition-colors" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors duration-300">
                            <BarChart3 className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                            {t.about.cards.tech.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                            {t.about.cards.tech.desc}
                        </p>
                    </div>
                 </div>
            </div>
          </motion.div>

          {/* CỘT PHẢI: Card 2026 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-12 lg:mt-0"
          >
            {/* Main Card Container */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white via-white to-amber-50 rounded-[3rem] shadow-2xl border border-white/60 backdrop-blur-xl flex flex-col items-center justify-center p-8 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ring-1 ring-slate-100">
                
                {/* Glow Effect bên trong Card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/20 via-transparent to-slate-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Orbit Circles */}
                <div className="absolute w-[120%] h-[120%] border border-amber-200/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[80%] h-[80%] border border-slate-300/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Floating Icons */}
                <div className="absolute top-12 left-12 p-3 bg-white/90 rounded-2xl shadow-lg shadow-amber-100 backdrop-blur-sm animate-bounce duration-[3000ms]">
                    <Search className="w-5 h-5 text-amber-500" />
                </div>
                <div className="absolute top-12 right-12 p-3 bg-white/90 rounded-2xl shadow-lg shadow-slate-200 backdrop-blur-sm animate-bounce duration-[4000ms]">
                    <BarChart3 className="w-5 h-5 text-slate-600" />
                </div>
                <div className="absolute bottom-12 left-12 p-3 bg-white/90 rounded-2xl shadow-lg shadow-slate-200 backdrop-blur-sm animate-bounce duration-[3500ms]">
                    <Cloud className="w-5 h-5 text-slate-400" />
                </div>
                <div className="absolute bottom-12 right-12 p-3 bg-white/90 rounded-2xl shadow-lg shadow-amber-100 backdrop-blur-sm animate-bounce duration-[4500ms]">
                    <Settings className="w-5 h-5 text-amber-600" />
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center">
                    <h3 className="text-[7rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-600 mb-2 drop-shadow-sm tracking-tighter">
                        2026
                    </h3>
                    <p className="text-slate-500 font-semibold text-lg uppercase tracking-widest">
                        Ready for new challenges
                    </p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}