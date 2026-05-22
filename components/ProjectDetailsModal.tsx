"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ProjectDetailsModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  project: {
    title: string
    description: string
    detailedDescription?: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    image?: string
    videoDemo?: string
    challengesFaced?: string
  }
}

export function ProjectDetailsModal({
  isOpen,
  onOpenChange,
  project,
}: ProjectDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-6">
            {/* Video/Image Demo Section - Conditional Rendering */}
            {project.videoDemo && project.videoDemo.trim() !== "" ? (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Demo</h3>
                <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
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
              </div>
            ) : null}

            {/* Detailed Description */}
            {project.detailedDescription && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Overview</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Challenges Accordion - Conditional */}
            {project.challengesFaced && project.challengesFaced.trim() !== "" && (
              <div className="space-y-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="challenges">
                    <AccordionTrigger className="text-base font-semibold">
                      🔧 Technical Challenges Overcome
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                      {project.challengesFaced}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Button asChild className="w-full">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
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
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
