import { useState } from 'react';
import { DIFFERENTIATORS } from '../data/content';
import { GenerativeMesh } from './GenerativeMesh';
import { Target, Layers, Users2, LineChart, Shield, Check, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function WhySyscon() {
  const [showComparison, setShowComparison] = useState(false);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-5 h-5 text-[#B8E5FA]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[#B8E5FA]" />;
      case 2:
        return <Users2 className="w-5 h-5 text-[#B8E5FA]" />;
      case 3:
        return <LineChart className="w-5 h-5 text-[#B8E5FA]" />;
      default:
        return <Shield className="w-5 h-5 text-[#B8E5FA]" />;
    }
  };

  const comparisonData = [
    {
      metric: 'Technology Standard',
      traditional: 'Generic WordPress templates and bloated page builders',
      syscon: 'Custom headless architecture with sub-second performance and zero bloat',
    },
    {
      metric: 'IP Ownership',
      traditional: 'Vendor lock-in with restricted proprietary frameworks',
      syscon: '100% unencumbered client IP ownership upon contract settlement',
    },
    {
      metric: 'Team Composition',
      traditional: 'Junior outsourced contractors managed by junior account reps',
      syscon: 'Dedicated senior engineering & product partners with direct access',
    },
    {
      metric: 'Commercial Alignment',
      traditional: 'Billed on hours with misaligned scope-creep incentives',
      syscon: 'Fixed-outcome milestones tied directly to business KPIs',
    },
  ];

  return (
    <section id="why-syscon" className="py-24 sm:py-32 bg-[#0B1F3A] text-white relative overflow-hidden">
      {/* Interactive 3D Generative Mesh Torus on the right in dark mode */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] opacity-70 pointer-events-none overflow-hidden translate-x-20 lg:translate-x-10">
        <GenerativeMesh mode="torus" theme="dark" density={36} className="w-full h-full" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#2F80ED]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#B8E5FA] mb-4 sm:mb-6 select-none">
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
              <span className="text-slate-300 tracking-tight lowercase">
                the syscon advantage
              </span>
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            </div>

            <h2
              id="why-syscon-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.08] font-heading"
            >
              Built around your ambition
              <br />
              <span className="text-[#B8E5FA]">and commercial velocity</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end gap-4">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We reject agency bloat and superficial styling. Syscon Digital operates as an elite digital capability built specifically to give enterprise brands an enduring market edge.
            </p>

            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#102747] hover:bg-[#163863] text-[#B8E5FA] border border-[#1E3E6B] transition-all cursor-pointer"
            >
              <span>{showComparison ? 'Hide Framework Comparison' : 'Compare with Traditional Agency'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Traditional Agency vs Syscon Comparison Drawer */}
        {showComparison && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#102747]/90 border border-[#2F80ED]/50 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E3E6B]">
              <div>
                <span className="text-xs font-mono uppercase text-[#B8E5FA] font-bold">
                  Corporate Governance Comparison
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  Why Institutional Brands Upgrade to Syscon Digital
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowComparison(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {comparisonData.map((item) => (
                <div key={item.metric} className="p-4 rounded-2xl bg-[#0B1F3A]/70 border border-[#1E3E6B] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#B8E5FA] font-bold block mb-3">
                      {item.metric}
                    </span>
                    <div className="space-y-3">
                      <div className="text-xs text-slate-400 flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                      <div className="text-xs text-white flex items-start gap-2 pt-2 border-t border-[#1E3E6B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#B8E5FA]">{item.syscon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4 Differentiator Cards with Ambient Cyber Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.title}
              id={`differentiator-${index + 1}`}
              className="p-8 rounded-3xl bg-[#102747]/70 backdrop-blur-sm border border-[#1E3E6B] hover:border-[#B8E5FA]/70 hover:bg-[#102747] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] border border-[#1E3E6B] group-hover:border-[#B8E5FA] flex items-center justify-center transition-colors shadow-2xs">
                    {getIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B8E5FA] bg-[#0B1F3A] px-3 py-1 rounded-full border border-[#1E3E6B]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[#B8E5FA] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-8">
                  {diff.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E3E6B] flex items-center justify-between text-xs text-[#B8E5FA]">
                <span className="font-semibold">{diff.metric}</span>
                <span className="w-6 h-6 rounded-full bg-[#0B1F3A] border border-[#1E3E6B] flex items-center justify-center text-[#2F80ED]">
                  <Check className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
