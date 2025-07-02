import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code } from 'lucide-react'
import Link from "next/link"
import { title } from "process"

export default function Portfolio() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
  ]

  const projects = [
    {
      title: "hi",
      description:
        "Full-stack application with speach recognition being used to learn new topics and trivia question",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/Speak2LearnLogo.png?height=200&width=300",
    },
    {
      title: "BO3",
      description: "Best of three game to play against your friend!",
      technologies: ["Next.js", "Python", "WebSocket", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/BO3Logo.png?height=200&width=300",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics with Python backend processing.",
      technologies: ["React", "Python", "D3.js", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/placeholder.svg?height=200&width=300",
    },

  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Developed and maintained web applications using React.js and Python. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2022 - 2023",
      description:
        "Built responsive user interfaces and improved application performance. Worked closely with designers to implement pixel-perfect designs.",
    },
    {
      title: "Junior Developer",
      company: "Development Agency",
      period: "2021 - 2022",
      description:
        "Assisted in developing client websites and applications. Gained experience in various technologies and development practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <section id="about" className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary">Amit Boodhoo</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
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
      <section id="skills" className="container py-24 bg-muted/50">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
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
                <div className="aspect-video bg-muted">
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
      <section id="experience" className="container py-24 bg-muted/50">
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
      <section id="contact" className="container py-24">
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
              Built with Next.js and Tailwind CSS. © 2024 Amit Boodhoo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}