'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, Badge } from '@/components/ui'
import { education } from '@/data/portfolio'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export function Education() {
  return (
    <Section id="education" background="white" paddingY="xl">
      <SectionHeader
        subtitle="Academic Background"
        title="Education"
        description="Strong academic foundation in industrial engineering from Bangladesh's premier engineering institution."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {education.map((edu, index) => (
          <motion.div key={edu.id} variants={staggerItem}>
            <Card
              variant="default"
              interactive
              className={`h-full p-6 sm:p-8 ${
                index === 0 ? 'md:col-span-2 border-2 border-neutral-200' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  index === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <Badge variant="default" size="sm">
                  {edu.period}
                </Badge>
              </div>

              {/* Content */}
              <h3 className={`font-semibold text-neutral-900 mb-2 ${
                index === 0 ? 'text-xl' : 'text-lg'
              }`}>
                {edu.degree}
              </h3>
              <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-neutral-500 mb-4">{edu.location}</p>

              <p className="text-neutral-600 mb-4">{edu.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-lg"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* BUET Badge for first item */}
              {index === 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">BUET</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        Bangladesh University of Engineering and Technology
                      </p>
                      <p className="text-xs text-neutral-500">
                        Premier Engineering Institution of Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">
          Continuous Learning & Development
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Supply Chain Management',
            'Procurement Best Practices',
            'Lean Operations',
            'Vendor Assessment',
            'Contract Management',
          ].map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200"
            >
              <svg
                className="w-5 h-5 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-neutral-700">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
