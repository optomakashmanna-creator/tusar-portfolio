import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LenisProvider from './components/LenisProvider';
import CustomCursor from './components/CustomCursor';
import ThreeBackground from './components/ThreeBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import EasterEgg from './components/EasterEgg';
import { useKonamiCode } from './hooks/useKonamiCode';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import JourneySection from './sections/JourneySection';
import ContactSection from './sections/ContactSection';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { success: easterEggTriggered, setSuccess: setEasterEggTriggered } = useKonamiCode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Cinematic loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <ThreeBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main-content" className="relative z-10 flex flex-col w-full">
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <JourneySection />
              <ContactSection />
            </main>
            
            <footer className="py-8 text-center text-text-muted border-t border-white/5 backdrop-blur-md bg-background/50">
              <p>© {new Date().getFullYear()} Tusar Manna. Designed for the Future.</p>
            </footer>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {easterEggTriggered && (
          <EasterEgg onClose={() => setEasterEggTriggered(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <AppContent />
      </LenisProvider>
    </ThemeProvider>
  );
}

export default App;
