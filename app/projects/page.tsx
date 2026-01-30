'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const allProjects = [
  {
    id: 1,
    title: 'AI Quiz Generator',
    tech: ['Next.js', 'OpenAI API', 'Tailwind'],
    description: 'An adaptive quiz platform that uses AI to generate questions based on user uploaded PDFs.',
    link: '#',
    image: '/project1.jpg', // Add your project images here
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    tech: ['React', 'Stripe', 'Node.js'],
    description: 'A fully functional shopping experience with cart logic, payment processing, and admin dashboard.',
    link: '#',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    tech: ['React', 'WeatherAPI', 'Chart.js'],
    description: 'Real-time weather data visualization with predictive forecasting models.',
    link: '#',
    image: '/project3.jpg',
  },
  {
    id: 4,
    title: 'Task Manager',
    tech: ['Vue.js', 'Firebase'],
    description: 'Drag-and-drop task management tool inspired by Kanban boards.',
    link: '#',
    image: '/project4.jpg',
  },
  {
    id: 5,
    title: 'Portfolio Site',
    tech: ['Next.js', 'Framer Motion'],
    description: 'The site you are looking at now. Built with a focus on micro-interactions and performance.',
    link: '#',
    image: '/project5.jpg',
  },
  {
    id: 6,
    title: 'API Wrapper',
    tech: ['Python', 'FastAPI'],
    description: 'A lightweight Python wrapper to simplify complex API integrations for data science teams.',
    link: '#',
    image: '/project6.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pb-20 pt-32 transition-colors">
      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Portfolio
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of projects exploring the boundaries of design and development.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                {/* Placeholder - replace with your project images */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <p className="text-sm font-mono">Project Image</p>
                </div>
                {/* Uncomment when you have images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  View Project
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}