'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { Button } from '@/components/ui'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  float,
} from '@/lib/animations'

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neutral-200/50 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Decorative Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Open to Strategic Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-display-lg sm:text-display-xl lg:text-display-2xl font-display font-bold tracking-tight text-neutral-900 mb-6"
            >
              <span className="block">Hi, I&apos;m</span>
              <span className="block text-gradient">{personalInfo.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-medium text-neutral-700 mb-4"
            >
              {personalInfo.title}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('#contact')}
                rightIcon={
                  <svg
                    className="w-5 h-5"
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
                }
              >
                Get in Touch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScroll('#experience')}
              >
                View Experience
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-neutral-200"
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '100+', label: 'Vendor Relationships' },
                { value: '3', label: 'Industry Sectors' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                variants={float}
                animate="animate"
              >
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-100 rounded-[2.5rem] rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-white rounded-[2.5rem] -rotate-3 shadow-soft-xl" />

                {/* Image Placeholder */}
                <div className="absolute inset-4 bg-gradient-to-br from-neutral-300 to-neutral-200 rounded-[2rem] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-neutral-400 rounded-full flex items-center justify-center mb-4">
                        <span className="text-4xl sm:text-5xl font-bold text-white">
                          RN
                        </span>
                      </div>
                      <p className="text-neutral-600 font-medium">
                        {personalInfo.name.split(' ')[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-soft-lg border border-neutral-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-neutral-700">BUET Graduate</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-soft-lg border border-neutral-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-neutral-700">
                    Head of Supply Chain
                  </span>
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
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  )
}
