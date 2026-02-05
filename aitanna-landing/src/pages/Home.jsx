import Hero from '../components/Hero';
import { Server, BarChart3, Layers, Hotel, ShoppingBag, Fuel, Building2, Ticket, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const sectors = [
    {
      title: "Hospitality & Turismo",
      icon: Hotel,
      desc: "Hoteles, resorts, beach clubs, campings.",
      items: ["Habitaciones y villas", "Restaurantes y bares", "Piscinas, spa y gimnasio", "Playa, zonas exteriores y accesos"]
    },
    {
      title: "Retail & Comercio",
      icon: ShoppingBag,
      desc: "Tiendas, flagship stores, grandes superficies.",
      items: ["Exterior y zonas de atracción", "Entrada, pasillos y áreas de producto", "Probadores y cajas"]
    },
    {
      title: "Estaciones de servicio",
      icon: Fuel,
      desc: "Gasolineras, áreas de descanso, hubs de transporte.",
      items: ["Surtidores y Tienda", "Cafetería y baños", "Accesos y exterior"]
    },
    {
      title: "Centros Comerciales",
      icon: Building2,
      desc: "Malls, outlets, complejos corporativos.",
      items: ["Zonas, plantas y accesos", "Flujos entre áreas", "Puntos calientes y zonas infrautilizadas"]
    },
    {
      title: "Eventos & Espacios",
      icon: Ticket,
      desc: "Ferias, congresos, estadios, parques temáticos.",
      items: ["Control de afluencia por zonas", "Picos de tráfico", "Recorridos y distribución"]
    }
  ];

  const roadmapSteps = [
    { id: 1, text: "Cuánta gente hay", label: "Volumen" },
    { id: 2, text: "Dónde está", label: "Ubicación" },
    { id: 3, text: "A qué hora", label: "Tiempo" },
    { id: 4, text: "Cómo se mueve", label: "Flujo" },
  ];

  const clients = [
    { name: "Miniso", logo: "/miniso.png" },
    { name: "Walmart", logo: "/walmart.png" },
    { name: "Kiosko", logo: "/kiosko.png" },
    { name: "Miniso", logo: "/miniso.png" },
    { name: "Walmart", logo: "/walmart.png" },
    { name: "Kiosko", logo: "/kiosko.png" },
  ];

  return (
    <div className="bg-aitanna-bg overflow-x-hidden">
      <Hero />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Qué hace Aitanna?</h2>
          <div className="h-1 w-20 bg-aitanna-teal mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Es el punto central donde convergen todos los datos recogidos por los nodos instalados en un espacio: los procesa, los estructura y los transforma en gráficos, estadísticas y métricas claras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-aitanna-dark border border-slate-800 hover:border-aitanna-teal transition-all hover:-translate-y-2 group shadow-lg">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-aitanna-glow group-hover:bg-aitanna-teal group-hover:text-white transition-colors">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Centralización</h3>
            <p className="text-slate-400">
              Aitanna.ai es la plataforma donde se centralizan todos los datos generados por los nodos instalados en un espacio físico.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-aitanna-dark border border-slate-800 hover:border-aitanna-teal transition-all hover:-translate-y-2 group shadow-lg">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-aitanna-glow group-hover:bg-aitanna-teal group-hover:text-white transition-colors">
              <Layers size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Procesamiento</h3>
            <p className="text-slate-400">
              La plataforma recibe esta información, la procesa y la organiza para ofrecer una visión clara y estructurada del comportamiento de las personas.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-aitanna-dark border border-slate-800 hover:border-aitanna-teal transition-all hover:-translate-y-2 group shadow-lg">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-aitanna-glow group-hover:bg-aitanna-teal group-hover:text-white transition-colors">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Visualización</h3>
            <p className="text-slate-400">
              A través de dashboards visuales, analiza el tráfico por zonas, detecta patrones y toma decisiones basadas en datos reales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">En resumen</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aitanna-teal/50 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {roadmapSteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-aitanna-dark border-2 border-aitanna-teal rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(13,148,136,0.3)] group-hover:scale-110 group-hover:bg-aitanna-teal transition-all duration-300">
                    {step.id}
                  </div>
                  <div className="bg-aitanna-dark p-6 rounded-xl border border-slate-700 w-full hover:border-aitanna-glow transition-colors">
                    <span className="text-xs font-bold text-aitanna-glow uppercase tracking-wider mb-2 block">{step.label}</span>
                    <h3 className="text-lg font-medium text-white">{step.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
             <div className="p-1 rounded-2xl bg-gradient-to-r from-aitanna-teal via-aitanna-light to-aitanna-teal">
                <div className="bg-aitanna-dark rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <CheckCircle2 className="text-aitanna-light" />
                    Aitanna.ai encaja.
                  </h3>
                  <p className="text-slate-300">
                    Y además, permite interactuar con los usuarios cuando están en la zona y el momento adecuados.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-aitanna-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Sectores Multizona</h2>
            <p className="text-slate-400 max-w-2xl">
              Aitanna.ai se adapta a cualquier espacio donde sea clave analizar el tráfico de personas. Gracias a su enfoque multizona, no hay límites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-aitanna-teal transition duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <sector.icon className="text-aitanna-teal group-hover:text-aitanna-glow transition-colors" size={24} />
                  <h3 className="text-lg font-bold text-white">{sector.title}</h3>
                </div>
                <p className="text-sm text-slate-300 mb-4 italic">{sector.desc}</p>
                <ul className="space-y-2">
                  {sector.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-aitanna-teal/50 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-aitanna-bg border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
           <h2 className="text-l md:text-2xl font-bold text-slate-400">Empresas que confían en nosotros</h2>
        </div>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-aitanna-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-aitanna-bg to-transparent z-10 pointer-events-none"></div>
          
          <div 
            className="flex flex-row flex-nowrap justify-start md:justify-center items-center gap-8 md:gap-24 px-8 overflow-x-auto scroll-smooth w-full no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            
            {clients.map((client, i) => (
               <div key={i} className="group relative flex-shrink-0">
                 <img 
                    src={client.logo} 
                    alt={`Logo ${client.name}`} 
                    className="h-8 md:h-16 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                 />
               </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;