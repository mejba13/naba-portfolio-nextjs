'use client'

import { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'primary' | 'gradient'
  animated?: boolean
}

const sizes = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
}

const variants = {
  default: 'bg-neutral-900',
  primary: 'bg-primary-500',
  gradient: 'bg-gradient-to-r from-primary-500 to-primary-400',
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  size = 'md',
  variant = 'default',
  animated = true,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn('w-full', className)} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-neutral-700">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-neutral-500">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-neutral-100 rounded-full overflow-hidden',
          sizes[size]
        )}
      >
        {animated ? (
          <motion.div
            className={cn('h-full rounded-full', variants[variant])}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          />
        ) : (
          <div
            className={cn('h-full rounded-full', variants[variant])}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  )
}
