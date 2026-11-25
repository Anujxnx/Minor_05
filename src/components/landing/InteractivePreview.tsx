import React, { useState } from 'react'
import { 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Target, 
  Briefcase, 
  GraduationCap, 
  Award,
  ChevronRight
} from 'lucide-react'

export const InteractivePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'alignment' | 'roadmap'>('profile')

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Decorative gradient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-xl opacity-75" />

      {/* Main Card Container */}
      <div className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-5 sm:p-6 shadow-xl backdrop-blur-md">
        
        {/* Top Bar with Profile Summary & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-200">
              <GraduationCap className="h-6 w-6" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
                <CheckCircle2 className="h-2.5 w-2.5 text-white" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Aarav Patel</h3>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 border border-indigo-200/50">
                  Profile Active
                </span>
              </div>
              <p className="text-xs text-slate-500">B.Tech Computer Science • Year 3</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50/80 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Profile 100% Ready</span>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="mt-4 flex rounded-xl bg-slate-100/80 p-1 text-xs font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>Structured Data</span>
          </button>
          <button
            onClick={() => setActiveTab('alignment')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'alignment'
                ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Preferences</span>
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                : 'hover:text-slate-900'
            }`}
          >
            <Target className="h-3.5 w-3.5" />
            <span>Goals & Reality</span>
          </button>
        </div>

        {/* Dynamic Card Content */}
        <div className="mt-4 min-h-[220px]">
          {activeTab === 'profile' && (
            <div className="space-y-3.5">
              {/* Interests Block */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-indigo-500" />
                    Identified Interests
                  </span>
                  <span className="text-slate-400 font-normal">3 categories</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 border border-indigo-100">
                    Technology & Software
                  </span>
                  <span className="rounded-lg bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 border border-purple-100">
                    Science & Research
                  </span>
                  <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100">
                    Data Analytics
                  </span>
                </div>
              </div>

              {/* Skills Block with Proficiency */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-emerald-500" />
                    Verified Skills & Proficiency
                  </span>
                  <span className="text-slate-400 font-normal">Self-assessed</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-1.5">
                    <span className="text-slate-700 font-medium">Python & Algorithms</span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Advanced
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-1.5">
                    <span className="text-slate-700 font-medium">Problem Solving</span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Advanced
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-1.5">
                    <span className="text-slate-700 font-medium">Analytical Thinking</span>
                    <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-2.5 py-1.5">
                    <span className="text-slate-700 font-medium">Public Speaking</span>
                    <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                      Beginner
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Style Indicator */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2.5">
                <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                  Preferred Work Style:
                </span>
                <p className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Independent Problem Solving • Flexible Team Environment
                </p>
              </div>
            </div>
          )}

          {activeTab === 'alignment' && (
            <div className="space-y-3.5">
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
                    Target Work Environments
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-white border border-slate-200 px-2.5 py-1 font-medium text-slate-700 shadow-2xs">
                    🚀 Tech Startups
                  </span>
                  <span className="rounded-md bg-white border border-slate-200 px-2.5 py-1 font-medium text-slate-700 shadow-2xs">
                    🏢 R&D Centers
                  </span>
                  <span className="rounded-md bg-white border border-slate-200 px-2.5 py-1 font-medium text-slate-700 shadow-2xs">
                    🌐 Remote / Hybrid
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-700 block mb-2">
                  Career Priorities Weighted:
                </span>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Career Growth & Learning</span>
                      <span className="font-semibold text-indigo-600">High</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-indigo-600 w-5/6" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Financial Stability</span>
                      <span className="font-semibold text-emerald-600">High</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500 w-4/5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Work-Life Balance</span>
                      <span className="font-semibold text-slate-600">Moderate</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-slate-400 w-3/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Short-Term (1-2 Yrs)
                  </span>
                  <p className="font-medium text-slate-800 text-xs leading-snug">
                    Master Distributed Systems & Land Core SDE Internship
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Long-Term (3-5 Yrs)
                  </span>
                  <p className="font-medium text-slate-800 text-xs leading-snug">
                    Technical Lead or Specialized AI Systems Architect
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Practical Constraints Factored
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Learning: 10–20 hrs/week</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>Budget: ₹25k - ₹1L</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Higher Ed: Considering Master's after 2 yrs industry</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Hint */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Live Schema Ready for Future AI Guidance
          </span>
          <span className="text-indigo-600 font-medium inline-flex items-center gap-0.5">
            Step 1 to 6 Multi-step
            <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
