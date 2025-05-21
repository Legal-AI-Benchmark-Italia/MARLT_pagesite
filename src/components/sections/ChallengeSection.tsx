import { PuzzleIcon, BarChart3Icon, ShieldIcon } from 'lucide-react';

const ChallengeSection = () => {
  return (
    <section id="sfida" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            La complessità giuridica nell'era digitale: una sfida istituzionale
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Il sistema giuridico è un pilastro della nostra democrazia, ma la sua complessità e la rapida evoluzione normativa rendono difficile l'accesso e l'applicazione del diritto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <PuzzleIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complessità intrinseca</h3>
                <p className="text-slate-600">
                  Il sistema giuridico italiano è caratterizzato da una stratificazione normativa che rende difficile l'accesso e la comprensione anche per i professionisti del settore.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Evoluzione rapida</h3>
                <p className="text-slate-600">
                  La continua produzione normativa e giurisprudenziale richiede un aggiornamento costante che supera le capacità di monitoraggio tradizionali.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShieldIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impatto istituzionale</h3>
                <p className="text-slate-600">
                  Questa difficoltà non è solo un ostacolo per professionisti e cittadini, ma interroga la capacità stessa delle istituzioni di garantire l'effettività dei diritti.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">La dimensione del problema</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2" id="counter-laws">25.000+</div>
                <div className="text-sm text-slate-600">Norme primarie vigenti</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2" id="counter-sentences">45.000+</div>
                <div className="text-sm text-slate-600">Sentenze l'anno</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2" id="counter-updates">70%</div>
                <div className="text-sm text-slate-600">Aggiornamenti necessari</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2" id="counter-complexity">85%</div>
                <div className="text-sm text-slate-600">Complessità percepita</div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-slate-600 text-sm">
              Gli strumenti digitali attuali spesso mancano della specializzazione, affidabilità e trasparenza necessarie per il delicato dominio legale.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
