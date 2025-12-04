'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { education } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-editorial mb-4 block">Academic Background</span>
          <h2 className="heading-section mb-6">Education & Certifications</h2>
          <p className="body-large">
            Strong academic foundation from Bangladesh&apos;s premier engineering institution
            complemented by international professional certification.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={index === 1 ? 'lg:mt-12' : ''}
            >
              <div className="group card-premium h-full p-6 lg:p-8 hover:shadow-xl transition-all duration-500">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* Logo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    {edu.logo ? (
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                      />
                    ) : (
                      <span className="text-lg sm:text-xl font-bold text-slate-400">
                        {edu.institution.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="badge-gold text-[10px] sm:text-xs mb-1.5 sm:mb-2 inline-block">{edu.period}</span>
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-slate-900 leading-tight font-bold tracking-tight">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-amber-600 font-medium text-sm sm:text-base mt-1">{edu.field}</p>
                    )}
                  </div>
                </div>

                {/* Institution */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <p className="font-semibold text-slate-900">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                  {edu.institutionUrl && (
                    <a
                      href={edu.institutionUrl}
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

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Special Badge for BUET */}
                {edu.institution.includes('BUET') && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Premier Engineering Institution
                        </p>
                        <p className="text-xs text-slate-600">
                          Bangladesh&apos;s #1 Engineering University
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special Badge for CIPS */}
                {edu.institution.includes('CIPS') && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Globally Recognized Certification
                        </p>
                        <p className="text-xs text-slate-600">
                          International Procurement Standard
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Certifications */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="font-display text-xl font-semibold text-slate-900 mb-6">
            Continuous Professional Development
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'Supply Chain Management',
              'Lean Operations',
              'Vendor Assessment',
              'Contract Management',
              'Negotiation Skills',
              'ERP Systems',
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
