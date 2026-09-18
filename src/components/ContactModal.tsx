import { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ContactFormData } from '../types';
import { X, Send, CheckCircle2, Shield, Clock, Building2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceInterest: defaultService || SERVICES_DATA[0].title,
    estimatedBudget: '$25,000 – $50,000',
    projectTimeline: 'Within 3 months',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-tier corporate inquiry processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0B1F3A]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="contact-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-[#DCE7EF] my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 rounded-full text-[#526477] hover:text-[#0B1F3A] hover:bg-[#F4F7FA] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F80ED] mb-2">
              <span>Direct Engagement</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-2">
              Let's Talk About Your Next Initiative.
            </h3>
            <p className="text-sm text-[#526477] mb-8 font-normal">
              Share your objectives below. A Senior Partner from Syscon Digital will review your requirements and respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katherine Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] text-sm text-[#0B1F3A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kmiller@enterprise.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] text-sm text-[#0B1F3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Miller & Vance Corp"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] text-sm text-[#0B1F3A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Primary Solution Area
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] text-sm text-[#0B1F3A] bg-white"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Enterprise Advisory">Comprehensive Corporate Replatform</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] text-sm text-[#0B1F3A] bg-white"
                  >
                    <option value="$15,000 – $25,000">$15,000 – $25,000</option>
                    <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                    <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                    <option value="$100,000+">$100,000+ (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                    Target Deployment Window
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] text-sm text-[#0B1F3A] bg-white"
                  >
                    <option value="Immediate (Next 30 days)">Immediate (Next 30 days)</option>
                    <option value="Within 3 months">Within 3 months (Standard)</option>
                    <option value="3–6 months">3–6 months (Strategic Planning)</option>
                    <option value="Exploratory / Discovery">Exploratory / RFP Stage</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                  Brief Project Overview / Core Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key requirements, current pain points, or upcoming milestones..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DCE7EF] focus:outline-none focus:border-[#2F80ED] text-sm text-[#0B1F3A]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#526477]">
                  <Shield className="w-4 h-4 text-[#2F80ED]" />
                  <span>Strict NDA and data protection enforced.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#2F80ED] hover:bg-[#206cd4] rounded-md transition-all shadow-[0_2px_8px_rgba(47,128,237,0.25)] cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Corporate Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#EAF6FC] border-2 border-[#2F80ED] flex items-center justify-center mx-auto mb-6 text-[#2F80ED]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-3">
              Inquiry Received Successfully.
            </h3>

            <p className="text-sm text-[#526477] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-[#0B1F3A]">{formData.fullName}</strong>. Your consultation request regarding{' '}
              <strong className="text-[#0B1F3A]">{formData.serviceInterest}</strong> for{' '}
              <strong className="text-[#0B1F3A]">{formData.companyName}</strong> has been logged with our corporate practice.
            </p>

            <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DCE7EF] max-w-md mx-auto mb-8 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#0B1F3A] font-semibold">
                <Clock className="w-4 h-4 text-[#2F80ED]" />
                <span>Next Step: Senior Strategic Evaluation within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#526477]">
                <Building2 className="w-4 h-4 text-[#2F80ED]" />
                <span>Assigned Hub: Syscon Corporate Strategy Division</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#163863] rounded-md transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
