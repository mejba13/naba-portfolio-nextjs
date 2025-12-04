'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, navLinks, siteConfig } from '@/data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: personalInfo.social.linkedin,
    gradient: 'from-sky-500 to-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: personalInfo.social.facebook,
    gradient: 'from-blue-500 to-indigo-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: personalInfo.social.twitter,
    gradient: 'from-slate-500 to-slate-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    gradient: 'from-emerald-500 to-green-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: personalInfo.location,
    href: 'https://maps.google.com/?q=Dhaka,Bangladesh',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    value: personalInfo.bloodGroup,
    href: '#',
    gradient: 'from-red-500 to-rose-500',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isScrolling, setIsScrolling] = useState(false)

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    setIsScrolling(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setIsScrolling(false), 1000)
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/30 to-slate-900" />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 100%, rgba(251,191,36,0.06), transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 0%, rgba(16,185,129,0.04), transparent 50%),
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.03), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -top-20 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer */}
        <motion.div
          className="py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              {/* Logo and Name */}
              <div className="flex items-center gap-4 mb-6">
                {/* Logo with gradient border */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-800">
                    <Image
                      src={siteConfig.logo}
                      alt={personalInfo.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-medium">
                    {personalInfo.title.split('&')[0].trim()}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                {personalInfo.shortBio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${link.gradient} rounded-xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`} />

                    <div className="relative w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-transparent transition-all duration-300 overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <span className="relative z-10">{link.icon}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="w-0 h-px bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-4 transition-all duration-300" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                {contactItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <div className={`w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-transparent transition-all duration-300 overflow-hidden relative`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <span className="relative z-10 text-slate-500 group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-sm">{item.value}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="group relative inline-flex items-center gap-2 mt-8 px-6 py-3 overflow-hidden rounded-xl font-medium text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <span className="relative">Send a Message</span>
                <svg className="relative w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="relative py-6">
          {/* Gradient separator */}
          <div className="absolute top-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-amber-500/50" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>&copy; {currentYear}</span>
              <span className="text-slate-400 font-medium">{personalInfo.name}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-3">
              <p className="text-sm text-slate-500 flex items-center gap-1.5">
                <span>Crafted with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.span>
                <span>in</span>
                <span className="text-slate-400 font-medium">Bangladesh</span>
              </p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="group relative w-10 h-10 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-slate-800 border border-slate-700 group-hover:border-transparent transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <span className="relative z-10 flex items-center justify-center w-full h-full">
                  <motion.svg
                    className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={isScrolling ? { y: [-2, -6, -2] } : {}}
                    transition={{ duration: 0.5, repeat: isScrolling ? Infinity : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </motion.svg>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
