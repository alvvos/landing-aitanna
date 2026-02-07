import { Link } from "react-router-dom";
import { Monitor, Menu, X, ToolCase, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguageStore } from "../store/useLanguajeStore";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { t, language, toggleLanguage } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-aitanna-dark/90 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex-1 z-50 relative">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-2xl font-bold tracking-tighter text-white font-display"
            >
              <img
                src="/header-logo.png"
                alt="Logo Aitanna"
                className="w-24 md:w-32"
              />
            </Link>
          </div>

          <ul className="hidden md:flex flex-1 justify-center space-x-8 font-medium text-sm uppercase tracking-wide text-slate-300">
            <li>
              <Link
                to="/"
                className="hover:text-aitanna-glow transition-colors"
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-aitanna-glow transition-colors"
              >
                {t("nav.blog")}
              </Link>
            </li>
            <li>
              <Link
                to="/reel"
                className="hover:text-aitanna-glow transition-colors"
              >
                {t("nav.reel")}
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-aitanna-glow transition-colors font-medium text-sm flex items-center gap-1 mr-8"
            >
              <Globe size={16} />
              {language === "en" ? "ES" : "EN"}
            </button>
            <a
              href="https://plataforma.aitanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-aitanna-teal hover:bg-aitanna-glow text-white px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(13,148,136,0.5)] hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]"
            >
              <Monitor
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="font-semibold text-sm">{t("nav.platform")}</span>
            </a>

            <a
              href="https://plataforma.aitanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-aitanna-dark hover:bg-aitanna-dark text-white px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(15,23,42,0.5)] hover:shadow-[0_0_25px_rgba(15,23,42,0.6)] border border-slate-700"
            >
              <ToolCase
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="font-semibold text-sm">
                {t("nav.installer")}
              </span>
            </a>
          </div>

          <div className="md:hidden flex-1 flex justify-end z-50 relative items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-aitanna-glow transition-colors font-bold text-sm"
            >
              {language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-aitanna-glow transition-colors focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 bg-aitanna-bg z-40 flex flex-col items-center justify-center space-y-10 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 text-2xl font-bold text-white font-display uppercase tracking-widest">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-aitanna-glow transition-colors"
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="hover:text-aitanna-glow transition-colors"
            >
              {t("nav.blog")}
            </Link>
          </li>
          <li>
            <Link
              to="/reel"
              onClick={closeMenu}
              className="hover:text-aitanna-glow transition-colors"
            >
              {t("nav.reel")}
            </Link>
          </li>
        </ul>

        <a
          href="https://plataforma.aitanna.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-aitanna-teal text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold text-lg shadow-lg shadow-aitanna-teal/30 active:scale-95 transition-transform"
        >
          <Monitor size={24} />
          Plataforma
        </a>

        <a
          href="https://plataforma.aitanna.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-aitanna-dark text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold text-lg shadow-lg shadow-[rgba(128,128,128,0.3)] active:scale-95 transition-transform border border-slate-700"
        >
          <ToolCase size={24} />
          {t("nav.installer")}
        </a>
      </div>
    </>
  );
};

export default Navbar;
