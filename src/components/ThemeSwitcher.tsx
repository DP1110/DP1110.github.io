import { useState, useEffect, useRef } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, type ThemeId } from '../context/ThemeContext';

export function ThemeSwitcher({ inline = false }: { inline?: boolean }) {
  const { currentTheme, setTheme, nextTheme, themeConfig, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard shortcut: Press 'T' or 't' to cycle themes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        nextTheme();
        const next = allThemes[(allThemes.findIndex((t) => t.id === currentTheme) + 1) % allThemes.length];
        showToast(`Theme: ${next.icon} ${next.name}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTheme, nextTheme, allThemes]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  const handleSelect = (id: ThemeId) => {
    setTheme(id);
    setIsOpen(false);
    const chosen = allThemes.find((t) => t.id === id);
    if (chosen) {
      showToast(`Activated: ${chosen.icon} ${chosen.name}`);
    }
  };

  return (
    <div className={`relative ${inline ? 'inline-block' : ''}`} ref={dropdownRef}>
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-ink text-paper px-4 py-2 rounded-full text-xs font-mono shadow-2xl flex items-center gap-2 border border-border animate-fade-in pointer-events-none">
          <Sparkles size={14} className="text-accent" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-mono uppercase tracking-wider bg-surface/80 hover:bg-surface hover:border-accent transition-all duration-200"
        title="Change Theme (Shortcut: Press 'T')"
      >
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: themeConfig.accentColor }} />
        <span className="font-semibold text-ink">{themeConfig.badge}</span>
        <Palette size={13} className="text-muted ml-0.5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            inline ? 'right-0 top-full mt-2' : 'bottom-full right-0 mb-3'
          } w-80 bg-surface border border-border rounded-2xl shadow-2xl p-3 z-50 animate-scale-up`}
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-border mb-2">
            <div>
              <p className="font-display font-semibold text-xs text-ink uppercase tracking-wider">
                Select Visual Identity
              </p>
              <p className="text-[10px] text-muted font-mono">Press 'T' anytime to cycle</p>
            </div>
            <button
              onClick={nextTheme}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-ink/5 hover:bg-ink/10 text-accent transition-colors"
            >
              Cycle →
            </button>
          </div>

          <div className="space-y-1.5">
            {allThemes.map((theme) => {
              const active = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 border ${
                    active
                      ? 'border-accent bg-accent/5 shadow-sm'
                      : 'border-transparent hover:bg-ink/5 hover:border-border'
                  }`}
                >
                  {/* Theme Color Preview Circle */}
                  <div
                    className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs shadow-inner border border-black/10"
                    style={{ backgroundColor: theme.bgColor, color: theme.mode === 'dark' ? '#fff' : '#000' }}
                  >
                    {theme.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-display font-semibold text-xs text-ink truncate">
                        {theme.name}
                      </p>
                      {active && <Check size={13} className="text-accent shrink-0" />}
                    </div>
                    <p className="text-[10px] text-muted leading-tight mt-0.5 truncate">
                      {theme.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function FloatingThemeWidget() {
  const { nextTheme, themeConfig } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
      <div className="bg-surface/90 backdrop-blur-md border border-border rounded-full p-1 shadow-lg flex items-center gap-1.5 pl-3">
        <span className="text-xs font-mono text-muted">Theme:</span>
        <ThemeSwitcher inline={false} />
        <button
          onClick={nextTheme}
          className="p-1.5 rounded-full hover:bg-ink/10 text-muted hover:text-ink transition-colors"
          title="Next theme (Shortcut: T)"
        >
          <Palette size={14} />
        </button>
      </div>
    </div>
  );
}
