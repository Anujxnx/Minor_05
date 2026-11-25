import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, ArrowRight } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'
import { LegalModal } from '../components/landing/LegalModal'

export const SignupPage: React.FC = () => {
  const navigate = useNavigate()
  const { signUp } = useAuth()

  // Form states
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  // UI states
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [verificationRequired, setVerificationRequired] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    if (!acceptTerms) {
      setErrorMessage('You must agree to the Terms and Conditions to proceed.')
      return
    }

    setLoading(true)

    try {
      const { user, session, error } = await signUp(email.trim(), password, fullName.trim())

      if (error) {
        setErrorMessage(error.message || 'An error occurred during registration.')
        setLoading(false)
        return
      }

      // If Supabase requires email confirmation, session will be null
      if (user && !session) {
        setVerificationRequired(true)
      } else if (session) {
        // Direct session created (auto-confirm enabled)
        navigate('/dashboard')
      } else {
        setVerificationRequired(true)
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  // Email verification required view
  if (verificationRequired) {
    return (
      <AuthLayout
        title="Verify Your Email"
        subtitle="Almost there! Confirm your student email to activate your account."
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-[#F3E6D5] rounded-2xl border border-[#E5D4C0] flex items-center justify-center text-[#800020] mx-auto shadow-sm">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-stone-900 text-lg">Check your inbox</h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
              We sent a verification link to{' '}
              <strong className="text-stone-900 font-semibold">{email}</strong>.
              Click the link in the email to activate your Advisora account.
            </p>
          </div>

          <div className="rounded-xl border border-[#F3E6D5] bg-[#FFF9F2] p-3.5 text-xs text-stone-600 text-left">
            <p className="font-semibold text-stone-800 mb-1">Didn't receive an email?</p>
            <p>Check your spam folder, or make sure your Supabase project email provider is configured.</p>
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => navigate('/login')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Proceed to Login
            </Button>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Create Student Account"
      subtitle="Start building your structured career profile today."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error message banner */}
        {errorMessage && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Aarav Patel"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#F3E6D5] text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all bg-white"
            />
          </div>
        </div>

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
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Password (min. 6 characters)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
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

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-[#F3E6D5] text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all bg-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 focus:outline-none"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Terms and Conditions Acceptance */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-[#F3E6D5] text-[#800020] focus:ring-[#800020] cursor-pointer"
          />
          <label htmlFor="terms" className="text-xs text-stone-600 cursor-pointer leading-relaxed">
            I agree to the{' '}
            <button
              type="button"
              onClick={() => setTermsModalOpen(true)}
              className="text-[#800020] font-semibold hover:underline"
            >
              Terms and Conditions
            </button>{' '}
            and acknowledge the student data privacy guidelines.
          </label>
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
                Creating Account...
              </span>
            ) : (
              'Create Account'
            )}
          </Button>
        </div>

        {/* Login Switch */}
        <div className="text-center text-xs text-stone-500 pt-3 border-t border-[#F3E6D5]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#800020] font-semibold hover:underline">
            Log in here
          </Link>
        </div>
      </form>

      {/* Terms Modal */}
      <LegalModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        type="terms"
      />
    </AuthLayout>
  )
}
