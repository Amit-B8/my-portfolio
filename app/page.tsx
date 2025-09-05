import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code } from 'lucide-react'
import Link from "next/link"
import { title } from "process"

export default function Portfolio() {
  const skills = [
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "C++", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Oracle Applications (Supply Chain)", category: "ERP" },
    { name: "R", category: "Data Analysis" },
    { name: "MATLAB", category: "Data Analysis" }
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
    <div className="min-h-screen bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              {/*This will add my name to the top left*/}
              <span className="font-bold">Amit Boodhoo</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container py-24 md:py-32 bg-transparent">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
              Hi, I'm <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">Amit Boodhoo</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl ">
              Full Stack Developer passionate about creating innovative web applications using React.js, Python, and
              modern technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
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
      <section id="skills" className="container py-24 bg-transparent">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">
            {skills.map((skill, index) => (
              <div key={index} className="px-4 py-2 text-lg text-black">
                {skill.name}
              </div>
            ))}
          </div>

          {/* Certification section */}
          <div className="mt-6 p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Certification</h3>
            <div className="p-2">
              <h4 className="text-xl text-black mb-2">Google Cybersecurity Professional Certificate V2</h4>
              <p className="text-black mb-4">Coursera • Issued 2025</p>
              <a
                href="https://www.credly.com/badges/3f317c82-ba85-4393-b617-e3e3b9a57b65/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-semibold underline hover:text-black/80 text-lg"
              >
                View Certificate <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-transparent">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              A showcase of my recent work and personal projects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <CardTitle className="flex items-center justify-between">
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
                  <CardDescription>{project.description}</CardDescription>
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
      <section id="experience" className="container py-24 bg-transparent">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              My professional journey and key accomplishments.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle>{job.title}</CardTitle>
                    <Badge variant="secondary">{job.period}</Badge>
                  </div>
                  <CardDescription className="font-medium">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-transparent">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work
              together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/amit-boodhoo/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © 2025 Amit Boodhoo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}