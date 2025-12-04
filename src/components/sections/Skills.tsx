'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const categoryStyles: Record<string, { gradient: string; bg: string; border: string; shadow: string; icon: JSX.Element }> = {
  'Supply Chain Management': {
    gradient: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200/50',
    shadow: 'shadow-amber-500/20',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  'Procurement Expertise': {
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200/50',
    shadow: 'shadow-emerald-500/20',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  'Leadership & Operations': {
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200/50',
    shadow: 'shadow-blue-500/20',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  'Technical & Industry Skills': {
    gradient: 'from-slate-600 to-slate-800',
    bg: 'from-slate-50 to-slate-100',
    border: 'border-slate-200/50',
    shadow: 'shadow-slate-500/20',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
}

function AnimatedProgressBar({ label, value, gradient, delay }: { label: string; value: number; gradient: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
          {label}
        </span>
        <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}%
        </span>
      </div>
      <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

        {/* Progress bar */}
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Glowing tip */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: delay * 0.1 + 0.8 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 10% 30%, rgba(251,191,36,0.08), transparent 50%),
              radial-gradient(ellipse 50% 50% at 90% 70%, rgba(16,185,129,0.06), transparent 50%),
              radial-gradient(ellipse 40% 40% at 50% 90%, rgba(99,102,241,0.06), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label with gradient accent */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Core Competencies
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Comprehensive skill set developed through years of hands-on experience in supply chain management and procurement operations.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skillGroup, groupIndex) => {
            const style = categoryStyles[skillGroup.category] || categoryStyles['Technical & Industry Skills']

            return (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card glow on hover */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${style.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                {/* Card */}
                <div className={`relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border ${style.border} shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-500 group-hover:shadow-2xl`}>
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient}`} />

                  <div className="p-6 sm:p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      {/* Icon with gradient */}
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-white shadow-lg ${style.shadow} group-hover:scale-110 transition-transform duration-300`}>
                        {style.icon}
                        {/* Shine overlay */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-white/20" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {skillGroup.category}
                        </h3>
                        <p className="text-sm text-slate-500">{skillGroup.items.length} skills</p>
                      </div>
                    </div>

                    {/* Skills Progress Bars */}
                    <div className="space-y-5">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <AnimatedProgressBar
                          key={skill.name}
                          label={skill.name}
                          value={skill.level}
                          gradient={style.gradient}
                          delay={groupIndex * 2 + skillIndex}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Additional Tools & Technologies
            </span>
          </div>

          {/* Tags Container */}
          <div className="relative">
            {/* Background card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/30 via-slate-200/30 to-emerald-200/30 rounded-3xl blur-sm" />

            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 sm:p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'SAP', color: 'amber' },
                  { name: 'Oracle', color: 'red' },
                  { name: 'MS Excel', color: 'emerald' },
                  { name: 'Power BI', color: 'yellow' },
                  { name: 'Project Management', color: 'blue' },
                  { name: 'Lean Six Sigma', color: 'slate' },
                  { name: 'Negotiation', color: 'orange' },
                  { name: 'Supplier Auditing', color: 'teal' },
                ].map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="group relative px-5 py-2.5 text-sm font-medium rounded-xl cursor-default transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient background on hover */}
                    <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
                      index % 4 === 0 ? 'from-amber-500 to-orange-500' :
                      index % 4 === 1 ? 'from-emerald-500 to-teal-500' :
                      index % 4 === 2 ? 'from-blue-500 to-indigo-500' :
                      'from-slate-600 to-slate-700'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`} />

                    {/* Default state */}
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 group-hover:opacity-0 transition-opacity" />

                    <span className="relative z-10 text-slate-700 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add shimmer animation to global styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}
