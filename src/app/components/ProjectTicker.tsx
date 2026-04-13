import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import projectThreeThumbnail from "figma:asset/f84678e406d7520865d64412ac8c1088e2b762f0.png";

interface Project {
  name: string;
  color: string;
  thumbnail?: string;
  textColor?: string;
  hideTitle?: boolean;
}

interface TickerRowProps {
  projects: Project[];
  direction: 'left' | 'right';
}

function TickerRow({ projects, direction }: TickerRowProps) {
  // Duplicate the array to ensure seamless scrolling
  // We repeat it enough times to cover the screen width comfortably before the loop resets
  const items = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className={`flex whitespace-nowrap gap-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
      {items.map((project, index) => (
        <div
          key={`${project.name}-${index}`}
          className={`relative min-w-[300px] md:min-w-[400px] h-[220px] md:h-[280px] ${project.color} rounded-[32px] p-8 flex flex-col justify-end transition-transform hover:scale-[0.98] cursor-pointer overflow-hidden group`}
        >
          {project.thumbnail && (
            <div className="absolute inset-0">
              <ImageWithFallback 
                src={project.thumbnail} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              {/* Gradient overlay for text readability - only show if title is visible */}
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
  const row1: Project[] = [
    { name: 'Project One', color: 'bg-blue-100' },
    { name: 'Project Two', color: 'bg-purple-100' },
    { name: 'Project Three', color: 'bg-gray-900', thumbnail: projectThreeThumbnail, textColor: 'text-white', hideTitle: true },
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
    <section className="py-20 overflow-hidden flex flex-col gap-6">
      <TickerRow projects={row1} direction="left" />
      <TickerRow projects={row2} direction="right" />
      <TickerRow projects={row3} direction="left" />
    </section>
  );
}
