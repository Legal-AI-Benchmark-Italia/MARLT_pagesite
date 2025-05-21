import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">LAIBIT</span>
                <span className="text-xs text-slate-300">Legal AI Benchmark Italia</span>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Intelligenza artificiale per un diritto trasparente, affidabile e democratico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Legal-AI-Benchmark-Italia/MERL-T" className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Il Progetto</h3>
            <ul className="space-y-2">
              <li><a href="#sfida" className="text-slate-300 hover:text-white transition-colors">La Sfida</a></li>
              <li><a href="#soluzione" className="text-slate-300 hover:text-white transition-colors">Soluzione</a></li>
              <li><a href="#pipeline" className="text-slate-300 hover:text-white transition-colors">Pipeline</a></li>
              <li><a href="#metodo" className="text-slate-300 hover:text-white transition-colors">Metodo RLCF</a></li>
              <li><a href="#importanza" className="text-slate-300 hover:text-white transition-colors">Perché Noi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stakeholders</h3>
            <ul className="space-y-2">
              <li><a href="#giuristi" className="text-slate-300 hover:text-white transition-colors">Per Giuristi</a></li>
              <li><a href="#sviluppatori" className="text-slate-300 hover:text-white transition-colors">Per Sviluppatori</a></li>
              <li><a href="#istituzioni" className="text-slate-300 hover:text-white transition-colors">Per Istituzioni</a></li>
              <li><a href="#ricercatori" className="text-slate-300 hover:text-white transition-colors">Per Ricercatori</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Partecipa</h3>
            <ul className="space-y-2">
              <li><a href="#community" className="text-slate-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="#risorse" className="text-slate-300 hover:text-white transition-colors">Risorse</a></li>
              <li><a href="https://github.com/Legal-AI-Benchmark-Italia/MERL-T" className="text-slate-300 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#contatti" className="text-slate-300 hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              &copy; {currentYear} LAIBIT - Legal AI Benchmark Italia. Tutti i diritti riservati.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Termini di Servizio</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
