const PROFILE_CARDS = [
  {
    title: 'Profile',
    text: 'I am Dipak Mane, specializing in building multi-agent LLM systems, GraphRAG retrieval pipelines, and automation workflows using LangChain, LangGraph, Mem0, and n8n. I rigorously benchmark pipelines with RAGAS and engineer offline local intelligence with Ollama on constrained silicon, including creating an air-gapped LLM bridge on an ESP8266 microcontroller.',
  },
  {
    title: 'Security Focus',
    text: 'With a formal minor in Cybersecurity and hands-on laboratory experience across Kali Linux, Burp Suite, Nmap, Metasploit, Nessus, and Wireshark, I architect systems with defense-in-depth principles: mitigating prompt injection, SSRF, and IDOR vulnerabilities.',
  },
  {
    title: 'Research',
    text: 'Conducted local LLM experiments and parameter-efficient QLoRA fine-tuning of compact architectures (SmolLM2 and Qwen2.5-0.5B) strictly within a 4 GB VRAM envelope. Deployed local multi-agent stacks on Kali Linux utilizing Hermes 3 and Claude Code integrated over the Model Context Protocol (MCP).',
  },
];

const EDUCATION = [
  {
    degree: 'B.Tech in AI & ML',
    detail: 'Minor: Cybersecurity',
    school: 'JSPM University, Pune',
    period: 'Aug 2024 – Sep 2026',
  },
  {
    degree: 'Diploma in Computer Engineering',
    detail: '',
    school: "G.S.P.M.'s Gramin Science Vocational College, Nanded",
    period: '2021 – 2023',
  },
];

const CERTIFICATIONS = [
  'Cisco: Ethical Hacker',
  'Cisco: Network Defense',
  'Cisco: Cyber Threat Management',
  'Cisco: Networking Basics',
  'Deloitte Australia: Cyber Job Simulation',
  '15+ Cisco & Google Cloud Certifications',
];

export function AboutSection() {
  return (
    <section id="about" className="reveal-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent-hot" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          01 — About
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 max-w-4xl">
        Engineering Autonomous AI Agents &amp; Hardened Edge Systems
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left — Profile cards */}
        <div className="space-y-6">
          {PROFILE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-display font-semibold text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right — Education & Certs */}
        <div className="space-y-6">
          {/* Education */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-semibold text-lg mb-6">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative pl-5 border-l-2 border-accent">
                  <p className="font-display font-semibold text-[15px]">
                    {edu.degree}
                  </p>
                  {edu.detail && (
                    <p className="text-accent text-sm font-mono">{edu.detail}</p>
                  )}
                  <p className="text-muted text-sm mt-1">{edu.school}</p>
                  <p className="text-muted/60 text-xs font-mono mt-0.5">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-semibold text-lg mb-4">Certifications</h3>
            <ul className="space-y-2.5">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-2.5 text-[15px] text-muted"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {cert}
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-[15px] font-semibold text-accent-hot">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-hot shrink-0" />
                In Progress: CEH &amp; OSCP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
