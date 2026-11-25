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
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: 'Self-Discovery',
      description: 'Understand what truly drives you — your personal interests, innate cognitive preferences, and how you best like to work.',
      bg: 'bg-indigo-50',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: 'Career Exploration',
      description: 'Discover contemporary career possibilities across technology, science, business, arts, public policy and research.',
      bg: 'bg-amber-50',
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: 'Understanding Skills',
      description: 'Catalogue your current proficiencies, problem-solving abilities, and recognize high-leverage skills to develop next.',
      bg: 'bg-emerald-50',
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Career Preparation',
      description: 'Transform vague dreams into structured preparation milestones with achievable short-term and long-term milestones.',
      bg: 'bg-blue-50',
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-600" />,
      title: 'Realistic Planning',
      description: 'Balance personal aspirations against real-world factors: academic qualifications, weekly study bandwidth, and family contexts.',
      bg: 'bg-purple-50',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50/80 px-3 py-1 rounded-full border border-indigo-100">
            About Advisora
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Helping students organize career choices with clarity and confidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Advisora helps students organize their career-related information, explore possibilities and prepare for more informed career decisions. We bridge the gap between abstract ambitions and actionable paths.
          </p>
        </div>

        {/* 5 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group p-7 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-300 hover:shadow-lg ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Quick Informational Takeaway Banner */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                The Advisora Difference
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Structured Data Beats Guesswork
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Most career advice is reactive. Advisora creates a living foundation of student preferences that evolves as your academic journey progresses.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-indigo-200">
              <span>Foundation for Intelligent Guidance</span>
              <span className="font-semibold text-emerald-400">Step 1 of MVP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
