import React from "react";

const INTERESTS = [
  "System Design",
  "Backend Arch",
  "DevOps",
  "DSA",
  "Distributed Systems",
];

const About: React.FC = () => {
  return (
    <section id="About" className="relative">
      {/* Background Decor: Vertical structural line */}
      <div className="absolute left-0 top-0 w-px h-full bg-linear-to-b from-transparent via-border-subtle to-transparent hidden lg:block" />

      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-16 relative">
        <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
          01 // Background
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
          About <span className="italic font-normal text-accent">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Main Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-text-secondary leading-relaxed">
          <p className="text-xl text-text-primary font-semibold tracking-tight">
            I'm Parth — a final-year CS student at Vellore Institute of
            Technology graduating in 2026.
          </p>

          <div className="space-y-6">
            <p>
              I like building complete systems — but what I'm most drawn to is
              what sits beneath the surface. The data flows, the schema
              decisions, the business logic that makes everything actually work.
              I like understanding how a product{" "}
              <em className="text-accent italic font-medium">works</em>, not
              just how it looks.
            </p>
            <p>
              I've shipped real software for real users —{" "}
              <span className="text-text-primary font-medium border-b border-accent/30">
                NexDesk
              </span>{" "}
              has been running in production for 6+ months processing 350+
              transactions.
              <span className="text-text-primary font-medium ml-1 border-b border-accent/30">
                ResolveHub
              </span>{" "}
              replaced pen-and-paper complaint tracking for a business handling
              50+ monthly service requests.
            </p>
          </div>

          {/* Competitive Coding Highlight - Designed to look like a log entry */}
          <div className="text-sm border-l border-accent/50 pl-6 py-4 bg-app-card/30 font-mono">
            <span className="text-accent/60 block mb-1 text-[10px] uppercase tracking-widest">
              // performance.log
            </span>
            <p className="italic text-text-secondary/80">
              Top 2% on LeetCode globally (350+ problems), Codeforces rated
              1126, and formerly on the Technical Team at VIT's Igniter's Club.
            </p>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <InfoBlock
              label="currently"
              value="B.Tech CSE · VIT"
              sub="Graduating 2026 · GPA 8.47"
            />
            <InfoBlock
              label="location"
              value="India"
              sub="Open to remote & relocation"
            />
          </div>

          <div className="flex flex-col gap-4 p-6 bg-app-card border border-border-subtle rounded-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
              // tech_interests
            </span>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] bg-accent/10 text-text-primary border border-accent/20 px-3 py-1.5 rounded-sm uppercase tracking-tighter hover:bg-accent hover:text-app-bg transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-10">
            {/* GitHub Button */}
            <a
              href="https://github.com/Pmaheshwari11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 flex-1 border border-border-subtle bg-app-card/30 text-text-secondary rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300 flex items-center gap-3 group"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                github ↗
              </span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/parth-dudani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 flex-1 border border-border-subtle bg-app-card/30 text-text-secondary rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300 flex items-center gap-3 group"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                linkedin ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) => (
  <div className="flex flex-col gap-2 group">
    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent/50 group-hover:text-accent transition-colors">
      {label}
    </span>
    <div className="flex flex-col border-l border-border-subtle pl-4 group-hover:border-accent transition-colors">
      <span className="text-sm font-bold text-text-primary uppercase tracking-wider">
        {value}
      </span>
      <span className="text-[11px] text-text-secondary/60 font-mono mt-1">
        {sub}
      </span>
    </div>
  </div>
);

export default About;
