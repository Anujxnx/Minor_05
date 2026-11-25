import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

export const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate()
  const { updatePassword, session } = useAuth()

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSessionValid, setIsSessionValid] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if recovery session or auth hash exists
    const checkRecoverySession = async () => {
      // If user is already authenticated or redirected from recovery token in URL hash
      const hash = window.location.hash
      if (hash && (hash.includes('access_token') || hash.includes('type=recovery'))) {
        setIsSessionValid(true)
        return
      }

      const { data: { session: currentSession } } = await supabase.auth.getSession()
      if (currentSession || session) {
        setIsSessionValid(true)
      } else {
        // Allow a small grace period for onAuthStateChange to fire from URL hash
        setTimeout(async () => {
          const { data: { session: lateSession } } = await supabase.auth.getSession()
          setIsSessionValid(Boolean(lateSession))
        }, 1200)
      }
    }

    checkRecoverySession()
  }, [session])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const { error } = await updatePassword(newPassword)

      if (error) {
        setErrorMessage(error.message)
      } else {
        setIsSuccess(true)
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  if (isSessionValid === false) {
    return (
      <AuthLayout
        title="Invalid or Expired Link"
        subtitle="This password reset link is invalid or has expired."
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-center text-amber-600 mx-auto shadow-sm">
            <AlertCircle className="w-8 h-8" />
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Password recovery links are single-use and expire after a limited time. Please request a new recovery link.
          </p>

          <div className="pt-2">
            <Link to="/forgot-password">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request New Reset Link
              </Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  if (isSuccess) {
    return (
      <AuthLayout
        title="Password Updated"
        subtitle="Your password has been securely reset."
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Your password was changed successfully. Redirecting you to your dashboard...
          </p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => navigate('/dashboard')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Dashboard
            </Button>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Enter a new secure password for your Advisora account."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error message banner */}
        {errorMessage && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* New Password */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            New Password (min. 6 characters)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={loading}
            className="w-full justify-center shadow-md shadow-indigo-200 hover:shadow-indigo-300"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Updating Password...
              </span>
            ) : (
              'Save New Password'
            )}
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}
