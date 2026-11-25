import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'burgundy' | 'coral' | 'cream' | 'slate' | 'indigo' | 'emerald' | 'amber'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'burgundy',
  className = '',
}) => {
  const variantStyles = {
    burgundy: 'bg-[#800020]/10 text-[#800020] border-[#800020]/25',
    coral: 'bg-[#D45060]/10 text-[#D45060] border-[#D45060]/30',
    cream: 'bg-[#F3E6D5] text-stone-800 border-[#E5D4C0]',
    slate: 'bg-stone-100 text-stone-700 border-stone-200',
    indigo: 'bg-[#800020]/10 text-[#800020] border-[#800020]/20',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/60',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
