import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Rocket, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const { isAntiGravity } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
            <Rocket className="text-primary hidden md:block" size={48} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">Mission Control</span>
          </h2>
          <p className="text-text-muted text-lg uppercase tracking-widest">Ready to initiate contact?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ y: isAntiGravity ? [-10, 10, -10] : 0 }}
          style={{ transition: 'transform 4s ease-in-out' }}
          className="glass-panel p-8 md:p-12 border-t-4 border-t-primary shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-primary animate-bounce" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-widest">Transmission Sent</h3>
              <p className="text-text-muted">Your message is currently travelling through space. I will respond soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted ml-2">Commander Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:bg-black/60"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-text-muted ml-2">Comms Channel (Email)</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:bg-black/60"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-text-muted ml-2">Transmission Data</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:bg-black/60 resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Initiating Launch...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Transmission
                    <Send size={18} className="ml-2" />
                  </span>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
