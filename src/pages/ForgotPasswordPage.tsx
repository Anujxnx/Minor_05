import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, AlertCircle, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Button } from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

export const ForgotPasswordPage: React.FC = () => {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      const { error } = await resetPassword(email.trim())

      if (error) {
        setErrorMessage(error.message)
      } else {
        setIsSuccess(true)
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <AuthLayout
        title="Check Your Inbox"
        subtitle="Password recovery email sent successfully."
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl border border-indigo-200 flex items-center justify-center text-indigo-600 mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Recovery Link Dispatched</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We've dispatched a password reset link to{' '}
              <strong className="text-slate-900 font-semibold">{email}</strong>.
              Follow the instructions in that email to choose a new password.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-500 text-left">
            <p className="font-semibold text-slate-700 mb-1">Didn't get the email?</p>
            <p>Wait a minute and check your spam folder, or try entering your email again.</p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => setIsSuccess(false)}
            >
              Try another email
            </Button>
            <Link to="/login">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Reset Your Password"
      subtitle="Enter your student email and we'll send a recovery link."
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
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Student Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
            />
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
                Sending Link...
              </span>
            ) : (
              'Send Recovery Link'
            )}
          </Button>
        </div>

        {/* Return to login */}
        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Login</span>
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
