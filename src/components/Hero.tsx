import { GenerativeMesh } from './GenerativeMesh';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export function Hero({ onOpenContact, onExploreServices }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center pt-8 pb-20 sm:pt-14 sm:pb-28 overflow-hidden"
    >
      {/* 3D Generative Mesh Particle Sphere on the left / background matching the reference image */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-start pointer-events-none">
        <GenerativeMesh className="w-full h-full max-w-[850px] max-h-[850px] opacity-85 -translate-x-12 sm:-translate-x-20 md:translate-x-0" />
      </div>

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#B8E5FA]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#EAF6FC]/70 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-3xl ml-auto lg:mr-4">
          {/* Distinctive Eyebrow Tag with Vertical Accent Bars (matching the reference image: "| awarded the most influential company |") */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-6 sm:mb-8 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight">
              awarded the most innovative digital solutions partner of 2024
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          {/* High-Impact Headline (matching the exact typography scale and two-line color contrast from reference) */}
          <h1
            id="hero-main-heading"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.06] mb-6 sm:mb-8 font-heading"
          >
            Where digital tech
            <br />
            <span className="text-[#2F80ED]">meets business growth</span>
          </h1>

          {/* Clean, Refined Supporting Text */}
          <p
            id="hero-supporting-copy"
            className="text-base sm:text-lg md:text-xl text-[#526477] font-normal leading-relaxed max-w-xl mb-9 sm:mb-11"
          >
            Syscon Digital offers the highest quality digital solutions and enterprise engineering in the area of technology, strategy, and business.
          </p>

          {/* Primary Action Button (Sleek capsule pill with circular arrow badge) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-pill-cta"
              onClick={onOpenContact}
              type="button"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_4px_16px_rgba(47,128,237,0.3)] hover:shadow-[0_6px_22px_rgba(47,128,237,0.4)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>learn more</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#2F80ED] flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button
              id="hero-secondary-pill"
              onClick={onExploreServices}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 hover:bg-white text-[#0B1F3A] text-sm font-medium border border-[#DCE7EF] hover:border-[#B8E5FA] transition-all"
            >
              <span>our capabilities</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#2F80ED]" />
            </button>
          </div>

          {/* Minimalist Credibility Metrics Row */}
          <div className="mt-14 pt-8 border-t border-[#DCE7EF]/60 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A] font-heading">
                140<span className="text-[#2F80ED]">+</span>
              </div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">
                projects delivered
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A] font-heading">
                99.9<span className="text-[#2F80ED]">%</span>
              </div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">
                system reliability
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A] font-heading">
                $45M<span className="text-[#2F80ED]">+</span>
              </div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">
                client value created
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
