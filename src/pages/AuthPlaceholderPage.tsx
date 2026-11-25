import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Compass, ArrowLeft, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

interface AuthPlaceholderPageProps {
  type: 'login' | 'signup'
}

export const AuthPlaceholderPage: React.FC<AuthPlaceholderPageProps> = ({ type }) => {
  const navigate = useNavigate()
  const isLogin = type === 'login'

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs">
            <Compass className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
            Advisora
          </span>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/')}
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Back to Home
        </Button>
      </div>

      {/* Main Preview Card */}
      <div className="max-w-md w-full mx-auto my-8 bg-white rounded-2xl border border-slate-200/90 p-7 shadow-lg">
        <div className="text-center mb-6">
          <Badge variant="indigo" className="mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Phase 2 Implementation</span>
          </Badge>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {isLogin ? 'Welcome Back' : 'Create Student Account'}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {isLogin 
              ? 'Access your saved career profile and structured records.' 
              : 'Begin your structured 6-step career onboarding journey.'}
          </p>
        </div>

        {/* Phase Milestone Box */}
        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 mb-6 text-left space-y-3">
          <div className="flex items-center gap-2 text-indigo-900 font-semibold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span>Development Phase Status</span>
          </div>
          <p className="text-xs text-indigo-950/80 leading-relaxed">
            <strong>Phase 1 (Landing Page) is fully complete!</strong> Live authentication with Supabase Auth (Signup, Email Verification, Session Persistence, Password Recovery, and Protected Routes) will be activated in <strong>Phase 2</strong> upon review approval.
          </p>
          <div className="pt-2 border-t border-indigo-100/80 flex items-center justify-between text-[11px] text-indigo-700">
            <span>Auth Engine: Supabase Auth</span>
            <span className="font-semibold">Ready for Phase 2</span>
          </div>
        </div>

        {/* Visual Form Wireframe / Preview */}
        <div className="space-y-3 opacity-60 pointer-events-none select-none">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <div className="h-10 rounded-xl bg-slate-100 border border-slate-200 px-3 flex items-center text-xs text-slate-400">
                Aarav Patel
              </div>
            </div>
          )}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Student Email</label>
            <div className="h-10 rounded-xl bg-slate-100 border border-slate-200 px-3 flex items-center text-xs text-slate-400">
              student@university.edu
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <div className="h-10 rounded-xl bg-slate-100 border border-slate-200 px-3 flex items-center text-xs text-slate-400">
              ••••••••••••
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 space-y-3">
          <Button
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={() => navigate('/')}
          >
            Explore Landing Page
          </Button>

          <div className="text-center text-xs text-slate-500 pt-2">
            {isLogin ? (
              <span>
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="text-indigo-600 font-semibold hover:underline cursor-pointer"
                >
                  Sign up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-indigo-600 font-semibold hover:underline cursor-pointer"
                >
                  Log in
                </button>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Security badge at bottom */}
      <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Enterprise-grade Supabase Authentication Ready</span>
      </div>
    </div>
  )
}
