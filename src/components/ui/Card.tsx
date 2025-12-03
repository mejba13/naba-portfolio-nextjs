'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass'
  interactive?: boolean
  children: ReactNode
}

const variants = {
  default: 'bg-white border border-neutral-200',
  elevated: 'bg-white shadow-soft-lg',
  bordered: 'bg-white border-2 border-neutral-200',
  glass: 'bg-white/80 backdrop-blur-lg border border-white/20',
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', interactive = false, children, ...props }, ref) => {
    const baseClasses = cn(
      'rounded-2xl transition-all duration-300',
      variants[variant],
      interactive && 'cursor-pointer hover:shadow-soft-lg hover:border-neutral-300',
      className
    )

    if (interactive) {
      return (
        <motion.div
          ref={ref}
          className={baseClasses}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          {...(props as HTMLMotionProps<'div'>)}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={baseClasses} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-5 border-b border-neutral-100', className)}
      {...props}
    >
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-neutral-100 bg-neutral-50/50 rounded-b-2xl', className)}
      {...props}
    >
      {children}
    </div>
  )
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
export type { CardProps }
