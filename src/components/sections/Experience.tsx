'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { experiences } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
    <section id="experience" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-editorial mb-4 block">Career Journey</span>
          <h2 className="heading-section mb-6">Professional Experience</h2>
          <p className="body-large max-w-2xl">
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
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-slate-200 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {Object.entries(groupedExperiences).map(([company, roles], companyIndex) => (
              <motion.div
                key={company}
                variants={itemVariants}
                className="relative"
              >
                {/* Company Card */}
                <div className="ml-10 sm:ml-14 lg:ml-20">
                  <div className="card-premium p-4 sm:p-6 lg:p-8 hover:shadow-xl">
                    {/* Company Header */}
                    <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {/* Logo */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm ${
                        roles[0].logo?.includes('squarelogo')
                          ? 'bg-[#0a4d8c]'
                          : 'bg-white border border-slate-100'
                      }`}>
                        {roles[0].logo ? (
                          <Image
                            src={roles[0].logo}
                            alt={company}
                            width={56}
                            height={56}
                            className={`object-contain ${
                              roles[0].logo?.includes('squarelogo')
                                ? 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14'
                                : 'w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13'
                            }`}
                          />
                        ) : (
                          <span className="text-base sm:text-lg font-bold text-slate-400">
                            {company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                          <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">
                            {company}
                          </h3>
                          {roles[0].current && (
                            <span className="badge-success flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm">{roles[0].location}</p>
                        {roles[0].companyUrl && (
                          <a
                            href={roles[0].companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 mt-1 transition-colors"
                          >
                            <span>Visit Website</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {/* Total Duration */}
                      {roles.length > 1 && (
                        <div className="text-right">
                          <span className="badge-gold">
                            {calculateTotalDuration(roles)} total
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Roles */}
                    <div className="space-y-5 sm:space-y-6">
                      {roles.map((role, roleIndex) => (
                        <div
                          key={role.id}
                          className={`relative ${roleIndex !== roles.length - 1 ? 'pb-5 sm:pb-6 border-b border-slate-100' : ''}`}
                        >
                          {/* Timeline dot for role */}
                          <div
                            className={`absolute -left-[2.5rem] sm:-left-[3.25rem] lg:-left-[4.25rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 bg-white ${
                              role.current ? 'border-emerald-500' : 'border-amber-400'
                            }`}
                          >
                            {role.current && (
                              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h4 className="font-semibold text-slate-900 text-base sm:text-lg">
                                {role.role}
                              </h4>
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                                <span className="text-xs sm:text-sm text-slate-500">{role.period}</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-xs sm:text-sm text-slate-500">{role.duration}</span>
                              </div>
                            </div>
                            <div className="flex gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                              <span className="badge-outline text-[10px] sm:text-xs">{role.type}</span>
                              <span className="badge-outline text-[10px] sm:text-xs">{role.workType}</span>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                            {role.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {role.highlights.slice(0, 4).map((highlight) => (
                              <span
                                key={highlight}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-slate-50 text-slate-600 text-[10px] sm:text-xs font-medium rounded-lg"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
  // Simple calculation - in production would be more precise
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
