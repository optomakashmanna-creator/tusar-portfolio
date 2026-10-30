import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { isAntiGravity } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        
        {/* Floating Profile/Avatar Representation */}
        <motion.div
          animate={{
            y: isAntiGravity ? [-20, 20, -20] : [-5, 5, -5],
            rotate: isAntiGravity ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: isAntiGravity ? 4 : 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 flex items-center justify-center mb-8 relative overflow-hidden glass-panel"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
          <Rocket size={48} className="text-white relative z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] animate-gradient">
            TUSAR MANNA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base font-medium tracking-widest uppercase text-primary"
        >
          <span>School Student</span>
          <span className="w-1 h-1 rounded-full bg-accent self-center" />
          <span>Coding Enthusiast</span>
          <span className="w-1 h-1 rounded-full bg-accent self-center" />
          <span>Future Software Engineer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl font-light text-text-muted mb-6 italic max-w-2xl"
        >
          "Turning Curiosity Into Code."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-lg text-text-muted mb-12 max-w-3xl leading-relaxed"
        >
          I am a school student passionate about programming, web development, technology, and building innovative digital experiences while continuously learning and growing every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-primary text-background font-bold tracking-widest uppercase rounded-full overflow-hidden flex items-center gap-2">
            <span className="relative z-10">Explore My Universe</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
