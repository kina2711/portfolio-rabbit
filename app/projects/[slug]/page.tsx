import { DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Calendar, Layers, BarChart3, ArrowUpRight, Zap, Target, Lightbulb } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Logic tìm dự án
function getProject(slug: string) {
  const projectEn = DATA.en.projects.list.find((p) => (p as any).slug === slug);
  if (projectEn) return projectEn;
  const projectVi = DATA.vi.projects.list.find((p) => (p as any).slug === slug);
  if (projectVi) return projectVi;
  return null;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);

  if (!project) return notFound();

  const details = (project as any).details;
  
  // Data Fallback
  const problemContent = details?.problem?.content || project.objective;
  const toolsItems = details?.tools?.items || project.tags;
  const processSteps = details?.process?.steps || [];
  const resultContent = details?.result?.content || project.metrics;

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24 font-sans text-slate-800">
      
      {/* 1. NAVBAR */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
            <Link href="/#projects">
                <Button variant="ghost" className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Portfolio
                </Button>
            </Link>
            <div className="flex gap-3">
                {project.link && (
                    <Link href={project.link} target="_blank">
                        <Button className="bg-slate-900 text-white rounded-full px-6 hover:bg-slate-800 shadow-lg shadow-slate-900/20 hover:shadow-amber-900/20">
                            <Github className="w-4 h-4 mr-2"/> View Code
                        </Button>
                    </Link>
                )}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        {/* 2. TITLE AREA */}
        <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* 3. BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* BLOCK 1: KEY METRIC */}
            <div className="md:col-span-8 bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 text-amber-200">
                        <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                           <BarChart3 className="w-6 h-6 text-amber-400" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-amber-500">Key Result / Impact</span>
                    </div>
                    <div className="text-3xl md:text-5xl font-medium leading-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500">
                        "{resultContent}"
                    </div>
                </div>
            </div>

            {/* BLOCK 2: TECH STACK */}
            <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:border-amber-200 transition-colors">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Tech Stack</h2>
                        <div className="p-3 bg-slate-100 rounded-full text-slate-600"><Layers className="w-5 h-5"/></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {toolsItems.map((tool: string, i: number) => (
                            <span key={i} className="px-3 py-2 bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-100">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                     <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Powered by</p>
                     <p className="text-slate-600 font-semibold">Modern Data Stack</p>
                </div>
            </div>

            {/* BLOCK 3: THE CHALLENGE (WHY?) */}
            <div className="md:col-span-6 bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-amber-50/50 hover:border-amber-200 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                            <Target className="w-6 h-6"/>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-full text-slate-400 group-hover:text-amber-500"><ArrowUpRight className="w-5 h-5"/></div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed text-justify">
                    {problemContent}
                </p>
            </div>

            {/* BLOCK 4: THE SOLUTION / PROCESS (HOW?) */}
            <div className="md:col-span-6 bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                     <div className="p-4 bg-slate-100 rounded-2xl text-slate-600">
                        <Zap className="w-6 h-6"/>
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
                </div>
                <div className="space-y-4">
                    {processSteps.map((step: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-50 hover:bg-amber-50/30 hover:border-amber-100 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-xs text-slate-500 shadow-sm">
                                {i + 1}
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed text-sm mt-1">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* BLOCK 5: CTA */}
            <div className="md:col-span-12 mt-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-amber-500/20 relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="p-4 bg-white/20 rounded-full backdrop-blur-md mb-6 animate-pulse">
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Want to see how I built this?</h2>
                    <p className="text-amber-50 mb-8 max-w-2xl text-lg">
                        Check out the source code to dive deeper into the technical implementation.
                    </p>
                    <Link href={project.link} target="_blank">
                        <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 hover:scale-105 rounded-full px-12 h-14 text-lg font-bold shadow-xl border-none transition-transform">
                            View on GitHub <Github className="ml-2 w-5 h-5"/>
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}