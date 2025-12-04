'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { education } from '@/data/portfolio'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Styles mapped by institution type - BUET first (amber), then CIPS (emerald)
const educationStyles: Record<string, { gradient: string; bg: string; border: string; shadow: string; accent: string }> = {
  'BUET': {
    gradient: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200/50',
    shadow: 'shadow-amber-500/20',
    accent: 'amber',
  },
  'CIPS': {
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200/50',
    shadow: 'shadow-emerald-500/20',
    accent: 'emerald',
  },
}

const getStyleForInstitution = (institution: string) => {
  if (institution.includes('BUET')) return educationStyles['BUET']
  if (institution.includes('CIPS')) return educationStyles['CIPS']
  return educationStyles['BUET'] // default
}

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white" />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 20% 30%, rgba(16,185,129,0.08), transparent 50%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(251,191,36,0.08), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200/50 to-transparent" />
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
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Academic Background
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Strong academic foundation from Bangladesh&apos;s premier engineering institution
            complemented by international professional certification.
          </p>
        </motion.div>

        {/* Education Grid - Reversed order: BUET first, then CIPS */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[...education].reverse().map((edu) => {
            const style = getStyleForInstitution(edu.institution)

            return (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Card glow on hover */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${style.gradient} rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`} />

                {/* Card */}
                <div className={`relative h-full bg-white/90 backdrop-blur-sm rounded-2xl border ${style.border} shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-500 group-hover:shadow-2xl flex flex-col`}>
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.gradient}`} />

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Logo with gradient border */}
                      <div className="relative group/logo flex-shrink-0">
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 blur-sm`} />
                        <div className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center overflow-hidden shadow-lg ${style.shadow} group-hover:scale-105 transition-transform duration-500`}>
                          {edu.logo ? (
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              width={56}
                              height={56}
                              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                            />
                          ) : (
                            <span className={`text-xl font-bold bg-gradient-to-br ${style.gradient} bg-clip-text text-transparent`}>
                              {edu.institution.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Period badge */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${style.bg} text-${style.accent}-700 text-xs font-semibold rounded-full border ${style.border} mb-2`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.period}
                        </span>

                        <h3 className="font-display text-xl sm:text-2xl text-slate-900 leading-tight font-bold tracking-tight">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className={`bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent font-semibold text-base mt-1`}>
                            {edu.field}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="mb-5 pb-5 border-b border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="font-semibold text-slate-900">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-sm text-slate-500">{edu.location}</p>
                      </div>
                      {edu.institutionUrl && (
                        <a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-sm font-medium text-${style.accent}-600 hover:text-${style.accent}-700 transition-colors group/link`}
                        >
                          <span>Visit Website</span>
                          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-[15px] mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights with gradient hover */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {edu.highlights.map((highlight, hIndex) => (
                        <motion.span
                          key={highlight}
                          className="group/tag relative px-3 py-1.5 text-xs font-medium rounded-lg cursor-default transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Gradient background on hover */}
                          <span className={`absolute inset-0 rounded-lg bg-gradient-to-r ${style.gradient} opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300`} />
                          {/* Default state */}
                          <span className={`absolute inset-0 rounded-lg bg-gradient-to-br ${style.bg} border ${style.border} group-hover/tag:opacity-0 transition-opacity`} />
                          <span className={`relative z-10 text-slate-600 group-hover/tag:text-white transition-colors`}>
                            {highlight}
                          </span>
                        </motion.span>
                      ))}
                    </div>

                    {/* Special Badge for BUET */}
                    {edu.institution.includes('BUET') && (
                      <div className="relative mt-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-2xl blur-sm" />
                        <div className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900">
                              Premier Engineering Institution
                            </p>
                            <p className="text-sm text-slate-600">
                              Bangladesh&apos;s #1 Engineering University
                            </p>
                          </div>
                          <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white/80 rounded-full border border-amber-200/50">
                            <span className="text-xs font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">#1</span>
                            <span className="text-xs text-slate-500">in BD</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Special Badge for CIPS */}
                    {edu.institution.includes('CIPS') && (
                      <div className="relative mt-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-2xl blur-sm" />
                        <div className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900">
                              Globally Recognized Certification
                            </p>
                            <p className="text-sm text-slate-600">
                              International Procurement Standard
                            </p>
                          </div>
                          <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white/80 rounded-full border border-emerald-200/50">
                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-slate-600">Verified</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Continuous Professional Development */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Label */}
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
              Continuous Professional Development
            </h3>
            <p className="text-slate-500 text-sm">Ongoing training and certifications</p>
          </div>

          {/* Tags Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200/30 via-amber-200/30 to-emerald-200/30 rounded-3xl blur-xl" />

            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 sm:p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Supply Chain Management', icon: '📦' },
                  { name: 'Lean Operations', icon: '⚡' },
                  { name: 'Vendor Assessment', icon: '🔍' },
                  { name: 'Contract Management', icon: '📋' },
                  { name: 'Negotiation Skills', icon: '🤝' },
                  { name: 'ERP Systems', icon: '💻' },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient glow on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-emerald-400 to-teal-400' :
                      index % 3 === 1 ? 'from-amber-400 to-orange-400' :
                      'from-blue-400 to-indigo-400'
                    } rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`} />

                    <div className="relative flex items-center gap-2.5 px-5 py-3 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:shadow-lg group-hover:border-slate-300 transition-all duration-300">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-emerald-100 to-teal-100' :
                        index % 3 === 1 ? 'from-amber-100 to-orange-100' :
                        'from-blue-100 to-indigo-100'
                      } flex items-center justify-center`}>
                        <svg className={`w-4 h-4 ${
                          index % 3 === 0 ? 'text-emerald-600' :
                          index % 3 === 1 ? 'text-amber-600' :
                          'text-blue-600'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
