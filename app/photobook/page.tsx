'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
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

const photos = [
  { id: 1, title: 'Morning in Hong Kong', colSpan: 'col-span-2', rowSpan: 'row-span-2', src: '/images/IMG_0281.JPG' },
  { id: 2, title: 'Cheung Fun', colSpan: 'col-span-1', rowSpan: 'row-span-2', src: '/images/IMG_0376.JPG' },
  { id: 3, title: 'LA', colSpan: 'col-span-1', rowSpan: 'row-span-1', src: '/images/IMG_0428.JPG' },
  { id: 4, title: 'MILO!', colSpan: 'col-span-1', rowSpan: 'row-span-1', src: '/images/IMG_3214.JPG' },
  { id: 5, title: 'SHPE National Convention', colSpan: 'col-span-1', rowSpan: 'row-span-1', src: '/images/IMG_6684.JPG' },
  { id: 6, title: 'HK', colSpan: 'col-span-3', rowSpan: 'row-span-3', src: '/images/IMG_9389.JPG' },
  { id: 7, title: 'SuperTree Grove', colSpan: 'col-span-1', rowSpan: 'row-span-1', src: '/images/IMG_9911.JPG' },
  { id: 8, title: 'Nights in Singapore', colSpan: 'col-span-2', rowSpan: 'row-span-2', src: '/images/IMG_9931.JPG' },
  { id: 9, title: 'Lakhsa 😋', colSpan: 'col-span-2', rowSpan: 'row-span-2', src: '/images/IMG_9684.JPG' },
]

function ImageCard({ photo, index }: { photo: typeof photos[0], index: number }) {
  const [error, setError] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:shadow-xl transition-all ${photo.colSpan} ${photo.rowSpan}`}
    >
      {!error ? (
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 50vw, 33vw"
          onError={() => setError(true)}
          priority={index < 4}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600">
          <ImageIcon size={24} strokeWidth={1} className="mb-2" />
          <p className="text-[10px] font-mono uppercase tracking-tighter">{photo.title}</p>
        </div>
      )}
      
      {/* Overlay Title on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <p className="text-white text-xs font-medium translate-y-2 group-hover:translate-y-0 transition-transform">
          {photo.title}
        </p>
      </div>
    </motion.div>
  )
}

export default function PhotoBookPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pb-20 pt-32 transition-colors">
      <Navbar />

      <header className="mx-auto max-w-6xl px-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Photo Book
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of photos from the past few years of my life.
        </p>
      </header>

      <section className="mx-auto max-w-6xl px-6">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]"
        >
          {photos.map((photo, i) => (
            <ImageCard key={photo.id} photo={photo} index={i} />
          ))}
        </motion.section>
      </section>
    </main>
  )
}