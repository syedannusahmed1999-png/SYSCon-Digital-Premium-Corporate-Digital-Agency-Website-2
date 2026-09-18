import { useState } from 'react';
import { X, Copy, Check, Code2, FileCode, CheckCircle2, Download } from 'lucide-react';

interface ReactCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReactCodeModal({ isOpen, onClose }: ReactCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'app' | 'hero' | 'mesh' | 'header' | 'types'>('app');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets: Record<string, { filename: string; language: string; description: string; code: string }> = {
    app: {
      filename: 'App.tsx',
      language: 'typescript',
      description: 'Main application container assembling the corporate agency sections with framed presentation toggle and stateful modal triggers.',
      code: `import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Services } from './components/Services';
import { WhySyscon } from './components/WhySyscon';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'why-syscon', 'approach', 'work', 'impact'];
      const scrollPosition = window.scrollY + 140;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContact = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-[#0B1F3A] font-sans antialiased selection:bg-[#B8E5FA] selection:text-[#0B1F3A]">
      <Header
        activeSection={activeSection}
        onOpenContact={() => openContact()}
      />

      <main>
        <Hero
          onOpenContact={() => openContact()}
          onExploreServices={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <TrustIntro />
        <Services onSelectServiceForInquiry={openContact} />
        <WhySyscon />
        <Process />
        <CaseStudies />
        <Metrics />
        <Testimonials />
        <FinalCTA onOpenContact={() => openContact()} />
      </main>

      <Footer onOpenContact={() => openContact()} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}`,
    },
    hero: {
      filename: 'Hero.tsx',
      language: 'typescript',
      description: 'Corporate agency Hero section with 3D generative particle sphere mesh canvas, signature eyebrow accent bars, and pill CTA.',
      code: `import React from 'react';
import { GenerativeMesh } from './GenerativeMesh';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export function Hero({ onOpenContact, onExploreServices }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-20 sm:pt-14 sm:pb-28 overflow-hidden bg-white"
    >
      {/* 3D Generative Mesh Particle Sphere */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-start pointer-events-none">
        <GenerativeMesh className="w-full h-full max-w-[850px] max-h-[850px] opacity-85 -translate-x-12 sm:-translate-x-20 md:translate-x-0" />
      </div>

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#B8E5FA]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-3xl ml-auto lg:mr-4">
          {/* Eyebrow Accent Tag */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#0B1F3A] mb-6 sm:mb-8 select-none">
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
            <span className="text-[#526477] tracking-tight">
              awarded the most innovative digital solutions partner of 2024
            </span>
            <span className="w-[3px] h-4 bg-[#2F80ED] rounded-full inline-block" />
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#0B1F3A] tracking-[-0.035em] leading-[1.06] mb-6 sm:mb-8 font-heading">
            Where digital tech
            <br />
            <span className="text-[#2F80ED]">meets business growth</span>
          </h1>

          {/* Refined Supporting Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#526477] font-normal leading-relaxed max-w-xl mb-9 sm:mb-11">
            Syscon Digital offers the highest quality digital solutions and enterprise engineering in the area of technology, strategy, and business.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              type="button"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_4px_16px_rgba(47,128,237,0.3)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>learn more</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#2F80ED] flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={onExploreServices}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 hover:bg-white text-[#0B1F3A] text-sm font-medium border border-[#DCE7EF] hover:border-[#B8E5FA] transition-all"
            >
              <span>our capabilities</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#2F80ED]" />
            </button>
          </div>

          {/* Metrics Row */}
          <div className="mt-14 pt-8 border-t border-[#DCE7EF]/60 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">140+</div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">projects delivered</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">99.9%</div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">system reliability</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">$45M+</div>
              <div className="text-xs text-[#526477] font-medium mt-0.5">client revenue driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    },
    mesh: {
      filename: 'GenerativeMesh.tsx',
      language: 'typescript',
      description: 'Mathematical HTML5 Canvas particle sphere with responsive mouse interaction, rotation physics, and depth projection.',
      code: `import React, { useEffect, useRef } from 'react';

interface GenerativeMeshProps {
  className?: string;
  density?: number;
  interactive?: boolean;
}

export function GenerativeMesh({
  className = '',
  density = 42,
  interactive = true,
}: GenerativeMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate UV Points on 3D Sphere
    const particles: { u: number; v: number; baseR: number; offset: number }[] = [];
    const count = density * 22;
    for (let i = 0; i < count; i++) {
      particles.push({
        u: Math.random() * Math.PI * 2,
        v: Math.acos(2 * Math.random() - 1),
        baseR: 190 + Math.sin(i * 0.1) * 8,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.38;
      const centerY = height * 0.5;

      const rotY = time * 0.25 + mouseX * 0.35;
      const rotX = time * 0.15 + mouseY * 0.25;

      particles.forEach((p) => {
        const currentR = p.baseR + Math.sin(time * 2 + p.offset) * 4;
        const x = currentR * Math.sin(p.v) * Math.cos(p.u);
        const y = currentR * Math.sin(p.v) * Math.sin(p.u);
        const z = currentR * Math.cos(p.v);

        // 3D Rotations
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Perspective Projection
        const fov = 420;
        const scale = fov / (fov + z2);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        const alpha = Math.max(0.12, Math.min(0.85, (z2 + 200) / 400));
        const radius = Math.max(0.7, scale * 1.7);

        ctx.beginPath();
        ctx.arc(projX, projY, radius, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(47, 128, 237, \${alpha})\`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [density, interactive]);

  return <canvas ref={canvasRef} className={\`block \${className}\`} />;
}`,
    },
    header: {
      filename: 'Header.tsx',
      language: 'typescript',
      description: 'Floating pill-capsule navigation bar with scroll detection, active section state, and responsive drawer.',
      code: `import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  activeSection: string;
}

export function Header({ onOpenContact, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'home', href: '#hero' },
    { label: 'about', href: '#about' },
    { label: 'services', href: '#services' },
    { label: 'work', href: '#work' },
    { label: 'process', href: '#approach' },
  ];

  return (
    <header
      className={\`sticky top-0 z-40 w-full transition-all duration-300 \${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-xs border-b border-[#DCE7EF]/60'
          : 'bg-transparent py-5 sm:py-6'
      }\`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Logo size="md" variant="dark" />
        </a>

        {/* Floating Capsule Bar */}
        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center pl-5 pr-1.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DCE7EF] shadow-xs gap-6">
            <div className="flex items-center gap-5 text-[14px] font-medium text-[#526477]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={\`lowercase transition-colors \${
                      isActive ? 'text-[#2F80ED] font-semibold' : 'hover:text-[#0B1F3A]'
                    }\`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <button
              onClick={onOpenContact}
              type="button"
              className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] text-white text-[13px] font-semibold cursor-pointer transition-all shadow-xs"
            >
              <span>let's talk</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#2F80ED] flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0B1F3A]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}`,
    },
    types: {
      filename: 'types.ts',
      language: 'typescript',
      description: 'Domain interfaces, data models for agency services, case studies, and contact inquiries.',
      code: `export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  deliverables: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  results: { label: string; value: string }[];
  summary: string;
  tags: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: string;
  estimatedBudget: string;
  projectTimeline: string;
  notes: string;
}`,
    },
  };

  const currentSnippet = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentSnippet.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentSnippet.filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="react-code-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0B1F3A]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="react-code-modal"
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#DCE7EF] my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B1F3A] text-white px-6 py-4 flex items-center justify-between border-b border-[#1E3E6B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#102747] border border-[#B8E5FA]/40 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-[#B8E5FA]" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#B8E5FA] flex items-center gap-1.5">
                <span>React 19 + TypeScript + Tailwind</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block ml-1" />
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Syscon Digital — Converted React Codebase
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102747] hover:bg-[#1E3E6B] text-xs font-semibold text-white border border-[#1E3E6B] transition-colors cursor-pointer"
              title="Copy snippet to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B8E5FA]" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102747] hover:bg-[#1E3E6B] text-xs font-semibold text-slate-300 hover:text-white border border-[#1E3E6B] transition-colors cursor-pointer"
              title="Download file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#102747] transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="bg-[#F4F7FA] border-b border-[#DCE7EF] px-6 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'app', label: 'App.tsx' },
            { id: 'hero', label: 'Hero.tsx' },
            { id: 'mesh', label: 'GenerativeMesh.tsx' },
            { id: 'header', label: 'Header.tsx' },
            { id: 'types', label: 'types.ts' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs font-mono font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#2F80ED] text-[#0B1F3A] bg-white font-bold'
                    : 'border-transparent text-[#526477] hover:text-[#0B1F3A]'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-[#2F80ED]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* File Description Bar */}
        <div className="px-6 py-2.5 bg-[#EAF6FC] border-b border-[#B8E5FA]/50 text-xs text-[#0B1F3A] flex items-center justify-between">
          <span className="font-medium text-[#0B1F3A]">
            {currentSnippet.description}
          </span>
          <span className="text-[11px] font-mono text-[#526477] bg-white px-2 py-0.5 rounded border border-[#DCE7EF]">
            {currentSnippet.filename}
          </span>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#071322] text-slate-200 font-mono text-xs sm:text-[13px] leading-relaxed">
          <pre className="overflow-x-auto select-all">
            <code>{currentSnippet.code}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-[#DCE7EF] px-6 py-3 flex items-center justify-between text-xs text-[#526477]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Ready for direct React 19 / Vite / Next.js production usage</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#F4F7FA] hover:bg-[#EAF6FC] text-[#0B1F3A] font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
