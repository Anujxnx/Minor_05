import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react'
import { Button } from '../ui/Button'

export const CtaSection: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-[#800020] text-[#FFF9F2] relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#D45060]/30 via-[#5a0016]/40 to-[#F3E6D5]/20 blur-3xl -z-0 pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F3E6D5] text-xs font-semibold mb-6">
          <Compass className="w-4 h-4 text-[#D45060]" />
          <span>Begin Your Career Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Start understanding your future today.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#F3E6D5] max-w-2xl mx-auto leading-relaxed">
          Join students building a structured, real-world understanding of their skills, opportunities and career pathways with Advisora.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/signup')}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto bg-[#D45060] hover:bg-[#c04050] text-white shadow-lg shadow-black/20"
          >
            Create Your Career Profile
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.getElementById('about')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-center gap-6 text-xs text-[#F3E6D5]/80">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D45060]" />
            <span>Secure Supabase RLS Encryption</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <span>Takes under 5 minutes</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <span>Free for all students</span>
          </div>
        </div>

      </div>
    </section>
  )
}
