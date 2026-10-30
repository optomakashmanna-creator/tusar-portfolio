import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Code, Lightbulb, Target } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AboutSection() {
  const { isAntiGravity } = useTheme();

  const cards = [
    {
      title: "My Story",
      icon: <Lightbulb className="text-primary mb-4 w-8 h-8" />,
      content: "As a young student, I discovered my passion for technology not just through using it, but by wondering how it was built. What started as simple curiosity quickly evolved into a deep fascination with coding and web development.",
      delay: 0.2
    },
    {
      title: "The Mindset",
      icon: <Code className="text-accent mb-4 w-8 h-8" />,
      content: "I approach programming with a problem-solving mindset. Every bug is a puzzle, and every project is an opportunity to build something from scratch. I love turning complex ideas into elegant, interactive digital experiences.",
      delay: 0.4
    },
    {
      title: "Future Vision",
      icon: <Target className="text-highlight mb-4 w-8 h-8" />,
      content: "My goal isn't just to write code, but to innovate. I am continuously learning new technologies, pushing my boundaries, and working towards my dream of becoming an exceptional Full-Stack Software Engineer.",
      delay: 0.6
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Who Am I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              animate={{
                y: isAntiGravity ? [-10, 10, -10] : 0,
                rotate: isAntiGravity ? [-1, 1, -1] : 0
              }}
              className={cn(
                "glass-panel p-8 relative overflow-hidden group transition-all duration-500",
                isAntiGravity ? "shadow-[0_20px_50px_rgba(6,182,212,0.1)] hover:shadow-[0_30px_60px_rgba(139,92,246,0.2)]" : "hover:border-primary/50"
              )}
              style={{
                transition: 'transform 4s ease-in-out',
                animationDelay: `${idx * 0.5}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {card.icon}
                <h3 className="text-2xl font-bold tracking-wider mb-4 text-white uppercase">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
