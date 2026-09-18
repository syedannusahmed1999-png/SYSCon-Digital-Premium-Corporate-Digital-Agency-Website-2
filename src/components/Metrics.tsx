import { METRICS_DATA } from '../data/content';
import { Layers, Building2, Users, Handshake, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Metrics() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <Layers className="w-5 h-5 text-[#2F80ED]" />;
      case 'industries':
        return <Building2 className="w-5 h-5 text-[#2F80ED]" />;
      case 'digital-experiences':
        return <Users className="w-5 h-5 text-[#2F80ED]" />;
      case 'client-partnerships':
        return <Handshake className="w-5 h-5 text-[#2F80ED]" />;
      default:
        return <Layers className="w-5 h-5 text-[#2F80ED]" />;
    }
  };

  const benchmarks = [
    { label: 'Uptime SLA Commitment', value: '99.99%', note: 'Guaranteed by contract' },
    { label: 'Avg. Client Retention', value: '94%', note: 'Multi-year retained partner squads' },
    { label: 'Security & Code Audit Pass', value: '100%', note: 'Zero critical vulnerabilities' },
    { label: 'Speed Index Improvement', value: '3.4x', note: 'Measured against legacy baseline' },
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-white border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight lowercase">
              measurable institutional impact
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          <h2
            id="metrics-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] font-heading mb-4"
          >
            Engineered for commercial
            <br />
            <span className="text-[#2F80ED]">and operational velocity</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
            We quantify success through institutional durability, transaction throughput, and enterprise market acceleration.
          </p>
        </div>

        {/* 4 Big Metrics Cards with Soft Blue-Tinted Alternative Treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METRICS_DATA.map((metric) => (
            <div
              key={metric.id}
              id={`metric-item-${metric.id}`}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#EDF5FD] via-[#F4F8FD] to-[#E6F1FA] border border-[#CCE3F5] hover:border-[#2F80ED]/50 shadow-[0_4px_20px_rgba(47,128,237,0.06)] hover:shadow-[0_16px_40px_rgba(47,128,237,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top inner gradient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/95 border border-[#CCE3F5] group-hover:border-[#2F80ED] group-hover:bg-white flex items-center justify-center transition-all shadow-2xs">
                    {getIcon(metric.id)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#2F80ED] bg-white/90 border border-[#BCDDF3] px-2.5 py-0.5 rounded-full font-semibold shadow-2xs">
                    Audited
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-2 font-heading group-hover:text-[#2F80ED] transition-colors">
                  {metric.value}
                </div>

                <div className="text-sm font-bold text-[#0B1F3A] mb-2 font-heading">
                  {metric.label}
                </div>

                <p className="text-xs text-[#526477] leading-relaxed font-normal">
                  {metric.subtext}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#CCE3F5]/80 flex items-center gap-1.5 text-xs text-[#2F80ED] font-semibold relative z-10">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Verified track record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Governance Benchmarks Strip */}
        <div className="bg-gradient-to-r from-[#EDF5FD]/90 via-[#F4F8FD]/90 to-[#EDF5FD]/90 rounded-3xl p-8 border border-[#CCE3F5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarks.map((b) => (
            <div key={b.label} className="border-l-2 border-[#2F80ED] pl-4">
              <div className="text-2xl font-bold text-[#0B1F3A] font-heading mb-1">
                {b.value}
              </div>
              <div className="text-xs font-semibold text-[#0B1F3A] mb-0.5">
                {b.label}
              </div>
              <div className="text-[11px] text-[#526477]">
                {b.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
