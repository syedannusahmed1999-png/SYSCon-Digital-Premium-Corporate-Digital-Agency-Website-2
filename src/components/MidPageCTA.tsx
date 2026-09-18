import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GrowthNetworkVisual } from './GrowthNetworkVisual';

interface MidPageCTAProps {
  onOpenContact: () => void;
  onExploreSolutions: () => void;
}

export function MidPageCTA({ onOpenContact, onExploreSolutions }: MidPageCTAProps) {
  return (
    <section
      id="growth-cta"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#07162C] border-y border-[#1E3E6B] text-white"
    >
      {/* Dynamic ambient radial glows matching dark brand palette */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#2F80ED]/20 rounded-full blur-[130px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-8 right-12 w-[600px] h-[600px] bg-[#B8E5FA]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-4 left-1/3 w-[450px] h-[450px] bg-[#2F80ED]/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Large, Spacious Premium Card with Dark Brand Navy (#0B1F3A) & Glowing Border */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0B1F3A] border border-[#1E3E6B] p-8 sm:p-14 lg:p-20 shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden">
          {/* Subtle top inner gradient sheen */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] via-transparent to-[#B8E5FA]/[0.05] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Prominent Conversion Copy & Primary Action */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Signature Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#B8E5FA] mb-6 select-none self-start bg-white/5 border border-[#1E3E6B] px-3.5 py-1.5 rounded-full shadow-2xs">
                <span className="w-2 h-2 bg-[#2F80ED] rounded-full inline-block animate-pulse" />
                <span className="text-slate-300 tracking-tight uppercase font-mono text-[11px]">
                  Commercial Acceleration & Scale
                </span>
                <span className="w-1.5 h-1.5 bg-[#B8E5FA] rounded-full inline-block" />
              </div>

              {/* Large, High-Impact Heading */}
              <h2
                id="mid-cta-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-[-0.04em] leading-[1.06] mb-6 font-heading"
              >
                Let’s turn your ambition
                <br />
                <span className="text-[#B8E5FA]">into measurable growth.</span>
              </h2>

              {/* Prominent Supporting Copy */}
              <p
                id="mid-cta-copy"
                className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-xl"
              >
                Ready to build smarter systems, unlock efficiency, and move your business forward?
              </p>

              {/* Action Area: Prominent Blue Primary Button + Secondary Link */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-10">
                <button
                  id="mid-cta-primary-btn"
                  onClick={onOpenContact}
                  type="button"
                  className="inline-flex items-center gap-3.5 pl-7 pr-2.5 py-3 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-base font-semibold tracking-wide transition-all shadow-[0_6px_24px_rgba(47,128,237,0.45)] hover:shadow-[0_10px_32px_rgba(47,128,237,0.55)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <span className="w-9 h-9 rounded-full bg-white text-[#2F80ED] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  id="mid-cta-secondary-link"
                  onClick={onExploreSolutions}
                  type="button"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#B8E5FA] transition-colors py-2 px-2 cursor-pointer"
                >
                  <span className="underline decoration-[#2F80ED] group-hover:decoration-[#B8E5FA] underline-offset-4 transition-colors">
                    Explore our solutions
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2F80ED] group-hover:text-[#B8E5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Enterprise Assurance Indicators */}
              <div className="pt-8 border-t border-[#1E3E6B] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#B8E5FA] shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-white">Proven ROI & Velocity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#B8E5FA] shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-white">Enterprise SLA Security</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#B8E5FA] shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-white">Custom Tech Stack</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Animated Technology Illustration with Floating Motion & Glowing Nodes */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="w-full max-w-[520px] relative">
                <GrowthNetworkVisual theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
