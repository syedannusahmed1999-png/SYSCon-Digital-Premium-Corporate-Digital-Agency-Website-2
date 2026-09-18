import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  onClose: () => void;
}

export function LegalModal({ title, onClose }: LegalModalProps) {
  if (!title) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0B1F3A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="legal-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#DCE7EF] my-auto relative animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#DCE7EF]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#2F80ED]" />
            <h3 className="text-xl font-bold text-[#0B1F3A]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-[#526477] hover:text-[#0B1F3A] hover:bg-[#F4F7FA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 overflow-y-auto text-sm text-[#526477] space-y-4 leading-relaxed">
          <p>
            <strong>Syscon Digital Corporate Standards</strong>: This document outlines our institutional governance,
            data protection mandates, and ethical standards governing corporate partnerships and intellectual property.
          </p>
          <h4 className="font-bold text-[#0B1F3A] text-base pt-2">1. Confidentiality & Non-Disclosure</h4>
          <p>
            Syscon Digital treats all client discussions, roadmaps, customer data, and technical specifications
            under mutual non-disclosure protections. We enforce role-based access control across all internal tooling.
          </p>
          <h4 className="font-bold text-[#0B1F3A] text-base pt-2">2. Intellectual Property Ownership</h4>
          <p>
            Upon full contract settlement, 100% of custom design assets, source code repositories, and proprietary
            systems developed specifically for our client become the sole property of the client entity.
          </p>
          <h4 className="font-bold text-[#0B1F3A] text-base pt-2">3. Security & Regulatory Compliance</h4>
          <p>
            All production deployments follow zero-trust architectural principles, OWASP Top 10 mitigation strategies,
            and strict adherence to GDPR and CCPA privacy standards.
          </p>
        </div>

        <div className="pt-4 border-t border-[#DCE7EF] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#163863] rounded-md transition-colors"
          >
            Close Statement
          </button>
        </div>
      </div>
    </div>
  );
}
