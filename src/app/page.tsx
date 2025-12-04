'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, Footer } from '@/components/layout'
import {
  Hero,
  About,
  Experience,
  Skills,
  Education,
  Testimonials,
  Contact,
} from '@/components/sections'
import { SEOSchema } from '@/components/SEOSchema'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* SEO Structured Data */}
        <SEOSchema />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main role="main" itemScope itemType="https://schema.org/WebPage">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
