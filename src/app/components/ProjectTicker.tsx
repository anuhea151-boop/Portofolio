import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import projectThreeThumbnail from "figma:asset/f84678e406d7520865d64412ac8c1088e2b762f0.png";

// Import locally added thumbnails
import sliceThumbnail from "../../assets/Slice thumbnail.png";
import makeInfluenceThumbnail from "../../assets/Make influence thumbnail.png";

interface Project {
  name: string;
  color: string;
  thumbnail?: string;
  textColor?: string;
  hideTitle?: boolean;
  overview?: string;
  gallery?: string[];
}

interface TickerRowProps {
  projects: Project[];
  direction: 'left' | 'right';
  onProjectClick: (project: Project) => void;
}

function TickerRow({ projects, direction, onProjectClick }: TickerRowProps) {
  // Duplicate the array to ensure seamless scrolling
  const items = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className={`flex whitespace-nowrap gap-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
      {items.map((project, index) => (
        <div
          key={`${project.name}-${index}`}
          onClick={() => {
            if (project.overview || project.gallery) {
              onProjectClick(project);
            }
          }}
          className={`relative min-w-[300px] md:min-w-[400px] h-[220px] md:h-[280px] ${project.color} rounded-[32px] p-8 flex flex-col justify-end transition-transform hover:scale-[0.98] ${project.overview ? 'cursor-pointer' : 'cursor-default'} overflow-hidden group`}
        >
          {project.thumbnail && (
            <div className="absolute inset-0">
              <ImageWithFallback 
                src={project.thumbnail} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              {!project.hideTitle && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
              )}
            </div>
          )}
          {!project.hideTitle && (
            <div className={`italic font-bold text-2xl relative z-10 ${project.textColor || 'text-black/80'}`}>{project.name}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ProjectTicker() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const row1: Project[] = [
    { 
      name: 'Slice The Meme', 
      color: 'bg-emerald-100',
      thumbnail: sliceThumbnail,
      textColor: 'text-white',
      overview: 'United States of Water Melon introduces "Slice The Meme, Own The Future" as a fresh, juicy, and one-of-a-kind NFT collection. With 47k+ community members, this landing page offers a colorful, exotic summer aesthetic designed to excite crypto and NFT enthusiasts.',
      gallery: [sliceThumbnail]
    },
    { 
      name: 'Make Influence', 
      color: 'bg-indigo-50',
      thumbnail: makeInfluenceThumbnail,
      textColor: 'text-black',
      overview: 'A robust dashboard for influencers to track their daily metrics, campaigns, clicks, sales, and total revenue. Designed with extreme clarity and minimal data visualization to keep creators focused on their performance and growth.',
      gallery: [makeInfluenceThumbnail]
    },
    { name: 'Synapsis', color: 'bg-gray-900', thumbnail: projectThreeThumbnail, textColor: 'text-white', hideTitle: true },
  ];

  const row2: Project[] = [
    { name: 'Project Four', color: 'bg-green-100' },
    { name: 'Project Five', color: 'bg-pink-100' },
    { name: 'Project Six', color: 'bg-yellow-100' },
  ];

  const row3: Project[] = [
    { name: 'Project Seven', color: 'bg-indigo-100' },
    { name: 'Project Eight', color: 'bg-red-100' },
    { name: 'Project Nine', color: 'bg-gray-200' },
  ];

  return (
    <>
      <section className="py-20 overflow-hidden flex flex-col gap-6">
        <TickerRow projects={row1} direction="left" onProjectClick={setSelectedProject} />
        <TickerRow projects={row2} direction="right" onProjectClick={setSelectedProject} />
        <TickerRow projects={row3} direction="left" onProjectClick={setSelectedProject} />
      </section>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm select-none">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-[#F9FAFB] relative z-10 w-full max-w-4xl max-h-[90vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-20">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h3>
              <button onClick={() => setSelectedProject(null)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto selection:bg-[#A3E635] selection:text-black cursor-auto">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Project Overview</h4>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {selectedProject.overview || 'Details for this project are coming soon.'}
              </p>

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Design Gallery</h4>
                  <div className="flex flex-col gap-8">
                    {selectedProject.gallery.map((imgUrl, i) => (
                      <div key={i} className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative min-h-[300px]">
                        <ImageWithFallback src={imgUrl} alt={`${selectedProject.name} Gallery ${i}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
