'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors relative overflow-hidden flex flex-col pt-12 sm:pt-16">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center text-center md:text-left space-y-10 md:space-y-0 md:space-x-10 mx-auto max-w-7xl">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/IMG_0310.JPG"
            alt="Tyler Quach"
            width={640}
            height={480}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-full md:max-w-2xl rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-6 sm:p-10 shadow-xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            I&apos;m Tyler Quach
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a third-year computer science student major and math minor. My focus is on full-stack development and machine learning.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <SocialLink
              href="https://github.com/Splash791"
              label="GitHub"
              icon={<Github size={24} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/tyler-quach-/"
              label="LinkedIn"
              icon={<Linkedin size={24} />}
            />
            {/* <SocialLink
              href="mailto:tylerquach17@gmail.com"
              label="Email"
              icon={<Mail size={24} />}
            /> */}
          </div>
        </motion.div>
      </section>
    </main>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  )
}
   