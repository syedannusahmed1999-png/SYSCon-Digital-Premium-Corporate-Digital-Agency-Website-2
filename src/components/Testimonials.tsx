import { TESTIMONIALS_DATA } from '../data/content';
import { Quote, Building, Star, CheckCircle2 } from 'lucide-react';

export function Testimonials() {
  const verifiedBadges = [
    'Enterprise Migration // Zero Downtime',
    'Design System // Global Rollout',
    'Full-Stack Modernization // +220% Growth',
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAFCFF] border-t border-[#DCE7EF]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#B8E5FA]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-4 sm:mb-6 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight lowercase">
              executive partner endorsements
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.08] font-heading mb-4"
          >
            Trusted by leaders at the
            <br />
            <span className="text-[#2F80ED]">frontier of their industries</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526477] font-normal leading-relaxed max-w-2xl">
            Collaborating with enterprise directors, chief marketing officers, and technology leaders across mission-critical digital turnarounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <div
              key={t.id}
              id={`testimonial-card-${index + 1}`}
              className="bg-white rounded-3xl p-8 border border-[#DCE7EF] hover:border-[#B8E5FA] hover:shadow-[0_24px_50px_rgba(47,128,237,0.08)] flex flex-col justify-between relative transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF6FC] border border-[#B8E5FA] flex items-center justify-center text-[#2F80ED]">
                    <Quote className="w-4 h-4" />
                  </div>

                  <span className="text-[11px] font-mono text-[#2F80ED] bg-[#FAFCFF] border border-[#DCE7EF] px-2.5 py-1 rounded-full">
                    {verifiedBadges[index]}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#2F80ED] text-[#2F80ED]" />
                  ))}
                </div>

                <p className="text-base text-[#0B1F3A] leading-relaxed mb-8 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#DCE7EF]/60 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#EAF6FC] border border-[#B8E5FA] flex items-center justify-center font-heading font-bold text-xs text-[#2F80ED] shadow-2xs">
                  {t.namePlaceholder.split(' ')[0][0]}
                  {t.namePlaceholder.split(' ')[1]?.[0] || 'S'}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-[#0B1F3A] font-heading">
                      {t.namePlaceholder}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F80ED]" />
                  </div>
                  <div className="text-xs text-[#526477] font-normal">
                    {t.rolePlaceholder}
                  </div>
                  <div className="text-[11px] text-[#2F80ED] flex items-center gap-1 mt-0.5 font-medium">
                    <Building className="w-3 h-3" />
                    <span>{t.companyPlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
