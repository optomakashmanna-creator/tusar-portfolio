import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "Portfolio Website",
    description: "An immersive, anti-gravity themed futuristic portfolio built with React, Three.js, and Framer Motion.",
    tech: ["React 19", "Tailwind CSS", "Three.js", "Framer Motion"],
    github: "#",
    demo: "#",
    color: "from-primary to-blue-600"
  },
  {
    title: "Task Manager",
    description: "A drag-and-drop productivity tool with a sleek dark mode UI and real-time updates.",
    tech: ["TypeScript", "React", "Zustand"],
    github: "#",
    demo: "#",
    color: "from-accent to-purple-600"
  },
  {
    title: "Weather App",
    description: "Dynamic weather forecasting application that changes UI based on real-time weather conditions.",
    tech: ["JavaScript", "OpenWeather API", "CSS3"],
    github: "#",
    demo: "#",
    color: "from-highlight to-pink-600"
  },
  {
    title: "School Management Project",
    description: "A comprehensive dashboard for managing student records, grades, and attendance.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging platform with rooms, typing indicators, and read receipts.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#",
    color: "from-orange-400 to-red-600"
  },
  {
    title: "AI Assistant Project",
    description: "An experimental web interface interacting with OpenAI APIs to provide smart assistance.",
    tech: ["Next.js", "OpenAI API", "Shadcn UI"],
    github: "#",
    demo: "#",
    color: "from-indigo-400 to-cyan-600"
  }
];

export default function ProjectsSection() {
  const { isAntiGravity } = useTheme();

  const randomY = useMemo(() => projects.map(() => [Math.random() * -20, Math.random() * 20, Math.random() * -20]), []);
  const randomDuration = useMemo(() => projects.map(() => 3 + Math.random() * 2), []);

  return (
    <section id="projects" className="relative py-32 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Project Galaxy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              animate={{
                y: isAntiGravity ? randomY[idx] : 0,
              }}
              className="glass-panel p-6 flex flex-col h-full group relative overflow-hidden"
              style={{
                transition: 'transform 0.3s ease-out',
                animationDuration: `${randomDuration[idx]}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
            >
              {/* Planet Representation */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-40" />
              <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br opacity-10 mix-blend-screen", project.color)} />

              <h3 className="text-2xl font-bold tracking-wider mb-3 text-white">{project.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10 hover:border-primary/50 group/btn">
                  <FiGithub size={20} className="group-hover/btn:scale-110 transition-transform" />
                </a>
                <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-background font-bold uppercase tracking-wider rounded border border-primary/30 hover:border-primary transition-all text-sm">
                  <span>Live Demo</span>
                  <FiExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
