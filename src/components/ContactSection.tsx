import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, Send } from 'lucide-react';

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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 text-muted hover:text-accent transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function ContactSection() {
  return (
    <>
      <section id="contact" className="reveal-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-hot" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            05 — Contact
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4 max-w-4xl">
          Let's Build Something Extraordinary<span className="text-accent-hot">.</span>
        </h2>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Open for entry-level roles as AI Engineer, LLM Engineer, or Junior
          Security Engineer / SOC Analyst.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Contact info */}
          <div className="space-y-4">
            {/* Email */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Email</p>
                  <a
                    href="mailto:manedipak1110@gmail.com"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    manedipak1110@gmail.com
                  </a>
                </div>
              </div>
              <CopyButton text="manedipak1110@gmail.com" />
            </div>

            {/* Phone */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Phone</p>
                  <a
                    href="tel:+918010466365"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    +91 8010466365
                  </a>
                </div>
              </div>
              <CopyButton text="+918010466365" />
            </div>

            {/* Social */}
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-3">
                Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/DP1110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-ink hover:text-paper hover:border-ink transition-all"
                >
                  <GithubIcon /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dipakmane-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm hover:bg-accent hover:text-paper hover:border-accent transition-all"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-surface border border-border rounded-2xl p-5 flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Location
                </p>
                <p className="text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1.5">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-paper border border-border rounded-xl text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 bg-paper border border-border rounded-xl text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1.5">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-paper border border-border rounded-xl text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-muted mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 bg-paper border border-border rounded-xl text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2026 <span className="font-display font-semibold text-ink">DIPAK MANE</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              All Systems Operational
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 border border-border rounded-full hover:bg-ink hover:text-paper hover:border-ink transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
