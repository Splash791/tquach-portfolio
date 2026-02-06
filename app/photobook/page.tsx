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
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className={`group relative overflow-hidden rounded-2xl border-2 border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl transition-all duration-500 ${photo.colSpan} ${photo.rowSpan}`}
    >
      {!error ? (
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
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
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Overlay Title on Hover */}
      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="text-white text-sm font-semibold"
        >
          {photo.title}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function PhotoBookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-zinc-50 pb-24 pt-32 transition-colors relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <header className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
            Photo Book
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            A collection of photos from the past few years of my life.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto max-w-7xl px-6">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]"
        >
          {photos.map((photo, i) => (
            <ImageCard key={photo.id} photo={photo} index={i} />
          ))}
        </motion.section>
      </section>
    </main>
  )
}