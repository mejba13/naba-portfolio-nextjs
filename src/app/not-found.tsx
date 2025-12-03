'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <span className="text-8xl font-bold text-neutral-200">404</span>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
