'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Briefcase, FileText, Images, User } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Portfolio', icon: Briefcase },
    { href: '/experience', label: 'Experience', icon: FileText },
    { href: '/photobook', label: 'Photo Book', icon: Images },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ y: -1 }}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </motion.div>
          </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
