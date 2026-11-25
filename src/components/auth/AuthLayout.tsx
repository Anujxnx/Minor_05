import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Compass, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { LegalModal } from '../landing/LegalModal'
import { useAuth } from '../../context/AuthContext'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  const navigate = useNavigate()
  const { isConfigured } = useAuth()
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  })

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#800020] flex items-center justify-center text-[#FFF9F2] shadow-sm shadow-[#800020]/25 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-stone-900 group-hover:text-[#800020] transition-colors">
              Advisora
            </span>
          </div>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/')}
          icon={<ArrowLeft className="w-4 h-4" />}
          className="text-stone-700 hover:text-[#800020]"
        >
          Back to Home
        </Button>
      </div>

      {/* Main Content Container */}
      <div className="max-w-md w-full mx-auto my-6 sm:my-8">
        {/* Unconfigured Supabase Banner */}
        {!isConfigured && (
          <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-xs text-amber-900 shadow-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Supabase Configuration Required</p>
              <p className="text-amber-800 leading-relaxed">
                Add your Supabase project credentials to <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-950 font-mono">.env.local</code>:
              </p>
              <p className="font-mono text-[11px] bg-amber-100/70 p-1.5 rounded mt-1 text-amber-950">
                VITE_SUPABASE_URL=https://xyz.supabase.co<br />
                VITE_SUPABASE_ANON_KEY=ey...
              </p>
            </div>
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#F3E6D5] p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              {title}
            </h2>
            <p className="mt-1.5 text-sm text-stone-500">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-md w-full mx-auto text-center space-y-2 text-xs text-stone-500">
        <div className="flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#D45060]" />
          <span>Secured with Supabase Authentication & PostgreSQL RLS</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
            className="hover:text-[#800020] underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            onClick={() => setModalState({ isOpen: true, type: 'terms' })}
            className="hover:text-[#800020] underline cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Legal Modal */}
      <LegalModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        type={modalState.type}
      />
    </div>
  )
}
