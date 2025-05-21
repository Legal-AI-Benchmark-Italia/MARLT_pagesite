import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const AccessibilityControls = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Gestione dello stato di contrasto
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Gestione della dimensione del font
  useEffect(() => {
    document.body.classList.remove('font-size-large', 'font-size-larger');
    if (fontSize === 'large') {
      document.body.classList.add('font-size-large');
    } else if (fontSize === 'larger') {
      document.body.classList.add('font-size-larger');
    }
  }, [fontSize]);

  // Gestione del font per dislessia
  useEffect(() => {
    if (dyslexiaFont) {
      document.body.classList.add('dyslexia-font');
    } else {
      document.body.classList.remove('dyslexia-font');
    }
  }, [dyslexiaFont]);

  // Gestione del pulsante "Torna su"
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const increaseFontSize = () => {
    if (fontSize === 'normal') {
      setFontSize('large');
    } else if (fontSize === 'large') {
      setFontSize('larger');
    }
  };

  const decreaseFontSize = () => {
    if (fontSize === 'larger') {
      setFontSize('large');
    } else if (fontSize === 'large') {
      setFontSize('normal');
    }
  };

  const toggleDyslexiaFont = () => {
    setDyslexiaFont(!dyslexiaFont);
  };

  return (
    <>
      {/* Controlli di accessibilità */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-2">
        <button 
          onClick={toggleHighContrast}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors"
          aria-label={highContrast ? "Disattiva alto contrasto" : "Attiva alto contrasto"}
        >
          <i className="fa-solid fa-circle-half-stroke text-slate-700"></i>
        </button>
        
        <button 
          onClick={increaseFontSize}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors"
          aria-label="Aumenta dimensione testo"
          disabled={fontSize === 'larger'}
        >
          <i className="fa-solid fa-text-height text-slate-700"></i>+
        </button>
        
        <button 
          onClick={decreaseFontSize}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors"
          aria-label="Diminuisci dimensione testo"
          disabled={fontSize === 'normal'}
        >
          <i className="fa-solid fa-text-height text-slate-700"></i>-
        </button>
        
        <button 
          onClick={toggleDyslexiaFont}
          className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors"
          aria-label={dyslexiaFont ? "Disattiva font per dislessia" : "Attiva font per dislessia"}
        >
          <i className="fa-solid fa-font text-slate-700"></i>
        </button>
      </div>

      {/* Pulsante "Torna su" */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 w-12 h-12 bg-primary text-white rounded-full shadow-md flex items-center justify-center hover:bg-primary-dark transition-all z-40 ${showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Torna all'inizio della pagina"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default AccessibilityControls;
