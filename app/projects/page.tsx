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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl transition-all"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
        {!hasError ? (
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
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
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          View Project
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pb-20 pt-32 transition-colors">
      <Navbar />

      <header className="mx-auto max-w-6xl px-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Portfolio
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of projects exploring the boundaries of design and development.
        </p>
      </header>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}