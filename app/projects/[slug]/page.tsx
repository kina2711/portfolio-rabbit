import { DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Calendar, Layers, BarChart3, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// --- LOGIC TÌM KIẾM ---
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
    <main className="min-h-screen bg-[#F3F4F6] pb-20 font-sans text-slate-800">
      
      {/* 1. TOP NAVIGATION */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-7xl h-16 flex items-center justify-between">
            <Link href="/#projects">
                <Button variant="ghost" className="text-slate-500 hover:text-slate-900 -ml-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
            </Link>
            <div className="flex gap-2">
                {project.link && (
                    <Link href={project.link} target="_blank">
                        <Button size="sm" className="bg-slate-900 text-white rounded-full px-5 hover:bg-slate-800">
                            <Github className="w-4 h-4 mr-2"/> Source
                        </Button>
                    </Link>
                )}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-10">
        
        {/* 2. HEADER DASHBOARD */}
        <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* KEY METRIC CARD */}
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-blue-200">
                        <BarChart3 className="w-6 h-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Key Result / Impact</span>
                    </div>
                    <div className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl">
                        "{resultContent}"
                    </div>
                </div>
            </div>
        </div>

        {/* 3. BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1: THE CHALLENGE */}
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Why? (The Challenge)</h2>
                    <div className="p-2 bg-red-50 rounded-full text-red-500"><ArrowUpRight className="w-5 h-5"/></div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                    {problemContent}
                </p>
            </div>

            {/* CARD 2: TECH STACK */}
            <div className="md:col-span-1 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Tech Stack</h2>
                    <div className="p-2 bg-blue-50 rounded-full text-blue-500"><Layers className="w-5 h-5"/></div>
                </div>
                <div className="flex flex-wrap gap-2 content-start">
                    {toolsItems.length > 0 ? toolsItems.map((tool: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold border border-slate-100">
                            {tool}
                        </span>
                    )) : (
                        <p className="text-slate-400 italic">Updating...</p>
                    )}
                </div>
            </div>

            {/* CARD 3: THE PROCESS */}
            <div className="md:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
                        <Calendar className="w-6 h-6"/>
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900">How? (The Process)</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.length > 0 ? processSteps.map((step: string, i: number) => (
                        <div key={i} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                                {i + 1}
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed mt-2">
                                {step}
                            </p>
                        </div>
                    )) : (
                        <div className="col-span-4 text-slate-500 italic p-4 text-center">
                            {project.description}
                        </div>
                    )}
                </div>
            </div>

             {/* CARD 4: WHAT */}
             <div className="md:col-span-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-10 text-center text-white shadow-lg mt-4">
                <h2 className="text-2xl font-bold mb-4">Ready to see the code?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    Explore the full implementation details, database schema, and source code on my GitHub repository.
                </p>
                <Link href={project.link} target="_blank">
                    <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-10 font-bold shadow-xl border-none">
                        View GitHub Repository
                    </Button>
                </Link>
             </div>

        </div>
      </div>
    </main>
  );
}