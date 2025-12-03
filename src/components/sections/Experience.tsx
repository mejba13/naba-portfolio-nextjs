'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, CardContent, Badge } from '@/components/ui'
import { experiences } from '@/data/portfolio'
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations'

export function Experience() {
  return (
    <Section id="experience" background="white" paddingY="xl">
      <SectionHeader
        subtitle="Career Journey"
        title="Professional Experience"
        description="A proven track record of driving operational excellence across Bangladesh's leading organizations in manufacturing, energy, and technology."
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform md:-translate-x-1/2 hidden md:block" />

        <motion.div
          className="space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={staggerItem}
              className={`relative md:flex md:items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-neutral-300 z-10">
                {experience.current && (
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                )}
                {experience.current && (
                  <span className="absolute inset-0.5 rounded-full bg-emerald-500" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <Card
                  variant="default"
                  interactive
                  className="p-6 sm:p-8"
                >
                  <div className={`flex flex-wrap items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {experience.current && (
                      <Badge variant="success" size="sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                        Current
                      </Badge>
                    )}
                    <Badge variant="outline" size="sm">
                      {experience.type}
                    </Badge>
                    <Badge variant="default" size="sm">
                      {experience.period}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">
                    {experience.company}
                  </p>
                  <p className="text-sm text-neutral-500 mb-4">
                    {experience.location}
                  </p>

                  <p className={`text-neutral-600 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {experience.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {experience.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Empty Space for other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
