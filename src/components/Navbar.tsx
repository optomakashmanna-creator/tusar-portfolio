import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAntiGravity, toggleAntiGravity } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-widest text-white flex items-center gap-2" onClick={(e) => scrollTo(e, '#home')}>
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
            <Rocket size={16} className="text-white" />
          </span>
          <span className="hidden sm:block font-display tracking-[0.3em]">TUSAR.STU</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleAntiGravity}
            className={cn(
              "px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
              isAntiGravity 
                ? "bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                : "bg-white/5 border-white/20 text-white hover:bg-white/10"
            )}
          >
            <span className={cn("w-2 h-2 rounded-full", isAntiGravity ? "bg-accent animate-pulse" : "bg-white/50")} />
            Gravity: {isAntiGravity ? 'OFF' : 'ON'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleAntiGravity}
            className={cn(
              "p-2 rounded-full border transition-all duration-300",
              isAntiGravity 
                ? "bg-accent/20 border-accent text-accent shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
                : "bg-white/5 border-white/20 text-white"
            )}
          >
            <span className={cn("block w-2 h-2 rounded-full", isAntiGravity ? "bg-accent animate-pulse" : "bg-white/50")} />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-2xl font-bold text-white hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
