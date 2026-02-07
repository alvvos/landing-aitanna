import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguageStore } from "../store/useLanguajeStore";

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const { t } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-aitanna-dark/60 via-aitanna-dark/40 to-aitanna-bg"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl leading-snug font-bold text-white mb-6 drop-shadow-2xl">
          {t("hero.title")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aitanna-teal to-aitanna-glow">
            {t("hero.subtitle")}
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
          {t("hero.desc")}
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce text-aitanna-glow">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
