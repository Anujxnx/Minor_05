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

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student'
  const email = user?.email || 'Not available'
  const joinedDate = user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Today'

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#F3E6D5] sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#800020] flex items-center justify-center text-[#FFF9F2] shadow-xs group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-stone-900 group-hover:text-[#800020] transition-colors">
                Advisora
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#D45060] -mt-1">
                Student Portal
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E6D5]/50 text-xs text-stone-700 font-medium border border-[#F3E6D5]">
              <span className="w-2 h-2 rounded-full bg-[#D45060] animate-pulse" />
              <span>{email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              icon={<LogOut className="w-4 h-4 text-stone-500" />}
              className="border-[#F3E6D5] hover:border-[#800020]/30 text-stone-700"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
        
        {/* Welcome Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#800020] via-[#5a0016] to-[#800020] p-6 sm:p-8 text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D45060]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <Badge variant="coral" className="bg-[#D45060]/20 text-[#FFF9F2] border-[#D45060]/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F3E6D5]" />
                  <span>Authenticated Session Active</span>
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Welcome, {displayName}!
              </h1>
              <p className="text-[#F3E6D5] text-sm sm:text-base max-w-xl">
                Your authenticated account foundation has been successfully established and persisted in Supabase.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-center">
                <span className="block text-xs uppercase tracking-wider text-[#F3E6D5]">Phase Status</span>
                <span className="font-bold text-sm text-white">Phase 2 Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Account Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-[#F3E6D5] p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#800020]/10 flex items-center justify-center text-[#800020] shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Account Name</p>
              <p className="text-sm font-bold text-stone-800">{displayName}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#F3E6D5] p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D45060]/10 flex items-center justify-center text-[#D45060] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Registered Email</p>
              <p className="text-sm font-bold text-stone-800 truncate">{email}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#F3E6D5] p-5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F3E6D5] flex items-center justify-center text-stone-700 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Member Since</p>
              <p className="text-sm font-bold text-stone-800">{joinedDate}</p>
            </div>
          </div>
        </div>

        {/* Informational Profile Readiness Box (Required by PRD Section 9) */}
        <div className="bg-white rounded-2xl border border-[#F3E6D5] p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#800020]/10 text-[#800020]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-stone-900 text-base">
                Career Profile Status
              </h2>
              <p className="text-xs text-stone-500">
                Foundational Authentication Ready • Awaiting Phase 3 Onboarding
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#F3E6D5] bg-[#FFF9F2] p-4 text-xs sm:text-sm text-stone-800 leading-relaxed">
            <p className="font-semibold text-[#800020] mb-1">
              "Your career profile is ready. Personalized career insights and guidance will be introduced in future updates."
            </p>
            <p className="text-stone-600 text-xs">
              In <strong>Phase 3</strong>, you will be invited to complete the 6-step multi-step career onboarding form covering:
              Basic Information, Interests & Personal Preferences, Skills & Proficiencies, Career Preferences, Goals & Practical Constraints, and Family Perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#F3E6D5] bg-[#FFF9F2] text-stone-700">
              <ShieldCheck className="w-4 h-4 text-[#D45060] shrink-0" />
              <span>Row-Level Security Prepared</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#F3E6D5] bg-[#FFF9F2] text-stone-700">
              <Clock className="w-4 h-4 text-[#800020] shrink-0" />
              <span>Session Auto-Persists on Reload</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#F3E6D5] bg-[#FFF9F2] text-stone-700">
              <Sparkles className="w-4 h-4 text-[#D45060] shrink-0" />
              <span>Phase 3 Onboarding Ready</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#F3E6D5] py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Advisora Platform. All rights reserved.</p>
          <p className="text-stone-400">Authenticated Temporary Dashboard Placeholder</p>
        </div>
      </footer>
    </div>
  )
}
