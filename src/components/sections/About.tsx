'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, achievements } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 },
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

const achievementGradients = [
  { bg: 'from-emerald-500 to-teal-600', light: 'from-emerald-50 to-teal-50', border: 'border-emerald-100', text: 'text-emerald-600', shadow: 'shadow-emerald-500/20' },
  { bg: 'from-amber-500 to-orange-500', light: 'from-amber-50 to-orange-50', border: 'border-amber-100', text: 'text-amber-600', shadow: 'shadow-amber-500/20' },
  { bg: 'from-blue-500 to-indigo-600', light: 'from-blue-50 to-indigo-50', border: 'border-blue-100', text: 'text-blue-600', shadow: 'shadow-blue-500/20' },
  { bg: 'from-slate-600 to-slate-800', light: 'from-slate-50 to-slate-100', border: 'border-slate-200', text: 'text-slate-600', shadow: 'shadow-slate-500/20' },
]

// Keywords to highlight in the bio
const highlightKeywords = [
  'Rabiul Islam Naba',
  'Head of Supply Chain',
  'Fervent Multiboard Industries Limited',
  'Bangladesh University of Engineering and Technology (BUET)',
  'BUET',
  'Bachelor of Engineering',
  'Industrial Engineering',
  'Diploma in Procurement and Supply',
  'CIPS (The Chartered Institute of Procurement & Supply)',
  'CIPS',
  'Rahimafrooz Storage Power Business',
  'Walton Micro-Tech Corporation Ltd.',
  'Square Pharmaceuticals Limited',
  'supply chain and procurement leader',
  '10 years of experience',
  'over 10 years',
  'strategic sourcing',
  'vendor management',
  'operational optimization',
  'strategic mindset',
  'operational excellence',
]

// Function to highlight keywords in text
function highlightText(text: string): JSX.Element[] {
  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = [...highlightKeywords].sort((a, b) => b.length - a.length)

  // Create a regex pattern that matches any of the keywords (case insensitive)
  const pattern = new RegExp(
    `(${sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  )

  // Split text by the pattern while keeping the matches
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    // Check if this part matches any keyword (case insensitive)
    const isKeyword = sortedKeywords.some(
      keyword => keyword.toLowerCase() === part.toLowerCase()
    )

    if (isKeyword) {
      return (
        <span key={index} className="font-semibold text-slate-800">
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white" />

        {/* Warm gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(251,191,36,0.08), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(245,158,11,0.06), transparent 50%),
              radial-gradient(ellipse 50% 60% at 70% 80%, rgba(148,163,184,0.06), transparent 50%)
            `,
          }}
        />

        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(100,116,139,0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
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
              About Me
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <h2 id="about-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Driving Excellence in{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Supply Chain
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            With over a decade of experience across manufacturing, energy, and technology sectors,
            I bring strategic vision and operational expertise to every challenge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Bio Card with gradient border */}
            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="absolute -inset-px bg-gradient-to-br from-amber-200 via-slate-200 to-amber-100 rounded-2xl opacity-60" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                {personalInfo.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4 last:mb-0 text-[15px]">
                    {highlightText(paragraph)}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Cards with gradient styling */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-8">
              {/* Location Card */}
              <motion.div
                className="group relative"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-amber-300 via-orange-200 to-amber-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-xl border border-amber-100/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-amber-600 uppercase tracking-wider font-semibold">Based in</p>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hometown Card */}
              <motion.div
                className="group relative"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white shadow-lg shadow-slate-500/30 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">From</p>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">{personalInfo.hometown}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Blood Donation Badge with gradient */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="group relative"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-red-400 via-rose-300 to-red-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-4 p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-100/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-red-900 text-base">{personalInfo.bloodGroup}</p>
                    <p className="text-xs text-red-600 font-medium">Community Service</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-red-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    <span className="text-xs font-medium text-red-700">Ready to Donate</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Expertise Tags with gradient hover */}
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Strategic Sourcing', color: 'amber' },
                  { name: 'Vendor Management', color: 'orange' },
                  { name: 'Process Optimization', color: 'slate' },
                  { name: 'Cost Analysis', color: 'emerald' },
                  { name: 'Team Leadership', color: 'blue' },
                  { name: 'Contract Negotiation', color: 'amber' },
                ].map((tag, index) => (
                  <motion.span
                    key={tag.name}
                    className="group relative px-4 py-2 text-sm font-medium rounded-full cursor-default transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient background on hover */}
                    <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-amber-500 to-orange-500' :
                      index % 3 === 1 ? 'from-slate-600 to-slate-700' :
                      'from-emerald-500 to-teal-500'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Default state */}
                    <span className="absolute inset-0 rounded-full bg-white border border-slate-200 group-hover:border-transparent transition-colors" />
                    <span className="relative z-10 text-slate-700 group-hover:text-white transition-colors">
                      {tag.name}
                    </span>
                  </motion.span>
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
            {/* Profile Image Card with premium treatment */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 group relative"
            >
              {/* Outer gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-300/40 via-orange-200/30 to-amber-100/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Card container */}
              <div className="relative overflow-hidden rounded-2xl">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-300 to-amber-200 p-[2px] rounded-2xl">
                  <div className="absolute inset-[2px] bg-white rounded-[calc(1rem-2px)]" />
                </div>

                {/* Image container */}
                <div className="relative h-72 xs:h-80 sm:h-96 rounded-2xl overflow-hidden m-[2px]">
                  <Image
                    src={personalInfo.secondaryImage}
                    alt={`${personalInfo.name} - Professional portrait`}
                    fill
                    className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-amber-500/10" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white font-display text-xl sm:text-2xl lg:text-3xl font-semibold">
                          {personalInfo.name}
                        </p>
                        <p className="text-white/70 text-sm sm:text-base mt-1">{personalInfo.title}</p>
                      </div>
                      {/* Decorative badge */}
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                        <span className="text-xs font-medium text-white/90">10+ Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievement Cards with gradient styling */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${achievementGradients[index].bg} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />

                {/* Card */}
                <div className={`relative h-full p-5 sm:p-6 bg-gradient-to-br ${achievementGradients[index].light} rounded-xl border ${achievementGradients[index].border} backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl ${achievementGradients[index].shadow}`}>
                  {/* Icon with gradient */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievementGradients[index].bg} flex items-center justify-center mb-4 text-white shadow-lg ${achievementGradients[index].shadow} group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[achievement.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br ${achievementGradients[index].bg} opacity-10`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
