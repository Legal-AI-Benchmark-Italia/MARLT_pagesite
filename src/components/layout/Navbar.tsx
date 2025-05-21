import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-primary">LAIBIT</span>
            <span className="text-xs text-muted-foreground">Legal AI Benchmark Italia</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <a href="#sfida" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">La Sfida</a>
          <a href="#soluzione" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Soluzione</a>
          <a href="#pipeline" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pipeline</a>
          <a href="#metodo" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Metodo</a>
          
          <div className="relative group">
            <button 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              onClick={() => toggleDropdown('stakeholders')}
            >
              Per Chi <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-md p-2 min-w-[200px] transition-all ${activeDropdown === 'stakeholders' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <a href="#giuristi" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Per Giuristi</a>
              <a href="#sviluppatori" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Per Sviluppatori</a>
              <a href="#istituzioni" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Per Istituzioni</a>
              <a href="#ricercatori" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Per Ricercatori</a>
            </div>
          </div>
          
          <a href="#knowledge-graph" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Knowledge Graph</a>
          <a href="#community" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Community</a>
          <a href="#risorse" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Risorse</a>
          <a href="#contatti" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contatti</a>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm">
            Partecipa
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-muted-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-40 pt-20 px-4 lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-2">
          <a href="#sfida" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>La Sfida</a>
          <a href="#soluzione" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Soluzione</a>
          <a href="#pipeline" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Pipeline</a>
          <a href="#metodo" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Metodo</a>
          
          <div className="border-b">
            <button 
              className="px-3 py-4 text-lg w-full text-left flex justify-between items-center"
              onClick={() => toggleDropdown('mobile-stakeholders')}
            >
              Per Chi <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'mobile-stakeholders' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all ${activeDropdown === 'mobile-stakeholders' ? 'max-h-60' : 'max-h-0'}`}>
              <a href="#giuristi" className="block px-6 py-3 text-base" onClick={toggleMenu}>Per Giuristi</a>
              <a href="#sviluppatori" className="block px-6 py-3 text-base" onClick={toggleMenu}>Per Sviluppatori</a>
              <a href="#istituzioni" className="block px-6 py-3 text-base" onClick={toggleMenu}>Per Istituzioni</a>
              <a href="#ricercatori" className="block px-6 py-3 text-base" onClick={toggleMenu}>Per Ricercatori</a>
            </div>
          </div>
          
          <a href="#knowledge-graph" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Knowledge Graph</a>
          <a href="#community" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Community</a>
          <a href="#risorse" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Risorse</a>
          <a href="#contatti" className="px-3 py-4 text-lg border-b" onClick={toggleMenu}>Contatti</a>
          
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Search className="h-5 w-5" /> Cerca nel sito
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Globe className="h-5 w-5" /> English
            </Button>
            <Button variant="default" className="w-full mt-2">
              Partecipa
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
