'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, CardContent, Badge } from '@/components/ui'
import { personalInfo, achievements } from '@/data/portfolio'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '@/lib/animations'

const iconMap: Record<string, JSX.Element> = {
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

export function About() {
  return (
    <Section id="about" background="light" paddingY="xl">
      <SectionHeader
        subtitle="About Me"
        title="Driving Excellence in Supply Chain"
        description="With a decade of experience across manufacturing, energy, and technology sectors, I bring strategic vision and operational expertise to every challenge."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Bio Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInLeft} className="prose prose-lg max-w-none">
            {personalInfo.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-neutral-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Quick Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Based in</p>
                <p className="font-medium text-neutral-900">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">From</p>
                <p className="font-medium text-neutral-900">{personalInfo.hometown}</p>
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
            {[
              'Strategic Sourcing',
              'Vendor Management',
              'Process Optimization',
              'Cost Analysis',
              'Team Leadership',
            ].map((tag) => (
              <Badge key={tag} variant="outline" size="md">
                {tag}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={staggerItem}
              className={index === 0 ? 'col-span-2' : ''}
            >
              <Card
                variant="default"
                interactive
                className={`h-full ${index === 0 ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {iconMap[achievement.icon]}
                </div>
                <h3 className={`font-semibold text-neutral-900 mb-2 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-neutral-600 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
