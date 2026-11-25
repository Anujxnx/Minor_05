import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle, Compass, Users } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { InteractivePreview } from './InteractivePreview'

export const HeroSection: React.FC = () => {
  const navigate = useNavigate()

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-100/60 via-purple-100/40 to-emerald-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" className="py-1 px-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Next-Generation Career Planning for Students</span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Your future deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600">
                more than a guess.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover a career path that aligns with your interests, skills, ambitions and real-world opportunities. Build a clearer understanding of where you want to go and how to get there.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/signup')}
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Build My Career Profile
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToHowItWorks}
                icon={<Compass className="w-5 h-5 text-slate-500" />}
                className="w-full sm:w-auto"
              >
                Explore How It Works
              </Button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>100% Free for Students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>6-Step Structured Discovery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-500" />
                <span>Zero Guesswork Decision Model</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive UI Visual Representation */}
          <div className="lg:col-span-5 w-full">
            <InteractivePreview />
          </div>

        </div>
      </div>
    </section>
  )
}
