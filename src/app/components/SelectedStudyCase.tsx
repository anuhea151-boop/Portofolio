import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SelectedStudyCase() {
  return (
    <section className="w-full bg-[#F9FAFB] text-[#1A1A1A] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Selected Study Case
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A deep dive into how I solved complex problems through thoughtful design and engineering.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-[#1A1A1A] font-semibold hover:text-[#A3E635] transition-colors cursor-pointer">
            View All Projects
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="group relative block overflow-hidden rounded-3xl bg-[#1A1A1A] text-[#F9FAFB] transition-all hover:ring-4 ring-offset-2 ring-offset-[#F9FAFB] hover:ring-[#A3E635]/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#A3E635] text-[#1A1A1A]">UI/UX Design</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/10">Frontend</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Nova Financial Dashboard
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Redesigning the core financial experience for Nova's 2 million users. 
                Focusing on data visualization clarity, accessibility, and modern aesthetics 
                while maintaining robust performance.
              </p>

              <div className="mt-auto pt-8">
                <button className="inline-flex items-center gap-2 bg-[#F9FAFB] text-[#1A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-[#A3E635] transition-colors group/btn cursor-pointer">
                  Read Case Study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[300px] lg:h-auto overflow-hidden order-1 lg:order-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1755182334060-1578c6cac201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzYwNDc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fintech Dashboard Design"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
