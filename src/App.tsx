/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Services } from './components/Services';
import { WhySyscon } from './components/WhySyscon';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { MidPageCTA } from './components/MidPageCTA';
import { CompactPerformanceCTA } from './components/CompactPerformanceCTA';
import { CompactAdvantageCTA } from './components/CompactAdvantageCTA';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BrandGuidelinesModal } from './components/BrandGuidelinesModal';
import { ReactCodeModal } from './components/ReactCodeModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';
import { Eye, X, Maximize2, Minimize2, Code2 } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBrandGuidelinesOpen, setIsBrandGuidelinesOpen] = useState(false);
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('hero');
  const [showExecutiveBanner, setShowExecutiveBanner] = useState(true);
  // Default to framed luxury agency showcase mode matching the user's uploaded reference screenshot
  const [isFramedMode, setIsFramedMode] = useState(true);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'why-syscon', 'approach', 'work', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactWithService = (serviceName?: string) => {
    setSelectedServiceInquiry(serviceName);
    setIsContactOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isFramedMode
          ? 'bg-[#1868E0] p-2 sm:p-4 md:p-6 lg:p-8'
          : 'bg-[#FAFCFF] p-0'
      }`}
    >
      {/* Executive Presentation Top Notice Bar */}
      {showExecutiveBanner && (
        <aside
          aria-label="Executive Presentation Banner"
          id="executive-presentation-bar"
          className="mb-2 sm:mb-4 bg-[#0B1F3A]/90 backdrop-blur-md text-white border border-[#1E3E6B] rounded-2xl px-4 py-2 text-xs relative z-50 flex items-center justify-between shadow-md"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8E5FA] animate-pulse" />
              <span className="font-semibold text-slate-200">
                Corporate Executive Presentation
              </span>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline text-slate-300">
                Syscon Digital Agency Brand Architecture
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Framed Agency Showcase vs Full Bleed Toggle */}
              <button
                type="button"
                onClick={() => setIsFramedMode(!isFramedMode)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#102747] px-2.5 py-1 rounded-full border border-[#1E3E6B] transition-colors"
                title="Toggle between Framed Agency Presentation and Full Browser Bleed"
              >
                {isFramedMode ? (
                  <>
                    <Maximize2 className="w-3 h-3 text-[#B8E5FA]" />
                    <span className="hidden sm:inline">full-bleed view</span>
                  </>
                ) : (
                  <>
                    <Minimize2 className="w-3 h-3 text-[#B8E5FA]" />
                    <span className="hidden sm:inline">framed showcase</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsBrandGuidelinesOpen(true)}
                className="inline-flex items-center gap-1.5 font-bold text-[#B8E5FA] hover:text-white bg-[#102747] px-2.5 py-1 rounded-full border border-[#1E3E6B] hover:border-[#B8E5FA]/50 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>Brand Deck</span>
              </button>

              <button
                type="button"
                onClick={() => setIsReactCodeOpen(true)}
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#B8E5FA] bg-[#102747] px-2.5 py-1 rounded-full border border-[#2F80ED]/60 hover:border-[#B8E5FA] transition-colors cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>React Code</span>
              </button>

              <button
                type="button"
                onClick={() => setShowExecutiveBanner(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Website Container: In Framed Mode, mimics the exact rounded showcase card from the reference image */}
      <div
        className={`w-full mx-auto bg-[#FAFCFF] text-[#0B1F3A] flex flex-col font-sans selection:bg-[#B8E5FA] selection:text-[#0B1F3A] transition-all duration-300 ${
          isFramedMode
            ? 'rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_30px_90px_rgba(0,0,0,0.25)] border border-white/40 overflow-hidden'
            : 'rounded-none shadow-none border-none min-h-screen'
        }`}
      >
        {/* Floating Pill Header */}
        <Header
          onOpenContact={() => handleOpenContactWithService()}
          onOpenBrandGuidelines={() => setIsBrandGuidelinesOpen(true)}
          onOpenReactCode={() => setIsReactCodeOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* Section 2: Hero with 3D Generative Particle Sphere */}
          <Hero
            onOpenContact={() => handleOpenContactWithService()}
            onExploreServices={handleExploreServices}
          />

          {/* Section 3: Trust & Company Introduction */}
          <TrustIntro />

          {/* Compact CTA A: Institutional Performance Strip */}
          <CompactPerformanceCTA onExploreSolutions={handleExploreServices} />

          {/* Section 4: Solutions & Services */}
          <Services onSelectServiceForInquiry={handleOpenContactWithService} />

          {/* Mid-page Conversion CTA */}
          <MidPageCTA
            onOpenContact={() => handleOpenContactWithService()}
            onExploreSolutions={handleExploreServices}
          />

          {/* Section 5: Why Syscon Digital */}
          <WhySyscon />

          {/* Section 6: Our Approach / Process */}
          <Process />

          {/* Section 7: Selected Work / Case Studies */}
          <CaseStudies />

          {/* Compact CTA B: Commercial Advantage Strip */}
          <CompactAdvantageCTA
            onOpenContact={() => handleOpenContactWithService()}
          />

          {/* Section 8: Business Impact / Stats */}
          <Metrics />

          {/* Section 9: Executive Testimonials */}
          <Testimonials />

          {/* Section 10: Final CTA */}
          <FinalCTA
            onOpenContact={() => handleOpenContactWithService()}
            onExploreServices={handleExploreServices}
          />
        </main>

        {/* Section 11: Corporate Footer */}
        <Footer
          onOpenContact={() => handleOpenContactWithService()}
          onOpenBrandGuidelines={() => setIsBrandGuidelinesOpen(true)}
          onOpenLegalModal={(title) => setLegalModalTitle(title)}
        />
      </div>

      {/* Brand Guidelines Presentation Modal (for CEO & Head of Marketing Approval) */}
      <BrandGuidelinesModal
        isOpen={isBrandGuidelinesOpen}
        onClose={() => setIsBrandGuidelinesOpen(false)}
      />

      {/* Direct Executive Inquiry Modal ("Let's Talk") */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedServiceInquiry(undefined);
        }}
        defaultService={selectedServiceInquiry}
      />

      {/* React Code Viewer & Exporter Modal */}
      <ReactCodeModal
        isOpen={isReactCodeOpen}
        onClose={() => setIsReactCodeOpen(false)}
      />

      {/* Corporate Legal Modal */}
      <LegalModal
        title={legalModalTitle}
        onClose={() => setLegalModalTitle(null)}
      />
    </div>
  );
}
