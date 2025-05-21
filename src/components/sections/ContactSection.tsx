import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const ContactSection = () => {
  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Contattaci
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Hai domande sul progetto MERL-T o vuoi collaborare con noi? Siamo qui per aiutarti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Inviaci un messaggio</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-slate-300 rounded-md"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-slate-300 rounded-md"
                    placeholder="La tua email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Oggetto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-slate-300 rounded-md"
                  placeholder="Oggetto del messaggio"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Messaggio
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 border border-slate-300 rounded-md"
                  placeholder="Il tuo messaggio"
                ></textarea>
              </div>
              
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  className="mt-1"
                />
                <label htmlFor="privacy-consent" className="text-sm text-slate-600">
                  Acconsento al trattamento dei miei dati personali in conformità con la Privacy Policy.
                </label>
              </div>
              
              <Button variant="default" className="w-full md:w-auto">
                Invia messaggio
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Informazioni di contatto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-slate-600">info@laibit.org</p>
                  <p className="text-slate-600">support@laibit.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Sede</h4>
                  <p className="text-slate-600">
                    Dipartimento di Informatica<br />
                    Università di Roma<br />
                    Via Salaria 113, 00198 Roma
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefono</h4>
                  <p className="text-slate-600">+39 06 1234567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="font-medium mb-4">Seguici sui social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <i className="fa-brands fa-twitter text-slate-700"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <i className="fa-brands fa-linkedin-in text-slate-700"></i>
                </a>
                <a href="https://github.com/Legal-AI-Benchmark-Italia/MERL-T" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <i className="fa-brands fa-github text-slate-700"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">Domande frequenti</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Come posso contribuire al progetto?</h4>
              <p className="text-slate-600 text-sm">
                Puoi contribuire in diversi modi: partecipando alla validazione del Knowledge Graph, contribuendo al codice su GitHub, segnalando bug o suggerendo miglioramenti.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">MERL-T è open source?</h4>
              <p className="text-slate-600 text-sm">
                Sì, MERL-T è un progetto completamente open source. Il codice è disponibile su GitHub sotto licenza Apache 2.0.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Posso integrare MERL-T nella mia applicazione?</h4>
              <p className="text-slate-600 text-sm">
                Sì, MERL-T offre API standardizzate che permettono l'integrazione con applicazioni terze. Consulta la documentazione per gli sviluppatori.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Come viene garantita l'affidabilità delle informazioni?</h4>
              <p className="text-slate-600 text-sm">
                L'affidabilità è garantita dal processo di validazione comunitaria, che coinvolge esperti del diritto nella verifica delle relazioni nel Knowledge Graph.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
