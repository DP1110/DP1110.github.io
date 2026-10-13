import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          DM<span className="text-accent-hot">.</span>
        </a>

        {/* Desktop Links + Theme Switcher */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Theme Switcher Pill in Navbar */}
          <div className="pl-2 border-l border-border">
            <ThemeSwitcher inline={true} />
          </div>

          <a
            href="https://github.com/DP1110"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-ink text-paper text-xs font-mono uppercase tracking-widest rounded-full hover:bg-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher inline={true} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-ink border border-border rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-border px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block font-mono text-sm uppercase tracking-widest text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="https://github.com/DP1110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-ink text-paper text-xs font-mono uppercase tracking-widest rounded-full"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
