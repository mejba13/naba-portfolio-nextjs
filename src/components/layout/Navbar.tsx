'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { navLinks, personalInfo, siteConfig } from '@/data/portfolio'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="relative">
                {/* Gradient ring around logo */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden ring-2 ring-slate-100 group-hover:ring-transparent transition-all duration-300">
                  <Image
                    src={siteConfig.logo}
                    alt={personalInfo.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white shadow-sm" />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-[15px] lg:text-base text-slate-900 leading-tight font-semibold tracking-tight">
                  Rabiul Islam Naba
                </p>
                <p className="text-[11px] lg:text-xs bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent font-semibold mt-0.5">
                  Head of Supply Chain
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-slate-50/90 backdrop-blur-sm rounded-full p-1.5 border border-slate-200/60 shadow-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={cn(
                      'relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300',
                      activeSection === link.href.replace('#', '')
                        ? 'text-slate-900'
                        : 'text-slate-500 hover:text-slate-800'
                    )}
                  >
                    {activeSection === link.href.replace('#', '') && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-white rounded-full shadow-md shadow-slate-200/50 border border-slate-100"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button with Gradient */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="relative group px-6 py-2.5 text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 text-slate-600 hover:text-slate-900 transition-all duration-200 shadow-sm"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/98 backdrop-blur-2xl shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                  <span className="font-display font-semibold text-slate-900">Menu</span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <motion.nav
                  className="flex-1 p-5 overflow-y-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(link.href)
                        }}
                        variants={staggerItem}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium rounded-xl transition-all duration-200',
                          activeSection === link.href.replace('#', '')
                            ? 'text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        )}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.nav>
                <div className="p-5 border-t border-slate-100">
                  <button
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-[15px] font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                    onClick={() => handleNavClick('#contact')}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
