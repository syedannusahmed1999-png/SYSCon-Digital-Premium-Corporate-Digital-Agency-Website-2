import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, BookOpen, Code2 } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenBrandGuidelines: () => void;
  onOpenReactCode?: () => void;
  activeSection: string;
}

export function Header({ onOpenContact, onOpenBrandGuidelines, onOpenReactCode, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'home', href: '#hero' },
    { label: 'about', href: '#about' },
    { label: 'services', href: '#services' },
    { label: 'work', href: '#work' },
    { label: 'process', href: '#approach' },
    { label: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-[0_2px_15px_rgba(11,31,58,0.04)] border-b border-[#DCE7EF]/60'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center focus:outline-none"
          >
            <Logo size="md" variant="dark" />
          </a>

          {/* Desktop Floating Pill Navigation Bar (Matching Reference Design) */}
          <div className="hidden lg:flex items-center gap-3">
            <nav
              id="desktop-nav-capsule"
              aria-label="Floating Navigation"
              className="flex items-center pl-5 pr-1.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DCE7EF] shadow-sm gap-6"
            >
              <div className="flex items-center gap-5 text-[14px] font-medium text-[#526477]">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      id={`nav-${item.label}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`transition-colors lowercase ${
                        isActive
                          ? 'text-[#2F80ED] font-semibold'
                          : 'hover:text-[#0B1F3A]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* Pill Button with Circular Arrow Badge */}
              <button
                id="header-capsule-cta"
                onClick={onOpenContact}
                type="button"
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#2F80ED] hover:bg-[#206cd4] active:bg-[#1a5db8] text-white text-[13px] font-semibold tracking-wide transition-all shadow-[0_2px_8px_rgba(47,128,237,0.25)] hover:shadow-[0_4px_12px_rgba(47,128,237,0.35)] cursor-pointer"
              >
                <span>let's talk</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#2F80ED] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </nav>

            {/* Discreet Brand Guidelines for CEO & Head of Marketing */}
            <button
              id="header-brand-deck-btn"
              onClick={onOpenBrandGuidelines}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B1F3A] bg-[#EAF6FC] hover:bg-[#B8E5FA]/50 border border-[#B8E5FA] rounded-full transition-all"
              title="Review Brand Guidelines Deck"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#2F80ED]" />
              <span className="lowercase">brand deck</span>
            </button>

            {/* React Code Viewer Button */}
            {onOpenReactCode && (
              <button
                id="header-react-code-btn"
                onClick={onOpenReactCode}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2F80ED] bg-[#EAF6FC] hover:bg-[#B8E5FA]/60 border border-[#B8E5FA] rounded-full transition-all cursor-pointer"
                title="View and export converted React code"
              >
                <Code2 className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span className="lowercase">react code</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-cta"
              onClick={onOpenContact}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2F80ED] text-white text-xs font-semibold"
            >
              <span>let's talk</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#0B1F3A] rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE7EF] px-6 py-5 shadow-lg mt-2 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2 text-base font-medium text-[#0B1F3A] hover:text-[#2F80ED] transition-colors lowercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#DCE7EF] flex flex-col gap-2">
            {onOpenReactCode && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReactCode();
                }}
                type="button"
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#2F80ED] bg-[#EAF6FC] border border-[#B8E5FA] rounded-full text-center flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[#2F80ED]" />
                <span>View Converted React Code</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandGuidelines();
              }}
              type="button"
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#EAF6FC] border border-[#B8E5FA] rounded-full text-center"
            >
              Review Brand Guidelines Deck
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              type="button"
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2F80ED] rounded-full text-center"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
