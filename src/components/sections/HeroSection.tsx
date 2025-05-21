import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 z-0">
        <div className="absolute inset-0 bg-[url('/network-pattern.svg')] opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Intelligenza Artificiale per un diritto trasparente, affidabile e democratico
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 animate-fade-in animation-delay-200">
            LAIBIT & MERL-T: rigore scientifico e validazione comunitaria per innovare il sistema giuridico italiano.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in animation-delay-400">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Scopri di più
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Partecipa alla Community
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-600">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Community Driven</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Open Knowledge Graph</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Transparent AI</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scorri</span>
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
