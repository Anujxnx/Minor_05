import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Compass } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 animate-pulse mb-4">
          <Compass className="w-7 h-7 animate-spin" />
        </div>
        <p className="text-sm font-semibold text-slate-700">Verifying session...</p>
        <p className="text-xs text-slate-400 mt-1">Checking secure authentication state</p>
      </div>
    )
  }

  if (!user) {
    // Redirect to login preserving the attempted destination
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
