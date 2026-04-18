import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InvestreeDetails() {
  return (
    <div className="space-y-16 text-gray-700 leading-relaxed max-w-3xl mx-auto pb-12">
      {/* Project Overview */}
      <section className="font-serif">
        <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-normal">
          Investree is a financial technology company based in Indonesia that operates as an online marketplace. Its objective is to connect individuals with financing needs to those looking to provide funding, particularly through peer-to-peer lending.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-200 font-sans text-sm">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Industry</h4>
            <p className="font-bold text-[#1A1A1A]">Fintech P2P Lending</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Role</h4>
            <p className="font-bold text-[#1A1A1A]">UI/UX Designer</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Collaborators</h4>
            <ul className="font-medium text-[#1A1A1A] space-y-1">
              <li>Product Owner</li>
              <li>Data Scientist</li>
              <li>Engineer Team</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Scope of Work</h4>
            <ul className="font-medium text-[#1A1A1A] space-y-1">
              <li>Analytics Research</li>
              <li>Mobile App Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problem Statement & Hypothesis */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Understanding the problem</h3>
        
        <div className="space-y-10 mt-6 font-serif text-lg">
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">Problem Statement</h4>
            <p className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-gray-800 italic">
              "According to the data science team's analysis, many users abandon the initial registration step, resulting in a low conversion rate. Investree also aims to expand its market by targeting millennials who are increasingly interested in investment opportunities."
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans mt-12">Hypothesis</h4>
            <p className="mb-6">
              We developed a hypothesis based on our findings. We believe that users experience a significant cognitive load when required to enter extensive data again, which leads to frustration and may cause them to abandon the process. Additionally, the design of mobile apps appears outdated and does not meet the expectations of today's users, making them less appealing to millennials compared to more contemporary application designs.
            </p>
            <ImageWithFallback src="https://framerusercontent.com/images/Khn9RNx3bFlmO9uCACY2e4F5w.png" className="w-full rounded-xl shadow-sm border border-gray-200" alt="Investree Hypothesis Screen" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans mt-12">Benchmark Design</h4>
            <p className="mb-6">Benchmarking against industry leaders such as Gojek & Grab to analyze contemporary registration flows.</p>
            <ImageWithFallback src="https://framerusercontent.com/images/j2WhZhn5BmguKtDNb1zfcNze9I.png" className="w-full rounded-xl shadow-sm border border-gray-200 bg-white" alt="Benchmark Design with Gojek & Grab" />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Ideation */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Ideation & Strategy</h3>
        
        <div className="space-y-8 font-serif text-lg">
          <p>
            From the hypothesis above, we derive two actions that we need to take:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</span>
              <div className="pt-1">
                <strong className="text-[#1A1A1A] font-sans block mb-1">Streamlining Flow</strong>
                How might we shorten the registration process so users can fund immediately?
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</span>
              <div className="pt-1">
                <strong className="text-[#1A1A1A] font-sans block mb-1">Visual Modernization</strong>
                How might we modernize the design to attract millennials?
              </div>
            </li>
          </ul>

          <div className="bg-[#1A1A1A] text-white p-6 rounded-xl mt-8">
            <h4 className="text-[#A3E635] font-bold text-sm uppercase tracking-widest mb-2 font-sans">The Core Challenge</h4>
            <p>User data must be condensed visually while stringently ensuring full compliance with OJK (Financial Services Authority) regulations.</p>
          </div>
        </div>
      </section>

      {/* Design */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight mt-16">Design Process</h3>
        
        <div className="space-y-10 font-serif text-lg">
          <p>
            The design process is conducted iteratively, using our established style as a benchmark based on widely used applications from 2019. We updated the interface to make it fresher and streamlined some of the information in the initial data section. 
          </p>
          <p>
            Our goal is to allow users to explore our products before deciding to register, so we have added a <strong>"Login Without Login"</strong> button for easy access.
          </p>
          <ImageWithFallback src="https://framerusercontent.com/images/FfJyjCCjeQLnYRinKeLmp8ZKSTg.png" className="w-full rounded-xl shadow-sm border border-gray-200" alt="Investree Main Mobile App Screens" />

          <p className="mt-8">
            In this data completion section, we organize the information into two categories: personal information and financial information. Each category is further divided into several sections to make it easier for users to fill out the required data without feeling overwhelmed by having to complete everything on a single page.
          </p>
          <p>
            We also proactively explain why it is important for users to complete their information—this requirement is mandated by the OJK. This ensures that users feel more secure when funding loans through our platform.
          </p>
          
          <div className="space-y-8 mt-12">
            <ImageWithFallback src="https://framerusercontent.com/images/tUsHAPhVX6RIrHFH41JqSZImdAw.png" className="w-full rounded-xl shadow-sm" alt="Investree Registration Process Details 1" />
            <ImageWithFallback src="https://framerusercontent.com/images/nTxKrtgC6iDTaOFRqa3imIcCRxE.png" className="w-full rounded-xl shadow-sm" alt="Investree Registration Process Details 2" />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Reflection & Next Steps */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
        <div>
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">Reflection & Learning</h3>
          <p className="text-base font-serif leading-relaxed text-gray-600">
            Collaboration among divisions is essential for gaining deep insights, enabling the production of effective solutions for users, and meeting business needs effectively.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">Next Steps</h3>
          <p className="text-base font-serif leading-relaxed text-gray-600">
            After three months of the new design's release, conduct an analytical analysis using adoption metrics, such as the number of registered users and task success rates. This will help pinpoint areas where users might still struggle.
          </p>
        </div>
      </section>
    </div>
  );
}
