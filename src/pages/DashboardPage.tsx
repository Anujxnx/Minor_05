import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Compass, 
  LogOut, 
  User, 
  Mail, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  Layers, 
  Clock, 
  CheckCircle2 
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { useAuth } from '../context/AuthContext'

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  // Extract display name: metadata full_name, or email prefix
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student'
  const email = user?.email || 'Not available'
  const joinedDate = user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Today'

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                Advisora
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
                Student Portal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              icon={<LogOut className="w-4 h-4 text-slate-500" />}
              className="border-slate-200 hover:border-slate-300 text-slate-700"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
        
        {/* Welcome Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-xl overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald" className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Authenticated Session Active</span>
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Welcome, {displayName}!
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Your authenticated account foundation has been successfully established and persisted in Supabase.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-center">
                <span className="block text-xs uppercase tracking-wider text-slate-300">Phase Status</span>
                <span className="font-bold text-sm text-indigo-200">Phase 2 Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Account Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Name</p>
              <p className="text-sm font-bold text-slate-800">{displayName}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Registered Email</p>
              <p className="text-sm font-bold text-slate-800 truncate">{email}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Member Since</p>
              <p className="text-sm font-bold text-slate-800">{joinedDate}</p>
            </div>
          </div>
        </div>

        {/* Informational Profile Readiness Box (Required by PRD Section 9) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-base">
                Career Profile Status
              </h2>
              <p className="text-xs text-slate-500">
                Foundational Authentication Ready • Awaiting Phase 3 Onboarding
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs sm:text-sm text-indigo-950/80 leading-relaxed">
            <p className="font-semibold text-indigo-900 mb-1">
              "Your career profile is ready. Personalized career insights and guidance will be introduced in future updates."
            </p>
            <p className="text-indigo-900/70 text-xs">
              In <strong>Phase 3</strong>, you will be invited to complete the 6-step multi-step career onboarding form covering:
              Basic Information, Interests & Personal Preferences, Skills & Proficiencies, Career Preferences, Goals & Practical Constraints, and Family Perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Row-Level Security Prepared</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-slate-600">
              <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Session Auto-Persists on Reload</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-slate-600">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Phase 3 Onboarding Ready</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Advisora Platform. All rights reserved.</p>
          <p className="text-slate-400">Authenticated Temporary Dashboard Placeholder</p>
        </div>
      </footer>
    </div>
  )
}
