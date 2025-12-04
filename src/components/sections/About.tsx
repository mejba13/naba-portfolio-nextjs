'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, achievements } from '@/data/portfolio'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const iconMap: Record<string, JSX.Element> = {
  certificate: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  education: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
          }}
        />
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
          <span className="label-editorial mb-4 block">About Me</span>
          <h2 id="about-heading" className="heading-section mb-6">
            Driving Excellence in Supply Chain
          </h2>
          <p className="body-large">
            With over a decade of experience across manufacturing, energy, and technology sectors,
            I bring strategic vision and operational expertise to every challenge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Bio */}
            <motion.div variants={itemVariants} className="mb-8">
              {personalInfo.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Based in</p>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">From</p>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">{personalInfo.hometown}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blood Donation Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 rounded-xl border border-red-100 mb-6 sm:mb-8"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-red-900 text-sm sm:text-base">{personalInfo.bloodGroup}</p>
                <p className="text-[10px] sm:text-xs text-red-600">Community Service</p>
              </div>
            </motion.div>

            {/* Expertise Tags */}
            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  'Strategic Sourcing',
                  'Vendor Management',
                  'Process Optimization',
                  'Cost Analysis',
                  'Team Leadership',
                  'Contract Negotiation',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Profile Image Card */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 card-premium overflow-hidden group"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={personalInfo.secondaryImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display text-xl font-semibold">
                    {personalInfo.name}
                  </p>
                  <p className="text-white/80 text-sm">{personalInfo.title}</p>
                </div>
              </div>
            </motion.div>

            {/* Achievement Cards */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="card-premium p-5 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0
                      ? 'bg-emerald-100 text-emerald-600'
                      : index === 1
                      ? 'bg-amber-100 text-amber-600'
                      : index === 2
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {iconMap[achievement.icon]}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
