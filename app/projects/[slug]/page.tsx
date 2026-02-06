import { DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Wrench, CheckCircle, Target, ListOrdered } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// --- HÀM TÌM KIẾM DỰ ÁN ---
function getProject(slug: string) {
  console.log(`[DEBUG] Đang tìm dự án với slug: "${slug}"`);

  // 1. Tìm trong Tiếng Anh
  const projectEn = DATA.en.projects.list.find((p) => (p as any).slug === slug);
  if (projectEn) {
    console.log(`[DEBUG] Tìm thấy bên EN: "${projectEn.title}"`);
    return projectEn;
  }

  // 2. Tìm trong Tiếng Việt
  const projectVi = DATA.vi.projects.list.find((p) => (p as any).slug === slug);
  if (projectVi) {
    console.log(`[DEBUG] Tìm thấy bên VI: "${projectVi.title}"`);
    return projectVi;
  }

  // 3. Không tìm thấy
  console.log(`[DEBUG] Không tìm thấy dự án nào khớp với slug: "${slug}"`);
  return null;
}

// --- QUAN TRỌNG: CẬP NHẬT TYPE VÀ ASYNC CHO NEXT.JS 15+ ---
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Gọi hàm tìm kiếm với slug đã lấy được
  const project = getProject(slug);

  // Nếu không tìm thấy, trả về trang 404
  if (!project) {
    return notFound();
  }

  // Lấy phần nội dung chi tiết
  const details = (project as any).details;

  // --- CHUẨN BỊ DỮ LIỆU HIỂN THỊ (FALLBACK) ---
  const problemTitle = details?.problem?.title || "The Challenge";
  const problemContent = details?.problem?.content || project.objective || "Thông tin đang cập nhật...";

  const toolsTitle = details?.tools?.title || "Tech Stack & Tools";
  const toolsItems = details?.tools?.items || [];

  const processTitle = details?.process?.title || "The Process";
  const processSteps = details?.process?.steps || []; 

  const resultTitle = details?.result?.title || "Impact & Results";
  const resultContent = details?.result?.content || project.metrics || "Thông tin đang cập nhật...";

  return (
    <main className="min-h-screen bg-white pb-24 font-sans text-slate-900">
      
      {/* HEADER SECTION */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8 -ml-4 text-slate-500 hover:text-blue-600 pl-0 hover:bg-transparent transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag: string, index: number) => (
              <span key={index} className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
             {project.link && (
               <Link href={project.link} target="_blank">
                  <Button className="bg-slate-900 text-white hover:bg-slate-800 gap-2 rounded-full px-6 h-12 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                     <Github className="w-5 h-5"/> View Source Code
                  </Button>
               </Link>
             )}
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl py-16 space-y-20">
        
        {/* 1. CHALLENGE */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2.5 bg-red-50 rounded-xl text-red-600 border border-red-100">
                <Target className="w-6 h-6"/>
             </div>
             <h2 className="text-2xl font-bold text-slate-900">{problemTitle}</h2>
           </div>
           <p className="text-lg text-slate-600 leading-relaxed text-justify">
             {problemContent}
           </p>
        </section>

        {/* 2. TOOLS */}
        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                <Wrench className="w-6 h-6"/>
             </div>
             <h2 className="text-2xl font-bold text-slate-900">{toolsTitle}</h2>
           </div>
           <div className="flex flex-wrap gap-3">
             {toolsItems.length > 0 ? (
               toolsItems.map((tool: string, i: number) => (
                 <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm">
                   {tool}
                 </span>
               ))
             ) : (
                project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-500 font-medium shadow-sm opacity-70">
                      {tag}
                    </span>
                  ))
             )}
           </div>
        </section>

        {/* 3. PROCESS */}
        <section>
           <div className="flex items-center gap-3 mb-8">
             <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 border border-purple-100">
                <ListOrdered className="w-6 h-6"/>
             </div>
             <h2 className="text-2xl font-bold text-slate-900">{processTitle}</h2>
           </div>
           <div className="space-y-8 pl-2">
              {processSteps.length > 0 ? (
                 processSteps.map((step: string, i: number) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {i + 1}
                      </div>
                      <div className="pt-2.5">
                        <p className="text-lg text-slate-600 leading-relaxed">{step}</p>
                      </div>
                   </div>
                 ))
              ) : (
                 <p className="text-slate-600 text-lg leading-relaxed italic">
                    {project.description}
                 </p>
              )}
           </div>
        </section>

        {/* 4. RESULTS */}
        <section>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100">
                <CheckCircle className="w-6 h-6"/>
             </div>
             <h2 className="text-2xl font-bold text-slate-900">{resultTitle}</h2>
           </div>
           <div className="bg-emerald-50/60 p-8 rounded-2xl border border-emerald-100 text-slate-800 text-lg leading-relaxed shadow-sm">
             {resultContent}
           </div>
        </section>
      </div>
    </main>
  );
}