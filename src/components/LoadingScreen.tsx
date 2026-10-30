import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-text-main"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary mb-8 shadow-[0_0_15px_rgba(6,182,212,1)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -50, opacity: [0, 1, 0.5, 1], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, ease: 'easeOut', times: [0, 0.5, 1] }}
        />
        
        <motion.div
          className="text-sm font-mono tracking-widest text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          INITIALIZING CODING UNIVERSE...
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 2.5, duration: 1.5, ease: 'easeOut' }}
        >
          TUSAR MANNA
        </motion.h1>
      </div>
    </motion.div>
  );
}
