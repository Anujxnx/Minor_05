import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Compass, Menu, X, ArrowRight, LayoutDashboard, LogOut } from 'lucide-react'
import { Button } from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { user, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(sectionId)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogout = async () => {
    setMobileMenuOpen(false)
    await signOut()
    navigate('/')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#F3E6D5] shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Platform Name */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-[#800020] flex items-center justify-center text-[#FFF9F2] shadow-md shadow-[#800020]/25 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-stone-900 group-hover:text-[#800020] transition-colors">
                Advisora
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D45060] -mt-1">
                Career Exploration
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => {
                if (location.pathname !== '/') navigate('/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-[#800020] rounded-lg hover:bg-[#F3E6D5]/50 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-[#800020] rounded-lg hover:bg-[#F3E6D5]/50 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-[#800020] rounded-lg hover:bg-[#F3E6D5]/50 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-[#800020] rounded-lg hover:bg-[#F3E6D5]/50 transition-colors cursor-pointer"
            >
              Features
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dashboard')}
                  icon={<LayoutDashboard className="w-4 h-4 text-[#800020]" />}
                >
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  icon={<LogOut className="w-4 h-4 text-stone-400" />}
                  className="text-stone-600 hover:text-[#800020]"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="text-stone-800 font-semibold hover:text-[#800020]"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/signup')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-[#800020] hover:bg-[#F3E6D5]/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#F3E6D5] bg-[#FFF9F2]/98 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                if (location.pathname !== '/') navigate('/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-full text-left px-3.5 py-2.5 text-base font-medium text-stone-800 hover:bg-[#F3E6D5]/50 rounded-lg cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3.5 py-2.5 text-base font-medium text-stone-800 hover:bg-[#F3E6D5]/50 rounded-lg cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="w-full text-left px-3.5 py-2.5 text-base font-medium text-stone-800 hover:bg-[#F3E6D5]/50 rounded-lg cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="w-full text-left px-3.5 py-2.5 text-base font-medium text-stone-800 hover:bg-[#F3E6D5]/50 rounded-lg cursor-pointer"
            >
              Features
            </button>
          </div>

          <div className="pt-3 border-t border-[#F3E6D5] flex flex-col gap-2">
            {user ? (
              <>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    navigate('/dashboard')
                  }}
                  icon={<LayoutDashboard className="w-4 h-4" />}
                >
                  Go to Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleLogout}
                  icon={<LogOut className="w-4 h-4" />}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    navigate('/login')
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    navigate('/signup')
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
