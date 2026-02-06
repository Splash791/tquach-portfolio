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
    <main className="min-h-screen bg-neutral-900 text-neutral-50">
      <Navbar />

      {/* Split Screen Layout - Image Left, Content Right */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-neutral-800 flex items-center justify-center p-12 lg:p-20"
        >
          <div className="relative w-full max-w-md aspect-[3/4]">
            <div className="absolute inset-0 bg-neutral-700 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_0310.JPG"
                alt="Tyler Quach"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="lg:w-1/2 flex items-center justify-center p-12 lg:p-20"
        >
          <div className="w-full max-w-lg space-y-8">
            <motion.div variants={fadeInUp}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 text-neutral-50">
                Tyler Quach
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                CS @ Oregon State University
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-lg text-neutral-200 leading-relaxed">
                Third-year Computer Science major with a Mathematics minor, focused on{' '}
                <span className="font-semibold text-neutral-50">full-stack development</span> and{' '}
                <span className="font-semibold text-neutral-50">machine learning</span>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 pt-4"
            >
              <SocialLink
                href="https://github.com/Splash791"
                icon={<Github size={20} />}
              />
              <SocialLink
                href="https://linkedin.com/in/tyler-quach-"
                icon={<Linkedin size={20} />}
              />
              <SocialLink
                href="mailto:tylerquach17@gmail.com"
                icon={<Mail size={20} />}
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
      className="p-3 rounded-full text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 transition-all duration-200"
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
