'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'

const experience = [
  {
    id: 1,
    role: 'Machine Learning Research Assistant',
    company: 'Oregon State University',
    period: 'Dec 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Researching AI hallucinations and model reliability.',
    type: 'Research',
  },
  {
    id: 2,
    role: 'Undergraduate Learning Assistant',
    company: 'Oregon State University',
    period: 'Dec 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Teaching data structures and algorithms to 30+ students.',
    type: 'Academic',
  },
  {
    id: 3,
    role: 'Community Relations Rep',
    company: 'Oregon State University',
    period: 'May 2025 - Present',
    location: 'Corvallis, OR',
    focus: 'Event planning for 300+ attendees.',
    type: 'Leadership',
  },
  {
    id: 4,
    role: 'Software Engineering Intern',
    company: 'Tech Company',
    period: 'Jun 2024 - Aug 2024',
    location: 'Remote',
    focus: 'Developed full-stack features using React and Node.js.',
    type: 'Internship',
  },
  {
    id: 5,
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Jan 2023 - Present',
    location: 'Remote',
    focus: 'Building custom web solutions for clients.',
    type: 'Freelance',
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pb-20 pt-32 transition-colors">
      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-4xl px-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Experience
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          My professional timeline and academic contributions.
        </p>
      </header>

      {/* Experience List */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border-l-4 border-blue-500 bg-zinc-50 dark:bg-zinc-900/50 p-6 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-300">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {exp.focus}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
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