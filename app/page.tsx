'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16 lg:px-12 lg:pt-40 lg:pb-24">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24 sm:mb-32"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl font-semibold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Tyler Quach
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 sm:text-2xl lg:text-3xl">
              Computer Science Student at Oregon State University.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Specializing in Full-Stack Development and Machine Learning Research.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="https://github.com/Splash791"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="https://linkedin.com/in/tyler-quach-"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="mailto:tylerquach17@gmail.com"
              className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Link>
          </motion.div>
        </motion.section>

        {/* Photo Section / About Me */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-24 sm:mb-32"
        >
          <motion.div
            variants={itemVariants}
            className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            {/* Placeholder - Replace with your photo */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900/50 dark:to-zinc-950/50">
              <div className="text-center">
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500">
                  Add your photo here
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-600 dark:text-zinc-600">
                  Place your image in /public/photo.jpg or update the src below
                </p>
              </div>
            </div>
            {/* Uncomment and update the path when you have your photo */}
            {/* 
            <Image
              src="/photo.jpg"
              alt="Tyler Quach"
              fill
              className="object-cover"
              priority
            />
            */}
          </motion.div>
        </motion.section>

      </div>
    </main>
  )
}
