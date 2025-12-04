'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { testimonials } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Color styles based on relationship type
const getRelationshipStyle = (relationship: string) => {
  if (relationship.toLowerCase().includes('buet')) {
    return {
      gradient: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/20',
      avatarGradient: 'from-amber-400 via-orange-500 to-amber-600',
    }
  }
  if (relationship.toLowerCase().includes('rahimafrooz') || relationship.toLowerCase().includes('worked together')) {
    return {
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
      avatarGradient: 'from-emerald-400 via-teal-500 to-emerald-600',
    }
  }
  if (relationship.toLowerCase().includes('supplier') || relationship.toLowerCase().includes('vendor')) {
    return {
      gradient: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20',
      avatarGradient: 'from-blue-400 via-indigo-500 to-blue-600',
    }
  }
  return {
    gradient: 'from-slate-400 to-slate-500',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    text: 'text-slate-400',
    glow: 'shadow-slate-500/20',
    avatarGradient: 'from-slate-400 via-slate-500 to-slate-600',
  }
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const style = getRelationshipStyle(testimonial.relationship)

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="group relative"
    >
      {/* Card glow effect on hover */}
      <div className={`absolute -inset-2 bg-gradient-to-br ${style.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-500 group-hover:border-slate-600/50 group-hover:shadow-2xl">
        {/* Top gradient accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient}`} />

        {/* Animated gradient shine on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-[0.03]`} />
        </div>

        {/* Large decorative quote */}
        <div className="absolute -top-4 -right-4 w-32 h-32 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg
              className={`w-32 h-32 bg-gradient-to-br ${style.gradient} opacity-10`}
              style={{
                maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\'/%3E%3C/svg%3E")',
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\'/%3E%3C/svg%3E")',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
              }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" className={`fill-current bg-gradient-to-br ${style.gradient}`} />
            </svg>
          </motion.div>
        </div>

        {/* Smaller quote icon with gradient */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center shadow-lg ${style.glow} group-hover:scale-110 transition-transform duration-300`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <div className="relative p-6 sm:p-8">
          {/* Relationship Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="mb-5"
          >
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${style.bg} ${style.text} border ${style.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${style.gradient}`} />
              {testimonial.relationship}
            </span>
          </motion.div>

          {/* Quote Content */}
          <blockquote className="relative mb-8 pr-8">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <span className={`text-2xl font-serif ${style.text} mr-1`}>&ldquo;</span>
              {testimonial.content}
              <span className={`text-2xl font-serif ${style.text} ml-1`}>&rdquo;</span>
            </p>
          </blockquote>

          {/* Author Section */}
          <div className="relative">
            {/* Divider with gradient */}
            <div className="absolute -top-4 left-0 right-0 h-px">
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent`} />
              <div className={`absolute left-0 w-16 h-full bg-gradient-to-r ${style.gradient} opacity-50`} />
            </div>

            <div className="flex items-center gap-4 pt-4">
              {/* Avatar with gradient ring */}
              <div className="relative group/avatar">
                {/* Animated ring */}
                <motion.div
                  className={`absolute -inset-1 rounded-full bg-gradient-to-br ${style.avatarGradient} opacity-0 group-hover/avatar:opacity-100 blur-sm transition-opacity duration-300`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${style.avatarGradient} p-0.5 shadow-xl ${style.glow}`}>
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <span className={`font-bold text-lg sm:text-xl bg-gradient-to-br ${style.avatarGradient} bg-clip-text text-transparent`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>

                {/* Verified checkmark */}
                <div className={`absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${style.gradient} flex items-center justify-center border-2 border-slate-900`}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-base sm:text-lg truncate group-hover:text-white transition-colors">
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${style.text} font-medium truncate`}>
                  {testimonial.role}
                </p>
                <p className="text-xs text-slate-500 truncate">
                  {testimonial.company}
                </p>
              </div>

              {/* Date badge */}
              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-xs text-slate-500 whitespace-nowrap">
                  {testimonial.date}
                </span>
                {/* LinkedIn icon */}
                <div className={`w-6 h-6 rounded-full ${style.bg} flex items-center justify-center`}>
                  <svg className={`w-3.5 h-3.5 ${style.text}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${style.gradient} opacity-5 rounded-tr-full`} />
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(251,191,36,0.08), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.06), transparent 50%),
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.04), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Decorative accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
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
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Recommendations
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Colleagues
              </span>
              {/* Underline decoration */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{' '}
            Say
          </h2>

          <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Trusted testimonials from professionals who have worked alongside me
            throughout my career journey.
          </p>

          {/* Trust indicators */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br ${
                      i === 0 ? 'from-amber-400 to-orange-500' :
                      i === 1 ? 'from-emerald-400 to-teal-500' :
                      i === 2 ? 'from-blue-400 to-indigo-500' :
                      'from-slate-400 to-slate-500'
                    } flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {['AH', 'AN', 'MR', '+'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-400">
                <span className="font-semibold text-white">{testimonials.length}+</span> Recommendations
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm text-slate-400">LinkedIn Verified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://www.linkedin.com/in/rabiul-islam-naba-2a97a99a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300 group-hover:scale-105" />

            {/* Animated shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

            {/* Inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-white font-semibold text-base">
                  View All Recommendations
                </span>
                <span className="block text-white/80 text-sm">
                  on LinkedIn Profile
                </span>
              </div>
              <svg className="w-5 h-5 text-white ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          {/* Additional trust note */}
          <p className="mt-6 text-sm text-slate-500">
            All recommendations are from verified LinkedIn connections
          </p>
        </motion.div>
      </div>
    </section>
  )
}
