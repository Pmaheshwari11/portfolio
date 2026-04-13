import React, { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Engineer",
  "Backend Developer",
  "DevOps Engineer",
  "Software Engineer",
];

const SIGNALS = [
  { key: "NexDesk", value: "retail mgmt system, in production 6mo+" },
  { key: "ResolveHub", value: "complaint platform replacing manual ops" },
  { key: "HealthMudraa", value: "Next.js migration, 30% load reduction" },
  { key: "Open to", value: "full-time · backend · fullstack" },
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [signalIndex, setSignalIndex] = useState(0);

  // Signal Switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalIndex((i) => (i + 1) % SIGNALS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter Logic
  useEffect(() => {
    const word = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % ROLES.length);
        }, 40);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="Hero" className="relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-l from-accent/5 to-transparent opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent/40" />
            // software engineer · vit · 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.95] text-text-primary mb-8">
            I build the systems
            <br />
            behind the{" "}
            <span className="italic font-normal text-accent">product.</span>
          </h1>

          <div className="flex items-center gap-3 font-mono text-sm text-text-secondary mb-10 min-h-6 bg-app-card/50 px-3 py-1 border border-border-subtle rounded-sm">
            <span className="text-accent/60">λ</span>
            <span className="tracking-tight">{displayed}</span>
            <span className="w-1.5 h-4 bg-accent animate-pulse" />
          </div>

          <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-12">
            Backend logic, system design, and cloud pipelines — the invisible
            infrastructure that keeps modern products scaling.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA: See my work */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-4 bg-text-primary text-app-bg font-bold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-accent/5 active:scale-95"
            >
              See my work ↓
            </button>

            {/* Secondary CTA: View Full Resume */}
            <a
              href="https://drive.google.com/file/your-id/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-text-primary text-text-primary font-bold rounded-sm hover:bg-text-primary hover:text-app-bg transition-all duration-300 active:scale-95 text-center"
            >
              View Full Resume ↗
            </a>
          </div>
        </div>

        {/* Right Column: Signal Card (Terminal Aesthetic) */}
        <div className="lg:col-span-5 w-full relative">
          {/* Subtle Glow behind the card */}
          <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full -z-10" />

          <div className="bg-app-card border border-border-subtle rounded-sm overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#161618] px-5 py-4 border-b border-border-subtle flex justify-between items-center">
              <div className="flex gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
              </div>
            </div>

            {/* Signal Feed */}
            <div className="p-3 flex flex-col gap-2 bg-app-card">
              {SIGNALS.map((s, i) => (
                <div
                  key={s.key}
                  className={`px-5 py-5 rounded-sm transition-all duration-700 flex flex-col gap-2 border
                    ${
                      i === signalIndex
                        ? "bg-accent/5 border-accent/20 translate-x-1"
                        : "bg-transparent border-transparent opacity-20 grayscale"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-[0.15em]">
                      {`[ ${s.key} ]`}
                    </span>
                  </div>
                  <span className="font-mono text-[12px] text-text-primary leading-tight">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="px-5 py-3 bg-[#161618] border-t border-border-subtle">
              <div className="font-mono text-[9px] text-text-secondary/40 flex justify-end">
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
