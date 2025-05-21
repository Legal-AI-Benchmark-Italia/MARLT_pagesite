import { useState } from 'react';
import { Network } from 'lucide-react';
import { Button } from '../ui/button';

const KnowledgeGraphSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <section id="knowledge-graph" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Knowledge Graph: il cuore di MERL-T
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Una rappresentazione strutturata delle conoscenze giuridiche che mappa le relazioni tra norme, concetti, sentenze e dottrina in un formato navigabile e validato dalla community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Esplora il Knowledge Graph</h3>
              
              <div className="mb-4">
                <label htmlFor="node-type" className="block text-sm font-medium text-slate-700 mb-1">
                  Filtra per tipo:
                </label>
                <select 
                  id="node-type" 
                  className="w-full p-2 border border-slate-300 rounded-md"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  <option value="all">Tutti i nodi</option>
                  <option value="norma">Norme</option>
                  <option value="concetto">Concetti</option>
                  <option value="sentenza">Sentenze</option>
                  <option value="dottrina">Dottrina</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="kg-search" className="block text-sm font-medium text-slate-700 mb-1">
                  Cerca nel grafo:
                </label>
                <input 
                  type="text" 
                  id="kg-search" 
                  className="w-full p-2 border border-slate-300 rounded-md"
                  placeholder="Es. responsabilità civile"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button variant="outline" className="w-full">
                Reimposta vista
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Legenda</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span>Norma</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span>Concetto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                  <span>Sentenza</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <span>Dottrina</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-medium mb-2">Statistiche del grafo</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-500">Nodi</div>
                    <div className="text-xl font-semibold">12,450+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Relazioni</div>
                    <div className="text-xl font-semibold">45,780+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Fonti</div>
                    <div className="text-xl font-semibold">3,200+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Validazioni</div>
                    <div className="text-xl font-semibold">8,900+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm h-[500px] flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visualizzazione Knowledge Graph</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Qui verrà visualizzato il Knowledge Graph interattivo che permette di esplorare le relazioni tra norme, concetti, sentenze e dottrina.
                </p>
                <Button variant="default">
                  Carica visualizzazione
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Dettagli del nodo selezionato</h3>
              
              <div className="text-center py-8 text-slate-500">
                <p>Seleziona un nodo nel grafo per visualizzare i dettagli</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">Vantaggi del Knowledge Graph</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-link text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Relazioni esplicite</h4>
              <p className="text-slate-600 text-sm">
                Visualizzazione chiara delle connessioni tra diversi elementi del sistema giuridico
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-magnifying-glass text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Ricerca contestuale</h4>
              <p className="text-slate-600 text-sm">
                Ricerca avanzata che tiene conto del contesto e delle relazioni semantiche
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-check-double text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Validazione comunitaria</h4>
              <p className="text-slate-600 text-sm">
                Ogni relazione è validata dalla community di esperti, garantendo affidabilità
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeGraphSection;
