"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface JobImagesModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  job: {
    title: string
    company: string
    images?: string[]
  } | null
}

export function JobImagesModal({
  isOpen,
  onOpenChange,
  job,
}: JobImagesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset index when job changes or modal is closed/opened
  useEffect(() => {
    setCurrentIndex(0)
  }, [job, isOpen])

  if (!job || !job.images || job.images.length === 0) return null

  const images = job.images

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6 bg-white/95 backdrop-blur-md border border-slate-200">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold flex items-center gap-2 text-slate-900">
            <ImageIcon className="h-5 w-5 text-indigo-600" />
            <span>{job.title} — {job.company}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-4 rounded-xl overflow-hidden shadow-lg bg-slate-950 aspect-video flex items-center justify-center group border border-slate-100">
          {/* Main Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${job.company} image ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-h-[50vh] w-full object-contain"
              onError={(e) => {
                // Fallback / placeholder display if image fails to load or path is invalid
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400?text=Job+Image+${currentIndex + 1}`
              }}
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition-all z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition-all z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Counter Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Selector */}
        {images.length > 1 && (
          <div className="flex gap-2 justify-center mt-4 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? "border-indigo-600 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/100x60?text=Image+${idx + 1}`
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
