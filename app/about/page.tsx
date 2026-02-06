'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { User, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '@/components/navbar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const aboutImages = [
  '/images/IMG_0098.JPG',
  '/images/IMG_0310.JPG',
  '/images/IMG_0281.JPG',
  '/images/IMG_0376.JPG',
  '/images/IMG_0428.JPG',
]

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length)
  }

  const visionBoardImages = [
    '/images/IMG_9389.JPG',
    '/images/IMG_9931.JPG',
    '/images/IMG_9684.JPG',
    '/images/IMG_9911.JPG',
    '/images/IMG_6684.JPG',
    '/images/IMG_3214.JPG',
  ]

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-50 relative overflow-hidden">
      <Navbar />

      {/* Organic Blob Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800" />
        
        {/* Animated organic blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-neutral-700/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-700/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-neutral-700/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-neutral-700/20 rounded-full blur-3xl"
        />

        {/* Scattered photo fragments with varying opacity */}
        <div className="absolute top-20 left-10 w-48 h-48 opacity-[0.08] mix-blend-soft-light">
          <Image
            src={visionBoardImages[0]}
            alt=""
            fill
            className="object-cover rounded-2xl"
            sizes="192px"
          />
        </div>
        <div className="absolute top-1/3 right-20 w-40 h-40 opacity-[0.06] mix-blend-soft-light rotate-12">
          <Image
            src={visionBoardImages[1]}
            alt=""
            fill
            className="object-cover rounded-2xl"
            sizes="160px"
          />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 opacity-[0.07] mix-blend-soft-light -rotate-6">
          <Image
            src={visionBoardImages[2]}
            alt=""
            fill
            className="object-cover rounded-2xl"
            sizes="224px"
          />
        </div>
        <div className="absolute bottom-20 right-1/3 w-44 h-44 opacity-[0.05] mix-blend-soft-light rotate-9">
          <Image
            src={visionBoardImages[3]}
            alt=""
            fill
            className="object-cover rounded-2xl"
            sizes="176px"
          />
        </div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-32 min-h-[90vh] flex items-center relative z-10">
        <div className="w-full">
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]"
            >
              <div className="relative w-full h-full bg-neutral-700 rounded-2xl overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {!imgError ? (
                      <Image
                        src={aboutImages[currentIndex]}
                        alt={`Portrait ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        onError={() => setImgError(true)}
                        priority={currentIndex === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400">
                        <User size={64} strokeWidth={1} />
                        <p className="text-sm mt-4 font-mono uppercase tracking-widest">Image Slot</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800/60 hover:bg-neutral-800/90 text-neutral-100 hover:text-neutral-50 transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800/60 hover:bg-neutral-800/90 text-neutral-100 hover:text-neutral-50 transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-neutral-50 w-6'
                          : 'bg-neutral-500 hover:bg-neutral-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="space-y-8 max-w-2xl"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 text-neutral-50">
                  About Me
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-neutral-200 leading-relaxed">
                <p>
                  I love trying new foods, spending time in the gym weightlifting, and traveling whenever I get the chance. 
                  Exploring new places and cultures is my biggest passion and something I am always planning my next trip around.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}