'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const aboutImages = [
  '/images/IMG_0098.JPG',
  '/images/IMG_0310.JPG',
  '/images/IMG_0281.JPG',
  '/images/IMG_0376.JPG',
  '/images/IMG_0428.JPG',
]

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-zinc-50 pb-24 pt-32 transition-colors relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 min-h-[80vh] flex items-center">
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-14">
            {/* Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-2xl bg-zinc-300/70 dark:bg-zinc-700/70 shadow-xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={aboutImages[currentIndex]}
                      alt={`Portrait ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-100/70 dark:bg-zinc-800/70 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all z-10"
                >
                  &lt;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-900 transition-all z-10"
                >
                  &gt;
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-6 bg-blue-500'
                          : 'w-2 bg-zinc-400 hover:bg-zinc-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-2xl rounded-2xl bg-white/70 dark:bg-zinc-800/70 p-6 shadow-xl"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                I love trying new foods, spending time in the gym weightlifting, and traveling whenever I get the chance. Exploring new places and cultures is my biggest passion and something I am always planning my next trip around.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}