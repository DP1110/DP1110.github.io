import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId = 'swiss' | 'cyber' | 'obsidian' | 'brutalist' | 'blueprint';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  badge: string;
  icon: string;
  accentColor: string;
  bgColor: string;
  mode: 'light' | 'dark';
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'swiss',
    name: 'Swiss Editorial',
    tagline: 'International Typographic Style · Paper & Ink',
    badge: '🇨🇭 SWISS',
    icon: '🇨🇭',
    accentColor: '#dc2626',
    bgColor: '#fafaf9',
    mode: 'light',
  },
  {
    id: 'cyber',
    name: 'Cyber Defense HUD',
    tagline: 'Kali Linux Terminal · SOC Telemetry & Green Phosphor',
    badge: '🛡️ CYBER',
    icon: '🛡️',
    accentColor: '#00ff66',
    bgColor: '#070b14',
    mode: 'dark',
  },
  {
    id: 'obsidian',
    name: 'Modern AI Obsidian',
    tagline: 'Linear & Vercel Aesthetic · Electric Violet & Glass',
    badge: '✨ OBSIDIAN',
    icon: '✨',
    accentColor: '#a855f7',
    bgColor: '#050508',
    mode: 'dark',
  },
  {
    id: 'brutalist',
    name: 'Neo-Brutalist Tech',
    tagline: 'Bold Solid Borders · Hard Shadows & Raw Contrast',
    badge: '⚡ BRUTALIST',
    icon: '⚡',
    accentColor: '#f59e0b',
    bgColor: '#fffdf5',
    mode: 'light',
  },
  {
    id: 'blueprint',
    name: 'Technical Blueprint',
    tagline: 'Engineering CAD Grid · Monospace Schematics',
    badge: '📐 BLUEPRINT',
    icon: '📐',
    accentColor: '#64ffda',
    bgColor: '#0a192f',
    mode: 'dark',
  },
];

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  nextTheme: () => void;
  themeConfig: ThemeConfig;
  allThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('dipak_theme') as ThemeId;
    if (saved && THEMES.some((t) => t.id === saved)) {
      return saved;
    }
    return 'swiss';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('dipak_theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeId) => {
    setCurrentTheme(theme);
  };

  const nextTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setCurrentTheme(THEMES[nextIndex].id);
  };

  const themeConfig = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, nextTheme, themeConfig, allThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
