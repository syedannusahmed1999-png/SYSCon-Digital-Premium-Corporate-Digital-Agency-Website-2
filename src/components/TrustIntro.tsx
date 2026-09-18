import { useState } from 'react';
import { TRUST_BENEFITS } from '../data/content';
import { Compass, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Activity, Terminal, CheckCircle2, Zap } from 'lucide-react';

export function TrustIntro() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#2F80ED]' };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[380px] h-[380px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2F80ED]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header with Signature Eyebrow Bars */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight lowercase">
              corporate engineering architecture
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          <h2
            id="trust-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] mb-6 font-heading"
          >
            Technology engineered for
            <br />
            <span className="text-[#2F80ED]">institutional performance</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
            Syscon Digital operates at the convergence of high-availability enterprise architecture, human-centric design, and commercial market acceleration.
          </p>
        </div>

        {/* High-Craft Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
          {/* Main Hero Bento Card (7 Cols): Strategic Digital Core */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-[0_20px_45px_rgba(47,128,237,0.07)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-full bg-[#EAF6FC] border border-[#B8E5FA] flex items-center justify-center text-[#2F80ED]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-semibold block">
                      Autonomous Ecosystem
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] font-heading">
                      Strategic Architecture & Scale
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono bg-[#FAFCFF] border border-[#DCE7EF] px-3 py-1 rounded-full text-[#526477]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>99.99% latency optimal</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#526477] leading-relaxed mb-8 font-normal max-w-xl">
                We design digital products that survive enterprise scale. Every interaction, data pipeline, and visual micro-state is engineered to convert executive stakeholders and sustain high-volume transactional workloads.
              </p>

              {/* Interactive Telemetry Node Board inside card */}
              <div className="bg-[#FAFCFF] rounded-2xl p-5 border border-[#DCE7EF] mb-8 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#526477] pb-2 border-b border-[#DCE7EF]/60">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#2F80ED]" />
                    <span>syscon.architecture.cluster</span>
                  </span>
                  <span className="text-[#2F80ED] font-semibold">ONLINE</span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="bg-white p-3 rounded-xl border border-[#DCE7EF]">
                    <div className="text-[11px] text-[#526477]">Response Time</div>
                    <div className="text-lg font-bold text-[#0B1F3A] font-mono">14ms</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#DCE7EF]">
                    <div className="text-[11px] text-[#526477]">Global Nodes</div>
                    <div className="text-lg font-bold text-[#0B1F3A] font-mono">32 Hubs</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#DCE7EF]">
                    <div className="text-[11px] text-[#526477]">Audit Score</div>
                    <div className="text-lg font-bold text-[#2F80ED] font-mono">100/100</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row with Signature Pill CTA */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-[#526477]">
                Verified against ISO 27001 & SOC-2 corporate security frameworks.
              </span>

              <div className="w-8 h-8 rounded-full bg-[#EAF6FC] text-[#2F80ED] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Secondary Bento Card (5 Cols): Performance Multiplier */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Upper Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-[0_20px_45px_rgba(47,128,237,0.07)] transition-all duration-300 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF6FC] border border-[#B8E5FA] flex items-center justify-center text-[#2F80ED]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#2F80ED] bg-[#FAFCFF] px-2.5 py-1 rounded-full border border-[#DCE7EF]">
                    Grade A Speed
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-heading">
                  Sub-Second Digital Velocity
                </h3>

                <p className="text-sm text-[#526477] leading-relaxed font-normal mb-4">
                  Corporate platforms built with zero bloated code, ensuring instant page-load responsiveness across mobile, tablet, and ultra-wide displays.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
                <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" />
                <span>99+ Google Lighthouse Benchmark</span>
              </div>
            </div>

            {/* Lower Card */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl p-7 sm:p-8 border border-[#1E3E6B] flex flex-col justify-between flex-1 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#102747] border border-[#1E3E6B] flex items-center justify-center text-[#B8E5FA]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#B8E5FA] bg-[#102747] px-2.5 py-1 rounded-full border border-[#1E3E6B]">
                    Strict NDA
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  Institutional Governance
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Complete IP ownership transferred directly to your organization. Dedicated partner squads, weekly sprint demos, and transparent code repositories.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#1E3E6B] flex items-center justify-between text-xs text-[#B8E5FA]">
                <span>100% Client-Owned Intellectual Property</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Advantage Pillars matching original content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl bg-white border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAFCFF] border border-[#DCE7EF] group-hover:border-[#B8E5FA] flex items-center justify-center transition-colors">
                  {getIcon(benefit.icon)}
                </div>
                <span className="text-xs font-mono font-medium text-[#526477]">
                  0{index + 1}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#0B1F3A] mb-2 font-heading group-hover:text-[#2F80ED] transition-colors">
                {benefit.title}
              </h4>

              <p className="text-xs text-[#526477] leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
