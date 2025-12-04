'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { personalInfo } from '@/data/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const floatIn = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: personalInfo.social.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: 'hover:bg-[#25D366] hover:border-[#25D366]',
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'hover:bg-amber-500 hover:border-amber-500',
  },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero section - Introduction"
      itemScope
      itemType="https://schema.org/Person"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50" />

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% -10%, rgba(251,191,36,0.15), transparent 50%),
              radial-gradient(ellipse 60% 50% at -10% 50%, rgba(251,146,60,0.1), transparent 50%),
              radial-gradient(ellipse 50% 60% at 100% 90%, rgba(148,163,184,0.08), transparent 50%)
            `,
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex-1 flex items-center"
        style={{ y, opacity }}
      >
        <div className="container-custom w-full py-8 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Content Column */}
            <motion.div
              className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow + Status */}
              <motion.div custom={0} variants={fadeInUp} className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-amber-200/50 shadow-lg shadow-amber-500/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Open to Opportunities
                  </span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div custom={1} variants={fadeInUp} className="mb-4 sm:mb-6">
                <p className="text-slate-500 text-base sm:text-lg font-medium mb-1 sm:mb-2 tracking-wide">
                  Strategic Supply Chain Leader
                </p>
                <h1 itemProp="name" className="font-display">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                    Rabiul Islam
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-tight mt-1">
                    <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                      Naba
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* Value Proposition */}
              <motion.div custom={2} variants={fadeInUp} className="mb-4 sm:mb-6">
                <p
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 font-semibold leading-snug"
                  itemProp="jobTitle"
                >
                  Transforming Supply Chains Into
                  <span className="text-amber-600"> Competitive Advantages</span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                custom={3}
                variants={fadeInUp}
                className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8"
                itemProp="description"
              >
                Driving operational excellence across manufacturing, energy, and technology sectors with proven expertise in procurement optimization, vendor management, and strategic sourcing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={4}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                {/* Primary CTA */}
                <motion.button
                  onClick={() => handleScroll('#contact')}
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full overflow-hidden shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative">Let&apos;s Connect</span>
                  <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  onClick={() => handleScroll('#experience')}
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 font-semibold rounded-full border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View My Journey</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                custom={5}
                variants={fadeInUp}
                className="flex items-center gap-3 justify-center lg:justify-start mb-6 sm:mb-10"
              >
                <span className="text-sm text-slate-400 font-medium">Connect:</span>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 ${link.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                custom={6}
                variants={fadeInUp}
                className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { value: '10+', label: 'Years', sublabel: 'Experience' },
                  { value: '5', label: 'Companies', sublabel: 'Leadership' },
                  { value: 'CIPS', label: 'Certified', sublabel: 'Professional' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group text-center lg:text-left p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:border-amber-200 hover:bg-white transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">{stat.label}</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">{stat.sublabel}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px]">
                  {/* Decorative ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full border-2 border-dashed border-amber-200/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Gradient background shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100 rounded-[2.5rem] transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 via-amber-50 to-white rounded-[2.5rem]" />

                  {/* Image frame */}
                  <div className="absolute inset-3 rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-200/40 border-4 border-white">
                    <Image
                      src={personalInfo.profileImage}
                      alt={`${personalInfo.name} - ${personalInfo.title}`}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 400px, 460px"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                  </div>
                </div>

                {/* Floating Badge - BUET */}
                <motion.div
                  className="hidden sm:flex absolute -top-2 -right-2 lg:-right-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-amber-100"
                  custom={0.8}
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
                    <Image src="/images/buet-logo.jpeg" alt="BUET" width={28} height={28} className="rounded-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">BUET Graduate</p>
                    <p className="text-xs text-slate-500">Industrial Engineering</p>
                  </div>
                </motion.div>

                {/* Floating Badge - Current Role */}
                <motion.div
                  className="hidden sm:flex absolute -bottom-2 -left-2 lg:-left-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-slate-100"
                  custom={1}
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden">
                    <Image src="/images/fervent-main-logo.jpg" alt="Fervent" width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Head of Supply Chain</p>
                    <p className="text-xs text-slate-500">Fervent Multiboard</p>
                  </div>
                </motion.div>

                {/* Floating Badge - CIPS */}
                <motion.div
                  className="hidden md:flex absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/30"
                  custom={1.2}
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.08 }}
                >
                  <Image src="/images/cips-logo.jpeg" alt="CIPS" width={22} height={22} className="rounded" />
                  <span className="text-xs font-bold text-white">CIPS Certified</span>
                </motion.div>

                {/* Experience counter badge */}
                <motion.div
                  className="hidden lg:flex absolute bottom-1/4 -left-8 xl:-left-14 flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl"
                  custom={1.4}
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="text-2xl font-bold text-amber-400">10+</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Years</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-amber-500 transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 group-hover:border-amber-400 flex justify-center pt-2 transition-colors">
            <motion.div
              className="w-1.5 h-2 bg-slate-400 group-hover:bg-amber-500 rounded-full transition-colors"
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.button>
      </motion.div>

    </section>
  )
}
