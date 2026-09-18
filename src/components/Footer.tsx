import { Logo } from './Logo';
import { SERVICES_DATA } from '../data/content';
import { Mail, MapPin, Phone, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenBrandGuidelines: () => void;
  onOpenLegalModal: (title: string) => void;
}

export function Footer({ onOpenContact, onOpenBrandGuidelines, onOpenLegalModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0B1F3A] text-white border-t border-[#1E3E6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#1E3E6B]">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-sm">
              Syscon Digital is a modern digital solutions and technology company engineering high-performance platforms, digital experiences, and strategic growth partnerships.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>Enterprise Technology Hub // Global Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span className="font-mono">inquiries@syscondigital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>+1 (800) 584-SYSCON</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8E5FA]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors lowercase">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors lowercase">
                  about us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors lowercase">
                  services
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors lowercase">
                  our process
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors lowercase">
                  selected work
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors lowercase">
                  impact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8E5FA]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Executive Deck & Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8E5FA]">
              Executive Portal
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Review our brand standards, identity system, and corporate governance deck.
            </p>
            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={onOpenBrandGuidelines}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-full bg-[#102747] hover:bg-[#163863] text-[#B8E5FA] border border-[#1E3E6B] transition-colors text-center cursor-pointer"
              >
                Review Brand Guidelines Deck
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-full bg-[#2F80ED] hover:bg-[#206cd4] text-white transition-colors text-center cursor-pointer"
              >
                Direct Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2F80ED]" />
            <span>© {new Date().getFullYear()} Syscon Digital. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegalModal('Privacy Policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal('Terms & Conditions')}
              className="hover:text-white transition-colors"
            >
              Terms of Engagement
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal('Security & Compliance')}
              className="hover:text-white transition-colors"
            >
              Security Governance
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#102747] hover:bg-[#1E3E6B] text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
