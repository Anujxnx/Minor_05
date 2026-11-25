import React from 'react'
import { 
  Bot, 
  BarChart3, 
  Users2, 
  GitFork, 
  Route, 
  Clock 
} from 'lucide-react'
import { Badge } from '../ui/Badge'

export const FeaturesSection: React.FC = () => {
  const futureModules = [
    {
      icon: <Bot className="w-6 h-6 text-[#800020]" />,
      title: 'AI Career Counsellor',
      tagline: 'Conversational Guidance Engine',
      description: 'An intelligent advisory companion that answers questions, challenges assumptions, and helps students unpack career possibilities without judgment.',
      category: 'Intelligence',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#D45060]" />,
      title: 'Career Reality Score',
      tagline: 'Objective Practicality Assessment',
      description: 'An algorithmic evaluation comparing your academic trajectory, competitive difficulty, time commitment, and financial return for target professions.',
      category: 'Analytics',
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#800020]" />,
      title: 'Family Decision Lab',
      tagline: 'Collaborative Consensus Builder',
      description: 'A structured mediation module designed to present career data respectfully to parents and bridge generational expectations with factual insights.',
      category: 'Consensus',
    },
    {
      icon: <GitFork className="w-6 h-6 text-[#D45060]" />,
      title: 'Alternative Career Pathways',
      tagline: 'Smart Fallbacks & Lateral Shifts',
      description: 'Contingency path generator that recommends adjacent industries and roles leveraging identical skill foundations if primary paths encounter hurdles.',
      category: 'Adaptability',
    },
    {
      icon: <Route className="w-6 h-6 text-[#800020]" />,
      title: 'Personalized Career Roadmap',
      tagline: 'Milestone Execution Timeline',
      description: 'A step-by-step roadmap breaking down degrees, certifications, portfolio projects, internships, and exam deadlines year-by-year.',
      category: 'Execution',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white border-t border-[#F3E6D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Future Module disclaimer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="coral" className="mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Platform Roadmap • Future Modules</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Upcoming Guidance Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            The Advisora MVP collects the structured profile data that will power these upcoming modules. Here is an informational preview of the platform’s future capabilities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureModules.map((module) => (
            <div
              key={module.title}
              className="relative group rounded-2xl border border-[#F3E6D5] bg-[#FFF9F2]/60 p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-[#800020]/30 hover:bg-white flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Roadmap Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#FFF9F2] border border-[#F3E6D5] group-hover:bg-[#800020]/10 transition-colors">
                    {module.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-stone-600 bg-[#F3E6D5]/70 px-2.5 py-1 rounded-full border border-[#F3E6D5]">
                    Future Module
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-semibold text-[#D45060] uppercase tracking-wider">
                    {module.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    {module.title}
                  </h3>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Status pill at card bottom */}
              <div className="mt-6 pt-4 border-t border-[#F3E6D5] flex items-center justify-between text-xs text-stone-500">
                <span>Phase: Roadmap Release</span>
                <span className="text-[#800020] font-semibold">{module.category}</span>
              </div>
            </div>
          ))}

          {/* Vision Card */}
          <div className="rounded-2xl border border-dashed border-[#800020]/30 bg-[#800020]/5 p-7 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#800020]/10 text-[#800020] flex items-center justify-center font-bold text-lg mb-3">
              ✦
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Building the Foundational Core
            </h3>
            <p className="text-xs text-stone-600 max-w-xs mb-4 leading-relaxed">
              Every future insight begins with an accurate, honest student profile. Complete your onboarding today to establish your foundational record.
            </p>
            <span className="text-xs font-bold text-[#800020] bg-white px-3 py-1.5 rounded-lg border border-[#F3E6D5]">
              MVP Stage: Data Layer
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
