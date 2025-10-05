"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette } from 'lucide-react'
import Link from "next/link"

export default function Portfolio() {

const [theme, setTheme] = useState("blue")

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("portfolioTheme", theme)
  }, [theme])

  const themes: { [key: string]: string } = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    red: "bg-red-100",
    green: "bg-green-100",
    pink: "bg-pink-100",
    yellow: "bg-yellow-100",
    gray: "bg-gray-100",
  }

  const textColors: { [key: string]: string } = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    red: "text-red-600",
    green: "text-green-600",
    pink: "text-pink-600",
    yellow: "text-yellow-500",
    gray: "text-gray-600",
  }

  const skills = [
    {
      name: "Python",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    { name: "Git", 
      category: "Tools", 
      icon: "https://img.icons8.com/color/48/git/git-original.svg" 
    },
    {
      name: "R Coding",
      category: "Data Analysis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      name: "Bash",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
    { name: "Microsoft Excel", category: "Productivity", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "Matlab", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
    { name: "JUnit Testing", category: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
  ]

  const projects = [
    {
      title: "Speak2Trivia",
      description:
        "Full-stack application with speech recognition being used to learn new topics and trivia question",
      technologies: ["React", "Next.js", "TypeScript", "CSS"],
      githubUrl: "https://github.com/Amit-B8/Speak2Trivia",
      liveUrl: "#",
      image: "/Speak2TriviaLogo.png?height=200&width=300",
    },
    {
      title: "BO3",
      description: "Best of three game to play against your friend!",
      technologies: ["Python", "Tkinter"],
      githubUrl: "https://github.com/Amit-B8/BO3",
      liveUrl: "#",
      image: "/BO3Logo.png?height=200&width=300",
    },
    {
      title: "DiceGame",
      description: "A Dice Game where two players compete for the highest score!",
      technologies: ["C++"],
      githubUrl: "https://github.com/Amit-B8/DiceGame",
      liveUrl: "#",
      image: "/DiceGame_Image.png?height=200&width=300",
    },

  ]

  const experience = [
    {
      title: "Supply Chain Planner Intern",
      company: "Eaton",
      period: "May 2025 - August",
      description:
        "Collaborated on a project to optimize order modifiers by developing a more efficient method to pull, review, and update planning data, improving visibility for potential changes. Analyzed excess inventory using large Excel datasets and maintained Oracle data by identifying usage patterns, correcting lead time errors, updating bills of materials, renaming parts, and contributing to non-standard job processing to support inventory reduction and data accuracy.",
    },
    {
      title: "Soccer Referee",
      company: "U.S Soccer Federation",
      period: "June 2017 - 2024",
      description:
        "Officiated 4+ youth soccer games per week for ages 10–18, including both regular season and tournament matches, ensuring safety, fairness, and consistent rule enforcement. Assisted injured players and resolved conflicts to maintain a safe environment. Covered extra games during busy tournaments or referee absences to keep matches running smoothly.",
    },
    {
      title: "Desk Clerk",
      company: "University of Iowa Housing & Dining",
      period: "August 2025 - Present",
      description:
        "Assist residents with package pickup, key management, and general inquiries. Manage resident data and package records using Excel while ensuring accuracy and confidentiality. Collaborate with staff to maintain a welcoming and efficient dorm environment.",
    },
  ]

  return (
    <div className={`min-h-screen ${themes[theme]} transition-colors duration-500`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Left side - Name/Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <span className="font-bold">Amit Boodhoo</span>
              </Link>
            </div>

            {/* Right side - Nav links + Theme */}
            <div className="flex items-center space-x-2 sm:space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="#about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
                <Link href="#skills" className="text-sm font-medium hover:text-primary">
                  Skills
                </Link>
                <Link href="#projects" className="text-sm font-medium hover:text-primary">
                  Projects
                </Link>
                <Link href="#experience" className="text-sm font-medium hover:text-primary">
                  Experience
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </nav>

              {/* Theme Selector */}
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-20 sm:w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">🔵 Blue</SelectItem>
                    <SelectItem value="purple">🟣 Purple</SelectItem>
                    <SelectItem value="red">🔴 Red</SelectItem>
                    <SelectItem value="green">🟢 Green</SelectItem>
                    <SelectItem value="pink">🩷 Pink</SelectItem>
                    <SelectItem value="yellow">🟡 Yellow</SelectItem>
                    <SelectItem value="gray">⚫ Gray</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="w-full py-16 sm:py-24 md:py-32 bg-transparent">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 w-full">            
            {/* 👇 Profile Image goes here */}
              <img
                  src="/pfp.jpg"
                  alt="Amit Boodhoo"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg mx-auto object-cover"
                />
            {/* 👇 Profile Image Here */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter ${textColors[theme]}`}>
              {"Hi, I'm"} <span className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ${textColors[theme]}`}>Amit Boodhoo</span>
            </h1>
                <p className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                  Full Stack Developer passionate about creating innovative web applications using React.js, Python, and
                  modern technologies.
                </p>
              </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Amit-B8" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              {/*This will add my name to the top left*/}
              <Link href="https://www.linkedin.com/in/amit-boodhoo/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          
            {/* Skills grid with logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain"
                  />
                  <span className="text-sm sm:text-base font-semibold text-black text-center">{skill.name}</span>
                </div>
              ))}
            </div>

          {/* Certification section */}
          <div className="mt-12 p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Certification</h3>
            <div className="p-2">
              <h4 className="text-lg sm:text-xl text-black mb-2">Google Cybersecurity Professional Certificate V2</h4>
              <p className="text-black mb-4 text-sm sm:text-base">Coursera • Issued 2025</p>
              <a
                href="https://www.credly.com/badges/3f317c82-ba85-4393-b617-e3e3b9a57b65/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-semibold underline hover:text-black/80 text-base sm:text-lg"
              >
                View Certificate <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4">
              A showcase of my recent work and personal projects.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-transparent">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Work Experience</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4">
              My professional journey and key accomplishments.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg sm:text-xl">{job.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{job.period}</Badge>
                  </div>
                  <CardDescription className="font-medium text-sm sm:text-base">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4">
                {"I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together!"}
              </p>            
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="mailto:aboodhoo@uiowa.edu">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="https://www.linkedin.com/in/amit-boodhoo/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
              <Code className="h-6 w-6" />
              <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground">
                Built with Next.js and Tailwind CSS. © 2025 Amit Boodhoo.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}