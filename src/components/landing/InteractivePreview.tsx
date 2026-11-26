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
      {/* Decorative gradient glow in Burgundy & Coral */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#800020]/25 via-[#D45060]/20 to-[#F3E6D5]/40 blur-xl opacity-80" />

      {/* Main Card Container */}
      <div className="relative rounded-2xl border border-[#F3E6D5] bg-[#FFF9F2]/95 p-5 sm:p-6 shadow-xl backdrop-blur-md">
        
        {/* Top Bar with Profile Summary & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3E6D5] pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#800020] to-[#A82840] text-[#FFF9F2] shadow-md shadow-[#800020]/25">
              <GraduationCap className="h-6 w-6" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#D45060] ring-2 ring-white">
                <CheckCircle2 className="h-2.5 w-2.5 text-white" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">Dear User</h3>
                <span className="rounded-full bg-[#800020]/10 px-2 py-0.5 text-[10px] font-semibold text-[#800020] border border-[#800020]/20">
                  Profile Active
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-[#D45060]/10 px-2.5 py-1 text-xs font-semibold text-[#800020] border border-[#D45060]/30">
            <Sparkles className="h-3.5 w-3.5 text-[#D45060]" />
            <span>Profile 100% Ready</span>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="mt-4 flex rounded-xl bg-[#F3E6D5]/60 p-1 text-xs font-medium text-stone-700">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-white text-[#800020] shadow-sm font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            <Compass className="h-3.5 w-3.5 text-[#800020]" />
            <span>Structured Data</span>
          </button>
          <button
            onClick={() => setActiveTab('alignment')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'alignment'
                ? 'bg-white text-[#800020] shadow-sm font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            <Layers className="h-3.5 w-3.5 text-[#D45060]" />
            <span>Preferences</span>
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-white text-[#800020] shadow-sm font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            <Target className="h-3.5 w-3.5 text-[#800020]" />
            <span>Goals & Reality</span>
          </button>
        </div>

        {/* Dynamic Card Content */}
        <div className="mt-4 min-h-[220px]">
          {activeTab === 'profile' && (
            <div className="space-y-3.5">
              {/* Interests Block */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-[#800020]" />
                    Identified Interests
                  </span>
                  <span className="text-stone-400 font-normal">3 categories</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-lg bg-[#800020]/10 px-2.5 py-1 text-xs font-medium text-[#800020] border border-[#800020]/20">
                    Technology & Software
                  </span>
                  <span className="rounded-lg bg-[#D45060]/10 px-2.5 py-1 text-xs font-medium text-[#D45060] border border-[#D45060]/20">
                    Science & Research
                  </span>
                  <span className="rounded-lg bg-[#F3E6D5] px-2.5 py-1 text-xs font-medium text-stone-800 border border-[#E5D4C0]">
                    Data Analytics
                  </span>
                </div>
              </div>

              {/* Skills Block with Proficiency */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-[#D45060]" />
                    Verified Skills & Proficiency
                  </span>
                  <span className="text-stone-400 font-normal">Self-assessed</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-[#F3E6D5] bg-white px-2.5 py-1.5">
                    <span className="text-stone-700 font-medium">Python & Algorithms</span>
                    <span className="text-[10px] font-semibold text-[#800020] bg-[#800020]/10 px-1.5 py-0.5 rounded">
                      Advanced
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-[#F3E6D5] bg-white px-2.5 py-1.5">
                    <span className="text-stone-700 font-medium">Problem Solving</span>
                    <span className="text-[10px] font-semibold text-[#800020] bg-[#800020]/10 px-1.5 py-0.5 rounded">
                      Advanced
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-[#F3E6D5] bg-white px-2.5 py-1.5">
                    <span className="text-stone-700 font-medium">Analytical Thinking</span>
                    <span className="text-[10px] font-semibold text-[#D45060] bg-[#D45060]/10 px-1.5 py-0.5 rounded">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-[#F3E6D5] bg-white px-2.5 py-1.5">
                    <span className="text-stone-700 font-medium">Public Speaking</span>
                    <span className="text-[10px] font-semibold text-stone-700 bg-[#F3E6D5] px-1.5 py-0.5 rounded">
                      Beginner
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Style Indicator */}
              <div className="rounded-xl border border-[#F3E6D5] bg-[#F3E6D5]/30 p-2.5">
                <span className="text-[11px] font-semibold text-stone-500 block mb-1">
                  Preferred Work Style:
                </span>
                <p className="text-xs text-stone-800 font-medium flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#800020]" />
                  Independent Problem Solving • Flexible Team Environment
                </p>
              </div>
            </div>
          )}

          {activeTab === 'alignment' && (
            <div className="space-y-3.5">
              <div className="rounded-xl border border-[#F3E6D5] bg-white p-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-[#800020]" />
                    Target Work Environments
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-[#FFF9F2] border border-[#F3E6D5] px-2.5 py-1 font-medium text-stone-800">
                    🚀 Tech Startups
                  </span>
                  <span className="rounded-md bg-[#FFF9F2] border border-[#F3E6D5] px-2.5 py-1 font-medium text-stone-800">
                    🏢 R&D Centers
                  </span>
                  <span className="rounded-md bg-[#FFF9F2] border border-[#F3E6D5] px-2.5 py-1 font-medium text-stone-800">
                    🌐 Remote / Hybrid
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-700 block mb-2">
                  Career Priorities Weighted:
                </span>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-stone-600 mb-1">
                      <span>Career Growth & Learning</span>
                      <span className="font-semibold text-[#800020]">High</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#F3E6D5] overflow-hidden">
                      <div className="h-full rounded-full bg-[#800020] w-5/6" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-stone-600 mb-1">
                      <span>Financial Stability</span>
                      <span className="font-semibold text-[#D45060]">High</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#F3E6D5] overflow-hidden">
                      <div className="h-full rounded-full bg-[#D45060] w-4/5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-stone-600 mb-1">
                      <span>Work-Life Balance</span>
                      <span className="font-semibold text-stone-600">Moderate</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#F3E6D5] overflow-hidden">
                      <div className="h-full rounded-full bg-[#C8B8A6] w-3/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-[#F3E6D5] bg-white p-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D45060] block mb-1">
                    Short-Term (1-2 Yrs)
                  </span>
                  <p className="font-medium text-stone-800 text-xs leading-snug">
                    Master Distributed Systems & Land Core SDE Internship
                  </p>
                </div>
                <div className="rounded-xl border border-[#F3E6D5] bg-white p-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#800020] block mb-1">
                    Long-Term (3-5 Yrs)
                  </span>
                  <p className="font-medium text-stone-800 text-xs leading-snug">
                    Technical Lead or Specialized AI Systems Architect
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#F3E6D5] bg-[#F3E6D5]/30 p-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 block mb-1.5">
                  Practical Constraints Factored
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D45060]" />
                    <span>Learning: 10–20 hrs/week</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#800020]" />
                    <span>Budget: ₹25k - ₹1L</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A82840]" />
                    <span>Higher Ed: Considering Master's after 2 yrs industry</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Hint */}
        <div className="mt-4 pt-3 border-t border-[#F3E6D5] flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-[#D45060]" />
            Live Schema Ready for Future Guidance
          </span>
          <span className="text-[#800020] font-medium inline-flex items-center gap-0.5">
            Step 1 to 6 Multi-step
            <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
