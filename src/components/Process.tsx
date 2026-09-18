import { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  const sprintDurations = [
    'Weeks 1–2 // Stakeholder Discovery',
    'Weeks 3–4 // Strategic Blueprint',
    'Weeks 5–7 // High-Fidelity UX & Systems',
    'Weeks 8–11 // Full-Stack Engineering',
    'Week 12+ // Continuous Growth & SLA',
  ];

  const signoffGates = [
    'Executive Charter & Requirement Sign-off',
    'Technical Architecture & Security Approval',
    'Interactive Prototype & Brand Standards Approval',
    'QA Automation & Staging Penetration Clearance',
    'Production Launch & 24/7 Monitoring Sign-off',
  ];

  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight lowercase">
              delivery framework & timeline
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] font-heading mb-4"
          >
            From strategic vision
            <br />
            <span className="text-[#2F80ED]">to enterprise deployment</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
            Our disciplined five-stage delivery framework ensures every corporate engagement transitions smoothly from strategic ambition to measurable commercial reality.
          </p>
        </div>

        {/* Desktop Process Horizontal Steps with Smooth Connecting Line */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting line */}
          <div className="absolute top-6 left-12 right-12 h-[2px] bg-[#DCE7EF] -z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  type="button"
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-13 h-13 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-[#2F80ED] text-white border-[#2F80ED] shadow-[0_4px_16px_rgba(47,128,237,0.4)] scale-110'
                        : isPassed
                        ? 'bg-white text-[#2F80ED] border-[#2F80ED]'
                        : 'bg-white text-[#526477] border-[#DCE7EF] group-hover:border-[#2F80ED]'
                    }`}
                  >
                    {step.number}
                  </div>

                  <span
                    className={`mt-4 text-base font-bold transition-colors font-heading ${
                      isActive ? 'text-[#0B1F3A]' : 'text-[#526477] group-hover:text-[#0B1F3A]'
                    }`}
                  >
                    {step.title}
                  </span>

                  <span className="text-xs text-[#526477] mt-0.5 font-normal lowercase">
                    {step.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Inspector Card */}
        <div className="hidden lg:block bg-white rounded-[32px] p-8 lg:p-12 border border-[#DCE7EF] shadow-lg">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-[#2F80ED] bg-[#EAF6FC] px-3 py-1 rounded-full border border-[#B8E5FA] uppercase tracking-wider">
                  Phase {currentStep.number} // {currentStep.subtitle}
                </span>

                <span className="text-xs text-[#526477] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2F80ED]" />
                  <span>{sprintDurations[activeStepIndex]}</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 font-heading">
                {currentStep.title}
              </h3>

              <p className="text-base text-[#526477] leading-relaxed mb-8 font-normal max-w-xl">
                {currentStep.description}
              </p>

              {/* Executive Sign-off Gate Pill */}
              <div className="p-4 rounded-2xl bg-[#FAFCFF] border border-[#DCE7EF] mb-8 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2F80ED] flex-shrink-0" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#526477] block font-semibold">
                    Governance Sign-Off Gate
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B1F3A]">
                    {signoffGates[activeStepIndex]}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className="px-5 py-2.5 text-xs font-semibold rounded-full border border-[#DCE7EF] text-[#526477] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAFCFF] transition-all cursor-pointer"
                >
                  Previous Phase
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-full bg-[#2F80ED] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#206cd4] transition-all cursor-pointer shadow-sm"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Deliverables Panel */}
            <div className="col-span-5 bg-[#FAFCFF] p-8 rounded-3xl border border-[#DCE7EF] shadow-2xs">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Phase Artifacts & Deliverables
                </h4>
                <span className="text-xs text-[#2F80ED] font-semibold">
                  {currentStep.deliverables.length} Key Outputs
                </span>
              </div>

              <div className="space-y-3.5">
                {currentStep.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#0B1F3A] bg-white p-3.5 rounded-xl border border-[#DCE7EF]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="bg-white rounded-2xl p-6 border border-[#DCE7EF] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-[#2F80ED] text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0B1F3A] font-heading">{step.title}</h3>
                  <div className="text-xs text-[#526477]">{step.subtitle} • {sprintDurations[idx].split(' // ')[0]}</div>
                </div>
              </div>
              <p className="text-sm text-[#526477] mb-4 leading-relaxed font-normal">
                {step.description}
              </p>
              <div className="space-y-2 pt-3 border-t border-[#DCE7EF]">
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-[#0B1F3A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F80ED]" />
                    <span className="font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
