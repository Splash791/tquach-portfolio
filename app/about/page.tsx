'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import WorldMap from '@/components/world-map'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-24"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
          >
            About Me
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl"
          >
            I'm a Computer Science student at Oregon State University passionate about building 
            accessible, performant web experiences. I love exploring the intersection of 
            full-stack development and machine learning, always seeking to create solutions 
            that make a meaningful impact.
          </motion.p>
        </motion.div>

        {/* World Map Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <WorldMap />
        </motion.section>

      </div>
    </main>
  )
}
