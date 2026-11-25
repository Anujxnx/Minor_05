import React from 'react'
import { X, ShieldCheck, FileText } from 'lucide-react'
import { Button } from '../ui/Button'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'privacy' | 'terms'
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null

  const isPrivacy = type === 'privacy'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#F3E6D5] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3E6D5] bg-[#FFF9F2]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#800020]/10 text-[#800020]">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
              </h3>
              <p className="text-xs text-stone-500">Advisora Career Platform • Legal Document</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-[#F3E6D5]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-stone-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-stone-800">
                1. Information We Collect
              </p>
              <p>
                Advisora collects student profile information voluntarily provided during onboarding, including academic level, interests, current skills, career preferences, goals, and optional constraints.
              </p>
              <p className="font-semibold text-stone-800">
                2. Purpose of Collection
              </p>
              <p>
                The data collected is utilized exclusively to help students organize their career planning foundation and to generate structured career guidance in accordance with our system architecture.
              </p>
              <p className="font-semibold text-stone-800">
                3. Data Protection & Row Level Security
              </p>
              <p>
                All personal records are secured using cryptographic authentication and PostgreSQL Row Level Security (RLS). Users retain sovereign control over their records at all times.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-stone-800">
                1. Acceptance of Terms
              </p>
              <p>
                By accessing or registering with Advisora, you agree to these Terms and Conditions. Advisora is designed as an educational and career planning tool for students.
              </p>
              <p className="font-semibold text-stone-800">
                2. Informational Scope of the Platform
              </p>
              <p>
                Advisora provides structured decision-making tools and informational insights. Career choices are individual decisions, and users are encouraged to evaluate choices critically alongside academic and professional advisors.
              </p>
              <p className="font-semibold text-stone-800">
                3. User Account Responsibility
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#F3E6D5] bg-[#FFF9F2] flex justify-end">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
