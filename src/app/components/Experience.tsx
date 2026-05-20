import { Linkedin, Github } from 'lucide-react';

function DribbbleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10.04 11.88 4.5 12.5" />
      <path d="M21.17 11.51c-5.51-.61-10.85-2.82-15.18-6.44" />
      <path d="M20.77 18.18c-1.71-4.04-4.72-7.56-8.56-9.63" />
    </svg>
  );
}

const experiences = [
  {
    company: "PT Synapsis Sinergi Digital",
    role: "Middle UI/UX Designer",
    period: "2025 — Present",
    active: true
  },
  {
    company: "PT Viapulsa Global Indonesia",
    role: "Product Designer",
    period: "2024",
    active: false
  },
  {
    company: "Talentvis Singapore PTE.LTD.",
    role: "Senior UI/UX Designer",
    period: "2023 — 2024",
    active: false
  },
  {
    company: "PT Majoo Teknologi Indonesia",
    role: "UI/UX Designer",
    period: "2022 — 2023",
    active: false
  },
  {
    company: "PT Sahabat Bisnis",
    role: "UI/UX Designer",
    period: "2021 — 2022",
    active: false
  },
  {
    company: "PT Investree Radhika Jaya",
    role: "UI/UX Designer",
    period: "2018 — 2022",
    active: false
  },
  {
    company: "PT Yoofix Indonesia",
    role: "UI/UX Designer",
    period: "2018",
    active: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="sticky top-32 h-fit">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1A1A1A]">
          Past Experiences & <br /> Collaborations
        </h2>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
          I have worked with startups and global companies to deliver high-quality
          strategic digital products that drive growth.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arya-mardhani/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:border-[#A3E635] hover:text-[#86C22A] transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/anuhea151-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:border-[#A3E635] hover:text-[#86C22A] transition-colors shadow-sm"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://dribbble.com/aryaquanta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:border-[#A3E635] hover:text-[#86C22A] transition-colors shadow-sm"
            aria-label="Dribbble"
          >
            <DribbbleIcon size={24} />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`p-8 bg-white border border-gray-100 rounded-[24px] flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-[#A3E635] transition-all shadow-sm group cursor-default
              ${exp.active ? 'border-[#A3E635]' : 'opacity-80 hover:opacity-100'}
            `}
          >
            <div className="mb-2 sm:mb-0">
              <div className="font-bold text-xl text-[#1A1A1A] group-hover:text-black transition-colors">{exp.company}</div>
              <div className={`font-semibold ${exp.active ? 'text-[#86C22A]' : 'text-gray-500'}`}>
                {exp.role}
              </div>
            </div>
            <div className="text-gray-400 text-sm italic">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
