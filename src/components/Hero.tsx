import { ArrowDown, MapPin, GraduationCap, Mail, Phone } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/DP1110', icon: <GithubIcon />, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dipakmane-ai', icon: <LinkedinIcon />, external: true },
  { label: 'Email', href: 'mailto:manedipak1110@gmail.com', icon: <Mail size={20} />, external: false },
  { label: 'Phone', href: 'tel:+918010466365', icon: <Phone size={20} />, external: false },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16"
    >
      {/* Swiss accent element */}
      <div className="w-16 h-1.5 bg-accent-hot mb-10" />

      {/* Overline */}
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-6">
        AI / LLM Engineer · Cybersecurity Specialist
      </p>

      {/* Name */}
      <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8">
        DIPAK
        <br />
        MANE<span className="text-accent-hot">.</span>
      </h1>

      {/* Tagline */}
      <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-10">
        Building autonomous AI agents, hardened LLM pipelines, and offline edge
        intelligence — from 54-agent orchestration platforms to air-gapped
        microcontroller bridges.
      </p>

      {/* Info badges */}
      <div className="flex flex-wrap gap-4 mb-12 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} className="text-accent" />
          Pune, Maharashtra, India
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap size={14} className="text-accent" />
          B.Tech AI/ML (Cybersecurity Minor) · JSPM University
        </span>
      </div>

      {/* CTA links */}
      <div className="flex flex-wrap gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-3 text-muted">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>

      {/* Grid decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border/30 hidden lg:block" />
    </section>
  );
}
