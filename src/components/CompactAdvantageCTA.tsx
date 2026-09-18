import { ArrowRight } from 'lucide-react';
import { MicroTechStripVisual } from './MicroTechStripVisual';

interface CompactAdvantageCTAProps {
  onOpenContact: () => void;
}

export function CompactAdvantageCTA({ onOpenContact }: CompactAdvantageCTAProps) {
  return (
    <section
      aria-label="Commercial Advantage CTA"
      id="cta-advantage"
      className="bg-gradient-to-r from-[#0A2244] via-[#103666] to-[#091E3B] border-y border-[#1D4A85] text-white py-12 sm:py-16 relative overflow-hidden shadow-inner"
    >
      {/* Subtle ambient cyan & electric blue sheen */}
      <div className="absolute left-1/4 top-0 w-96 h-full bg-[#B8E5FA]/10 blur-3xl pointer-events-none" />
      <div className="absolute right-12 bottom-0 w-72 h-full bg-[#2F80ED]/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Bold Heading, Supporting Subheading, and Visible Button */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Subtle Eyebrow Accent */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#B8E5FA] mb-3 uppercase tracking-wider select-none self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8E5FA] animate-pulse shadow-[0_0_8px_#B8E5FA]" />
              <span>Category Advantage & Growth</span>
            </div>

            {/* Clear, Bold Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-tight leading-[1.18] font-heading mb-3">
              Let’s build your next advantage.
            </h3>

            {/* Supporting Subheading */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
              Turn your commercial ambitions into technology that moves your business forward.
            </p>

            {/* Visible Blue Accent CTA Button */}
            <div className="self-start">
              <button
                onClick={onOpenContact}
                type="button"
                id="compact-advantage-btn"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-[0_4px_18px_rgba(47,128,237,0.45)] hover:shadow-[0_8px_26px_rgba(47,128,237,0.55)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Start a conversation</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#2F80ED] flex items-center justify-center shrink-0 shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Animated Technology Illustration */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[340px] rounded-2xl bg-white/[0.04] border border-[#23589B]/80 p-4 backdrop-blur-xs flex flex-col items-center justify-center shadow-inner">
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#B8E5FA] mb-1 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8E5FA] animate-pulse" />
                  Growth Vector
                </span>
                <span className="text-slate-300">+3.8x ROI</span>
              </div>
              <MicroTechStripVisual variant="advantage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
