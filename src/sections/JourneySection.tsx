import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Trophy, Star, Code2, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const timelineEvents = [
  { year: "2021", title: "First Program", desc: "Wrote 'Hello World' and discovered the magic of coding." },
  { year: "2022", title: "First Website", desc: "Built a basic HTML/CSS site and learned about web structure." },
  { year: "2023", title: "First JS Project", desc: "Added interactivity to web pages using vanilla JavaScript." },
  { year: "2024", title: "Learning React", desc: "Dove into component-based architecture and state management." },
  { year: "2025", title: "Full Stack Apps", desc: "Started connecting frontends to backends with Node & MongoDB." },
  { year: "2026", title: "Future Goals", desc: "Aiming to build complex, scalable systems." },
];

const achievements = [
  { icon: <Code2 size={24} />, value: 25, label: "Projects Built" },
  { icon: <BookOpen size={24} />, value: 10, label: "Tech Learned" },
  { icon: <Star size={24} />, value: 30, label: "GitHub Repos" },
  { icon: <Trophy size={24} />, value: 500, label: "Coding Hours+" },
];

export default function JourneySection() {
  const { isAntiGravity } = useTheme();

  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* CODING TIMELINE */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Coding Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-12 md:space-y-16">
              {timelineEvents.map((event, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                    className="relative flex items-center"
                  >
                    {/* Timeline Dot - mobile left, desktop center */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                      <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                    </div>

                    {/* Desktop Layout: alternating left/right */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full">
                      {/* Left Column */}
                      <div className={cn("flex", isLeft ? "justify-end" : "justify-end")}>
                        {isLeft ? (
                          <div className={cn(
                            "glass-panel p-6 w-full max-w-md relative transition-all duration-500 group",
                            isAntiGravity 
                              ? "hover:-translate-y-2 shadow-[0_10px_30px_rgba(139,92,246,0.1)]" 
                              : "hover:border-primary/50"
                          )}>
                            {/* Connector line from card to center */}
                            <div className="absolute top-1/2 -right-4 w-4 h-px bg-gradient-to-r from-transparent to-primary" />
                            <div className="text-accent font-mono font-bold text-xl mb-2">{event.year}</div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">{event.title}</h3>
                            <p className="text-text-muted">{event.desc}</p>
                          </div>
                        ) : (
                          <div /> // Empty spacer for right-side items
                        )}
                      </div>

                      {/* Right Column */}
                      <div className={cn("flex", !isLeft ? "justify-start" : "justify-start")}>
                        {!isLeft ? (
                          <div className={cn(
                            "glass-panel p-6 w-full max-w-md relative transition-all duration-500 group",
                            isAntiGravity 
                              ? "hover:-translate-y-2 shadow-[0_10px_30px_rgba(139,92,246,0.1)]" 
                              : "hover:border-primary/50"
                          )}>
                            {/* Connector line from center to card */}
                            <div className="absolute top-1/2 -left-4 w-4 h-px bg-gradient-to-l from-transparent to-primary" />
                            <div className="text-accent font-mono font-bold text-xl mb-2">{event.year}</div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">{event.title}</h3>
                            <p className="text-text-muted">{event.desc}</p>
                          </div>
                        ) : (
                          <div /> // Empty spacer for left-side items
                        )}
                      </div>
                    </div>

                    {/* Mobile Layout: all cards on the right of the line */}
                    <div className="md:hidden pl-10 w-full">
                      <div className={cn(
                        "glass-panel p-5 relative transition-all duration-500",
                        isAntiGravity 
                          ? "hover:-translate-y-1 shadow-[0_8px_20px_rgba(139,92,246,0.1)]" 
                          : "hover:border-primary/50"
                      )}>
                        <div className="text-accent font-mono font-bold text-lg mb-1">{event.year}</div>
                        <h3 className="text-xl font-bold text-white mb-1 tracking-wide uppercase">{event.title}</h3>
                        <p className="text-text-muted text-sm">{event.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACHIEVEMENT CONSTELLATION */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Achievement Constellation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Constellation Lines (SVG) - visible only on md+ */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}>
              <line x1="12.5%" y1="50%" x2="37.5%" y2="50%" />
              <line x1="37.5%" y1="50%" x2="62.5%" y2="50%" />
              <line x1="62.5%" y1="50%" x2="87.5%" y2="50%" />
            </svg>

            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center justify-center text-center p-6 glass-panel rounded-full aspect-square"
                animate={{ y: isAntiGravity ? [-5, 5, -5] : 0 }}
                style={{ animationDuration: `${2 + idx}s`, animationIterationCount: 'infinite' }}
              >
                <div className="text-accent mb-4 p-4 rounded-full bg-white/5 border border-white/10">{ach.icon}</div>
                <div className="text-4xl font-black text-white mb-2">
                  <AnimatedCounter end={ach.value} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-widest text-text-muted">{ach.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
