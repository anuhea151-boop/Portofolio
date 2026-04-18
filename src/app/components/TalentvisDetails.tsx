import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TalentvisDetails() {
  return (
    <div className="space-y-16 text-gray-700 leading-relaxed max-w-3xl mx-auto pb-12">
      {/* Project Overview */}
      <section className="font-serif">
        <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-normal">
          PT Talentvis is an international recruitment company that has a presence in 5 countries.
        </p>

        <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-200 font-sans text-sm">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Industry</h4>
            <p className="font-bold text-[#1A1A1A]">International Recruitment</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Role</h4>
            <p className="font-bold text-[#1A1A1A]">Product Designer</p>
          </div>
        </div>
      </section>

      {/* Problem & Objective */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Understanding the problem</h3>
        
        <div className="space-y-10 mt-6 font-serif text-lg">
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">The Challenge</h4>
            <p>
              The previous version of the Job Order dashboard was less informative, making the data unsuitable for decision-making. Stakeholders struggled to glean immediate, actionable insights from the platform.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">Objective</h4>
            <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700">
              <li>Create an informative display that allows for robust comparisons every 3 to 6 months.</li>
              <li>Highlight critical metrics including the country, category, and type of work.</li>
            </ul>
          </div>

          <div className="mt-12">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 font-sans">Old Appearance of the Dashboard</h4>
            <ImageWithFallback src="https://framerusercontent.com/images/UWhMM6feOJ6WlCZWN4lTOGUwE.png" className="w-full rounded-xl shadow-sm border border-gray-200" alt="Old Job Order Dashboard" />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Ideation */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Ideation & Strategy</h3>
        
        <div className="space-y-10 font-serif text-lg">
          <p>
            Upon analyzing the old display, I found that the information presented was not very intuitive, and users struggled to compare Job Orders across different countries. 
          </p>
          <p>
            To address this issue, I decided to incorporate a graph that would visually represent the comparison of Job Orders between countries, as outlined in the initial wireframing phase.
          </p>
          
          <div className="mt-10">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 font-sans">Wireframe Strategy</h4>
            <ImageWithFallback src="https://framerusercontent.com/images/Lg7h1k2mqgZL4bZWe4eypcnEwA.png" className="w-full rounded-xl shadow-sm border border-gray-200 bg-white" alt="Ideation Wireframes" />
          </div>
        </div>
      </section>

      {/* High Fidelity */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight mt-16">High Fidelity Design</h3>
        <p className="mb-8 font-serif text-lg">Translation of the structured wireframes into a clean, modern, and highly legible dashboard interface emphasizing data comparison.</p>
        <ImageWithFallback src="https://framerusercontent.com/images/L5fpdMmSzXmpugvHcJVlYDXIKg.png" className="w-full rounded-xl shadow-sm border border-gray-200" alt="High Fidelity Dashboard" />
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Comparison Results */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-8 font-sans tracking-tight">Comparison Results</h3>
        <ImageWithFallback src="https://framerusercontent.com/images/XakyMEctLy4JQHvDw5nXYN7GcA.png" className="w-full rounded-xl shadow-sm" alt="Before vs After Results" />
      </section>

      {/* Reflection */}
      <section className="pt-16 mt-16 border-t border-gray-200">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans tracking-tight">Reflection</h3>
        <p className="text-lg font-serif leading-relaxed text-gray-600">
          It is absolutely essential to delve deeper into the user's needs to effectively design the appearance and adapt it to core business requirements. True usability bridges the gap between raw data and informed decision making.
        </p>
      </section>
    </div>
  );
}
