import { useState } from "react";
import { X, Heart, Bookmark, Calendar, Mail, Link, ArrowUpRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import projectThreeThumbnail from "figma:asset/f84678e406d7520865d64412ac8c1088e2b762f0.png";

// Import locally added thumbnails for Make Influence
import miCampaign from "../../assets/Make Influence/Campaign.png";
import miDashboard from "../../assets/Make Influence/Dashboard.png";
import miFindInfluencer from "../../assets/Make Influence/Find influencer.png";
import miSummaryReport from "../../assets/Make Influence/Summary Report.png";

// Import locally added thumbnails for Watermelon
import watermelonThumbnail from "../../assets/Watermelon/watermelon.png";
import watermelonHero from "../../assets/Watermelon/Hero Section.png";
import watermelonHeroCopy from "../../assets/Watermelon/Hero Section copy.png";

// Import locally added thumbnails for Adarsa
import adarsaThumbnail from "../../assets/Adarsa/Adarsa.png";

// Import locally added thumbnails for Weightloss (TrimTech)
import weightlossThumbnail from "../../assets/Weightloss/Weightloss.png";
import weightlossHero from "../../assets/Weightloss/Thumbnail.png";

// Import locally added thumbnails for Buana
import buanaThumbnail from "../../assets/Buana/Thumbnail.png";
import buanaDetail1 from "../../assets/Buana/Appointment - Detail.png";
import buanaDetail2 from "../../assets/Buana/Appointment - filled.png";
import buanaDetail3 from "../../assets/Buana/Monitor Kesehatan.png";

interface Project {
  name: string;
  color: string;
  thumbnail?: string;
  textColor?: string;
  hideTitle?: boolean;
  overview?: string;
  gallery?: string[];
  externalLink?: string;
  figmaLink?: string;
  platform?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
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
          className={`relative min-w-[300px] md:min-w-[400px] h-[165px] md:h-[220px] ${project.color} rounded-[32px] p-8 flex flex-col justify-end transition-transform hover:scale-[0.98] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/50 ${project.overview ? 'cursor-pointer' : 'cursor-default'} overflow-hidden group`}
        >
          {project.thumbnail && (
            <div className="absolute inset-0">
              <ImageWithFallback 
                src={project.thumbnail} 
                alt={project.name} 
                className={`w-full h-full ${project.objectFit || 'object-cover'} ${project.objectPosition || 'object-top'} transition-transform duration-500 group-hover:scale-105`}
              />
            </div>
          )}
          {!project.hideTitle && (
            <div className={`font-black text-4xl md:text-5xl relative z-10 tracking-tighter ${project.textColor || 'text-black/80'}`}>{project.name}</div>
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
      thumbnail: watermelonHeroCopy,
      textColor: 'text-white',
      hideTitle: true,
      overview: 'United States of Water Melon introduces "Slice The Meme, Own The Future" as a fresh, juicy, and one-of-a-kind NFT collection. With 47k+ community members, this landing page offers a colorful, exotic summer aesthetic designed to excite crypto and NFT enthusiasts.',
      gallery: [watermelonThumbnail]
    },
    { 
      name: 'Make Influence', 
      color: 'bg-indigo-50',
      thumbnail: miCampaign,
      textColor: 'text-black',
      hideTitle: true,
      overview: 'A robust dashboard for influencers to track their daily metrics, campaigns, clicks, sales, and total revenue. Designed with extreme clarity and minimal data visualization to keep creators focused on their performance and growth.',
      gallery: [miDashboard, miFindInfluencer, miSummaryReport]
    },
    { 
      name: 'Adarsa', 
      color: 'bg-orange-50',
      thumbnail: adarsaThumbnail,
      textColor: 'text-black',
      hideTitle: true,
      overview: 'Adarsa is a comprehensive branding and identity project designed for a premium lifestyle brand. It focuses on minimalist aesthetics and sophisticated typography to create a high-end visual experience.',
      gallery: [adarsaThumbnail]
    },
  ];

  const row2: Project[] = [
    { 
      name: 'TrimTech', 
      color: 'bg-white',
      thumbnail: weightlossHero,
      textColor: 'text-black',
      hideTitle: true,
      overview: 'TrimTech is a comprehensive weight loss platform that combines clinically-guided treatments with smart technology. Designed to provide sustainable health solutions, the site features a clean, medical-grade aesthetic focused on user education and conversion.',
      platform: 'Framer',
      externalLink: 'https://rejuvenated-footprint-892822.framer.app/',
      gallery: [weightlossThumbnail]
    },
    { 
      name: 'Buana', 
      color: 'bg-sky-100',
      thumbnail: buanaThumbnail,
      textColor: 'text-black',
      hideTitle: true,
      overview: 'Buana is a comprehensive healthcare application designed for seamless appointment booking and health monitoring. It features an intuitive interface for managing consultations effectively.',
      gallery: [buanaThumbnail, buanaDetail1, buanaDetail2, buanaDetail3],
      figmaLink: 'https://www.figma.com/design/5DRvJKgK9EXuSdCYfY6nEh/Buana?node-id=0-1&t=2xMG0kE4GiAJvh2n-1'
    },
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-sm select-none">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-white relative z-10 w-full max-w-[95vw] xl:max-w-[1400px] max-h-[95vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Premium Header */}
            <div className="px-8 py-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white sticky top-0 z-20">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">{selectedProject.name}</h3>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white font-bold text-xl">
                    A
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">Arya Mardhani</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-emerald-500 text-sm font-medium">Available for work</span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <a href="mailto:hello@arya.design" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors">
                        <Mail className="w-3.5 h-3.5" /> hello@arya.design
                      </a>
                      <a href="#" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors">
                        <Link className="w-3.5 h-3.5" /> arya.design
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {selectedProject.figmaLink && (
                  <button 
                    onClick={() => window.open(selectedProject.figmaLink, '_blank')}
                    className="flex-1 md:flex-none px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10"
                  >
                    View Figma <ExternalLink className="w-4 h-4" />
                  </button>
                )}

                {selectedProject.externalLink && (
                  <button 
                    onClick={() => window.open(selectedProject.externalLink, '_blank')}
                    className="flex-1 md:flex-none px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10"
                  >
                    View Live Site <ExternalLink className="w-4 h-4" />
                  </button>
                )}
                
                {!selectedProject.externalLink && !selectedProject.figmaLink && (
                  <button className="flex-1 md:flex-none px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10">
                    Get in touch
                  </button>
                )}
                
                <button onClick={() => setSelectedProject(null)} className="p-2 ml-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-8 md:p-16 overflow-y-auto selection:bg-[#A3E635] selection:text-black cursor-auto scroll-smooth">
              <div className="max-w-[1200px] mx-auto">
                <div className="mb-20">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Project Overview</h4>
                    {selectedProject.platform && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full uppercase tracking-widest">
                        Built with {selectedProject.platform}
                      </span>
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl text-gray-800 leading-tight font-medium">
                    {selectedProject.overview || 'Details for this project are coming soon.'}
                  </p>
                </div>

                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="flex flex-col gap-12 sm:gap-24">
                    {selectedProject.gallery.map((imgUrl, i) => (
                      <div key={i} className="group relative flex justify-center">
                        <div className="absolute -inset-4 bg-gray-50 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-700 hover:scale-[1.01] inline-block">
                          <ImageWithFallback src={imgUrl} alt={`${selectedProject.name} Gallery ${i}`} className="max-w-full h-auto object-contain block mx-auto" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-32 pt-20 border-t border-gray-100 text-center pb-20">
                  <h4 className="text-3xl font-black text-gray-900 mb-6">Interested in working together?</h4>
                  <button className="px-10 py-5 bg-black text-white font-black text-lg rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl shadow-black/20">
                    Let's Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
