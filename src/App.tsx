import { useEffect } from 'react';
import AccessibilityControls from './components/ui/custom/AccessibilityControls';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ChallengeSection from './components/sections/ChallengeSection';
import SolutionSection from './components/sections/SolutionSection';
import PipelineSection from './components/sections/PipelineSection';
import KnowledgeGraphSection from './components/sections/KnowledgeGraphSection';
import ResourcesSection from './components/sections/ResourcesSection';
import CommunitySection from './components/sections/CommunitySection';
import StakeholdersSection from './components/sections/StakeholdersSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  // Inizializzazione contatori statistiche
  useEffect(() => {
    const initStatCounters = () => {
      const counters = document.querySelectorAll('[id^="counter-"]');
      
      counters.forEach(counter => {
        const target = parseInt(counter.textContent?.replace(/\D/g, '') || '0', 10);
        let count = 0;
        const duration = 2000; // durata dell'animazione in ms
        const frameDuration = 1000 / 60; // durata di un frame a 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        
        const animate = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.floor(count).toString() + (counter.textContent?.includes('%') ? '%' : '+');
            requestAnimationFrame(animate);
          } else {
            counter.textContent = target.toString() + (counter.textContent?.includes('%') ? '%' : '+');
          }
        };
        
        // Avvia l'animazione quando l'elemento è visibile
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animate();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
      });
    };
    
    // Inizializza animazioni on scroll
    const initScrollAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Carica Font Awesome
    const loadFontAwesome = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
      link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
      link.crossOrigin = 'anonymous';
      link.referrerPolicy = 'no-referrer';
      document.head.appendChild(link);
    };
    
    loadFontAwesome();
    
    // Inizializza dopo il caricamento del DOM
    window.addEventListener('DOMContentLoaded', () => {
      initStatCounters();
      initScrollAnimations();
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('DOMContentLoaded', () => {
        initStatCounters();
        initScrollAnimations();
      });
    };
  }, []);

  return (
    <>
      <AccessibilityControls />
      <Layout>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <PipelineSection />
        <KnowledgeGraphSection />
        <StakeholdersSection />
        <ResourcesSection />
        <CommunitySection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
