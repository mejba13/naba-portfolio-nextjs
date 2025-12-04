'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { testimonials } from '@/data/portfolio'

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

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Clean Dark Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />

        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 30% 20%, rgba(148,163,184,0.08), transparent 50%),
              radial-gradient(ellipse 50% 40% at 70% 80%, rgba(148,163,184,0.06), transparent 50%)
            `,
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
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
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-600" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Recommendations
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-slate-600" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            What{' '}
            <span className="text-slate-300">
              Colleagues
            </span>{' '}
            Say
          </h2>

          <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Trusted testimonials from professionals who have worked alongside me
            throughout my career journey.
          </p>

          {/* Trust indicators */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.map((t, i) => (
                  <div
                    key={t.id}
                    className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden"
                  >
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-slate-300">
                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-400">+</span>
                </div>
              </div>
              <span className="text-sm text-slate-400">
                <span className="font-semibold text-slate-300">{testimonials.length}+</span> Recommendations
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm text-slate-400">LinkedIn Verified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-800/80">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Relationship Badge */}
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {testimonial.relationship}
                    </span>
                  </div>

                  {/* Quote Content */}
                  <blockquote className="relative mb-8 pr-8">
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                      <span className="text-slate-500 text-xl">&ldquo;</span>
                      {testimonial.content}
                      <span className="text-slate-500 text-xl">&rdquo;</span>
                    </p>
                  </blockquote>

                  {/* Author Section */}
                  <div className="relative pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/avatar flex-shrink-0"
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-slate-600 group-hover/avatar:border-[#0A66C2] transition-colors duration-300">
                          {testimonial.avatar ? (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                              <span className="font-bold text-lg text-slate-400">
                                {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* LinkedIn badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center border-2 border-slate-800">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                      </a>

                      <div className="flex-1 min-w-0">
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white text-base sm:text-lg hover:text-[#0A66C2] transition-colors truncate block"
                        >
                          {testimonial.name}
                        </a>
                        <p className="text-sm text-slate-400 truncate">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {testimonial.company}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="hidden sm:block text-right">
                        <span className="text-xs text-slate-500">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/rabiul-islam-naba-2a97a99a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>View All Recommendations</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-4 text-sm text-slate-500">
            All recommendations are from verified LinkedIn connections
          </p>
        </motion.div>
      </div>
    </section>
  )
}
