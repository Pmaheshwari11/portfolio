import React from "react";

interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  location: string;
  problem: string;
  bullets: string[];
  stack: string[];
  link?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "Aug 2025 – Present",
    role: "Full Stack Developer",
    company: "NexDesk",
    location: "Freelance · Remote",
    problem:
      "existing tools were too complex for the shop owner to use daily — dues and reminders still ran on memory and manual follow-up",
    bullets: [
      "Built the data model around the actual retail workflow — purchases, sales, dues, vendor cycles — before writing a single line of API code.",
      "Running in production for 6+ months — 350+ invoices, 200+ customers, automated WhatsApp reminders with per-customer frequency control.",
      "Set up a CI/CD pipeline with GitHub Actions that runs Zod-validated API tests and only deploys when everything passes — so nothing broken ships.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zod",
      "Jest",
      "GitHub Actions",
    ],
    link: "https://nexdesk-pm11.vercel.app/",
  },
  {
    date: "Dec 2024 – Feb 2025",
    role: "Software Engineer Intern",
    company: "HealthMudraa",
    location: "Bengaluru",
    problem:
      "a growing platform held together by a monolithic React app that was breaking under its own weight",
    bullets: [
      "Broke the monolith apart — migrated to Next.js with SSR components, which cut page load time by 30% and made the codebase actually maintainable.",
      "Traced and fixed broken auth flows end to end (OTP, redirects, password reset), bringing login success rate up to 90%.",
      "Worked in Agile sprints with the backend team to wire up REST APIs across the platform.",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://healthmudraa.com/",
  },
  {
    date: "Nov 2024 – May 2025",
    role: "Full Stack Developer",
    company: "ResolveHub",
    location: "Freelance · Remote",
    problem:
      "every complaint, payment, and warranty tracked on paper — no visibility, no accountability, no process",
    bullets: [
      "Replaced the paper trail with a centralized platform — complaints come in, get assigned, tracked, and closed with full history attached.",
      "Built automated status-based notifications so customers stop calling to ask for updates, and the team stops manually following up.",
      "Designed role-based admin views for financial tracking and inventory so the business could finally see what was happening in real time.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://complaint-pm11.vercel.app/",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="Experience" className="relative">
      <div className="flex flex-col gap-4 mb-20 relative">
        <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
          03 // Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
          Where I've{" "}
          <span className="italic font-normal text-accent">Worked</span>
        </h2>
      </div>

      <div className="relative border-l border-border-subtle/50 ml-2 md:ml-4 pl-8 md:pl-16 flex flex-col gap-24">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="relative group">
            {/* Timeline Dot with Pulse Effect */}
            <div className="absolute -left-[36.5px] md:-left-[68.5px] top-2">
              <div className="w-4 h-4 rounded-sm bg-app-bg border border-accent flex items-center justify-center transition-all group-hover:rotate-45">
                <div className="w-1.5 h-1.5 bg-accent" />
              </div>
              <div className="absolute inset-0 w-4 h-4 bg-accent/20 blur-sm rounded-full group-hover:animate-ping" />
            </div>

            <div className="flex flex-col gap-6">
              {/* Header Meta */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest">
                    {exp.date}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest opacity-60">
                    {exp.company} // {exp.location}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
              </div>

              {/* Problem Definition Block */}
              <div className="bg-app-card border border-border-subtle p-5 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0.5 h-full bg-accent" />
                <p className="font-mono text-[11px] leading-relaxed">
                  <span className="text-accent font-bold mr-3 uppercase tracking-tighter">
                    [!] root_cause:
                  </span>
                  <span className="text-text-secondary italic">
                    {exp.problem}
                  </span>
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-4 max-w-3xl">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed flex gap-4 group/item"
                  >
                    <span className="text-accent font-mono text-xs opacity-40 group-hover/item:opacity-100 transition-opacity">
                      0{j + 1}
                    </span>
                    <span className="border-l border-border-subtle/30 pl-4">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack & Link */}
              <div className="flex flex-wrap items-center gap-6 mt-4 pt-6 border-t border-border-subtle/30">
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] text-text-primary/70 bg-app-card border border-border-subtle px-2.5 py-1 rounded-sm uppercase tracking-tighter hover:border-accent/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-accent hover:text-text-primary flex items-center gap-2 transition-all uppercase tracking-[0.2em] ml-auto"
                  >
                    View Instance <span className="text-lg">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
