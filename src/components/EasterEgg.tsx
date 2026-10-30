import { motion } from 'framer-motion';

export default function EasterEgg({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.5, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary tracking-widest uppercase">
          Welcome to the Future
        </h2>
        <p className="text-text-muted text-xl md:text-2xl mb-12 max-w-2xl mx-auto px-4">
          You have discovered the hidden core of the Anti-Gravity Universe.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-4 bg-primary/20 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium tracking-wide uppercase"
        >
          Return to Orbit
        </button>
      </motion.div>
    </motion.div>
  );
}
