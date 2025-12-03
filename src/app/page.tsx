'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, Footer } from '@/components/layout'
import {
  Hero,
  About,
  Experience,
  Skills,
  Education,
  Contact,
} from '@/components/sections'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
