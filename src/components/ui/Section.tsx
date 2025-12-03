'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  containerClassName?: string
  fullWidth?: boolean
  background?: 'white' | 'light' | 'dark' | 'gradient'
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

const backgrounds = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  dark: 'bg-neutral-900 text-white',
  gradient: 'bg-gradient-to-b from-neutral-50 to-white',
}

const paddings = {
  none: '',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-28',
  xl: 'py-24 sm:py-28 lg:py-32',
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      containerClassName,
      children,
      fullWidth = false,
      background = 'white',
      paddingY = 'lg',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(backgrounds[background], paddings[paddingY], className)}
        {...props}
      >
        <div
          className={cn(
            !fullWidth && 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
            containerClassName
          )}
        >
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      className={cn('max-w-3xl mb-12 sm:mb-16', alignClasses[align], className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      {subtitle && (
        <motion.span
          variants={fadeInUp}
          className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-display-md sm:text-display-lg font-display font-bold tracking-tight text-neutral-900"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg sm:text-xl text-neutral-600 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export { Section, SectionHeader }
export type { SectionProps, SectionHeaderProps }
