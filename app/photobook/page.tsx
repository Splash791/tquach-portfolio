'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const photos = [
  { id: 1, title: 'Mountain View', colSpan: 1, rowSpan: 1 },
  { id: 2, title: 'Urban Portrait', colSpan: 1, rowSpan: 2 },
  { id: 3, title: 'Architecture', colSpan: 1, rowSpan: 1 },
  { id: 4, title: 'Ocean Sunset', colSpan: 2, rowSpan: 1 },
  { id: 5, title: 'Street Life', colSpan: 1, rowSpan: 1 },
  { id: 6, title: 'Studio', colSpan: 1, rowSpan: 1 },
  { id: 7, title: 'Details', colSpan: 1, rowSpan: 1 },
  { id: 8, title: 'Landscape', colSpan: 1, rowSpan: 1 },
  { id: 9, title: 'Night Life', colSpan: 1, rowSpan: 2 },
]

export default function PhotoBookPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pb-20 pt-32 transition-colors">
      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Photo Book
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A visual collection of moments, places, and perspectives.
        </p>
      </header>

      {/* Bento Box Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              style={{
                gridColumn: `span ${photo.colSpan}`,
                gridRow: `span ${photo.rowSpan}`,
              }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl transition-all"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 dark:text-zinc-600 mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="font-medium text-sm text-zinc-600 dark:text-zinc-400">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </section>
    </main>
  )
}