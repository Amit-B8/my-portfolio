"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ProjectDetailsPageProps {
  project: {
    title: string
    description: string
    detailedDescription?: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    image?: string
    containImage?: boolean
    images?: string[]
    videoDemo?: string
    challengesFaced?: string
  }
  onBack: () => void
  theme?: string
}

export function ProjectDetailsPage({
  project,
  onBack,
  theme = "blue",
}: ProjectDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.images && project.images.length > 0 ? project.images : []
  
  // Theme gradient backgrounds
  const themeGradients: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-50 via-blue-50/50 to-indigo-50",
    purple: "bg-gradient-to-br from-purple-50 via-purple-50/50 to-fuchsia-50",
    red: "bg-gradient-to-br from-red-50 via-red-50/50 to-rose-50",
    green: "bg-gradient-to-br from-green-50 via-green-50/50 to-emerald-50",
    pink: "bg-gradient-to-br from-pink-50 via-pink-50/50 to-rose-50",
    yellow: "bg-gradient-to-br from-yellow-50 via-yellow-50/50 to-amber-50",
    gray: "bg-gradient-to-br from-slate-50 via-slate-50/50 to-gray-50",
  }
  
  const backgroundGradient = themeGradients[theme] || themeGradients.blue
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <>
      {/* Full-screen backdrop to hide main page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-40 bg-white"
      />

      {/* Project Details Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 ${backgroundGradient} overflow-y-auto`}
      >
      {/* Back Button - Sticky Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b"
      >
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Projects</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600">{project.description}</p>
            </motion.div>

            {/* Project Image */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className={`rounded-xl overflow-hidden shadow-lg ${project.containImage ? "bg-[#020a18]" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.containImage ? "w-full h-64 sm:h-96 object-contain scale-110" : "w-full h-auto object-cover max-h-96"}
                />
              </motion.div>
            )}

            {/* Image Gallery */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-slate-900">📸 Gallery</h2>
                <div className="relative group">
                  {/* Main Image Display */}
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </motion.div>

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToPrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="h-6 w-6 text-slate-900" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="h-6 w-6 text-slate-900" />
                      </motion.button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-white text-sm font-medium">
                          {currentImageIndex + 1} / {images.length}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-blue-500 shadow-lg"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="h-16 w-16 object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Video/Demo Section */}
          {project.videoDemo && project.videoDemo.trim() !== "" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                🎬 Demo Video
              </h2>
              <div className="relative w-full bg-black rounded-xl overflow-hidden aspect-video">
                {project.videoDemo.includes("youtube.com") ||
                project.videoDemo.includes("youtu.be") ? (
                  <iframe
                    className="w-full h-full"
                    src={project.videoDemo}
                    title={`${project.title} Demo`}
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    src={project.videoDemo}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          )}

          {/* Detailed Description */}
          {project.detailedDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-slate-900">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-br from-blue-100 to-indigo-100 text-slate-700 rounded-full font-medium text-sm border border-blue-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Challenges */}
          {project.challengesFaced &&
            project.challengesFaced.trim() !== "" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  🔧 Technical Challenges
                </h2>
                <Accordion type="single" collapsible defaultValue="challenges">
                  <AccordionItem value="challenges">
                    <AccordionTrigger className="text-base font-semibold text-slate-900">
                      View Technical Challenges & Solutions
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {project.challengesFaced}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button asChild className="w-full h-12 text-base">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  View Code on GitHub
                </Link>
              </Button>
            </motion.div>

            {project.liveUrl && project.liveUrl !== "#" && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-12 text-base"
                >
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Live Demo
                  </Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
      </motion.div>
    </>
  )
}
