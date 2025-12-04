'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
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
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,116,139,0.06) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 container-custom w-full py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
          >
            {/* Editorial Label */}
            <motion.div custom={0} variants={fadeInUp} className="mb-6">
              <span className="label-editorial">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Strategic Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 custom={1} variants={fadeInUp} className="mb-4 sm:mb-6" itemProp="name">
              <span className="block text-slate-500 font-sans text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4 tracking-normal">
                Hello, I&apos;m
              </span>
              <span className="heading-hero block font-display">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="heading-hero block text-gradient-gold mt-1 sm:mt-2 font-display">
                {personalInfo.name.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div custom={2} variants={fadeInUp} className="flex justify-center lg:justify-start my-6">
              <div className="divider-gold" />
            </motion.div>

            {/* Title */}
            <motion.p
              custom={3}
              variants={fadeInUp}
              className="font-display text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-600 mb-4 sm:mb-6 font-medium"
              itemProp="jobTitle"
            >
              {personalInfo.title}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={4}
              variants={fadeInUp}
              className="body-large max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 text-balance"
              itemProp="description"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-primary group"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('#experience')}
                className="btn-secondary"
              >
                View Experience
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={6}
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12"
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '4', label: 'Companies' },
                { value: 'CIPS', label: 'Certified' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
                {/* Background Shapes */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-[2rem] rotate-6"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-[2rem] -rotate-3 shadow-2xl shadow-slate-200/50"
                  animate={{ rotate: [-3, -5, -3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Image */}
                <div className="absolute inset-2 sm:inset-3 rounded-2xl sm:rounded-[1.5rem] overflow-hidden bg-slate-100">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title} based in ${personalInfo.location}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                    itemProp="image"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Cards - Hidden on very small screens, shown from sm breakpoint */}
              <motion.div
                className="hidden sm:block absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-right-8 px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Image
                      src="/images/buet-logo.jpeg"
                      alt="BUET"
                      width={28}
                      height={28}
                      className="rounded w-5 h-5 sm:w-7 sm:h-7"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">BUET Graduate</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">Industrial Engineering</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-left-8 px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/fervent-main-logo.jpg"
                      alt="Fervent"
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">Head of Supply Chain</p>
                    <p className="text-[10px] sm:text-xs text-slate-500">Fervent Multiboard</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hidden md:flex absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 px-2 py-1.5 sm:px-3 sm:py-2 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Image
                    src="/images/cips-logo.jpeg"
                    alt="CIPS"
                    width={20}
                    height={20}
                    className="rounded w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-[10px] sm:text-xs font-semibold text-white">CIPS Certified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  )
}
