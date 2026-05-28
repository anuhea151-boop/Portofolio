import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import auditFinding1Loading from "../../assets/Synapsis/audit-finding-1-loading.png";
import auditFinding2Hauling from "../../assets/Synapsis/audit-finding-2-hauling.png";
import strategyHauling from "../../assets/Synapsis/strategy-hauling.png";
import strategyQueueing from "../../assets/Synapsis/strategy-queueing.png";
import strategyDumping from "../../assets/Synapsis/strategy-dumping.png";
import strategy02Before from "../../assets/Synapsis/strategy-02-before.png";
import strategy02AfterLoading from "../../assets/Synapsis/strategy-02-after-loading.png";
import strategy02AfterHauling from "../../assets/Synapsis/strategy-02-after-hauling.png";
import strategy02AfterQueueing from "../../assets/Synapsis/strategy-02-after-queueing.png";
import strategy02AfterDumping from "../../assets/Synapsis/strategy-02-after-dumping.png";
import strategy02AfterHaulingEmpty from "../../assets/Synapsis/strategy-02-after-hauling-empty.png";

const STRATEGY_02_AFTER_SCREENS = [
  {
    label: "Loading",
    image: strategy02AfterLoading,
    alt: "After — simplified loading screen",
  },
  {
    label: "Hauling",
    image: strategy02AfterHauling,
    alt: "After — hauling activity with focused route visibility",
  },
  {
    label: "Queueing",
    image: strategy02AfterQueueing,
    alt: "After — queueing screen with position and wait time",
  },
  {
    label: "Dumping",
    image: strategy02AfterDumping,
    alt: "After — dumping screen with progress and completion control",
  },
  {
    label: "Hauling empty",
    image: strategy02AfterHaulingEmpty,
    alt: "After — hauling empty with contextual alerts",
  },
] as const;

const OPERATIONAL_STATES = [
  {
    title: "Hauling state",
    items: ["Route visibility", "Navigation awareness", "Operational movement"],
    image: strategyHauling,
    alt: "Hauling activity screen with route and fleet visibility",
  },
  {
    title: "Queueing state",
    items: ["Queue position", "Estimated waiting time", "Operational readiness"],
    image: strategyQueueing,
    alt: "Queueing activity screen with queue position and wait time",
  },
  {
    title: "Dumping state",
    items: ["Dump progress", "Payload confirmation", "Completion control"],
    image: strategyDumping,
    alt: "Dumping activity screen with progress and slide-to-stop control",
  },
] as const;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ImpactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#A3E635]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ZoomableImage({
  src,
  alt,
  className = "",
  onZoom,
}: {
  src: string;
  alt: string;
  className?: string;
  onZoom: (src: string, alt: string) => void;
}) {
  return (
    <button
      type="button"
      className="group relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2"
      onClick={() => onZoom(src, alt)}
      aria-label={`View ${alt} larger`}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        className={`${className} transition-opacity group-hover:opacity-95`}
      />
    </button>
  );
}

