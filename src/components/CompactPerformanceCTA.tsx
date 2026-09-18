import { ArrowRight } from 'lucide-react';
import { MicroTechStripVisual } from './MicroTechStripVisual';

interface CompactPerformanceCTAProps {
  onExploreSolutions: () => void;
}

export function CompactPerformanceCTA({ onExploreSolutions }: CompactPerformanceCTAProps) {
  return (
    <section
      aria-label="Institutional Performance CTA"
      id="cta-performance"
      className="bg-[#0B1F3A] border-y border-[#1E3E6B] text-white py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Ambient gradient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0E274A] to-[#0B1F3A] pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-96 h-full bg-[#2F80ED]/15 blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-64 h-full bg-[#B8E5FA]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Bold Heading, Supporting Subheading, and Visible Button */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Subtle Eyebrow Accent */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#B8E5FA] mb-3 uppercase tracking-wider select-none self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] animate-pulse" />
              <span>Operational Velocity & Infrastructure</span>
            </div>

            {/* Clear, Bold Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-tight leading-[1.18] font-heading mb-3">
              Ready to engineer better performance?
            </h3>

            {/* Supporting Subheading */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Build smarter systems that improve efficiency, strengthen operations, and create lasting value.
            </p>

            {/* Visible Blue Accent CTA Button */}
            <div className="self-start">
              <button
                onClick={onExploreSolutions}
                type="button"
                id="compact-performance-btn"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-[0_4px_18px_rgba(47,128,237,0.45)] hover:shadow-[0_8px_26px_rgba(47,128,237,0.55)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Explore our solutions</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#2F80ED] flex items-center justify-center shrink-0 shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Animated Technology Illustration with Flowing Lines & Nodes */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[340px] rounded-2xl bg-white/[0.03] border border-[#1E3E6B]/70 p-4 backdrop-blur-xs flex flex-col items-center justify-center shadow-inner">
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#B8E5FA]/80 mb-1 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] animate-pulse" />
                  Signal Sync
                </span>
                <span className="text-slate-400">99.98% SLA</span>
              </div>
              <MicroTechStripVisual variant="performance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
