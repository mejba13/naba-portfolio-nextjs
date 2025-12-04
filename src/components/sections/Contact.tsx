'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Send me an email anytime',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    hoverBg: 'group-hover:from-amber-500 group-hover:to-orange-500',
    border: 'border-amber-200/50',
    shadow: 'shadow-amber-500/20',
    text: 'text-amber-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    description: 'Call or message directly',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    hoverBg: 'group-hover:from-emerald-500 group-hover:to-teal-500',
    border: 'border-emerald-200/50',
    shadow: 'shadow-emerald-500/20',
    text: 'text-emerald-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: personalInfo.location,
    href: 'https://maps.google.com/?q=Dhaka,Bangladesh',
    description: 'Based in Bangladesh',
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'from-blue-50 to-indigo-50',
    hoverBg: 'group-hover:from-blue-500 group-hover:to-indigo-500',
    border: 'border-blue-200/50',
    shadow: 'shadow-blue-500/20',
    text: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Connect Professionally',
    href: personalInfo.social.linkedin,
    description: 'Let\'s grow our network',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'from-sky-50 to-blue-50',
    hoverBg: 'group-hover:from-sky-500 group-hover:to-blue-600',
    border: 'border-sky-200/50',
    shadow: 'shadow-sky-500/20',
    text: 'text-sky-600',
  },
]

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
    name: 'X (Twitter)',
    href: personalInfo.social.twitter,
    gradient: 'from-slate-600 to-slate-800',
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

function PremiumInput({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className="group">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-amber-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 hover:border-slate-300"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity duration-300" />
      </div>
    </div>
  )
}

function PremiumTextarea({
  label,
  name,
  placeholder,
  rows,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  placeholder: string
  rows: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}) {
  return (
    <div className="group">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-amber-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 hover:border-slate-300 resize-none"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity duration-300" />
      </div>
    </div>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, margin: '-50px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 10% 30%, rgba(251,191,36,0.1), transparent 50%),
              radial-gradient(ellipse 50% 50% at 90% 70%, rgba(16,185,129,0.08), transparent 50%),
              radial-gradient(ellipse 40% 40% at 50% 90%, rgba(99,102,241,0.06), transparent 50%)
            `,
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
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
          {/* Label with gradient accent */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Let&apos;s{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Connect
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Interested in discussing supply chain strategies, procurement optimization,
            or potential collaborations? I&apos;d love to hear from you.
          </p>

          {/* Availability Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mt-8 px-5 py-2.5 bg-white rounded-full border border-emerald-200/50 shadow-lg shadow-emerald-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-700">
              Available for new opportunities
            </span>
            <span className="text-xs text-slate-500 border-l border-slate-200 pl-3">
              Usually responds within 24hrs
            </span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {/* Intro Text */}
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Ready to Optimize Your{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Supply Chain
                </span>
                ?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you&apos;re looking to streamline procurement processes, develop vendor
                relationships, or explore strategic sourcing opportunities, I&apos;m here to
                help drive operational excellence for your organization.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={containerVariants} className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group relative block"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />

                  <div className={`relative flex items-center gap-4 p-4 bg-white rounded-xl border ${method.border} shadow-lg shadow-slate-200/40 transition-all duration-300 group-hover:shadow-xl group-hover:border-slate-300 group-hover:-translate-y-0.5`}>
                    {/* Icon */}
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${method.bg} ${method.hoverBg} flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg ${method.shadow}`}>
                      <span className={`${method.text} group-hover:text-white transition-colors duration-300`}>
                        {method.icon}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm text-slate-500 font-medium">{method.label}</p>
                        {method.label === 'LinkedIn' && (
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                      <p className="font-semibold text-slate-900 truncate">{method.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{method.description}</p>
                    </div>

                    {/* Arrow */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${method.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                      <svg className={`w-5 h-5 ${method.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium text-slate-700 mb-4">Connect on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300`} />

                    <div className="relative w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 overflow-hidden shadow-sm">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <span className="relative z-10">{social.icon}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Form Card */}
            <div className="relative">
              {/* Card glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 rounded-3xl blur-xl" />

              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-2xl shadow-slate-200/40 overflow-hidden">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

                <div className="p-6 sm:p-8">
                  {/* Form Header */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h3>
                    <p className="text-sm text-slate-500">Fill out the form below and I&apos;ll get back to you shortly.</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="relative inline-flex mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-lg opacity-40" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-600">
                        Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <PremiumInput
                          label="Your Name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <PremiumInput
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <PremiumInput
                        label="Subject"
                        name="subject"
                        placeholder="How can I help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <PremiumTextarea
                        label="Message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full py-4 overflow-hidden rounded-xl font-semibold text-white disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300" />

                        {/* Animated shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <span className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>

                      {/* Privacy note */}
                      <p className="text-xs text-center text-slate-400">
                        Your information is secure and will never be shared with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
