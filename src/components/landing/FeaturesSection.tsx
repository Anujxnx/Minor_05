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
      icon: <Bot className="w-6 h-6 text-indigo-600" />,
      title: 'AI Career Counsellor',
      tagline: 'Conversational Guidance Engine',
      description: 'An intelligent advisory companion that answers questions, challenges assumptions, and helps students unpack career possibilities without judgment.',
      category: 'Intelligence',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: 'Career Reality Score',
      tagline: 'Objective Practicality Assessment',
      description: 'An algorithmic evaluation comparing your academic trajectory, competitive difficulty, time commitment, and financial return for target professions.',
      category: 'Analytics',
    },
    {
      icon: <Users2 className="w-6 h-6 text-purple-600" />,
      title: 'Family Decision Lab',
      tagline: 'Collaborative Consensus Builder',
      description: 'A structured mediation module designed to present career data respectfully to parents and bridge generational expectations with factual insights.',
      category: 'Consensus',
    },
    {
      icon: <GitFork className="w-6 h-6 text-blue-600" />,
      title: 'Alternative Career Pathways',
      tagline: 'Smart Fallbacks & Lateral Shifts',
      description: 'Contingency path generator that recommends adjacent industries and roles leveraging identical skill foundations if primary paths encounter hurdles.',
      category: 'Adaptability',
    },
    {
      icon: <Route className="w-6 h-6 text-amber-600" />,
      title: 'Personalized Career Roadmap',
      tagline: 'Milestone Execution Timeline',
      description: 'A step-by-step roadmap breaking down degrees, certifications, portfolio projects, internships, and exam deadlines year-by-year.',
      category: 'Execution',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Future Module disclaimer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="amber" className="mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Platform Roadmap • Future Modules</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming Guidance Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The Advisora MVP collects the structured profile data that will power these upcoming modules. Here is an informational preview of the platform’s future capabilities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureModules.map((module) => (
            <div
              key={module.title}
              className="relative group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-indigo-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Roadmap Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50/60 transition-colors">
                    {module.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    Future Module
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    {module.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {module.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Status pill at card bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Phase: Roadmap Release</span>
                <span className="text-indigo-600 font-semibold">{module.category}</span>
              </div>
            </div>
          ))}

          {/* Vision Card */}
          <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/40 p-7 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-3">
              ✦
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Building the Foundational Core
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mb-4 leading-relaxed">
              Every future insight begins with an accurate, honest student profile. Complete your onboarding today to establish your foundational record.
            </p>
            <span className="text-xs font-bold text-indigo-700 bg-white px-3 py-1.5 rounded-lg border border-indigo-200">
              MVP Stage: Data Layer
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
