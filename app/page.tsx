"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, ImageIcon } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ProjectDetailsPage } from "@/components/ProjectDetailsPage"

export default function Portfolio() {
  const [theme, setTheme] = useState("blue")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  
  // Track which experience card has its image gallery open
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({})

  const toggleJobImages = (index: number) => {
    setExpandedJobs(prev => ({ ...prev, [index]: !prev[index] }))
  }

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
    blue: "bg-gradient-to-br from-blue-50 via-blue-50/50 to-indigo-50",
    purple: "bg-gradient-to-br from-purple-50 via-purple-50/50 to-pink-50",
    red: "bg-gradient-to-br from-red-50 via-red-50/50 to-orange-50",
    green: "bg-gradient-to-br from-green-50 via-green-50/50 to-emerald-50",
    pink: "bg-gradient-to-br from-pink-50 via-pink-50/50 to-rose-50",
    yellow: "bg-gradient-to-br from-yellow-50 via-yellow-50/50 to-amber-50",
    gray: "bg-gradient-to-br from-gray-50 via-gray-50/50 to-slate-50",
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
    {
      name: "Git",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
    {
      name: "Raspberry Pi",
      category: "Hardware",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
    },
    {
      name: "Matlab",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
    },
    {
      name: "JUnit Testing",
      category: "Testing",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
    },
  ]

  const projects = [
    {
      title: "Gestura Gauntlet",
      description:
        "A wearable IoT smart glove that translates hand motion and grip pressure into zero-latency smart home controls. Features edge analytics, passive ambient feedback, active device targeting, and a digital twin simulator.",
      detailedDescription:
        "Gestura Gauntlet is a distributed edge-to-cloud IoT system built around a Pico 2W. It reads 6-axis motion via an MPU6050 and grip pressure via an FSR, streaming telemetry to a local Node.js hub (GauntNet). The backend analytics engine processes motion intensity to passively shift ambient lighting based on activity levels. For active control, users can squeeze the FSR to cycle through Kasa smart targets and adjust brightness or volume via analog pressure scaling. The system also features a web dashboard for granular gesture calibration and an interactive 3D digital twin to validate target selection and hardware logic in real-time.",
      technologies: [
        "MicroPython", 
        "Node.js", 
        "WebSockets", 
        "React", 
        "InfluxDB", 
        "Grafana", 
        "TP-Link Kasa API"
      ],
      githubUrl: "https://github.com/Amit-B8/Gestura-Gauntlet-IoT-Project",
      liveUrl: "#",
      image: "/GesturaGauntlet.jpg?height=200&width=300",
      images: [
        "/SystemOverview.jpg?height=200&width=300", 
        "/Simulator.jpg?height=200&width=300",
        "/Gauntlet.jpg?height=200&width=300",
        "/Dashboard.jpg?height=200&width=300"
      ],
      // videoDemo: "",
      challengesFaced:
        "A major challenge was eliminating network jitter to ensure the physical controls felt instantaneous. This was solved by configuring a dedicated local access point to isolate the WebSocket traffic, bringing latency down to near-zero.\n\nOn the edge logic side, translating raw analog sensor data into clean, predictable triggers required writing custom software filtering. This included hardware FSR debouncing and implementing a 10-second rolling window to smooth the motion magnitude and prevent false positives. Additionally, constructing the physical prototype required hands-on fabrication, including precision soldering and component desoldering to successfully integrate the MPU6050 and voltage-divider circuitry into a wearable form factor."
    },
    {
      title: "Pong Arcade Console",
      description:
        "A standalone hardware Pong arcade console built entirely from scratch using bare-metal C on an ATmega328P microcontroller, completely bypassing Arduino libraries. Features a custom finite state machine for game logic, dual I2C LCD screens, analog joystick input, and a four-player tournament mode displayed on a 16x16 SPI LED matrix.",
      detailedDescription:
        "This Embedded Systems project pushed past standard curriculum by integrating multiple communication protocols and peripherals simultaneously. The system uses a hardware-timed finite state machine (1 ms tick via Timer0 in CTC mode) to ensure non-blocking, responsive gameplay. It reads analog joysticks via the ADC for precise paddle control, drives a 16x16 LED matrix via direct SPI register manipulation, and communicates with two separate LCDs simultaneously over a shared I2C bus (TWI). The game features accurate ball physics, score tracking, and a full four-player bracket tournament mode.",
      technologies: ["C", "ATmega328P (AVR)", "SPI", "I2C/TWI", "ADC", "Hardware Timers", "Finite State Machines"],
      githubUrl: "https://github.com/Amit-B8/Pong-Arcade-Console", 
      liveUrl: "#", 
      image: "/Pong.jpg?height=200&width=300",
      challengesFaced:
        "A major challenge was achieving real-time responsiveness without using blocking delay() functions. This was solved by designing a non-blocking Finite State Machine (FSM) triggered by a 1ms hardware timer interrupt, allowing the system to handle ADC polling, matrix rendering, and LCD updates simultaneously.\n\nHardware idiosyncrasies also required software workarounds. One joystick experienced severe mechanical drift; I mitigated this by implementing an initial calibration routine that established a dynamic center-point, paired with a custom deadzone. Additionally, controlling two LCDs on limited pins required implementing bare-metal TWI/I2C communication to drive PCF8574 backpacks, saving crucial GPIO pins for the SPI display and analog inputs.",
    },
    {
      title: "Auto-Turn Cylinder (Assistive Tech)",
      description:
        "A motorized, ergonomic key-turning device engineered during a 48-hour Make-a-Thon. Designed to help users with severe hand disabilities bypass painful door-unlocking motions, featuring a programmatically CAD-designed housing, Arduino-controlled micro-servo, and a companion interactive 3D web application.",
      detailedDescription:
        "Engineered under a strict 48-hour deadline, this project combined rapid hardware prototyping with full-stack web development. With zero prior 3D modeling experience, I learned Python-based parametric CAD (CadQuery) on the fly to programmatically design the device's housing. By translating digital caliper measurements into code, I generated exact-tolerance internal compartments for a 9V battery, custom PCB, and high-torque micro-servo. The physical hardware is driven by C++ on an Arduino, while a companion product landing page built with React, Next.js, and Three.js renders our interactive 3D designs directly in the browser for technical demonstrations.",
      technologies: ["Python (CadQuery)", "React.js", "Next.js", "Three.js", "C++ (Arduino)", "Hardware Integration", "Rapid Prototyping"],
      githubUrl: "https://github.com/Amit-B8/Make-a-Thon", 
      liveUrl: "https://v0-auto-turn-cylinder-landing-page.vercel.app/?_vercel_share=Ta9C7uh9CEP9RAEk3R3RDBPYXhPAGPf7",   
      image: "MakeAThon.jpg?height=200&width=300", 
      images: [
        "/AutoCylinder.jpg?height=200&width=300", 
      ],
      challengesFaced:
      "We were working under a strict 48-hour deadline, which made traditional 3D printing iteration nearly impossible. We were also entering a mostly mechanical engineering competition with little to no CAD experience, so I had to teach myself CAD quickly as well as figure out how to 3D print within a very short timeframe, which took a while to get comfortable with. To work within the time constraints, I optimized the CAD models by reducing unnecessary Z-height and designed a low-profile speed sleeve with 0.8 mm walls, which brought print times down from hours to under 15 minutes. On the electronics side, fitting everything into a tight housing required hardware workarounds, so we used the microcontroller’s internal pull-up resistors to eliminate the need for external breadboard wiring. Because of the time pressure, we went through multiple failed concepts, including manual grippers and test cup designs, before landing on a working approach. I documented these iterations in an open-source GitHub “graveyard” to show the full design process and not just the final result."
    },
    {
      title: "FlashQuest",
      description:
        "A gamified flashcard application where study habits directly impact a digital pet's survival. Features real-time lifespan mechanics powered by flashcard mastery, a coin economy for learning rewards, and persistent state management.",
      detailedDescription:
        "FlashQuest combines gamification with education by creating a unique digital pet system. When you master flashcards, your pet thrives. Fail to study, and your pet suffers. This creates a powerful psychological motivation for consistent learning. The application features a sophisticated state management system that persists your progress across sessions, real-time animations for the pet interactions, and a coin economy system that rewards mastery with in-game currency you can spend on pet customizations.",
      technologies: ["React", "Next.js", "TypeScript", "Web Speech API", "Tailwind CSS", "Lucide React"],
      githubUrl: "https://github.com/Amit-B8/FlashQuest",
      liveUrl: "https://flashquest-study.vercel.app/",
      image: "/FlashQuestLogo.png?height=200&width=300",
      challengesFaced:
        "The main challenge was synchronizing the Web Speech API with the flashcard state management without creating race conditions. I had to implement a queue system for speech recognition events and debounce the API calls to prevent duplicate submissions. Another significant hurdle was maintaining the pet's animation smoothness while managing frequent state updates. I solved this by separating the animation state from the data state, allowing the UI to update independently.\n\nPersistent state management across browser sessions required implementing localStorage efficiently without blocking the main thread. I used a custom hook with async operations to ensure the app remained responsive even with large datasets.",
    },
    {
      title: "Speak2Trivia",
      description:
        "Full-stack application with speech recognition being used to learn new topics and trivia questions",
      detailedDescription:
        "Speak2Trivia leverages modern web APIs to create an innovative learning platform. Users can speak their answers to trivia questions about various topics, and the application evaluates their responses in real-time. The platform supports multiple difficulty levels and customizable trivia categories.",
      technologies: ["React", "Next.js", "TypeScript", "CSS"],
      githubUrl: "https://github.com/Amit-B8/Speak2Trivia",
      liveUrl: "#",
      image: "/Speak2TriviaLogo.png?height=200&width=300",
      challengesFaced:
        "Building a speech recognition system that accurately evaluates user answers was complex. I had to implement fuzzy string matching to handle variations in how users phrased their answers. The challenge was balancing accuracy with false positives to create a forgiving but still meaningful feedback system.",
    },
    {
      title: "MemeMachine",
      description: "A dynamic web application that allows users to generate, customize, and share memes instantly. Features a library of templates and real-time text editing. Built with Next.js and Tailwind CSS to ensure a responsive, high-performance experience across all devices.",
      detailedDescription:
        "MemeMachine is a fun, fast meme generator that puts creative control in the users' hands. With an extensive library of popular meme templates, users can instantly customize text, adjust positioning, and generate their own memes. The app features a sleek real-time text editor that shows live previews as you type, social sharing capabilities, and the ability to save your favorite creations.",
      technologies: ["React", "CSS", "API Integration"],
      githubUrl: "https://github.com/Amit-B8/GAITMemeMachine",
      liveUrl: "#",
      image: "/MemeMachine.png?height=200&width=300",
      // images: [
      //   "/MemeMachine.png?height=200&width=300",
      //   // Add more images here: "/path/to/image2.png", "/path/to/image3.png"
      // ],
      // videoDemo: "",
      challengesFaced:
        "The primary challenge was handling image rendering and text positioning dynamically. Text positioning on meme templates required calculating proper offsets and scaling based on different image dimensions. I implemented a canvas-based approach for generating high-quality meme images on the client side, which improved performance significantly.",
    },
    {
      title: "Asteroids Game",
      description: "A C++ implementation of the classic arcade shooter. Features object-oriented game entity management, collision detection, and vector-based movement.",
      detailedDescription:
        "This is a faithful recreation of the classic Asteroids arcade game, built from scratch in C++. The game features smooth vector-based movement, realistic physics simulation, and challenging collision detection. It demonstrates core game development principles including entity management, event-driven architecture, and efficient rendering.",
      technologies: ["C++", "Game Loop"],
      githubUrl: "https://github.com/Amit-B8/AsteroidsGame",
      liveUrl: "#",
      image: "/Asteroids.png?height=200&width=300",
      challengesFaced:
        "Implementing accurate collision detection between irregular polygon shapes was the biggest challenge. I had to use Separating Axis Theorem (SAT) to efficiently detect collisions between asteroids and bullets. Performance optimization was also critical since the game can have dozens of asteroids on screen simultaneously.",
    },
    {
      title: "InkRush",
      description: "A real-time multiplayer Draw & Guess game utilizing a client-server architecture. Features lag-compensated drawing synchronization, an embedded H2 database for word management, and a responsive JavaFX GUI.",
      detailedDescription:
        "InkRush is a competitive multiplayer drawing game where one player draws while others guess. The challenge was creating a real-time synchronization system that maintains drawing consistency across all clients despite network latency. The application uses an H2 embedded database to manage the word list for different difficulty levels, and a JavaFX GUI provides a polished user experience.",
      technologies: ["Java", "JavaFX", "H2 Database", "SceneBuilder"],
      githubUrl: "https://github.com/Amit-B8/InkRush",
      liveUrl: "#",
      image: "/InkRush.png?height=200&width=300",
      // images: [
      //   "/InkRush.png?height=200&width=300",
      //   // Add more images here: "/path/to/image2.png", "/path/to/image3.png"
      // ],
      challengesFaced:
        "Synchronizing real-time drawing data across the network while handling latency was extremely challenging. I implemented a differential update system that only sends changed pixels rather than the entire canvas, reducing bandwidth by 95%. The H2 database integration required careful schema design to support efficient word retrieval with category filters.",
    },
    {
      title: "BO3",
      description: "A competitive local multiplayer Best of Three game built in Python. Features a custom graphical interface with real-world imagery, event-driven score tracking, and dynamic visuals for an engaging gameplay experience.",
      detailedDescription:
        "BO3 is an engaging local multiplayer game built with Python and Tkinter. Two players compete in a best-of-three series with dynamic scoring and visual feedback. The game features custom graphics, animated transitions, and a responsive event-driven architecture that provides a smooth gaming experience.",
      technologies: ["Python", "Tkinter"],
      githubUrl: "https://github.com/Amit-B8/BO3",
      liveUrl: "#",
      image: "/BO3Logo.png?height=200&width=300",
      challengesFaced:
        "Creating smooth animations in Tkinter was challenging due to its limitations. I implemented a frame-based animation system with custom rendering to achieve fluid motion effects. Managing the event loop to handle both user input and animations without blocking the UI required careful threading and callback management.",
    },
  ]

  const experience = [
    {
      title: "Digital Infrastructure Solutions Intern",
      company: "HNTB",
      period: "May 2026 - August 2026",
      description: "Developed and optimized full-stack web applications using Angular, TypeScript, JavaScript, HTML, and CSS, while building and troubleshooting backend cloud infrastructure with Python and AWS. Engineered interactive GIS solutions using ArcGIS Pro and ArcGIS Experience Builder for major transportation initiatives, including a World Cup traffic management tool and live occupancy widgets. Authored custom SQL expressions to drive real-time map filters and UI triggers.",
      images: ["/HNTB1.jpg", "/HNTB2.jpg", "/HNTB3.jpg", "/HNTB4.JPG"],
    },
    {
      title: "Supply Chain Planner Intern",
      company: "Eaton",
      period: "May 2025 - August",
      description:
        "Collaborated on a project to optimize order modifiers by developing a more efficient method to pull, review, and update planning data, improving visibility for potential changes. Analyzed excess inventory using large Excel datasets and maintained Oracle data by identifying usage patterns, correcting lead time errors, updating bills of materials, renaming parts, and contributing to non-standard job processing to support inventory reduction and data accuracy.",
      images: ["/Eaton1.jpg", "/Eaton2.JPEG", "/Eaton3.JPEG", "/Eaton4.JPEG"],
    },
    {
      title: "Soccer Referee",
      company: "U.S Soccer Federation",
      period: "June 2017 - 2024",
      description:
        "Officiated 4+ youth soccer games per week for ages 10-18, including both regular season and tournament matches, ensuring safety, fairness, and consistent rule enforcement. Assisted injured players and resolved conflicts to maintain a safe environment. Covered extra games during busy tournaments or referee absences to keep matches running smoothly.",
      // images: ["/BO3Logo.jpg", "/BO3Logo.jpg"],
    },
    {
      title: "Desk Clerk",
      company: "University of Iowa Housing & Dining",
      period: "August 2025 - Present",
      description:
        "Assist residents with package pickup, key management, and general inquiries. Manage resident data and package records using Excel while ensuring accuracy and confidentiality. Collaborate with staff to maintain a welcoming and efficient dorm environment.",
      // images: ["/BO3Logo.jpg", "/BO3Logo.jpg"],
    },
  ]

  return (
    <div
      className={`min-h-screen ${themes[theme]} transition-all duration-500 relative`}
    >
      {/* Animated Glassmorphism Background Effect */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <motion.div
          animate={{
            background: [
              "radial-gradient(at 20% 50%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)",
              "radial-gradient(at 80% 80%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)",
              "radial-gradient(at 40% 40%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <span className="font-bold">Amit Boodhoo</span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-2 sm:space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                {["About", "Skills", "Projects", "Experience", "Contact"].map(
                  (item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>

              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="w-full py-16 sm:py-24 md:py-32 bg-transparent">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 w-full"
            >
              <motion.img
                src="/pfp.jpg"
                alt="Amit Boodhoo"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg mx-auto object-cover"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                transition={{ duration: 0.3 }}
              />

              <motion.h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter ${textColors[theme]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ${textColors[theme]}`}>
                  Amit Boodhoo
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Full Stack Developer passionate about creating innovative web
                applications using React.js, Python, and modern technologies.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { href: "https://github.com/Amit-B8", icon: Github },
                { href: "https://www.linkedin.com/in/amit-boodhoo/", icon: Linkedin },
              ].map((social, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(99,102,241,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={social.href} target="_blank">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Skills & Technologies
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Here are the technologies and tools I work with to bring ideas to
                life.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(99,102,241,0.3)",
                  }}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors cursor-pointer"
                >
                  <motion.img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="text-sm sm:text-base font-semibold text-black text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-6 sm:p-8 text-center rounded-xl bg-white/40 backdrop-blur-sm border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Certification
              </h3>
              <div className="p-2">
                <h4 className="text-lg sm:text-xl text-black mb-2">
                  Google Cybersecurity Professional Certificate V2
                </h4>
                <p className="text-black mb-4 text-sm sm:text-base">
                  Coursera • Issued 2025
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.credly.com/badges/3f317c82-ba85-4393-b617-e3e3b9a57b65/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-semibold underline hover:text-black/80 text-base sm:text-lg"
                  >
                    View Certificate{" "}
                    <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A showcase of my recent work and personal projects. Click any
                project card to learn more.
              </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(99,102,241,0.2)",
                  }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden h-full bg-white/50 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all relative group">
                    <motion.div
                      className="aspect-video bg-transparent relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    <motion.div
                      className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-center"
                      >
                        <p className="text-white font-semibold text-base">
                          Click to view details
                        </p>
                      </motion.div>
                    </motion.div>
                    </motion.div>

                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                        {project.title}
                        <div className="flex space-x-2">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              title="View Code"
                            >
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                              >
                                <Github className="h-4 w-4" />
                              </Link>
                            </Button>
                          </motion.div>

                          {project.liveUrl !== "#" && (
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                title="Live Demo"
                              >
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-white/50 hover:bg-white/80"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Work Experience
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                My professional journey and key accomplishments.
              </motion.p>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="bg-white/50 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl">
                          {job.title}
                        </CardTitle>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="secondary" className="w-fit">
                            {job.period}
                          </Badge>
                        </motion.div>
                      </div>
                      <CardDescription className="font-medium text-sm sm:text-base">
                        {job.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {job.description}
                      </p>
                      
                      {/* Check if the job has images in the array */}
                      {job.images && job.images.length > 0 && (
                        <div className="flex flex-col space-y-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-fit bg-white/50 hover:bg-white/80 transition-colors"
                            onClick={() => toggleJobImages(index)}
                          >
                            <ImageIcon className="mr-2 h-4 w-4" />
                            {expandedJobs[index] ? "Hide Images" : "View Images"}
                          </Button>

                          {/* The Animated Image Gallery */}
                          {expandedJobs[index] && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="flex gap-3 overflow-x-auto pb-2 pt-2"
                            >
                              {job.images.map((img, i) => (
                                <Dialog key={i}>
                                  {/* The small clickable image */}
                                  <DialogTrigger asChild>
                                    <motion.img
                                      src={img}
                                      alt={`${job.company} project ${i + 1}`}
                                      className="h-24 w-36 object-cover rounded-md border border-white/50 shadow-sm cursor-pointer"
                                      whileHover={{ scale: 1.05 }}
                                    />
                                  </DialogTrigger>
                                  
                                  {/* The zoomed-in lightbox view */}
                                  <DialogContent className="max-w-3xl bg-black/90 border-none shadow-none p-0 overflow-hidden flex justify-center items-center">
                                    <DialogTitle className="sr-only">Image Preview</DialogTitle>
                                    <img 
                                      src={img} 
                                      alt={`Full screen ${job.company} project ${i + 1}`} 
                                      className="w-full h-auto max-h-[85vh] object-contain rounded-md"
                                    />
                                  </DialogContent>
                                </Dialog>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 sm:py-24 bg-transparent">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tighter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-[600px] mx-auto text-sm sm:text-base px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I'm always interested in new opportunities and collaborations.
                Let's connect and discuss how we can work together!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="mailto:aboodhoo@uiowa.edu">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-transparent"
                >
                  <Link
                    href="https://www.linkedin.com/in/amit-boodhoo/"
                    target="_blank"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t py-6 md:py-8 bg-white/40 backdrop-blur-sm"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
              <Code className="h-6 w-6" />
              <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground">
                Built with Next.js, Tailwind CSS, and Framer Motion. © 2025
                Amit Boodhoo.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Project Details Page View */}
      {selectedProject && (
        <ProjectDetailsPage
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
          theme={theme}
        />
      )}
    </div>
  )
}
