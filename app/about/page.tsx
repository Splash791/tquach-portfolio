'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { User } from 'lucide-react'
import Navbar from '@/components/navbar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function AboutPage() {
  const [imgError, setImgError] = useState(false)

  return (
    <main className="min-h-screen flex flex-col justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors relative">
      <Navbar />

      {/* Increased max-width from 5xl to 6xl for a more expansive feel */}
      <div className="mx-auto max-w-6xl px-6 py-20 w-full">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" 
        >
          {/* Text Content - Increased font sizes */}
          <div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-8 text-zinc-900 dark:text-white"
            >
              About Me
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium"
            >
              I'm a Computer Science student at Oregon State University passionate about 
              full-stack development and machine learning. 
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed"
            >
              I love trying new foods, spending time in the gym weightlifting, and traveling whenever I get the chance. 
              Exploring new places and cultures is my biggest passion and something I am always planning my next trip around.
            </motion.p>
          </div>

          {/* Image Slot - Increased scale and presence */}
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)]">
              {!imgError ? (
                <Image
                  src="/images/IMG_0098.JPG" 
                  alt="Portrait"
                  fill
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
                  <User size={64} strokeWidth={1} />
                  <p className="text-sm mt-4 font-mono uppercase tracking-widest">Image Slot</p>
                </div>
              )}
            </div>
            
            {/* Larger Decorative Blur */}
            <div className="absolute -bottom-10 -right-10 -z-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 -z-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}