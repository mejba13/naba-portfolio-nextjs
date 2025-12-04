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
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30" />

        {/* Subtle mesh gradient */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.08), transparent)',
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,116,139,0.05) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            {/* Status Badge */}
            <motion.div custom={0} variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-600">
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

            {/* Name */}
            <motion.h1 custom={2} variants={fadeInUp} className="mb-6" itemProp="name">
              <span className="block font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Rabiul Islam
              </span>
              <span className="block font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] mt-1 sm:mt-2 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Naba
              </span>
            </motion.h1>

            {/* Title */}
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

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={() => handleScroll('#contact')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-slate-900 text-white text-[15px] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('#experience')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-700 text-[15px] font-semibold rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Experience
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={6}
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 lg:gap-12"
            >
              {[
                { value: '10+', label: 'Years', sublabel: 'Experience' },
                { value: '5', label: 'Companies', sublabel: 'Worked' },
                { value: 'CIPS', label: 'Certified', sublabel: 'Professional' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-slate-900 font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
                </div>
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
                {/* Decorative ring */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-200/40 via-amber-100/20 to-transparent" />

                {/* Background shape */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50/50 rounded-[2rem]"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Image frame */}
                <div className="absolute inset-2 sm:inset-3 rounded-[1.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 475px) 288px, (max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 380px, 440px"
                    itemProp="image"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge - BUET */}
              <motion.div
                className="hidden sm:flex absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-right-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100"
                custom={0.9}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
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

              {/* Floating Badge - Current Role */}
              <motion.div
                className="hidden sm:flex absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-left-6 items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100"
                custom={1.1}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden">
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

              {/* Floating Badge - CIPS */}
              <motion.div
                className="hidden md:flex absolute top-1/2 -right-2 lg:-right-10 -translate-y-1/2 items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/30"
                custom={1.3}
                variants={floatIn}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/cips-logo.jpeg"
                  alt="CIPS"
                  width={22}
                  height={22}
                  className="rounded"
                />
                <span className="text-xs font-semibold text-white">CIPS Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <motion.div
              className="w-1 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}
