import { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowRight, CheckCircle2, X, ExternalLink, Sparkles, TrendingUp, Monitor, Shield, Layers } from 'lucide-react';

export function CaseStudies() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const featured = CASE_STUDIES[selectedCaseIdx];

  return (
    <section id="work" className="py-20 sm:py-28 bg-white border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
              <span className="text-[#526477] tracking-tight lowercase">
                selected enterprise engagements
              </span>
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            </div>

            <h2
              id="case-studies-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] font-heading mb-4"
            >
              Work engineered for
              <br />
              <span className="text-[#2F80ED]">category leadership</span>
            </h2>

            <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
              Explore how we engineer digital ecosystems that enhance enterprise authority, streamline operational velocity, and convert institutional buyers.
            </p>
          </div>

          {/* Quick Case Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FAFCFF] border border-[#DCE7EF] rounded-full self-start lg:self-end">
            {CASE_STUDIES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setSelectedCaseIdx(i)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all lowercase cursor-pointer ${
                  selectedCaseIdx === i
                    ? 'bg-[#2F80ED] text-white shadow-xs'
                    : 'text-[#526477] hover:text-[#0B1F3A]'
                }`}
              >
                0{i + 1} {c.industry.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Showcase */}
        <div className="mb-14 rounded-[36px] bg-[#FAFCFF] border border-[#DCE7EF] hover:border-[#B8E5FA] p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F80ED] bg-white border border-[#B8E5FA] px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#526477] font-medium">
                    {featured.clientPlaceholder}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 font-heading leading-tight">
                  {featured.title}
                </h3>

                <p className="text-base text-[#526477] leading-relaxed mb-8 font-normal">
                  {featured.shortDescription}
                </p>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {featured.results.map((res) => (
                    <div key={res.label} className="bg-white p-4 rounded-2xl border border-[#DCE7EF]">
                      <div className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-heading">
                        {res.metric}
                      </div>
                      <div className="text-xs text-[#526477] mt-1 font-medium leading-tight">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(featured)}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_2px_10px_rgba(47,128,237,0.3)] cursor-pointer"
                >
                  <span>read full executive case study</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#2F80ED] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Interactive Visual Simulation Column */}
            <div className="lg:col-span-6">
              <div
                className={`w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${featured.visualAccent} p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl`}
              >
                {/* Simulated Glass Browser Interface */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B8E5FA]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2F80ED]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="text-[11px] font-mono text-white/70 ml-2">syscon.production.preview</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-black/30 px-2.5 py-0.5 rounded-full">
                    99.98% SLA
                  </span>
                </div>

                {/* Dashboard Visualization Mockup */}
                <div className="relative z-10 my-auto p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#B8E5FA]" />
                      <span className="text-xs font-bold text-white tracking-wide">Enterprise Revenue Velocity</span>
                    </div>
                    <span className="text-xs font-mono text-[#B8E5FA] font-bold">+184.2%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-black/20 p-3 rounded-xl">
                      <div className="text-[10px] text-white/60">Core Web Vitals</div>
                      <div className="text-lg font-bold text-white">99 / 100</div>
                    </div>
                    <div className="bg-black/20 p-3 rounded-xl">
                      <div className="text-[10px] text-white/60">Global Latency</div>
                      <div className="text-lg font-bold text-[#B8E5FA]">18ms Avg</div>
                    </div>
                  </div>

                  {/* Sparkline Bar Mock */}
                  <div className="flex items-end gap-1.5 h-12 pt-2">
                    {[35, 45, 40, 60, 55, 75, 70, 85, 90, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#2F80ED] to-[#B8E5FA] rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-white/70 font-mono">
                  <span>Architecture: Headless TypeScript & Edge CDN</span>
                  <span>Verified 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Case Study Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              onClick={() => setActiveCaseStudy(study)}
              className="group bg-[#FAFCFF] hover:bg-white rounded-3xl border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-[0_24px_50px_rgba(47,128,237,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div
                  className={`relative w-full aspect-[16/10] bg-gradient-to-br ${study.visualAccent} p-6 flex flex-col justify-between`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 lowercase">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#B8E5FA]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 text-[11px] font-medium text-slate-300 mt-auto">
                    {study.clientPlaceholder}
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-xs font-semibold text-[#2F80ED] uppercase tracking-wider mb-2">
                    {study.industry}
                  </div>

                  <h4 className="text-xl font-bold text-[#0B1F3A] group-hover:text-[#2F80ED] transition-colors mb-3 font-heading leading-snug">
                    {study.title}
                  </h4>

                  <p className="text-sm text-[#526477] font-normal leading-relaxed mb-6">
                    {study.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white border border-[#DCE7EF] mb-2">
                    {study.results.slice(0, 2).map((res) => (
                      <div key={res.label}>
                        <div className="text-lg font-bold text-[#0B1F3A] font-heading">
                          {res.metric}
                        </div>
                        <div className="text-[11px] text-[#526477]">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#DCE7EF]/60">
                <span className="text-xs font-semibold text-[#0B1F3A] group-hover:text-[#2F80ED] transition-colors lowercase">
                  inspect case study
                </span>
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#2F80ED] text-[#526477] group-hover:text-white border border-[#DCE7EF] group-hover:border-[#2F80ED] flex items-center justify-center transition-all duration-200 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div
          id="case-study-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#0B1F3A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveCaseStudy(null)}
        >
          <div
            id="case-study-modal-content"
            className="bg-white rounded-[32px] max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#DCE7EF] my-8 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCaseStudy(null)}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full text-[#526477] hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] block mb-2">
              {activeCaseStudy.category} • {activeCaseStudy.industry}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-2 font-heading">
              {activeCaseStudy.title}
            </h3>

            <p className="text-xs text-[#526477] font-mono mb-6">
              {activeCaseStudy.clientPlaceholder}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {activeCaseStudy.results.map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-[#FAFCFF] border border-[#B8E5FA] text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-heading">
                    {item.metric}
                  </div>
                  <div className="text-xs font-medium text-[#526477] mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                  The Enterprise Challenge
                </h4>
                <p className="text-sm sm:text-base text-[#526477] leading-relaxed font-normal">
                  {activeCaseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                  Strategic Solution & Architecture
                </h4>
                <p className="text-sm sm:text-base text-[#526477] leading-relaxed font-normal">
                  {activeCaseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                  Delivered Workstreams
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCaseStudy.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-[#0B1F3A]">
                      <CheckCircle2 className="w-4 h-4 text-[#2F80ED] flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pt-6 border-t border-[#DCE7EF]">
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#163863] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
