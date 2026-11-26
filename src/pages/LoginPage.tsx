import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Redirect destination after successful login
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!email.trim() || !password) {
      setErrorMessage('Please enter both your email and password.')
      return
    }

    setLoading(true)

    try {
      const { session, error } = await signIn(email.trim(), password)

      if (error) {
        if (error.message.includes('Invalid API key')) {
          setErrorMessage(
            'Invalid Supabase API key. Please check your .env.local: verify that VITE_SUPABASE_ANON_KEY matches the "anon public" key from your Supabase Dashboard (Settings > API) for this project.'
          )
        } else if (error.message.includes('Invalid login credentials')) {
          setErrorMessage('Invalid email or password. Please verify and try again.')
        } else if (error.message.includes('Email not confirmed')) {
          setErrorMessage('Email address has not been confirmed yet. Please verify your inbox.')
        } else {
          setErrorMessage(error.message)
        }
        setLoading(false)
        return
      }

      if (session) {
        navigate(from, { replace: true })
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Access your saved student profile and career data."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error message banner */}
        {errorMessage && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Student Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#F3E6D5] text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all bg-white"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-semibold text-stone-700">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-[#800020] hover:text-[#660018] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-[#F3E6D5] text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all bg-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
            className="w-full justify-center shadow-md shadow-[#800020]/20 hover:shadow-[#800020]/30"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </Button>
        </div>

        {/* Signup Switch */}
        <div className="text-center text-xs text-stone-500 pt-3 border-t border-[#F3E6D5]">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-[#800020] font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
