import { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import {
  Monitor,
  Search,
  BarChart3,
  Palette,
  ShoppingBag,
  Cpu,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  Layers,
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export function Services({ onSelectServiceForInquiry }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'all disciplines' },
    { id: 'engineering', label: 'engineering & platforms' },
    { id: 'growth', label: 'growth & strategy' },
    { id: 'creative', label: 'brand & identity' },
  ];

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#2F80ED]' };
    switch (iconName) {
      case 'Monitor':
        return <Monitor {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      default:
        return <Monitor {...props} />;
    }
  };

  const getServiceCategory = (id: string) => {
    if (id === 'web-design-dev' || id === 'custom-digital') return 'engineering';
    if (id === 'seo-search' || id === 'digital-marketing' || id === 'ecommerce') return 'growth';
    return 'creative';
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filterCategory === 'all') return true;
    return getServiceCategory(s.id) === filterCategory;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header with Signature Eyebrow Bars */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
              <span className="text-[#526477] tracking-tight lowercase">
                solutions & capabilities
              </span>
              <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            </div>

            <h2
              id="services-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] font-heading mb-4"
            >
              Solutions designed around
              <br />
              <span className="text-[#2F80ED]">your commercial ambition</span>
            </h2>

            <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
              From mission-critical web applications to growth-focused digital acquisition pipelines, we deliver enterprise-grade systems that perform.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FAFCFF] border border-[#DCE7EF] rounded-full self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                type="button"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all lowercase cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#2F80ED] text-white shadow-xs'
                    : 'text-[#526477] hover:text-[#0B1F3A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Grid with Premium Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group bg-[#FAFCFF] hover:bg-white rounded-3xl p-8 border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-[0_24px_50px_rgba(47,128,237,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              <div>
                {/* Header row with Icon, Badge, and Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DCE7EF] group-hover:border-[#B8E5FA] group-hover:bg-[#EAF6FC] flex items-center justify-center transition-all shadow-2xs">
                    {renderIcon(service.icon)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-[#2F80ED] bg-white border border-[#B8E5FA] px-3 py-1 rounded-full lowercase">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-[#526477]/60">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] group-hover:text-[#2F80ED] transition-colors mb-3 font-heading">
                  {service.title}
                </h3>

                <p className="text-sm text-[#526477] leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>

                {/* Deliverables Checklist with custom blue dots */}
                <div className="space-y-2 mb-8 bg-white p-4 rounded-2xl border border-[#DCE7EF]/70 group-hover:border-[#DCE7EF]">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-[#0B1F3A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] flex-shrink-0" />
                      <span className="truncate font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row with Capsule Button & Circular Arrow Badge */}
              <div className="pt-4 border-t border-[#DCE7EF]/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1F3A] group-hover:text-[#2F80ED] transition-colors lowercase">
                  view full specification
                </span>
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#2F80ED] text-[#526477] group-hover:text-white border border-[#DCE7EF] group-hover:border-[#2F80ED] flex items-center justify-center transition-all duration-200 shadow-2xs">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal with High-End Specification Presentation */}
      {selectedService && (
        <div
          id="service-detail-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#0B1F3A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            id="service-detail-modal"
            className="bg-white rounded-[32px] max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-[#DCE7EF] my-8 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full text-[#526477] hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF6FC] border border-[#B8E5FA] flex items-center justify-center text-[#2F80ED]">
                {renderIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED]">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-heading">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#526477] leading-relaxed mb-6 font-normal">
              {selectedService.fullDescription}
            </p>

            <div className="mb-6 p-5 rounded-2xl bg-[#FAFCFF] border border-[#B8E5FA]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F80ED] font-bold block mb-1">
                Target Business Impact
              </span>
              <p className="text-sm text-[#0B1F3A] font-semibold">
                {selectedService.businessOutcome}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B1F3A] font-bold mb-3">
                Core Deliverables Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-2.5 text-sm text-[#526477] bg-[#FAFCFF] p-3 rounded-xl border border-[#DCE7EF]">
                    <CheckCircle2 className="w-4 h-4 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-[#0B1F3A]">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#DCE7EF]">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-sm font-semibold text-[#526477] hover:text-[#0B1F3A] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForInquiry(title);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] text-white text-sm font-semibold shadow-md cursor-pointer"
              >
                <span>inquire for this solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
