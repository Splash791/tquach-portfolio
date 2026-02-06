'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const allProjects = [
  {
    id: 1,
    title: 'AI Verification System',
    tech: ['TypeScript', 'React', 'Node.js', 'TailwindCSS', 'ShadCN', 'AWS', 'OpenRouter'],
    description: 'Built a pipeline to detect AI hallucinations with AWS backend and optimized frontend.',
    link: 'https://github.com/just1nlee/bastinel',
    src: '/images/bastinel.png',
  },
  {
    id: 2,
    title: 'Expense Tracker',
    tech: ['Next.js', 'Typescript', 'Tesseract', 'Tailwind CSS', 'ShadCN UI', 'MongoDB', 'OpenCV'],
    description: 'Created an OCR-based expense tracker with auto-categorization and analytics dashboard.',
    link: 'https://github.com/Splash791/expense-tracker',
    src: '/images/expenseTracker.png',
  },
  {
    id: 3,
    title: 'AI Quiz Generator',
    tech: ['Next.js', 'OpenRouter', 'Tailwind CSS', 'ShadCN UI', 'Typescript', 'MongoDB'],
    description: 'Developed an adaptive quiz platform generating questions from user-uploaded PDFs.',
    link: 'https://github.com/Splash791/AI-Quiz',
    src: '/images/minervai.png', 
  },
  {
    id: 7,
    title: 'Hunt the Wumpus',
    tech: ['C++'],
    description: 'Designed a grid-based adventure game using OOP principles and modular class hierarchy.',
    link: '#',
    src: '/images/wumpus.png',
  },
  {
    id: 5,
    title: 'NBA Player Efficiency Index',
    tech: ['Python', 'SQL', 'PostgreSQL', 'Git'],
    description: 'Built a data pipeline to analyze NBA stats and calculate player efficiency scores.',
    link: 'https://github.com/Splash791/nba-player-efficiency-index',
    src: '/images/dame.jpeg',
  },
  
  {
    id: 8,
    title: 'Album Finder',
    tech: ['JavaScript', 'HTML', 'CSS', 'Spotify API'],
    description: 'Built a web app to search and display album details using the Spotify API.',
    link: '#',
    src: '/images/albumFinder.png',
  },
  {
    id: 4,
    title: 'Small Shell',
    tech: ['C'],
    description: 'Implemented a custom Unix shell with I/O redirection, background processes, and signals.',
    link: '#',
    src: '/images/smallsh.png',
  },
]

// Sub-component to handle individual project image states
function ProjectCard({ project, index }: { project: typeof allProjects[0], index: number }) {
  const [hasError, setHasError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl border-2 border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500 pointer-events-none" />
      
      {/* Project Image */}
      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center">
        {!hasError ? (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setHasError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600">
            <ImageIcon size={32} strokeWidth={1.5} />
            <p className="text-[10px] font-mono tracking-widest uppercase">Image Not Found</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 dark:group-hover:from-blue-400 dark:group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
        >
          View Project
          <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-zinc-50 pb-24 pt-32 transition-colors relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <header className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            A collection of projects exploring the boundaries of design and development.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}