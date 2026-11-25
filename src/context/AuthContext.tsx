import React, { createContext, useContext, useEffect, useState } from 'react'
import type { User, Session, AuthError } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isConfigured: boolean
  signUp: (email: string, password: string, fullName: string) => Promise<{ user: User | null; session: Session | null; error: AuthError | Error | null }>
  signIn: (email: string, password: string) => Promise<{ user: User | null; session: Session | null; error: AuthError | Error | null }>
  signOut: () => Promise<{ error: AuthError | Error | null }>
  resetPassword: (email: string) => Promise<{ error: AuthError | Error | null }>
  updatePassword: (newPassword: string) => Promise<{ error: AuthError | Error | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }

    let isMounted = true

    // Initial session retrieval
    supabase.auth.getSession().then(({ data: { session: initialSession }, error }) => {
      if (isMounted) {
        if (!error && initialSession) {
          setSession(initialSession)
          setUser(initialSession.user)
        }
        setLoading(false)
      }
    }).catch(() => {
      if (isMounted) setLoading(false)
    })

    // Listen for auth state changes (login, logout, token refresh, password recovery)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      if (isMounted) {
        setSession(currentSession)
        setUser(currentSession?.user ?? null)
        setLoading(false)
      }
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isSupabaseConfigured) {
      return {
        user: null,
        session: null,
        error: new Error(
          'Supabase credentials are not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.'
        ),
      }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) return { user: null, session: null, error }
      return { user: data.user, session: data.session, error: null }
    } catch (err) {
      return { user: null, session: null, error: err as Error }
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      return {
        user: null,
        session: null,
        error: new Error(
          'Supabase credentials are not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.'
        ),
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) return { user: null, session: null, error }
      return { user: data.user, session: data.session, error: null }
    } catch (err) {
      return { user: null, session: null, error: err as Error }
    }
  }

  const signOut = async () => {
    if (!isSupabaseConfigured) {
      setUser(null)
      setSession(null)
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.signOut()
      if (error) return { error }
      setUser(null)
      setSession(null)
      return { error: null }
    } catch (err) {
      return { error: err as Error }
    }
  }

  const resetPassword = async (email: string) => {
    if (!isSupabaseConfigured) {
      return {
        error: new Error(
          'Supabase credentials are not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.'
        ),
      }
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      return { error }
    } catch (err) {
      return { error: err as Error }
    }
  }

  const updatePassword = async (newPassword: string) => {
    if (!isSupabaseConfigured) {
      return {
        error: new Error(
          'Supabase credentials are not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.'
        ),
      }
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })
      return { error }
    } catch (err) {
      return { error: err as Error }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        isConfigured: isSupabaseConfigured,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
