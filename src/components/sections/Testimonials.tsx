'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

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

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,116,139,0.1) 0%, transparent 60%)',
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
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4">
            Recommendations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            What Colleagues Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Trusted testimonials from professionals who have worked alongside me
            throughout my career journey.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500 hover:bg-slate-800/70">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Relationship Badge */}
                  <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3 sm:mb-4">
                    {testimonial.relationship}
                  </span>

                  {/* Quote */}
                  <blockquote className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-light italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-700/50">
                    {/* Avatar */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm sm:text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="text-right hidden sm:block">
                      <span className="text-xs text-slate-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-2xl pointer-events-none">
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full" />
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
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/rabiul-islam-naba-2a97a99a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>View All Recommendations on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
