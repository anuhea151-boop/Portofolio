import { Play, Mail, Linkedin, Instagram, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import miCampaign from "../../assets/Make Influence/Campaign.png";

function ProjectSnippetCard({ 
  title, 
  category, 
  image, 
  className,
  rotation
}: { 
  title: string; 
  category: string; 
  image: string; 
  className?: string;
  rotation?: string;
}) {
  return (
    <div 
      className={`absolute bg-white p-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-3 w-[240px] animate-float group cursor-pointer ${className}`} 
      style={{ transform: rotation ? `rotate(${rotation})` : 'none' }}
    >
      <div className="w-full h-32 rounded-lg overflow-hidden border-2 border-black bg-gray-50">
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex flex-col px-1 pb-1">
        <h3 className="font-bold text-[16px] text-black truncate">{title}</h3>
        <p className="text-gray-600 text-[13px] font-bold uppercase tracking-wider truncate">{category}</p>
      </div>
    </div>
  );
}

// Simple Stat Pill Component
function StatPill({ 
  text, 
  icon, 
  className 
}: { 
  text: string; 
  icon: string; 
  className?: string 
}) {
  return (
    <div className={`absolute flex items-center gap-3 px-5 py-3 rounded-full shadow-lg animate-float-delayed bg-[#1A1A1A] ${className}`}>
      <span className="text-lg">{icon}</span>
      <span className="font-bold text-white text-sm">{text}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-48 pb-32 text-center px-6 overflow-hidden bg-[#F9FAFB]">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A3E635] opacity-[0.15] blur-[120px] rounded-full"></div>
      </div>

      {/* Floating Elements Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none max-w-[1400px] mx-auto hidden lg:block">
        {/* Top Left - Project Snippet */}
        <ProjectSnippetCard 
          title="Viapulsa" 
          category="Product Design" 
          image="https://framerusercontent.com/images/ZPkeVVkTHwyZdb0roMPwWEZBwfI.png"
          className="top-[10%] left-[5%] rotate-[-6deg]"
        />

        {/* Top Right - Project Snippet */}
        <ProjectSnippetCard 
          title="Make Influence" 
          category="Dashboard UI" 
          image={miCampaign}
          className="top-[15%] right-[8%] rotate-[4deg]"
        />

        {/* Bottom Left - Pill */}
        <StatPill 
          text="UI/UX Specialist"
          icon="✨"
          className="bottom-[20%] left-[12%]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm mb-8 animate-fade-in-up">
           <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
           <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Available for new projects</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-[#1A1A1A] drop-shadow-sm">
          Strategic <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-gray-600 to-[#1A1A1A]">
            Design for
          </span> <br/>
          <span className="text-gray-400">Digital Evolution.</span>
        </h1>
        
        <p className="text-gray-500 max-w-xl mx-auto text-lg mb-10 leading-relaxed font-medium">
          I create high-performance web experiences that bridge the gap between aesthetics and functionality.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('selected-projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#A3E635] text-[#1A1A1A] px-10 py-4 rounded-xl font-bold shadow-lg shadow-[#A3E635]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
          >
            See Project
          </button>
          
          <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:-translate-y-1 text-base group">
            <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
