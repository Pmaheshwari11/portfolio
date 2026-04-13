import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
] as const;
type NavSection = (typeof NAV_LINKS)[number];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<NavSection>("About");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 120;
      for (const id of NAV_LINKS) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: NavSection) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuOpen && !(e.target as HTMLElement).closest(".nav-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  return (
    <nav
      className={`nav-container sticky top-0 z-100 w-full transition-all duration-300 border-b 
      ${
        scrolled
          ? "bg-app-bg/80 backdrop-blur-xl py-3 border-border-subtle shadow-2xl"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Name/Logo */}
        <div
          className="font-serif text-xl font-bold tracking-tighter cursor-pointer hover:text-accent transition-colors"
          onClick={() => scrollTo("About")}
        >
          Parth Dudani
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] relative py-1 transition-colors
                ${active === s ? "text-accent" : "text-text-secondary hover:text-text-primary"}`}
            >
              {s}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 
                ${active === s ? "w-full" : "w-0"}`}
              />
            </button>
          ))}
        </div>

        {/* Right Side Info */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-accent/5 border border-accent/20 font-mono text-[9px] text-accent uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#3b82f6]" />
            Building • Open to Opportunities
          </div>
          <a
            href="https://drive.google.com/file/your-id/view"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-text-primary hover:text-accent transition-all border-b border-border-subtle hover:border-accent pb-0.5"
          >
            View Resume ↗
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-2 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-text-primary transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`h-px w-6 bg-text-primary transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-text-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-app-card border-b border-border-subtle py-10 px-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
          {NAV_LINKS.map((s) => (
            <span
              key={s}
              onClick={() => scrollTo(s)}
              className={`font-mono text-xs uppercase tracking-[0.3em] ${active === s ? "text-accent" : "text-text-secondary"}`}
            >
              {s}
            </span>
          ))}
          <div className="pt-4 border-t border-border-subtle">
            <a
              href="https://drive.google.com/file/your-id/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-[10px] text-text-primary uppercase tracking-widest hover:text-accent transition-colors"
            >
              <span>Resume</span>
              <span className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
