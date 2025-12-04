'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { experiences } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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

export function Experience() {
  // Group experiences by company
  const groupedExperiences = experiences.reduce((acc, exp) => {
    const key = exp.company
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(exp)
    return acc
  }, {} as Record<string, typeof experiences>)

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

        {/* Warm gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 30% 20%, rgba(251,191,36,0.06), transparent 50%),
              radial-gradient(ellipse 50% 50% at 80% 80%, rgba(148,163,184,0.06), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
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
          className="max-w-3xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label with gradient accent */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-orange-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Career Journey
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            A decade of driving operational excellence across Bangladesh&apos;s leading
            organizations in manufacturing, energy, and technology sectors.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Gradient Timeline Line */}
          <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400 via-amber-300 to-slate-200" />
            {/* Animated glow */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-amber-400/50 to-transparent blur-sm"
              animate={{ y: [0, 500, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {Object.entries(groupedExperiences).map(([company, roles], companyIndex) => (
              <motion.div
                key={company}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-6 lg:left-8 top-6 -translate-x-1/2 z-10">
                  <div className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                    roles[0].current
                      ? 'bg-gradient-to-br from-emerald-400 to-emerald-600'
                      : 'bg-gradient-to-br from-amber-400 to-orange-500'
                  } shadow-lg ${roles[0].current ? 'shadow-emerald-500/40' : 'shadow-amber-500/40'}`}>
                    {roles[0].current && (
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                    )}
                    {/* Inner dot */}
                    <span className="absolute inset-1 rounded-full bg-white" />
                  </div>
                </div>

                {/* Company Card */}
                <div className="ml-12 sm:ml-16 lg:ml-20">
                  <motion.div
                    className="group relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card glow on hover */}
                    <div className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                      roles[0].current
                        ? 'bg-gradient-to-br from-emerald-200/40 to-teal-200/30'
                        : 'bg-gradient-to-br from-amber-200/40 to-orange-200/30'
                    }`} />

                    {/* Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-200">
                      {/* Card gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                        roles[0].current
                          ? 'from-emerald-400 via-emerald-500 to-teal-500'
                          : 'from-amber-400 via-orange-400 to-amber-500'
                      }`} />

                      <div className="p-5 sm:p-6 lg:p-8">
                        {/* Company Header */}
                        <div className="flex flex-wrap items-start gap-4 mb-6">
                          {/* Logo with gradient border */}
                          <div className="relative group/logo">
                            <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${
                              roles[0].current
                                ? 'from-emerald-400 to-teal-500'
                                : 'from-amber-400 to-orange-500'
                            } opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 blur-sm`} />
                            <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center overflow-hidden shadow-lg ${
                              roles[0].logo?.includes('squarelogo')
                                ? 'bg-[#0a4d8c]'
                                : 'bg-white border border-slate-100'
                            }`}>
                              {roles[0].logo ? (
                                <Image
                                  src={roles[0].logo}
                                  alt={company}
                                  width={64}
                                  height={64}
                                  className={`object-contain ${
                                    roles[0].logo?.includes('squarelogo')
                                      ? 'w-10 h-10 sm:w-12 sm:h-12'
                                      : 'w-10 h-10 sm:w-12 sm:h-12'
                                  }`}
                                />
                              ) : (
                                <span className="text-lg font-bold bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                  {company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                                {company}
                              </h3>
                              {roles[0].current && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200/50">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-slate-500 text-sm flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {roles[0].location}
                            </p>
                            {roles[0].companyUrl && (
                              <a
                                href={roles[0].companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium mt-2 text-amber-600 hover:text-amber-700 transition-colors group/link"
                              >
                                <span>Visit Website</span>
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>

                          {/* Total Duration Badge */}
                          {roles.length > 1 && (
                            <div className="hidden sm:block">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-sm font-semibold rounded-full border border-amber-200/50 shadow-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {calculateTotalDuration(roles)} total
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Roles */}
                        <div className="space-y-6">
                          {roles.map((role, roleIndex) => (
                            <div
                              key={role.id}
                              className={`relative ${roleIndex !== roles.length - 1 ? 'pb-6 border-b border-slate-100' : ''}`}
                            >
                              {/* Role Header */}
                              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 mb-3">
                                <div>
                                  <h4 className="font-semibold text-slate-900 text-lg flex items-center gap-2">
                                    {role.role}
                                    {role.current && roleIndex === 0 && (
                                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    )}
                                  </h4>
                                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                    <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      {role.period}
                                    </span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-sm text-slate-500">{role.duration}</span>
                                  </div>
                                </div>
                                <div className="flex gap-2 mt-1 sm:mt-0">
                                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                                    {role.type}
                                  </span>
                                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                                    {role.workType}
                                  </span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                                {role.description}
                              </p>

                              {/* Highlights with gradient hover */}
                              <div className="flex flex-wrap gap-2">
                                {role.highlights.slice(0, 4).map((highlight, hIndex) => (
                                  <motion.span
                                    key={highlight}
                                    className="group/tag relative px-3 py-1.5 text-xs font-medium rounded-lg cursor-default transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {/* Gradient background on hover */}
                                    <span className={`absolute inset-0 rounded-lg bg-gradient-to-r ${
                                      hIndex % 3 === 0 ? 'from-amber-500 to-orange-500' :
                                      hIndex % 3 === 1 ? 'from-slate-600 to-slate-700' :
                                      'from-emerald-500 to-teal-500'
                                    } opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300`} />
                                    {/* Default state */}
                                    <span className="absolute inset-0 rounded-lg bg-slate-100 group-hover/tag:bg-transparent transition-colors" />
                                    <span className="relative z-10 text-slate-600 group-hover/tag:text-white transition-colors">
                                      {highlight}
                                    </span>
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function calculateTotalDuration(roles: typeof experiences): string {
  const months = roles.reduce((total, role) => {
    const match = role.duration.match(/(\d+)\s*yr/)
    const years = match ? parseInt(match[1]) : 0
    const monthMatch = role.duration.match(/(\d+)\s*mo/)
    const mos = monthMatch ? parseInt(monthMatch[1]) : 0
    return total + (years * 12) + mos
  }, 0)

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years > 0 && remainingMonths > 0) {
    return `${years} yr ${remainingMonths} mos`
  } else if (years > 0) {
    return `${years} yrs`
  } else {
    return `${remainingMonths} mos`
  }
}
