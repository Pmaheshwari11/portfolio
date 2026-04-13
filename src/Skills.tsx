import React from "react";

interface SkillGroup {
  domain: string;
  title: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    domain: "frontend",
    title: "Frontend Systems",
    items: ["React.js", "Next.js", "HTML5 · CSS3", "Tailwind CSS", "Socket.io", "REST APIs"],
  },
  {
    domain: "backend",
    title: "Backend Systems",
    items: ["Node.js", "Express.js", "Flask", "Zod validation", "Jest testing"],
  },
  {
    domain: "devops · cloud",
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, CloudFront)", "Docker", "GitHub Actions", "Linux · Bash"],
  },
  {
    domain: "data · languages",
    title: "Data & Foundations",
    items: ["MongoDB · MySQL", "JavaScript (ES6+)", "Python · Java", "Git · Postman", "Vercel · Render"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="Skills" className="relative">
      {/* Background architectural grid hint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-size-[20px_20px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-20 relative">
        <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
          02 // Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
          What I <span className="italic font-normal text-accent">Work With</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {SKILL_GROUPS.map((group) => (
          <div 
            key={group.domain} 
            className="flex flex-col p-6 bg-app-card border border-border-subtle rounded-sm hover:border-accent/40 transition-all duration-500 group relative"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Domain Label - Styled like a namespace */}
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/60 mb-1 block">
              {group.domain}
            </span>
            
            {/* Group Title */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-8 pb-3 border-b border-border-subtle group-hover:border-accent/20 transition-colors">
              {group.title}
            </h3>

            {/* Skills List */}
            <ul className="flex flex-col gap-4 relative">
              {group.items.map((item) => (
                <li 
                  key={item} 
                  className="font-mono text-[11px] text-text-secondary flex items-center gap-3 group/item transition-colors hover:text-text-primary"
                >
                  <span className="h-px w-3 bg-border-subtle group-hover/item:w-5 group-hover/item:bg-accent transition-all duration-300" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-border-subtle group-hover:bg-accent transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;