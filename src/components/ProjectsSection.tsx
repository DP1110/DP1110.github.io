import { ExternalLink, CheckCircle2 } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface Project {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  metrics: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Embedded & IoT',
    title: 'CodeMesh: Offline LLM Bridge',
    subtitle: 'Air-gapped ESP8266 WiFi Access Point → Ollama',
    description:
      'Offline hardware bridge acting as standalone WiFi AP and HTTP gateway. Routes browser chat from mobile devices to air-gapped Ollama LLM with zero internet dependency.',
    bullets: [
      'Round-trips Ollama context array for conversational memory without resending full transcript',
      '6 KB strict context capping to prevent buffer overrun on RAM-limited ESP8266',
      'Companion offline Monaco Code Editor using FastAPI and React',
      '20-section academic synopsis covering hardware architecture',
    ],
    tech: ['ESP8266', 'Ollama', 'Arduino C++', 'FastAPI', 'React', 'Monaco Editor'],
    github: 'https://github.com/DP1110/Offline-LLM-Bridge',
    metrics: [
      { label: 'Internet', value: '0% Offline' },
      { label: 'Context Cap', value: '6 KB RAM' },
      { label: 'Hardware', value: 'ESP8266 WiFi' },
      { label: 'Interface', value: 'Monaco/Web' },
    ],
  },
  {
    number: '02',
    category: 'AI & LLM',
    title: 'AgentMesh: Hierarchical Multi-Agent System',
    subtitle: '54-Agent orchestration with GraphRAG, Mem0, RAGAS',
    description:
      '54-agent hierarchical orchestration platform for complex task decomposition using GraphRAG, Mem0, and RAGAS evaluation benchmarks.',
    bullets: [
      '54 specialized AI agents in hierarchical supervisor-worker topologies',
      'GraphRAG for contextual entity-relationship traversal',
      'Mem0 persistent memory for long-term agent state recall',
      'RAGAS automated scoring for faithfulness and answer relevancy',
    ],
    tech: ['GraphRAG', 'Mem0', 'RAGAS', 'n8n', 'Python', 'LangChain', 'LangGraph'],
    github: 'https://github.com/DP1110',
    metrics: [
      { label: 'Agents', value: '54 Hierarchical' },
      { label: 'Memory', value: 'Mem0 Vector' },
      { label: 'Evaluation', value: 'RAGAS Metric' },
      { label: 'Pipeline', value: 'n8n Cloud' },
    ],
  },
  {
    number: '03',
    category: 'AI & LLM',
    title: 'Local AI Agent Stack on Kali Linux',
    subtitle: 'Ollama + Hermes 3 + Claude Code via MCP',
    description:
      'Entirely local AI agent dev stack on Kali Linux interconnecting Ollama Hermes 3 with Claude Code through Model Context Protocol.',
    bullets: [
      'Local Hermes 3 reasoning model via Ollama',
      'MCP servers for system tooling inspection',
      '4 GB VRAM ceiling for efficient inference',
    ],
    tech: ['Kali Linux', 'Ollama', 'Hermes 3', 'MCP Protocol', 'Claude Code', 'Shell'],
    github: 'https://github.com/DP1110',
    metrics: [
      { label: 'OS', value: 'Kali Linux' },
      { label: 'Model', value: 'Hermes 3' },
      { label: 'Protocol', value: 'MCP Gateway' },
      { label: 'Privacy', value: '100% On-Premise' },
    ],
  },
  {
    number: '04',
    category: 'Cybersecurity',
    title: 'Wireless Security Lab & RF Audit',
    subtitle: 'WPA/WPS analysis, evil twin testing, ESP8266 WiFi scanner',
    description:
      'Isolated security lab for wireless attack analysis, encryption weakness assessment, and real-time MCU monitoring.',
    bullets: [
      'WPA and WPS security analysis in authorized lab',
      'Evil twin AP simulations and deauth resistance studies',
      'ESP8266 WiFi scanner dashboard displaying RF parameters',
    ],
    tech: ['Kali Linux', 'Airgeddon', 'Reaver', 'ESP8266', 'Wireshark', 'Aircrack-ng'],
    github: 'https://github.com/DP1110',
    metrics: [
      { label: 'Lab', value: 'Kali Linux' },
      { label: 'Protocols', value: 'WPA2/WPS' },
      { label: 'Scanner', value: 'ESP8266' },
      { label: 'Analysis', value: 'Deauth & Evil Twin' },
    ],
  },
  {
    number: '05',
    category: 'Cybersecurity',
    title: 'LinkGuard & ReplyGuard',
    subtitle: 'SSRF, IDOR, and prompt injection hardening specs',
    description:
      'Complete system architecture documents for two AI micro-SaaS apps with multi-layered defense mechanisms against LLM-era threats.',
    bullets: [
      'SSRF defense controls in link previewing pipeline',
      'IDOR access token validation',
      'Multi-stage prompt sanitization barriers',
      'OWASP Top 10 for LLMs threat modeling matrices',
    ],
    tech: ['Threat Modeling', 'SSRF Hardening', 'IDOR Defense', 'FastAPI', 'Python'],
    github: 'https://github.com/DP1110',
    metrics: [
      { label: 'Apps', value: 'LinkGuard/ReplyGuard' },
      { label: 'Hardening', value: 'SSRF & IDOR' },
      { label: 'LLM Defense', value: 'Prompt Sanitization' },
      { label: 'Framework', value: 'OWASP LLM 10' },
    ],
  },
  {
    number: '06',
    category: 'AI & LLM',
    title: 'AI WhatsApp Business Bot',
    subtitle: 'Production conversational AI for business automation',
    description:
      'Production WhatsApp assistant for business ops with real-time QA, scheduling, and FAQ automation.',
    bullets: [
      'Meta WhatsApp Cloud API via secure webhook listeners',
      'Context-aware conversational routing with fallback escalation',
      'Python FastAPI backend for webhook ingestion',
    ],
    tech: ['Python', 'FastAPI', 'WhatsApp API', 'Ollama/OpenAI', 'Webhooks'],
    github: 'https://github.com/DP1110',
    metrics: [
      { label: 'Integration', value: 'WhatsApp Cloud' },
      { label: 'Backend', value: 'FastAPI/Python' },
      { label: 'Response', value: '< 900ms' },
      { label: 'Automation', value: '24/7' },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="reveal-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent-hot" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          03 — Projects
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 max-w-4xl">
        Selected Engineering Work
      </h2>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div
            key={project.number}
            className="bg-surface border border-border rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left — Details */}
              <div className="lg:col-span-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-muted">
                    {project.number}
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-ink/5 text-ink/70 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-muted font-mono text-sm mb-4">
                  {project.subtitle}
                </p>
                <p className="text-muted leading-relaxed text-[15px] mb-5">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-ink/80"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 text-accent shrink-0"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-ink/5 text-ink/70 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200"
                >
                  <GithubIcon />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Right — Metrics */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-paper border border-border rounded-xl p-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted mb-1">
                        {m.label}
                      </p>
                      <p className="font-display font-semibold text-sm">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
