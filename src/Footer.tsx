import React from "react";

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "github", href: "https://github.com/Pmaheshwari11" },
  { label: "linkedin", href: "https://www.linkedin.com/in/parth-dudani" },
  { label: "leetcode", href: "https://leetcode.com/u/Pmaheshwari11/" },
  { label: "resume", href: "https://drive.google.com/file/your-id/view" },
];

const Footer: React.FC = () => {
  return (
    <section
      id="Contact"
      className="bg-[#050505] text-text-primary transition-colors duration-500 overflow-hidden relative"
    >
      {/* Decorative pulse glow in the corner */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-border-subtle/30">
          {/* Left: Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                // establish_connection
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.9] mb-8">
              Got a system to build? <br />
              <span className="italic font-normal text-accent opacity-90">
                Let's connect.
              </span>
            </h2>

            <p className="text-lg text-text-secondary max-w-lg mb-12 leading-relaxed">
              Open to full-time roles, freelance projects, and interesting
              architectural problems. Backend, full stack, or DevOps—if it's a
              challenge, I'm in.
            </p>

            <a
              href="mailto:parthdudani11@gmail.com"
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-[10px] text-text-secondary/40 uppercase tracking-widest group-hover:text-accent transition-colors">
                Direct_Email
              </span>
              <span className="text-2xl md:text-3xl font-mono tracking-tighter border-b border-border-subtle group-hover:border-accent transition-all">
                parthdudani11@gmail.com
              </span>
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-center">
            <div className="w-full lg:max-w-xs space-y-2">
              <span className="font-mono text-[10px] tracking-[0.3em] text-text-secondary/30 uppercase mb-6 block lg:text-right">
                // external_nodes
              </span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center px-6 py-5 bg-app-card/30 border border-border-subtle/50 rounded-sm hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] opacity-0 group-hover:opacity-40 transition-opacity uppercase">
                      connect
                    </span>
                    <span className="text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex gap-6 font-mono text-[9px] uppercase tracking-[0.3em] text-text-secondary/40">
            <span className="text-center">© Parth Dudani · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
