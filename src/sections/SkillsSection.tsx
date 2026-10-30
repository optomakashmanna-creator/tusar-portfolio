import { type CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import { 
  SiHtml5, SiCss, SiJavascript, 
  SiReact, SiTailwindcss, SiTypescript,
  SiGit, SiGithub,
  SiNodedotjs, SiExpress, SiMongodb
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const SkillIcon = ({ icon: Icon, name, color }: { icon: IconType, name: string, color: string }) => (
  <div className="relative group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 hover:border-[color:var(--hover-color)] transition-all duration-300 hover:scale-125" style={{ '--hover-color': color } as CSSProperties}>
    <Icon size={24} className="text-text-muted group-hover:text-[color:var(--hover-color)] transition-colors duration-300" />
    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold tracking-wider text-white whitespace-nowrap bg-background/90 px-2 py-1 rounded">
      {name}
    </div>
  </div>
);

export default function SkillsSection() {
  const { isAntiGravity } = useTheme();

  return (
    <section id="skills" className="relative py-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tech Orbit</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center">
          
          {/* Central Core */}
          <motion.div 
            className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center bg-gradient-to-tr from-primary/20 to-accent/20 border-2 border-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.5)] backdrop-blur-md"
            animate={{ scale: isAntiGravity ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xl md:text-2xl font-black tracking-widest text-white text-center leading-none">
              TUSAR<br/><span className="text-primary">CORE</span>
            </div>
          </motion.div>

          {/* Orbit 1: Fundamentals */}
          <motion.div 
            className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-white/10 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(-50%, -50%) rotate(-0deg)' }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiHtml5} name="HTML" color="#E34F26" />
              </motion.div>
            </div>
            <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2" style={{ transform: 'translate(-50%, 50%) rotate(-120deg)' }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiCss} name="CSS" color="#1572B6" />
              </motion.div>
            </div>
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2" style={{ transform: 'translate(50%, 50%) rotate(-240deg)' }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiJavascript} name="JavaScript" color="#F7DF1E" />
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 2: Modern Frontend */}
          <motion.div 
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-white/5"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiReact} name="React" color="#61DAFB" />
              </motion.div>
            </div>
            <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiTailwindcss} name="Tailwind" color="#06B6D4" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiTypescript} name="TypeScript" color="#3178C6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 3: Tools */}
          <motion.div 
            className="absolute w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full border border-white/5 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiGit} name="Git" color="#F05032" />
              </motion.div>
            </div>
            <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiGithub} name="GitHub" color="#FFFFFF" />
              </motion.div>
            </div>
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={VscCode} name="VS Code" color="#007ACC" />
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 4: Learning */}
          <motion.div 
            className={cn(
              "absolute w-[700px] h-[700px] md:w-[950px] md:h-[950px] rounded-full border border-highlight/20 transition-transform duration-1000",
              isAntiGravity ? "scale-110" : "scale-100"
            )}
            animate={{ rotate: -360 }}
            transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiNodedotjs} name="Node.js" color="#339933" />
              </motion.div>
            </div>
            <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiExpress} name="Express" color="#FFFFFF" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }}>
                <SkillIcon icon={SiMongodb} name="MongoDB" color="#47A248" />
              </motion.div>
            </div>
            {/* Learning Label */}
            <div className="absolute top-0 right-1/4 text-xs font-bold tracking-[0.2em] text-highlight uppercase bg-background/80 px-4 py-1 rounded-full border border-highlight/30">
              Currently Learning
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
