import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Compass, Heart, Shield, Lock } from 'lucide-react'
import { LegalModal } from '../landing/LegalModal'

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  })

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <footer className="bg-[#FFF9F2] border-t border-[#F3E6D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2.5 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-9 h-9 rounded-xl bg-[#800020] flex items-center justify-center text-[#FFF9F2] shadow-sm shadow-[#800020]/25">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-900 group-hover:text-[#800020] transition-colors">
                Advisora
              </span>
            </Link>
            <p className="text-sm text-stone-600 max-w-sm leading-relaxed">
              Empowering students with structured career exploration, skill awareness, and realistic planning for modern professional pathways.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-2">
              <Shield className="w-4 h-4 text-[#D45060]" />
              <span>Student Privacy Protected with Supabase RLS</span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#800020] transition-colors cursor-pointer"
                >
                  About Advisora
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-[#800020] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-[#800020] transition-colors cursor-pointer"
                >
                  Future Features
                </button>
              </li>
            </ul>
          </div>

          {/* Account & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
              Access & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li>
                <Link to="/login" className="hover:text-[#800020] transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-[#800020] transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
                  className="hover:text-[#800020] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-stone-400" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalState({ isOpen: true, type: 'terms' })}
                  className="hover:text-[#800020] transition-colors cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#F3E6D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Advisora Platform. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-600">
            Designed for students with care <Heart className="w-3.5 h-3.5 text-[#D45060] fill-[#D45060] inline" />
          </p>
        </div>
      </div>

      {/* Modal instance */}
      <LegalModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        type={modalState.type}
      />
    </footer>
  )
}
