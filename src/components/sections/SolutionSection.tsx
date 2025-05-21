import { BrainIcon, NetworkIcon, UsersIcon } from 'lucide-react';
import { Button } from '../ui/button';

const SolutionSection = () => {
  return (
    <section id="soluzione" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            MERL-T: La soluzione innovativa per il diritto italiano
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Un approccio rivoluzionario che combina intelligenza artificiale, validazione comunitaria e knowledge graph per rendere il diritto italiano accessibile, trasparente e affidabile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <BrainIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligenza Artificiale Specializzata</h3>
            <p className="text-slate-600 mb-4">
              Modelli di AI addestrati specificamente sul diritto italiano, capaci di comprendere il linguaggio giuridico e le sue sfumature semantiche.
            </p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Comprensione del linguaggio giuridico</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Analisi contestuale delle norme</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Riconoscimento di entità legali</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <NetworkIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Knowledge Graph Giuridico</h3>
            <p className="text-slate-600 mb-4">
              Una rappresentazione strutturata delle conoscenze giuridiche che mappa le relazioni tra norme, concetti, sentenze e dottrina.
            </p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Mappatura delle relazioni normative</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Tracciabilità delle fonti</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Navigazione intuitiva del diritto</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <UsersIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Validazione Comunitaria</h3>
            <p className="text-slate-600 mb-4">
              Un processo di revisione e validazione che coinvolge esperti del diritto, garantendo l'affidabilità e la qualità delle informazioni.
            </p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Revisione da parte di esperti</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Miglioramento continuo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Trasparenza del processo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">I vantaggi di MERL-T</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6">
              <div className="text-primary text-4xl font-bold mb-2">100%</div>
              <div className="text-slate-700 font-medium">Trasparenza</div>
              <p className="text-sm text-slate-600 mt-2">Ogni risposta è tracciabile alle fonti originali</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-primary text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-700 font-medium">Accessibilità</div>
              <p className="text-sm text-slate-600 mt-2">Accesso continuo alle informazioni giuridiche</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-primary text-4xl font-bold mb-2">-70%</div>
              <div className="text-slate-700 font-medium">Tempo di ricerca</div>
              <p className="text-sm text-slate-600 mt-2">Riduzione drastica dei tempi di ricerca legale</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-primary text-4xl font-bold mb-2">+90%</div>
              <div className="text-slate-700 font-medium">Accuratezza</div>
              <p className="text-sm text-slate-600 mt-2">Elevata precisione nelle risposte giuridiche</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Scopri la pipeline MERL-T
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
