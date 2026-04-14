import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFlask,
  SiSocketdotio,
  SiGooglegemini,
  SiPostman,
  SiYoutube,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Flask: SiFlask,
  "Socket.io": SiSocketdotio,
  "Gemini API": SiGooglegemini,
  "REST API": SiPostman,
  "YouTube Data API": SiYoutube,
};

interface Project {
  name: string;
  badge: string;
  metric: string;
  metricLabel: string;
  thinking: string;
  desc: string;
  stack: string[];
  link: string;
  demoVid?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Kuizu-io",
    badge: "live",
    metric: "real-time",
    metricLabel: "multiplayer",
    thinking:
      "how do you keep game state in sync across players with no perceivable lag?",
    desc: "The interesting part wasn't the quiz logic — it was figuring out how to broadcast state changes instantly across all connected clients. Used Socket.io's bidirectional WebSocket model for that, then layered in Gemini API so hosts don't have to write questions manually.",
    stack: ["React.js", "Socket.io", "Gemini API", "Node.js", "Tailwind CSS"],
    link: "https://kuizu-io.vercel.app/",
  },
  {
    name: "Opinion.io",
    badge: "live",
    metric: "Gemini",
    metricLabel: "AI Aggregator",
    thinking:
      "How do you turn thousands of noisy social comments into a structured, readable summary without hitting token limits?",
    desc: "Engineered a pipeline that pulls top-trending data via YouTube API, sanitizes high-volume comment streams in Flask, and feeds context-aware chunks to Gemini. The challenge wasn't just the AI—it was the data orchestration required to clean and prep raw text before the LLM even sees it.",
    stack: ["React.js", "Flask", "Gemini API", "YouTube Data API", "REST API"],
    link: "https://opinion-io.vercel.app/",
    demoVid: "https://youtu.be/bMuYpMEAYhk",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="Projects" className="relative">
      {/* Structural background line */}
      <div className="absolute right-12 top-0 w-px h-full bg-border-subtle/20 hidden lg:block" />

      <div className="flex flex-col gap-4 mb-16 relative">
        <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
          04 // Projects
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
          Things I've{" "}
          <span className="italic font-normal text-accent">Built</span>
        </h2>
      </div>

      <div className="flex items-center gap-3 mb-12">
        <div className="h-px w-12 bg-accent/30" />
        <p className="font-mono text-[9px] text-text-secondary/60 uppercase tracking-[0.2em]">
          // free-tier instances may need a moment to wake up
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="group flex flex-col bg-app-card border border-border-subtle rounded-sm transition-all duration-700 hover:border-accent/40 relative overflow-hidden"
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent/5 -mr-6 -mt-6 rotate-45 group-hover:bg-accent/10 transition-colors" />

            <div className="p-8 pb-6 flex justify-between items-start">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-serif font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-accent/5 border border-accent/20">
                    <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[8px] text-accent font-bold uppercase tracking-widest">
                      {p.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right flex flex-col items-end">
                <div className="px-2 py-1 bg-border-subtle/20 rounded-sm">
                  <span className="text-lg font-serif font-bold text-text-primary leading-none capitalize">
                    {p.metric}
                  </span>
                </div>
                <div className="font-mono text-[9px] text-accent uppercase tracking-widest mt-2">
                  {p.metricLabel}
                </div>
              </div>
            </div>

            <div className="px-8 flex-1">
              {/* Architecture/Thinking Block */}
              <div className="bg-app-bg/50 border border-border-subtle p-5 mb-8 rounded-sm relative group/think">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-30 group-hover/think:opacity-100 transition-opacity" />
                <p className="font-mono text-[11px] leading-relaxed text-text-secondary">
                  <span className="text-accent/60 block mb-2 text-[9px] uppercase tracking-widest font-bold">
                    # architectural_design
                  </span>
                  <span className="text-text-primary/90 italic">
                    "{p.thinking}"
                  </span>
                </p>
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-10 font-sans opacity-80 group-hover:opacity-100 transition-opacity">
                {p.desc}
              </p>
            </div>

            <div className="px-8 pb-8 mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {p.stack.map((s) => {
                  const Icon = iconMap[s];
                  return (
                    <div
                      key={s}
                      className="flex items-center gap-2 px-2 py-1 rounded-sm border border-border-subtle/50 bg-white/5 hover:border-accent/40 transition-all group/icon"
                    >
                      {Icon ? (
                        <Icon className="w-3.5 h-3.5 text-accent/80 group-hover/icon:text-accent group-hover/icon:scale-110 transition-all" />
                      ) : (
                        <div className="w-3.5 h-3.5 border border-accent/20 rounded-xs flex items-center justify-center text-[6px] text-accent">
                          {s.charAt(0)}
                        </div>
                      )}
                      <span className="font-mono text-[9px] uppercase tracking-tighter text-text-secondary group-hover/icon:text-text-primary">
                        {s}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border-subtle/50">
                <div className="flex gap-8">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link font-mono text-[10px] text-text-primary uppercase tracking-[0.2em] flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <span>Visit_Site</span>
                    <span className="text-accent group-hover/link:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </a>
                  {p.demoVid && (
                    <a
                      href={p.demoVid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link font-mono text-[10px] text-text-primary uppercase tracking-[0.2em] flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span>Watch_Demo</span>
                      <span className="text-accent group-hover/link:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
                {/* Visual "ID" footer */}
                <span className="font-mono text-[8px] text-text-secondary/20 hidden sm:block uppercase tracking-widest">
                  PID: {p.name.toUpperCase().replace(".", "_")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
