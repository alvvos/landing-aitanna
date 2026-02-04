import { Monitor, Mail } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-aitanna-bg flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-aitanna-dark/50 to-aitanna-bg"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-aitanna-teal/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-display">
            AITANNA<span className="text-aitanna-glow">.</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
          Estamos construyendo <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aitanna-teal to-aitanna-glow">
            el futuro
          </span>
        </h1>

        <p className="text-lg text-slate-400 mb-10 font-light max-w-lg mx-auto">
          Nuestra plataforma de analítica avanzada para espacios físicos estará
          disponible muy pronto. Estamos ultimando los detalles para ofrecerte
          la mejor experiencia.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:info@aitanna.ai"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-6 py-3 border border-slate-700 rounded-full hover:border-aitanna-teal"
          >
            <Mail size={20} />
            Contáctanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 text-slate-600 text-sm">
        &copy; 2026 Aitanna.ai - Próximamente.
      </div>
    </div>
  );
};

export default Maintenance;
