'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 min-h-[85vh] flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
        >
          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            className="relative w-90 h-90 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] flex-shrink-0"
          >
            <div
              className="group relative w-full h-full rounded-3xl overflow-hidden
                         bg-zinc-100 dark:bg-zinc-900
                         border border-zinc-200/60 dark:border-zinc-800/60
                         shadow-[0_25px_70px_-20px_rgba(0,0,0,0.45)]"
            >
              <Image
                src="/images/IMG_0310.JPG"
                alt="Tyler Quach"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 90vw, 448px"
                className="object-cover object-center
                           transition-transform duration-500 ease-out
                           group-hover:scale-[1.035]"
              />

              {/* Depth gradient */}
              <div
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-t
                           from-black/25 via-black/5 to-transparent"
              />

              {/* Subtle inner glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl
                           ring-1 ring-white/10 dark:ring-black/20"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              variants={fadeInUp}
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
            >
              Tyler Quach
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-2xl sm:text-3xl text-zinc-500 dark:text-zinc-400 mb-8"
            >
              CS Student @ Oregon State University
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10"
            >
              Third-year Computer Science major with a Mathematics minor, focused on{' '}
              <span className="font-semibold">Full-Stack Development</span> and{' '}
              <span className="font-semibold">Machine Learning</span>.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <SocialLink
                href="https://github.com/Splash791"
                icon={<Github size={22} />}
              />
              <SocialLink
                href="https://linkedin.com/in/tyler-quach-"
                icon={<Linkedin size={22} />}
              />
              <SocialLink
                href="mailto:tylerquach17@gmail.com"
                icon={<Mail size={22} />}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

function SocialLink({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
      aria-label={
        href.includes('github')
          ? 'GitHub'
          : href.includes('linkedin')
          ? 'LinkedIn'
          : 'Email'
      }
    >
      {icon}
    </Link>
  )
}
