'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { motion } from 'framer-motion'

// List of countries you've visited (using ISO 3166-1 alpha-2 country codes)
const visitedCountries = [
  'US', // United States
  'CA', // Canada
  'MX', // Mexico
  'GB', // United Kingdom
  'FR', // France
  'IT', // Italy
  'ES', // Spain
  'DE', // Germany
  'JP', // Japan
  'KR', // South Korea
  'TH', // Thailand
  'VN', // Vietnam
  'CN', // China
  'AU', // Australia
  'NZ', // New Zealand
]

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function WorldMap() {
  // Colors
  const visitedFill = '#3b82f6' // Blue for visited
  const visitedStroke = '#2563eb'
  const notVisitedFill = '#e4e4e7'
  const notVisitedStroke = '#d4d4d8'
  const hoverFill = '#d4d4d8'

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-xl"
      >
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-zinc-900 dark:text-white">
            Countries I've Visited
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {visitedCountries.length} countries and counting
          </p>
        </div>
        
        <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-950 dark:to-zinc-900 p-4 md:p-6 border border-zinc-200 dark:border-zinc-800">
          <ComposableMap
            projectionConfig={{
              scale: 147,
              center: [0, 20],
            }}
            className="w-full"
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isVisited = visitedCountries.includes(geo.properties.ISO_A2)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isVisited ? visitedFill : notVisitedFill}
                      stroke={isVisited ? visitedStroke : notVisitedStroke}
                      strokeWidth={isVisited ? 0.8 : 0.5}
                      style={{
                        default: {
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        },
                        hover: {
                          fill: isVisited ? '#2563eb' : hoverFill,
                          outline: 'none',
                          strokeWidth: isVisited ? 1.2 : 0.8,
                        },
                        pressed: {
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm"></div>
            <span className="text-base font-medium text-zinc-700 dark:text-zinc-300">Visited</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-lg bg-zinc-300 dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-600"></div>
            <span className="text-base font-medium text-zinc-600 dark:text-zinc-400">Not yet</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
