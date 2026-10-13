import { Brain, ShieldCheck, Lock, Wifi, Server, Code2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface SkillCard {
  icon: ReactNode;
  title: string;
  subtitle: string;
  tags: string[];
  accent: string;
}

const SKILLS: SkillCard[] = [
  {
    icon: <Brain size={24} />,
    title: 'AI & LLM Engineering',
    subtitle: 'Agents · GraphRAG · LangGraph · Mem0 · Fine-Tuning',
    tags: ['LangChain', 'LangGraph', 'GraphRAG', 'Mem0', 'RAGAS', 'Ollama', 'MCP Protocol', 'QLoRA'],
    accent: 'border-t-blue-500',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Cybersecurity & Ethical Hacking',
    subtitle: 'Penetration Testing · Network Defense · Vulnerability Assessment',
    tags: ['Kali Linux', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Nessus', 'Airgeddon'],
    accent: 'border-t-red-500',
  },
  {
    icon: <Lock size={24} />,
    title: 'AI Security & Hardening',
    subtitle: 'Prompt Injection Defense · SSRF · IDOR · Threat Modeling',
    tags: ['Prompt Injection Defense', 'SSRF Hardening', 'IDOR Prevention', 'Threat Modeling'],
    accent: 'border-t-emerald-500',
  },
  {
    icon: <Wifi size={24} />,
    title: 'Embedded Systems & IoT',
    subtitle: 'ESP8266 · Arduino C++ · Hardware Bridges · WiFi Networking',
    tags: ['ESP8266', 'Arduino C++', 'WiFi Access Points', 'HTTP Bridges', 'Hardware Sensors'],
    accent: 'border-t-amber-500',
  },
  {
    icon: <Server size={24} />,
    title: 'Backend & Cloud',
    subtitle: 'FastAPI · n8n · Oracle Cloud · Cloudflare Tunnels · Docker',
    tags: ['FastAPI', 'React', 'Node.js', 'n8n Workflows', 'Oracle Cloud ARM', 'Cloudflare Tunnel', 'Docker'],
    accent: 'border-t-violet-500',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Languages & Systems',
    subtitle: 'Python · C++ · JavaScript · Java · Bash',
    tags: ['Python', 'C++ (Arduino)', 'JavaScript/TypeScript', 'Java', 'Shell/Bash', 'Git'],
    accent: 'border-t-slate-500',
  },
];

export function SkillsSection() {
  return (
    <section id="expertise" className="reveal-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent-hot" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          02 — Expertise
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 max-w-4xl">
        Technical Architecture &amp; Core Domains
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className={`bg-surface border border-border border-t-4 ${skill.accent} rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 group`}
          >
            <div className="text-ink/60 mb-4 group-hover:text-accent transition-colors">
              {skill.icon}
            </div>
            <h3 className="font-display font-semibold text-xl mb-1">
              {skill.title}
            </h3>
            <p className="text-muted text-sm mb-5">{skill.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-ink/5 text-ink/80 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
