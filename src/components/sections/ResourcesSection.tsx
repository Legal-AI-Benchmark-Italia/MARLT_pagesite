import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const ResourcesSection = () => {
  return (
    <section id="risorse" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Risorse e Approfondimenti
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Esplora materiali, documentazione e risorse per approfondire il progetto MERL-T e le sue applicazioni nel contesto giuridico italiano.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-slate-50 p-6 flex justify-center items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">White Paper MERL-T</h3>
              <p className="text-slate-600 text-sm mb-4">
                Documento tecnico completo sull'architettura e il funzionamento di MERL-T.
              </p>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Scarica PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-slate-50 p-6 flex justify-center items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-code text-primary text-2xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Documentazione API</h3>
              <p className="text-slate-600 text-sm mb-4">
                Guida all'utilizzo delle API di MERL-T per sviluppatori.
              </p>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" /> Visualizza
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-slate-50 p-6 flex justify-center items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-chalkboard-user text-primary text-2xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Presentazione per Istituzioni</h3>
              <p className="text-slate-600 text-sm mb-4">
                Slide deck per presentare LAIBIT a istituzioni e policy maker.
              </p>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Scarica PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-slate-50 p-6 flex justify-center items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-graduation-cap text-primary text-2xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Casi di Studio</h3>
              <p className="text-slate-600 text-sm mb-4">
                Esempi concreti di applicazione di MERL-T in ambito giuridico.
              </p>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" /> Esplora
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contribuisci al progetto</h3>
              <p className="text-slate-600 mb-6">
                MERL-T è un progetto open source che cresce grazie al contributo della community. Puoi partecipare in diversi modi:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Contribuendo al codice su GitHub</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Validando relazioni nel Knowledge Graph</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Segnalando bug o suggerendo miglioramenti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Partecipando ai workshop e agli eventi</span>
                </li>
              </ul>
              <Button variant="default" className="flex items-center gap-2">
                <i className="fa-brands fa-github"></i> Visita il repository
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Iscriviti alla newsletter</h4>
              <p className="text-slate-600 text-sm mb-4">
                Ricevi aggiornamenti sul progetto, nuove risorse e inviti agli eventi.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="newsletter-name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="newsletter-name" 
                    className="w-full p-2 border border-slate-300 rounded-md"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="newsletter-email" 
                    className="w-full p-2 border border-slate-300 rounded-md"
                    placeholder="La tua email"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="newsletter-consent" 
                    className="mt-1"
                  />
                  <label htmlFor="newsletter-consent" className="text-xs text-slate-600">
                    Acconsento al trattamento dei miei dati personali per ricevere aggiornamenti sul progetto MERL-T.
                  </label>
                </div>
                <Button variant="default" className="w-full">
                  Iscriviti
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
