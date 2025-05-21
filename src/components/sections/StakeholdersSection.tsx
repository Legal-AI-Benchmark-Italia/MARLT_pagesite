import { Building, GraduationCap, Scale } from 'lucide-react';
import { Button } from '../ui/button';

const StakeholdersSection = () => {
  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            MERL-T per diversi stakeholder
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Scopri come MERL-T può supportare le esigenze specifiche di diversi professionisti e istituzioni nel campo giuridico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div id="giuristi" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Scale className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Per Giuristi</h3>
                <p className="text-slate-600">Avvocati, magistrati e notai</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              MERL-T offre ai professionisti del diritto strumenti avanzati per la ricerca giuridica, l'analisi normativa e la preparazione di atti, riducendo i tempi di ricerca e aumentando la precisione.
            </p>
            
            <h4 className="font-medium mb-3">Vantaggi chiave</h4>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Ricerca giuridica avanzata con comprensione del contesto</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Analisi delle relazioni tra norme, giurisprudenza e dottrina</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Supporto nella redazione di atti con citazioni precise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Monitoraggio automatico degli aggiornamenti normativi</span>
              </li>
            </ul>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2">Caso d'uso</h5>
              <p className="text-sm text-slate-600">
                Un avvocato utilizza MERL-T per analizzare rapidamente la giurisprudenza recente sulla responsabilità civile, identificando tendenze interpretative e precedenti rilevanti per il suo caso.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Scopri di più</Button>
          </div>
          
          <div id="sviluppatori" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-code text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Per Sviluppatori</h3>
                <p className="text-slate-600">Programmatori e data scientist</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              Gli sviluppatori possono integrare MERL-T nelle loro applicazioni tramite API standardizzate, accedere al Knowledge Graph e contribuire al miglioramento del sistema.
            </p>
            
            <h4 className="font-medium mb-3">Vantaggi chiave</h4>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>API RESTful per l'integrazione in applicazioni terze</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Accesso strutturato al Knowledge Graph giuridico</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Documentazione completa e esempi di codice</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Possibilità di contribuire al progetto open source</span>
              </li>
            </ul>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2">Caso d'uso</h5>
              <p className="text-sm text-slate-600">
                Una startup LegalTech integra MERL-T nella propria piattaforma di gestione documentale per offrire funzionalità avanzate di analisi e classificazione automatica dei documenti legali.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Scopri di più</Button>
          </div>
          
          <div id="istituzioni" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Per Istituzioni</h3>
                <p className="text-slate-600">PA, tribunali e enti pubblici</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              Le istituzioni possono utilizzare MERL-T per migliorare l'efficienza dei processi, garantire la coerenza normativa e offrire servizi più accessibili ai cittadini.
            </p>
            
            <h4 className="font-medium mb-3">Vantaggi chiave</h4>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Automazione di processi di ricerca e analisi normativa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Supporto alla redazione di atti amministrativi</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Verifica automatica della conformità normativa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Miglioramento dell'accessibilità delle informazioni giuridiche</span>
              </li>
            </ul>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2">Caso d'uso</h5>
              <p className="text-sm text-slate-600">
                Un comune utilizza MERL-T per verificare la conformità dei propri regolamenti alle normative regionali e nazionali, identificando rapidamente potenziali conflitti.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Scopri di più</Button>
          </div>
          
          <div id="ricercatori" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Per Ricercatori</h3>
                <p className="text-slate-600">Accademici e studiosi del diritto</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">
              I ricercatori possono utilizzare MERL-T per analizzare grandi volumi di dati giuridici, identificare tendenze e pattern, e condurre ricerche innovative nel campo del diritto.
            </p>
            
            <h4 className="font-medium mb-3">Vantaggi chiave</h4>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Analisi quantitativa e qualitativa di dati giuridici</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Identificazione di pattern e tendenze nella giurisprudenza</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Strumenti per la ricerca comparativa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Accesso a dataset annotati per il training di modelli</span>
              </li>
            </ul>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <h5 className="font-medium mb-2">Caso d'uso</h5>
              <p className="text-sm text-slate-600">
                Un gruppo di ricerca universitario utilizza MERL-T per analizzare l'evoluzione della giurisprudenza in materia ambientale negli ultimi 20 anni, identificando tendenze e cambiamenti interpretativi.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Scopri di più</Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-slate-600 mb-6 max-w-3xl mx-auto">
            MERL-T è progettato per adattarsi alle esigenze specifiche di diversi stakeholder, offrendo funzionalità personalizzate e interfacce dedicate per ogni tipo di utente.
          </p>
          <Button variant="default">
            Contattaci per una demo personalizzata
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;
