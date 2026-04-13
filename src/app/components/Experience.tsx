import { Linkedin, Github, ExternalLink } from 'lucide-react';

export function Experience() {
  return (
    <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1A1A1A]">
          Past Experiences & <br /> Collaborations
        </h2>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
          I have worked with startups and global companies to deliver high-quality
          digital products.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:border-[#A3E635] hover:text-[#86C22A] transition-colors shadow-sm">
            <Linkedin size={24} />
          </a>
          <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:border-[#A3E635] hover:text-[#86C22A] transition-colors shadow-sm">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="p-8 bg-white border border-gray-100 rounded-[24px] flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-[#A3E635] transition-all shadow-sm group cursor-default">
          <div className="mb-2 sm:mb-0">
            <div className="font-bold text-xl text-[#1A1A1A] group-hover:text-black transition-colors">Google Indonesia</div>
            <div className="text-[#86C22A] font-semibold">Senior Frontend Developer</div>
          </div>
          <div className="text-gray-400 text-sm italic">2022 — Present</div>
        </div>

        <div className="p-8 bg-white border border-gray-100 rounded-[24px] flex flex-col sm:flex-row justify-between items-start sm:items-center opacity-60 hover:opacity-100 transition-opacity cursor-default">
          <div className="mb-2 sm:mb-0">
            <div className="font-bold text-xl text-[#1A1A1A]">Stripe</div>
            <div className="text-gray-500 font-semibold">UI Designer</div>
          </div>
          <div className="text-gray-400 text-sm italic">2020 — 2022</div>
        </div>

        <div className="p-8 bg-white border border-gray-100 rounded-[24px] flex flex-col sm:flex-row justify-between items-start sm:items-center opacity-60 hover:opacity-100 transition-opacity cursor-default">
          <div className="mb-2 sm:mb-0">
            <div className="font-bold text-xl text-[#1A1A1A]">Tokopedia</div>
            <div className="text-gray-500 font-semibold">Product Designer</div>
          </div>
          <div className="text-gray-400 text-sm italic">2018 — 2020</div>
        </div>
      </div>
    </section>
  );
}
