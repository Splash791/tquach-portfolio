'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'

const experience = [
  {
    id: 1,
    role: 'Mobile Development Intern',
    company: 'BVR ST STUDIO',
    period: 'Jan 2026 - Present',
    location: 'Portland, OR',
    focus: 'Researching AI hallucinations and model reliability.',
    // type: 'Research',
  },
  {
    id: 2,
    role: 'Machine Learning Research Assistant',
    company: 'Oregon State University',
    period: 'Dec 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Researching AI hallucinations and model reliability.',
    // type: 'Research',
  },
  {
    id: 3,
    role: 'Undergraduate Learning Assistant',
    company: 'Oregon State University',
    period: 'Dec 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Teaching data structures and algorithms to 30+ students.',
    // type: 'Academic',
  },
  {
    id: 4,
    role: 'Community Relations Rep',
    company: 'Oregon State University',
    period: 'May 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Event planning for 300+ attendees.',
    // type: 'Leadership',
  },
  // {
  //   id: 4,
  //   role: 'Software Engineering Intern',
  //   company: 'Tech Company',
  //   period: 'Jun 2024 - Aug 2024',
  //   location: 'Remote',
  //   focus: 'Developed full-stack features using React and Node.js.',
  //   type: 'Internship',
  // },
  // {
  //   id: 5,
  //   role: 'Freelance Web Developer',
  //   company: 'Self-Employed',
  //   period: 'Jan 2023 - Present',
  //   location: 'Remote',
  //   focus: 'Building custom web solutions for clients.',
  //   type: 'Freelance',
  // },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-zinc-50 pb-24 pt-32 transition-colors relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-5xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            My professional timeline and academic contributions.
          </p>
        </motion.div>
      </header>

      {/* Experience List */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ x: 4, scale: 1.01 }}
              className="group relative rounded-2xl border-l-4 border-blue-500 dark:border-blue-400 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-8 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 dark:group-hover:from-blue-400 dark:group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {exp.focus}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50">
                      <MapPin size={16} />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}