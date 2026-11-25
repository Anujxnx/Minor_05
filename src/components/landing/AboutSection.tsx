import React from 'react'
import { 
  Compass, 
  Lightbulb, 
  Zap, 
  Target, 
  Scale, 
  CheckCircle2 
} from 'lucide-react'

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-[#800020]" />,
      title: 'Self-Discovery',
      description: 'Understand what truly drives you — your personal interests, innate cognitive preferences, and how you best like to work.',
      bg: 'bg-[#800020]/10',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#D45060]" />,
      title: 'Career Exploration',
      description: 'Discover contemporary career possibilities across technology, science, business, arts, public policy and research.',
      bg: 'bg-[#D45060]/10',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#800020]" />,
      title: 'Understanding Skills',
      description: 'Catalogue your current proficiencies, problem-solving abilities, and recognize high-leverage skills to develop next.',
      bg: 'bg-[#800020]/10',
    },
    {
      icon: <Target className="w-6 h-6 text-[#D45060]" />,
      title: 'Career Preparation',
      description: 'Transform vague dreams into structured preparation milestones with achievable short-term and long-term milestones.',
      bg: 'bg-[#D45060]/10',
    },
    {
      icon: <Scale className="w-6 h-6 text-[#800020]" />,
      title: 'Realistic Planning',
      description: 'Balance personal aspirations against real-world factors: academic qualifications, weekly study bandwidth, and family contexts.',
      bg: 'bg-[#800020]/10',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white border-y border-[#F3E6D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#800020] uppercase bg-[#800020]/10 px-3 py-1 rounded-full border border-[#800020]/20">
            About Advisora
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Helping students organize career choices with clarity and confidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Advisora helps students organize their career-related information, explore possibilities and prepare for more informed career decisions. We bridge the gap between abstract ambitions and actionable paths.
          </p>
        </div>

        {/* 5 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group p-7 rounded-2xl border border-[#F3E6D5] bg-[#FFF9F2]/70 hover:bg-white hover:border-[#800020]/30 transition-all duration-300 hover:shadow-lg ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Quick Informational Takeaway Banner */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#800020] to-[#5a0016] text-[#FFF9F2] flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-[#F3E6D5] text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#D45060]" />
                The Advisora Difference
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Structured Data Beats Guesswork
              </h3>
              <p className="text-xs text-[#F3E6D5]/90 leading-relaxed">
                Most career advice is reactive. Advisora creates a living foundation of student preferences that evolves as your academic journey progresses.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#F3E6D5]">
              <span>Foundation for Intelligent Guidance</span>
              <span className="font-semibold text-[#D45060]">Step 1 of MVP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
