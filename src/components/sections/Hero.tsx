'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const floatIn = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      aria-label="Hero section - Introduction"
      itemScope
      itemType="https://schema.org/Person"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient with warm tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-slate-50" />

        {/* Aurora-like gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 70% 0%, rgba(251,191,36,0.12), transparent 50%),
              radial-gradient(ellipse 80% 60% at 0% 50%, rgba(245,158,11,0.08), transparent 50%),
              radial-gradient(ellipse 60% 80% at 100% 80%, rgba(148,163,184,0.08), transparent 50%)
            `,
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,116,139,0.08) 0%, rgba(148,163,184,0.04) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container-custom w-full pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge with gradient border */}
            <motion.div custom={0} variants={fadeInUp} className="mb-8">
              <span className="relative inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-amber-500/5">
                {/* Gradient border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 opacity-60" style={{ padding: '1px' }}>
                  <span className="absolute inset-[1px] rounded-full bg-white/95" />
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-emerald-400 to-emerald-600" />
                </span>
                <span className="relative text-xs sm:text-sm font-medium text-slate-600">
                  Available for Strategic Opportunities
                </span>
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              custom={1}
              variants={fadeInUp}
              className="text-slate-500 text-base sm:text-lg font-medium mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name with enhanced gradient */}
            <motion.h1 custom={2} variants={fadeInUp} className="mb-6" itemProp="name">
              <span className="block font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Rabiul Islam
              </span>
              <span className="block font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] mt-1 sm:mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Naba
              </span>
            </motion.h1>

            {/* Title with subtle gradient */}
            <motion.p
              custom={3}
              variants={fadeInUp}
              className="font-display text-xl sm:text-2xl lg:text-xl xl:text-2xl text-slate-600 mb-6 font-medium leading-relaxed"
              itemProp="jobTitle"
            >
              {personalInfo.title}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={4}
              variants={fadeInUp}
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              itemProp="description"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTAs with gradient buttons */}
            <motion.div
              custom={5}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-12"
            >
              {/* Primary CTA with gradient */}
              <motion.button
                onClick={() => handleScroll('#contact')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white text-[15px] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                <span className="relative z-10">Get in Touch</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              {/* Secondary CTA with gradient border */}
              <motion.button
                onClick={() => handleScroll('#experience')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-slate-700 text-[15px] font-semibold rounded-full transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 p-[1.5px]">
                  <div className="absolute inset-[1.5px] rounded-full bg-white group-hover:bg-slate-50 transition-colors" />
                </div>
                <span className="relative z-10">View Experience</span>
              </motion.button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              custom={6}
              variants={fadeInUp}
              className="flex flex-wrap items-stretch justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {[
                { value: '10+', label: 'Years', sublabel: 'Experience', gradient: 'from-amber-500 to-orange-500', bg: 'from-amber-50 to-orange-50', border: 'border-amber-200/50', shadow: 'shadow-amber-500/10', icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )},
                { value: '5', label: 'Companies', sublabel: 'Worked With', gradient: 'from-slate-600 to-slate-800', bg: 'from-slate-50 to-slate-100', border: 'border-slate-200/50', shadow: 'shadow-slate-500/10', icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )},
                { value: 'CIPS', label: 'Certified', sublabel: 'Professional', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200/50', shadow: 'shadow-emerald-500/10', icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )},
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />

                  {/* Card */}
                  <div className={`relative px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-br ${stat.bg} rounded-xl border ${stat.border} backdrop-blur-sm shadow-lg ${stat.shadow} group-hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>

                      {/* Content */}
                      <div>
                        <p className={`font-display text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent leading-none`}>
                          {stat.value}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 lg:w-[380px] lg:h-[380px] xl:w-[440px] xl:h-[440px]">
                {/* Gradient decorative ring */}
                <div className="absolute -inset-4 sm:-inset-5 rounded-[2.5rem] bg-gradient-to-br from-amber-300/30 via-orange-200/20 to-transparent blur-sm" />
                <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-200/50 via-amber-100/30 to-transparent" />

                {/* Animated background shape */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100/50 rounded-[2rem]"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Image frame with gradient border */}
                <div className="absolute inset-2 sm:inset-3 rounded-[1.5rem] overflow-hidden bg-white shadow-2xl shadow-amber-200/30">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-orange-50 p-[2px] rounded-[1.5rem]">
                    <div className="absolute inset-[2px] rounded-[calc(1.5rem-2px)] overflow-hidden bg-white">
                      <Image
                        src={personalInfo.profileImage}
                        alt={`${personalInfo.name} - ${personalInfo.title}`}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 475px) 288px, (max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 380px, 440px"
                        itemProp="image"
                      />
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-amber-100/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - BUET with gradient shadow */}
              <motion.div
                className="hidden sm:flex absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-right-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-amber-200/40 border border-amber-100/50"
                custom={0.9}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, y: -3, boxShadow: '0 25px 50px -12px rgba(251, 191, 36, 0.25)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-inner">
                  <Image
                    src="/images/buet-logo.jpeg"
                    alt="BUET"
                    width={28}
                    height={28}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">BUET Graduate</p>
                  <p className="text-xs text-slate-500">Industrial Engineering</p>
                </div>
              </motion.div>

              {/* Floating Badge - Current Role with gradient accent */}
              <motion.div
                className="hidden sm:flex absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-left-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100"
                custom={1.1}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, y: -3, boxShadow: '0 25px 50px -12px rgba(100, 116, 139, 0.2)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/fervent-main-logo.jpg"
                    alt="Fervent"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Head of Supply Chain</p>
                  <p className="text-xs text-slate-500">Fervent Multiboard</p>
                </div>
              </motion.div>

              {/* Floating Badge - CIPS with enhanced gradient */}
              <motion.div
                className="hidden md:flex absolute top-1/2 -right-2 lg:-right-10 -translate-y-1/2 items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/30"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
                }}
                custom={1.3}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.4)' }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20" />
                </div>
                <Image
                  src="/images/cips-logo.jpeg"
                  alt="CIPS"
                  width={22}
                  height={22}
                  className="rounded relative z-10"
                />
                <span className="text-xs font-semibold text-white relative z-10">CIPS Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with gradient */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-amber-400 flex justify-center pt-1.5 transition-colors duration-300">
            <motion.div
              className="w-1 h-1.5 bg-gradient-to-b from-slate-400 to-slate-500 group-hover:from-amber-400 group-hover:to-orange-500 rounded-full transition-colors duration-300"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}
