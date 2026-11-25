import React from 'react'
import { 
  UserCheck, 
  Compass, 
  CheckSquare, 
  MapPin, 
  ArrowRight 
} from 'lucide-react'

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover Yourself',
      description: 'Understand interests, skills, strengths and academic background.',
      details: [
        'Document degree, stream & academic year',
        'Multi-select interest areas & activities',
        'Assess current skill proficiencies',
      ],
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      color: 'border-indigo-200 bg-indigo-50/40',
    },
    {
      number: '02',
      title: 'Explore Career Possibilities',
      description: 'Discover career fields that may align with your profile.',
      details: [
        'Uncover emerging modern industries',
        'Examine working environment preferences',
        'Identify preferred sector combinations',
      ],
      icon: <Compass className="w-6 h-6 text-purple-600" />,
      color: 'border-purple-200 bg-purple-50/40',
    },
    {
      number: '03',
      title: 'Evaluate Your Choices',
      description: 'Understand career requirements, expectations and practical considerations.',
      details: [
        'Clarify short & long-term goals',
        'Account for learning budget & time constraints',
        'Evaluate family perspectives openly',
      ],
      icon: <CheckSquare className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/40',
    },
    {
      number: '04',
      title: 'Plan Your Future',
      description: 'Prepare for your career journey through structured planning.',
      details: [
        'Persist profile securely in PostgreSQL',
        'Keep information editable anytime',
        'Prime data for future personalized guidance',
      ],
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      color: 'border-blue-200 bg-blue-50/40',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Four Simple Stages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Advisora Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A systematic four-stage methodology designed to help students transition from uncertain exploration to clear, structured career preparedness.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${step.color}`}
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 font-mono tracking-tighter">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-slate-100">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Micro checklist */}
                <ul className="space-y-2 border-t border-slate-100 pt-3">
                  {step.details.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Informational Callout Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 max-w-xl mx-auto bg-white/70 py-2.5 px-4 rounded-xl border border-slate-200/60 inline-flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500" />
            <span>
              <strong>Note:</strong> These stages outline the career progression framework. Active AI analysis will be introduced in future platform versions.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
