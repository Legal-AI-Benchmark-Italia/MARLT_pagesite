import { Users, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Community LAIBIT
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Unisciti alla nostra community di giuristi, sviluppatori, ricercatori e istituzioni per contribuire a un diritto più accessibile e trasparente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Partecipa alla validazione</h3>
                <p className="text-slate-600">Contribuisci alla validazione del Knowledge Graph</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              La validazione comunitaria è un elemento fondamentale del progetto MERL-T. Esperti del diritto, accademici e professionisti possono contribuire a verificare e migliorare le relazioni nel Knowledge Graph, garantendo l'affidabilità e la qualità delle informazioni.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Validatori attivi</h4>
                <div className="text-3xl font-bold text-primary">120+</div>
                <p className="text-sm text-slate-500">esperti del diritto</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Validazioni mensili</h4>
                <div className="text-3xl font-bold text-primary">1.500+</div>
                <p className="text-sm text-slate-500">relazioni verificate</p>
              </div>
            </div>
            
            <Button variant="default" className="w-full">Diventa validatore</Button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Forum della community</h3>
                <p className="text-slate-600">Discuti, collabora e condividi idee</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              Il forum della community è uno spazio di discussione aperto dove membri possono condividere idee, porre domande, segnalare problemi e collaborare allo sviluppo del progetto MERL-T.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Discussione recente</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Attiva</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  "Miglioramenti al riconoscimento di entità nelle sentenze di Cassazione"
                </p>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>15 risposte</span>
                  <span>Ultimo aggiornamento: 2 giorni fa</span>
                </div>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Discussione recente</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Annuncio</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  "Rilasciata nuova versione dell'annotatore per il NER"
                </p>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>32 risposte</span>
                  <span>Ultimo aggiornamento: 5 giorni fa</span>
                </div>
              </div>
            </div>
            
            <Button variant="default" className="w-full">Visita il forum</Button>
          </div>
        </div>
        
        <div className="bg-primary/5 p-8 rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Eventi della community</h3>
            <p className="text-slate-600">
              Partecipa ai nostri eventi online e in presenza per conoscere meglio il progetto e la community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-primary font-medium mb-2">20 Giugno 2025</div>
              <h4 className="text-lg font-semibold mb-2">Workshop LAIBIT: AI e Diritto Italiano</h4>
              <p className="text-slate-600 text-sm mb-4">
                Workshop in presenza a Roma con esperti di diritto e intelligenza artificiale.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">In presenza</span>
                <Button variant="outline" size="sm">Dettagli</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-primary font-medium mb-2">15 Luglio 2025</div>
              <h4 className="text-lg font-semibold mb-2">Webinar: Introduzione al Knowledge Graph</h4>
              <p className="text-slate-600 text-sm mb-4">
                Sessione online per comprendere la struttura e l'utilizzo del Knowledge Graph.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Online</span>
                <Button variant="outline" size="sm">Dettagli</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-primary font-medium mb-2">10 Settembre 2025</div>
              <h4 className="text-lg font-semibold mb-2">Hackathon MERL-T</h4>
              <p className="text-slate-600 text-sm mb-4">
                Evento di sviluppo collaborativo per migliorare e estendere le funzionalità di MERL-T.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full">Ibrido</span>
                <Button variant="outline" size="sm">Dettagli</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
