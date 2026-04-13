import { Play, Mail, Linkedin, Instagram, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Floating Card Component
function ProfileCard({ 
  name, 
  role, 
  date, 
  image, 
  className,
  rotation
}: { 
  name: string; 
  role: string; 
  date: string; 
  image: string; 
  className?: string;
  rotation?: string;
}) {
  return (
    <div className={`absolute bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-3 w-[260px] animate-float ${className}`} style={{ transform: rotation ? `rotate(${rotation})` : 'none' }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <ImageWithFallback src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm text-[#1A1A1A] truncate">{name}</h3>
          <p className="text-gray-500 text-xs truncate">{role}</p>
        </div>
        <div className="text-gray-400">•••</div>
      </div>
      <div className="flex justify-between items-center mt-1 border-t border-gray-50 pt-3">
        <span className="text-xs text-gray-400 font-medium">Start {date}</span>
        <div className="flex gap-1.5">
          <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center text-red-500">
            <Mail size={10} />
          </div>
          <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <Linkedin size={10} />
          </div>
          <div className="w-5 h-5 bg-pink-50 rounded-full flex items-center justify-center text-pink-500">
            <Instagram size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Dark Pill/Tooltip Component
function UserPill({ 
  name, 
  role, 
  image, 
  theme = 'dark',
  className 
}: { 
  name: string; 
  role: string; 
  image: string; 
  theme?: 'dark' | 'green';
  className?: string 
}) {
  const bgClass = theme === 'green' ? 'bg-[#1E3A34]' : 'bg-[#1A1A1A]';
  
  return (
    <div className={`absolute flex items-center gap-3 pr-5 pl-2 py-2 rounded-full shadow-lg animate-float-delayed ${bgClass} ${className}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
        <ImageWithFallback src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-left">
        <div className="font-bold text-white text-xs">{name}</div>
        <div className="text-gray-400 text-[10px]">{role}</div>
      </div>
      {/* Pointer Triangle */}
      <div className={`absolute -top-3 ${theme === 'green' ? '-left-3 text-[#1E3A34]' : '-right-3 text-[#1A1A1A] rotate-90'}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12L3 3V21L21 12Z" />
        </svg>
      </div>
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
        {/* Top Left - Profile Card */}
        <ProfileCard 
          name="Maria Angelica M" 
          role="Product Designer" 
          date="May 12, 2025"
          image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDY0Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          className="top-[15%] left-[5%] rotate-[-6deg]"
        />

        {/* Top Right - Profile Card */}
        <ProfileCard 
          name="Marcus Alexandro" 
          role="Product Manager" 
          date="May 12, 2025"
          image="https://images.unsplash.com/photo-1625502709763-f5f3880c17ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0NzI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          className="top-[20%] right-[8%] rotate-[4deg]"
        />

        {/* Bottom Left - Pill */}
        <UserPill 
          name="Vinco Marconzo" 
          role="Human Resources" 
          image="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM0NTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          theme="dark"
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
          <button className="bg-[#A3E635] text-[#1A1A1A] px-10 py-4 rounded-xl font-bold shadow-lg shadow-[#A3E635]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer text-base">
            Start a Project
          </button>
          
          <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:-translate-y-1 text-base group">
            <Play size={18} className="fill-white group-hover:scale-110 transition-transform" />
            View Works
          </button>
        </div>
      </div>
    </section>
  );
}
