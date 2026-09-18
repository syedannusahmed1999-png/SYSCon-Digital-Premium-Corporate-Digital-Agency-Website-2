import { ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { BreakthroughMatrixVisual } from './BreakthroughMatrixVisual';

interface FinalCTAProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export function FinalCTA({ onOpenContact, onExploreServices }: FinalCTAProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-[#DCE7EF]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#0B1F3A] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-[#1E3E6B]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#2F80ED]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#B8E5FA]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Supporting Text, and Action Buttons */}
            <div className="lg:col-span-7 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#B8E5FA] mb-6 select-none">
                <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
                <span className="text-slate-300 tracking-tight lowercase">
                  initiate enterprise engagement
                </span>
                <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
              </div>

              {/* Exact Requested Heading */}
              <h2
                id="final-cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-6 font-heading"
              >
                Let’s engineer your next
                <br />
                <span className="text-[#B8E5FA]">commercial breakthrough.</span>
              </h2>

              {/* Exact Requested Supporting Text */}
              <p
                id="final-cta-supporting-text"
                className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-xl"
              >
                Tell us where you want to go. We’ll help you build the technology and systems to get there.
              </p>

              {/* Action Buttons: Primary "Start your project →" & Secondary "Talk to our team" */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  id="final-cta-primary-btn"
                  onClick={onOpenContact}
                  type="button"
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_4px_16px_rgba(47,128,237,0.4)] hover:shadow-[0_6px_22px_rgba(47,128,237,0.5)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start your project</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#2F80ED] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  id="final-cta-secondary-btn"
                  onClick={onOpenContact}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/20 hover:border-white/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#B8E5FA]" />
                  <span>Talk to our team</span>
                </button>
              </div>

              {/* Enterprise Guarantees Pills */}
              <div className="pt-8 border-t border-[#1E3E6B] flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8E5FA]" />
                  <span>Executive Response Under 2 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8E5FA]" />
                  <span>Mutual Non-Disclosure Agreement Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" />
                  <span>100% Unencumbered IP Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Animated Abstract Technology Visual with Glowing Nodes & Flowing Lines */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="w-full max-w-[480px]">
                <BreakthroughMatrixVisual />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
