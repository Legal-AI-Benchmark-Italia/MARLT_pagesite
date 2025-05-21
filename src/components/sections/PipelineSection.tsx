import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

const PipelineSection = () => {
  const [activeStage, setActiveStage] = useState(1);
  
  const stages = [
    {
      id: 1,
      title: "Pre-processing",
      description: "Analisi e normalizzazione del testo giuridico",
      details: "In questa fase, il testo viene analizzato, normalizzato e preparato per l'elaborazione. Vengono identificate le entità giuridiche e le relazioni sintattiche.",
      icon: "filter"
    },
    {
      id: 2,
      title: "Routing",
      description: "Indirizzamento ai moduli specializzati",
      details: "La query viene indirizzata ai moduli specializzati più appropriati in base al tipo di richiesta e al dominio giuridico di riferimento.",
      icon: "route"
    },
    {
      id: 3,
      title: "Context Retrieval",
      description: "Recupero del contesto normativo rilevante",
      details: "Vengono recuperate le fonti normative, giurisprudenziali e dottrinali rilevanti dal Knowledge Graph, garantendo la completezza del contesto.",
      icon: "database"
    },
    {
      id: 4,
      title: "Inferenza",
      description: "Elaborazione e ragionamento giuridico",
      details: "I modelli di AI specializzati elaborano la query nel contesto delle fonti recuperate, applicando ragionamento giuridico e logica normativa.",
      icon: "brain"
    },
    {
      id: 5,
      title: "Sintesi",
      description: "Generazione della risposta con citazioni",
      details: "Viene generata una risposta chiara e strutturata, con citazioni precise delle fonti utilizzate, garantendo trasparenza e verificabilità.",
      icon: "layers"
    }
  ];
  
  const handleNext = () => {
    setActiveStage(prev => prev < stages.length ? prev + 1 : prev);
  };
  
  const handlePrev = () => {
    setActiveStage(prev => prev > 1 ? prev - 1 : prev);
  };
  
  return (
    <section id="pipeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            La Pipeline MERL-T
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Un processo strutturato in cinque fasi che garantisce accuratezza, trasparenza e affidabilità nell'elaborazione delle informazioni giuridiche.
          </p>
        </div>
        
        {/* Pipeline Visualization */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex justify-between items-center mb-8 relative">
            {stages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`pipeline-node relative z-10 flex-1 flex flex-col items-center cursor-pointer transition-all ${activeStage === stage.id ? 'scale-110' : 'opacity-70'}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-colors ${activeStage === stage.id ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <i className={`fa-solid fa-${stage.icon} text-xl`}></i>
                </div>
                <div className="text-center">
                  <div className={`font-medium transition-colors ${activeStage === stage.id ? 'text-primary' : 'text-slate-700'}`}>
                    {stage.title}
                  </div>
                  <div className="text-xs text-slate-500 hidden md:block">
                    {stage.description}
                  </div>
                </div>
                
                {/* Connector line */}
                {index < stages.length - 1 && (
                  <div className={`absolute top-8 left-[calc(50%+2rem)] right-[calc(50%+2rem)] h-0.5 transition-colors ${activeStage > index + 1 ? 'bg-primary' : 'bg-slate-200'}`}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Stage Content */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm min-h-[300px] transition-all">
            {stages.map(stage => (
              <div 
                key={stage.id}
                className={`transition-opacity duration-300 ${activeStage === stage.id ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className={`fa-solid fa-${stage.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{stage.title}</h3>
                    <p className="text-slate-600">{stage.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-medium mb-3 text-slate-800">Come funziona</h4>
                    <p className="text-slate-600 mb-4">{stage.details}</p>
                    
                    <h4 className="text-lg font-medium mb-3 text-slate-800">Vantaggi chiave</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Precisione nell'identificazione delle fonti rilevanti</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Trasparenza del processo di elaborazione</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Validazione comunitaria dei risultati</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-medium mb-3 text-slate-800">Tecnologie</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-medium">NLP</span>
                        </div>
                        <span className="text-slate-700">Natural Language Processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs font-medium">KG</span>
                        </div>
                        <span className="text-slate-700">Knowledge Graph</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-xs font-medium">LLM</span>
                        </div>
                        <span className="text-slate-700">Large Language Models</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrev}
                disabled={activeStage === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Precedente
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleNext}
                disabled={activeStage === stages.length}
                className="flex items-center gap-2"
              >
                Successivo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            La pipeline MERL-T è progettata per garantire la massima accuratezza e trasparenza in ogni fase del processo, dalla comprensione della query alla generazione della risposta.
          </p>
          <Button variant="default">
            Scopri il Knowledge Graph
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
