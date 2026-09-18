import { useState } from 'react';
import { BRAND_COLORS } from '../data/content';
import { Logo } from './Logo';
import { X, Copy, Check, BookOpen, Layers, Type, Palette, ShieldCheck, Eye } from 'lucide-react';

interface BrandGuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrandGuidelinesModal({ isOpen, onClose }: BrandGuidelinesModalProps) {
  const [activeTab, setActiveTab] = useState<'identity' | 'palette' | 'typography' | 'ui' | 'voice'>('identity');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div
      id="brand-guidelines-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0B1F3A]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="brand-guidelines-modal"
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#DCE7EF] my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0B1F3A] text-white px-6 py-5 flex items-center justify-between border-b border-[#1E3E6B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#102747] border border-[#B8E5FA]/40 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#B8E5FA]" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#B8E5FA]">
                Brand Identity Specification Deck
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Syscon Digital — Brand & Visual System Guidelines
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#102747] transition-colors"
            aria-label="Close guidelines"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#F4F7FA] border-b border-[#DCE7EF] px-6 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'identity', label: 'Brand Identity', icon: Layers },
            { id: 'palette', label: 'Color Palette', icon: Palette },
            { id: 'typography', label: 'Typography', icon: Type },
            { id: 'ui', label: 'UI Style & Components', icon: ShieldCheck },
            { id: 'voice', label: 'Brand Voice', icon: Eye },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#2F80ED] text-[#0B1F3A] bg-white font-bold'
                    : 'border-transparent text-[#526477] hover:text-[#0B1F3A]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#2F80ED]' : 'text-[#526477]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          {/* TAB 1: IDENTITY */}
          {activeTab === 'identity' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] block mb-2">
                    Brand Name & Essence
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">Syscon Digital</h4>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    A contraction of <em>"Systems"</em> and <em>"Connectivity"</em>, paired with <em>"Digital"</em>.
                    The name reflects institutional rigor, enterprise reliability, and intelligence in digital transformation.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] block mb-2">
                    Brand Positioning
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">The Enterprise Strategic Ally</h4>
                  <p className="text-sm text-[#526477] leading-relaxed">
                    Positioned for C-suite decision-makers, private equity directors, and corporate marketing heads
                    seeking high-certainty execution without the overhead of traditional consultancies.
                  </p>
                </div>
              </div>

              {/* Logo Direction Showcase */}
              <div className="p-6 rounded-xl border border-[#DCE7EF] bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-4">
                  Logo System & Background Adaptability
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Light Background Variant */}
                  <div className="p-6 rounded-lg bg-white border border-[#DCE7EF] flex flex-col items-center justify-center">
                    <span className="text-[11px] font-semibold text-[#526477] uppercase tracking-wider mb-4">
                      Primary Wordmark (Light Canvas)
                    </span>
                    <Logo variant="dark" size="lg" />
                  </div>

                  {/* Dark Background Variant */}
                  <div className="p-6 rounded-lg bg-[#0B1F3A] border border-[#1E3E6B] flex flex-col items-center justify-center">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-4">
                      Primary Wordmark (Dark Canvas)
                    </span>
                    <Logo variant="light" size="lg" />
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-lg bg-[#EAF6FC] text-xs text-[#0B1F3A] leading-relaxed">
                  <strong>Symbol Philosophy:</strong> The abstract geometric icon pairs the fluid S-curve with an interlocking D-pillar.
                  A central pulse node communicates systems connectivity, intelligence, and stable digital architecture.
                </div>
              </div>

              {/* Core Personality Traits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Trustworthy', detail: 'Predictable, institutional delivery' },
                  { label: 'Intelligent', detail: 'Data-guided decisions' },
                  { label: 'Modern', detail: 'Forward-looking tech stack' },
                  { label: 'Restrained', detail: 'Elegance without gimmicks' },
                ].map((item) => (
                  <div key={item.label} className="p-3.5 rounded-lg bg-[#F4F7FA] border border-[#DCE7EF]">
                    <div className="text-sm font-bold text-[#0B1F3A]">{item.label}</div>
                    <div className="text-xs text-[#526477] mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COLOR PALETTE */}
          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                  Official Corporate Color Palette & Tokens
                </h4>
                <p className="text-xs text-[#526477]">
                  Click any hex token to copy to your clipboard for design and brand governance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {BRAND_COLORS.map((col) => (
                  <div
                    key={col.hex}
                    onClick={() => copyToClipboard(col.hex)}
                    className="p-4 rounded-xl border border-[#DCE7EF] bg-white hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      {/* Swatch */}
                      <div
                        className="w-full h-20 rounded-lg mb-3 border border-black/10 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: col.hex }}
                      >
                        {copiedHex === col.hex && (
                          <span className="text-xs font-bold bg-white/90 text-[#0B1F3A] px-2 py-1 rounded shadow">
                            Copied!
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#2F80ED]">
                        {col.role}
                      </div>
                      <div className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                        {col.name}
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#526477] mt-1 group-hover:text-[#2F80ED] flex items-center justify-between">
                        <span>{col.hex}</span>
                        {copiedHex === col.hex ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] text-[#526477] mt-3 pt-2 border-t border-[#F4F7FA] leading-tight">
                      {col.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF] text-xs text-[#526477] leading-relaxed">
                <strong>Color Direction Rule:</strong> The website and brand assets must remain primarily light blue (#B8E5FA), deep navy (#0B1F3A), and white (#FFFFFF). Avoid harsh rainbow gradients, neon highlights, and arbitrary glassmorphism.
              </div>
            </div>
          )}

          {/* TAB 3: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] mb-2">
                  Font Pairing Direction
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-lg font-bold font-heading text-[#0B1F3A]">
                      Headings: Plus Jakarta Sans / Manrope
                    </div>
                    <p className="text-xs text-[#526477] mt-1">
                      Geometric, structured, and modern with balanced proportions that project institutional authority.
                    </p>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-sans text-[#0B1F3A]">
                      Body: Inter
                    </div>
                    <p className="text-xs text-[#526477] mt-1">
                      Highly legible neutral workhorse engineered specifically for screen readability and enterprise data density.
                    </p>
                  </div>
                </div>
              </div>

              {/* Typographic Scale Hierarchy */}
              <div className="space-y-4 border-t border-[#DCE7EF] pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Typographic Hierarchy Specifications
                </h4>

                <div className="p-4 rounded-lg bg-white border border-[#DCE7EF] space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#526477] block">Hero Display: 56–72px | Weight: 800 ExtraBold</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading">
                      Digital Solutions Built for Growth.
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#F4F7FA]">
                    <span className="text-[11px] font-mono text-[#526477] block">Section H2: 36–48px | Weight: 700 Bold</span>
                    <span className="text-2xl font-bold text-[#0B1F3A] font-heading">
                      Solutions Designed Around Your Business.
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#F4F7FA]">
                    <span className="text-[11px] font-mono text-[#526477] block">Card Title H3: 20–24px | Weight: 600 SemiBold</span>
                    <span className="text-lg font-semibold text-[#0B1F3A] font-heading">
                      Strategic Thinking & Digital Architecture
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#F4F7FA]">
                    <span className="text-[11px] font-mono text-[#526477] block">Body Text: 16–18px | Line Height: 1.6 | Color: #526477</span>
                    <p className="text-base text-[#526477] leading-relaxed">
                      Syscon Digital combines creative thinking, digital expertise, and business strategy to build solutions that help brands perform, connect, and grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: UI STYLE & COMPONENTS */}
          {activeTab === 'ui' && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                Component Guidelines & Tokens
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Button Styles */}
                <div className="p-5 rounded-xl border border-[#DCE7EF] bg-white space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] block">
                    Button Styles
                  </span>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#526477] mb-1.5 font-medium">Primary CTA (Digital Blue #2F80ED)</div>
                      <button
                        type="button"
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-[#2F80ED] hover:bg-[#206cd4] rounded-md shadow-sm"
                      >
                        Let's Talk
                      </button>
                    </div>

                    <div>
                      <div className="text-xs text-[#526477] mb-1.5 font-medium">Secondary Action (White + Border #DCE7EF)</div>
                      <button
                        type="button"
                        className="px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] bg-white border border-[#DCE7EF] rounded-md"
                      >
                        Explore Our Services
                      </button>
                    </div>

                    <div>
                      <div className="text-xs text-[#526477] mb-1.5 font-medium">Dark Corporate CTA (Deep Navy #0B1F3A)</div>
                      <button
                        type="button"
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] rounded-md"
                      >
                        Request Corporate Proposal
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card & Elevation Styles */}
                <div className="p-5 rounded-xl border border-[#DCE7EF] bg-white space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] block">
                    Card Standards
                  </span>

                  <div className="space-y-3 text-xs text-[#526477]">
                    <div className="p-3.5 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                      <strong className="text-[#0B1F3A] block mb-0.5">Border Radius:</strong>
                      Standardized at 12–16px (`rounded-xl` / `rounded-2xl`). Never excessive pill curves on layout containers.
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                      <strong className="text-[#0B1F3A] block mb-0.5">Borders & Shadows:</strong>
                      1px refined borders (#DCE7EF). Subtle, diffused drop shadows (opacity &le; 8%) to avoid heavy dirty effects.
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF]">
                      <strong className="text-[#0B1F3A] block mb-0.5">Icon Standards:</strong>
                      Minimal, geometric line icons from Lucide React in Digital Blue or Deep Navy with light blue container accents.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BRAND VOICE */}
          {activeTab === 'voice' && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#0B1F3A] text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8E5FA] block mb-2">
                  Editorial Tone of Voice
                </span>
                <h4 className="text-xl font-bold mb-3">
                  Confident, Clear, Intelligent & Business-Focused
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Syscon Digital speaks with the poise of an established tier-one consultancy.
                  We speak in terms of commercial growth, enterprise architecture, and measurable outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    What We Say (Do's)
                  </div>
                  <ul className="text-xs text-emerald-950 space-y-2">
                    <li>• "Digital Solutions Built for Business Growth."</li>
                    <li>• "Engineered for institutional reliability and uptime."</li>
                    <li>• "Commercial alignment across every sprint milestone."</li>
                    <li>• "Clear attribution from click to closed-won."</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                    What We Avoid (Don'ts)
                  </div>
                  <ul className="text-xs text-rose-950 space-y-2">
                    <li>• Avoid empty SaaS hype: "Supercharge your business with AI magic"</li>
                    <li>• Avoid exaggerated guarantees: "World's #1 Agency"</li>
                    <li>• Avoid casual jargon: "Ninja coders", "Rockstars"</li>
                    <li>• Avoid generic claims: "We build nice websites"</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F4F7FA] px-6 py-4 border-t border-[#DCE7EF] flex items-center justify-between">
          <span className="text-xs text-[#526477]">
            Prepared for Syscon Digital CEO & Head of Marketing Approval
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#163863] rounded-md transition-colors"
          >
            Close Deck
          </button>
        </div>
      </div>
    </div>
  );
}