export function FleetHeadUnitDetails() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const openZoom = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <>
    <div className="space-y-16 text-gray-700 leading-relaxed max-w-3xl mx-auto pb-12">
      <section className="font-serif">
        <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-normal">
          Redesigned a Fleet Management System to improve operational visibility,
          reduce navigation friction, and simplify monitoring workflows for logistics
          operators.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-200 font-sans text-sm">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">
              Platform
            </h4>
            <p className="font-bold text-[#1A1A1A]">Android Tablet</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">
              Role
            </h4>
            <p className="font-bold text-[#1A1A1A]">UI/UX Designer</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">
              Timeline
            </h4>
            <p className="font-bold text-[#1A1A1A]">1 Sprint</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">
              Scope
            </h4>
            <p className="font-bold text-[#1A1A1A]">UX Audit & Redesign</p>
          </div>
        </div>

        <p className="mt-8 text-sm font-sans text-gray-500">
          Tools: Figma, FigJam
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">
          Context
        </h3>
        <div className="space-y-6 font-serif text-lg">
          <p>
            The head unit played an important role in supporting drivers during daily
            operations. Drivers relied on it to access operational information, vehicle
            status, and trip-related updates while driving.
          </p>
          <p>
            Since drivers interacted with the system in high-attention situations,
            information needed to be easy to understand quickly and with minimal
            distraction — especially with the driver positioned on the left side of
            the truck.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">
          Problem statement
        </h3>
        <div className="space-y-8 font-serif text-lg">
          <p>
            The existing head unit interface primarily focused on the loading process
            and lacked clear adaptation across other operational phases such as
            queueing and dumping.
          </p>
          <p>
            Drivers struggled to quickly understand their current operational state due
            to unclear information hierarchy, excessive visual noise, and limited
            contextual awareness throughout the workflow.
          </p>
          <p>
            As operational activities changed, the interface continued displaying
            similar information patterns, making it difficult for drivers to recognize
            what information was most relevant to their current task.
          </p>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">
              Key issues identified
            </h4>
            <BulletList
              items={[
                "Unclear information hierarchy",
                "Difficult-to-scan layouts",
                "Low glanceability while driving",
                "Increased cognitive load",
              ]}
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">
          UX audit
        </h3>

        <div className="space-y-12 font-serif text-lg">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans">
              Audit finding 1 — Excessive information & mental load
            </h4>
            <p className="mb-6">
              During the loading process, drivers were exposed to too much operational
              information that was not relevant to their current task. The interface
              also required unnecessary mental calculations, such as interpreting loading
              progress manually from &ldquo;24/120 Ton&rdquo;.
            </p>

            <ZoomableImage
              src={auditFinding1Loading}
              alt="Loading activity screen with excessive operational information highlighted"
              className="mb-6 w-full rounded-xl border border-gray-200 shadow-sm"
              onZoom={openZoom}
            />

            <div className="mb-6 rounded-xl bg-white p-5 border border-gray-200">
              <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 font-sans">
                Key issues identified
              </h5>
              <BulletList
                items={[
                  "Important information lacked prioritization",
                  "Maps interaction was not relevant during loading activity",
                  "Header contained excessive information",
                  "Long messages reduced readability",
                  "Terminology such as \"Ritase 6\" was difficult to understand quickly",
                  "Drivers needed additional mental effort to interpret loading progress",
                ]}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 font-sans">
                  Design recommendation
                </h5>
                <p>
                  Simplified the loading experience by displaying only information
                  relevant to the loading process. Introduced a dedicated loading state
                  to improve clarity and reduce cognitive load.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 font-sans">
                  Expected impact
                </h5>
                <ImpactList
                  items={[
                    "Reduced cognitive load during loading activity",
                    "Faster information understanding",
                    "Improved operational focus",
                    "Reduced mental calculation effort",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans">
              Audit finding 2 — Lack of operational state awareness
            </h4>
            <p className="mb-4">
              The interface maintained similar layouts and information structures across
              different operational activities, making it difficult for drivers to
              clearly recognize their current operational state.
            </p>
            <p className="mb-6">
              Information hierarchy and visual patterns remained largely unchanged
              between loading, hauling, queueing, and dumping activities, reducing
              situational awareness during workflow transitions.
            </p>

            <ZoomableImage
              src={auditFinding2Hauling}
              alt="Hauling activity screen showing similar layout across operational states"
              className="mb-6 w-full rounded-xl border border-gray-200 shadow-sm"
              onZoom={openZoom}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 font-sans">
                  Design response
                </h5>
                <p>
                  Introduced dedicated operational states with clearer visual
                  differentiation and contextual information tailored to each operational
                  activity. The redesigned interface adapted content and visual focus
                  based on the driver&apos;s current workflow.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 font-sans">
                  Expected impact
                </h5>
                <ImpactList
                  items={[
                    "Improved operational clarity",
                    "Better situational awareness",
                    "Reduced confusion during workflow transitions",
                    "Faster recognition of active operational state",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">
          Design strategy
        </h3>

        <div className="space-y-12 font-serif text-lg">
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans">
              Strategy 01 — Context-aware operational states
            </h4>
            <p className="mb-4">
              <strong className="text-[#1A1A1A] font-sans">Challenge:</strong> The
              previous interface maintained similar layouts and information structures
              across operational workflows, making it difficult for drivers to
              understand their current activity.
            </p>
            <p className="mb-6">
              <strong className="text-[#1A1A1A] font-sans">Approach:</strong> Redesigned
              the interface to adapt layouts, information hierarchy, and operational
              focus based on the driver&apos;s current workflow. Each operational state
              was designed with different priorities and contextual information to
              better support real-world operational tasks.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {OPERATIONAL_STATES.map((state) => (
                <div
                  key={state.title}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
                >
                  <ZoomableImage
                    src={state.image}
                    alt={state.alt}
                    className="w-full border-b border-gray-200"
                    onZoom={openZoom}
                  />
                  <div className="p-5">
                    <h5 className="font-bold text-[#1A1A1A] mb-3 font-sans capitalize">
                      {state.title}
                    </h5>
                    <p className="text-sm text-gray-500 mb-2 font-sans">Focused on:</p>
                    <BulletList items={[...state.items]} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 font-sans">
                Outcome
              </h5>
              <ImpactList
                items={[
                  "Better situational awareness",
                  "Faster operational recognition",
                  "Improved workflow clarity",
                ]}
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans">
              Strategy 02 — Reducing cognitive load
            </h4>
            <p className="mb-4">
              <strong className="text-[#1A1A1A] font-sans">Challenge:</strong> Drivers
              were exposed to excessive operational information regardless of their
              current activity.
            </p>
            <p className="mb-6">
              <strong className="text-[#1A1A1A] font-sans">Approach:</strong> Reduced
              unnecessary information and prioritized only task-relevant content for
              each operational workflow. Simplified layouts and removed non-essential
              visual elements to improve focus during high-attention situations.
            </p>

            <div className="mb-8">
              <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 font-sans">
                Before &amp; After
              </h5>
              <p className="mb-4 text-sm text-gray-500 font-sans">
                Click any image to open a larger view
              </p>
              <div className="relative left-1/2 w-[100vw] max-w-[100vw] -translate-x-1/2 px-4 sm:px-8">
                <div className="mx-auto max-w-6xl space-y-8">
                  <figure className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                    <figcaption className="border-b border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#1A1A1A] font-sans lg:px-6 lg:py-4 lg:text-base">
                      Before
                    </figcaption>
                    <ZoomableImage
                      src={strategy02Before}
                      alt="Before — loading screen with excessive operational information"
                      className="w-full"
                      onZoom={openZoom}
                    />
                  </figure>

                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
                    <div className="border-b border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#1A1A1A] font-sans lg:px-6 lg:py-4 lg:text-base">
                      After
                    </div>
                    <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-2 xl:grid-cols-3">
                      {STRATEGY_02_AFTER_SCREENS.map((screen) => (
                        <figure
                          key={screen.label}
                          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                        >
                          <figcaption className="border-b border-gray-100 bg-gray-50 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-500 font-sans sm:text-sm">
                            {screen.label}
                          </figcaption>
                          <ZoomableImage
                            src={screen.image}
                            alt={screen.alt}
                            className="w-full"
                            onZoom={openZoom}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ImpactList
              items={[
                "Reduced cognitive effort",
                "Faster information scanning",
                "Improved operational focus",
              ]}
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      <section>
        <div className="rounded-lg border border-[#93b4e8] bg-[#eef4fc] p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 font-serif tracking-tight">
            Design impact
          </h3>
          <ImpactList
            items={[
              "Improved operational clarity across loading, hauling, queueing, and dumping activities",
              "Reduced cognitive load through simplified and contextual information",
              "Faster information recognition during high-attention situations",
              "Better workflow awareness with dedicated operational states",
              "Improved glanceability and scanability for drivers during daily operations",
            ]}
          />
        </div>
      </section>

      <section className="rounded-2xl bg-[#1A1A1A] p-8 md:p-10 text-[#F9FAFB] font-serif text-lg">
        <h3 className="text-2xl font-bold mb-4 font-sans tracking-tight">
          Reflection
        </h3>
        <p>
          This project reinforced the importance of designing contextual interfaces
          for operational workflows. By adapting information based on the driver&apos;s
          current activity, the experience became more focused, understandable, and
          operationally efficient.
        </p>
      </section>
    </div>

    {lightbox && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lightbox.alt}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-3 sm:p-6 backdrop-blur-sm"
        onClick={() => setLightbox(null)}
      >
        <button
          type="button"
          className="absolute top-4 right-4 z-10 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 transition-colors"
          onClick={() => setLightbox(null)}
          aria-label="Close enlarged image"
        >
          <X className="h-6 w-6" />
        </button>
        <img
          src={lightbox.src}
          alt={lightbox.alt}
          className="max-h-[94vh] max-w-[min(1920px,96vw)] h-auto w-auto object-contain select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />
      </div>
    )}
    </>
  );
}
