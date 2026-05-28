import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { ViapulsaDetails } from "./ViapulsaDetails";
import { TalentvisDetails } from "./TalentvisDetails";
import { InvestreeDetails } from "./InvestreeDetails";
import { FleetHeadUnitDetails } from "./FleetHeadUnitDetails";
import { TabletMockup } from "./TabletMockup";
import synapsisHaulingActivity from "../../assets/Synapsis/hauling-activity.png";

export const STUDY_CASES = [
  {
    id: 4,
    title: "Fleet Head Unit Experience",
    description:
      "Improving operational workflows through contextual UI, clearer information hierarchy, and activity-based interface states for fleet drivers.",
    tags: ["Product Design", "Android Tablet"],
    image: synapsisHaulingActivity,
    isTablet: true,
    details: <FleetHeadUnitDetails />,
  },
  {
    id: 1,
    title: "Viapulsa: Enhance Conversion Process",
    description: "Redesigning the Viapulsa application to streamline the cellular credit-to-cash conversion flow. We successfully reduced daily support tickets by 50% and surged transactions by 40% within 3 months post-launch.",
    tags: ["Product Design", "UX Research"],
    image: "https://framerusercontent.com/images/ZPkeVVkTHwyZdb0roMPwWEZBwfI.png",
    details: <ViapulsaDetails />
  },
  {
    id: 2,
    title: "Talentvis Dashboard Redesign",
    description: "Redesigning the Job Order dashboard for an international recruitment company to improve data intuition and support decision-making.",
    tags: ["Product Design", "Dashboard Analysis"],
    image: "https://framerusercontent.com/images/BJZF1L2v6EPZ7C00c2y1UAlvag.png",
    details: <TalentvisDetails />
  },
  {
    id: 3,
    title: "Investree Mobile App Redesign",
    description: "Redesigning the Investree mobile application to streamline registration flows and modernize aesthetics to attract millennials.",
    tags: ["Mobile App Design", "Fintech"],
    image: "https://framerusercontent.com/images/VZjXJ6VhKEmIMdHTlkxUTDlkIMI.png",
    details: <InvestreeDetails />
  },
];

export function SelectedStudyCase() {
  return (
    <section id="selected-projects" className="w-full bg-[#F9FAFB] text-[#1A1A1A] py-24 px-6 md:px-12 lg:px-24">
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

        <div className="flex flex-col gap-12">
          {STUDY_CASES.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={study.id} className="group relative block overflow-hidden rounded-3xl bg-[#1A1A1A] text-[#F9FAFB] transition-all hover:ring-4 ring-offset-2 ring-offset-[#F9FAFB] hover:ring-[#A3E635]/80">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[400px]">
                  {/* Content Section */}
                  <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, i) => (
                        <span key={i} className={`px-3 py-1 text-xs font-bold ${i === 0 ? 'uppercase tracking-wider rounded-full bg-[#A3E635] text-[#1A1A1A]' : 'font-medium rounded-full bg-white/10 text-gray-300 border border-white/10'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <Link to={`/case-study/${study.id}`} className="inline-flex items-center gap-2 bg-[#F9FAFB] text-[#1A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-[#A3E635] transition-colors group/btn cursor-pointer">
                        Read Case Study
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`relative order-1 overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"} ${
                      study.isTablet
                        ? "flex min-h-[300px] items-center justify-center bg-gray-200 p-8 md:p-12 lg:min-h-[400px]"
                        : "h-[300px] lg:h-auto"
                    }`}
                  >
                    {study.isTablet ? (
                      <TabletMockup
                        src={study.image}
                        alt={study.title}
                        className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <>
                        <ImageWithFallback
                          src={study.image}
                          alt={study.title}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
