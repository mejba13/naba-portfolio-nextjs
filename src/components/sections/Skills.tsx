'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, ProgressBar } from '@/components/ui'
import { skills } from '@/data/portfolio'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const categoryIcons: Record<string, JSX.Element> = {
  'Supply Chain Management': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  'Procurement Expertise': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'Leadership & Operations': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  'Technical Skills': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export function Skills() {
  return (
    <Section id="skills" background="light" paddingY="xl">
      <SectionHeader
        subtitle="Core Competencies"
        title="Skills & Expertise"
        description="Comprehensive skill set developed through years of hands-on experience in supply chain management and procurement operations."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {skills.map((skillGroup) => (
          <motion.div key={skillGroup.category} variants={staggerItem}>
            <Card variant="default" className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  {categoryIcons[skillGroup.category]}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    label={skill.name}
                    value={skill.level}
                    variant="default"
                    size="md"
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Summary */}
      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200">
          {[
            'SAP',
            'Oracle',
            'MS Excel',
            'Power BI',
            'Project Management',
            'Lean Six Sigma',
            'Negotiation',
            'Supplier Auditing',
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-neutral-50 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
