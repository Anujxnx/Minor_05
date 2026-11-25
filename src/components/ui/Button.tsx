import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold',
  }

  const variantStyles = {
    primary: 'bg-[#800020] hover:bg-[#660018] text-white shadow-sm shadow-[#800020]/25 hover:shadow-md hover:shadow-[#800020]/35 focus:ring-[#800020] active:scale-[0.98]',
    secondary: 'bg-[#D45060] hover:bg-[#c04050] text-white shadow-sm focus:ring-[#D45060] active:scale-[0.98]',
    outline: 'border border-[#F3E6D5] hover:border-[#800020]/30 bg-[#FFF9F2] hover:bg-[#F3E6D5]/40 text-stone-800 focus:ring-[#800020] active:scale-[0.98]',
    ghost: 'text-stone-700 hover:text-[#800020] hover:bg-[#F3E6D5]/40 focus:ring-[#800020]',
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
