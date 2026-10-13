const WORK = [
  {
    role: 'Freelance AI Agent & Automation Developer',
    company: 'Self-Employed',
    status: 'Active',
    platforms: 'Upwork · Fiverr · Contra · PeoplePerHour',
    bullets: [
      'Build and deploy LLM agents and n8n automation workflows using LangChain, LangGraph, and Mem0, hosted on n8n Cloud and Oracle Cloud ARM VM behind Cloudflare Tunnel',
      'Debug production workflow issues including static data loss, binary data handling, and GitHub token scope errors',
      'Run local model experiments with Ollama and QLoRA fine-tuning of SmolLM2 and Qwen2.5-0.5B within 4 GB VRAM limit',
    ],
    tags: ['LangChain', 'LangGraph', 'Mem0', 'n8n Cloud', 'Oracle Cloud ARM', 'Cloudflare Tunnel'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Patil Photography & Others',
    status: 'Completed',
    platforms: '',
    bullets: [
      'Built responsive photography portfolios and e-commerce platforms for commercial clients',
    ],
    tags: ['React', 'JavaScript', 'Responsive Design'],
  },
];

const CERTS = [
  'Cisco: Ethical Hacker',
  'Cisco: Network Defense',
  'Cisco: Cyber Threat Management',
  'Cisco: Networking Basics',
  'Deloitte Australia: Cyber Job Simulation',
  '15+ Cisco & Google Cloud Certifications (GenAI, Cloud Security, IoT)',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="reveal-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent-hot" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          04 — Experience
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 max-w-4xl">
        Professional Experience &amp; Credentials
      </h2>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left — Work */}
        <div className="lg:col-span-7 space-y-6">
          {WORK.map((job) => (
            <div
              key={job.role}
              className="bg-surface border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display font-semibold text-lg">
                    {job.role}
                  </h3>
                  <p className="text-muted text-sm">{job.company}</p>
                  {job.platforms && (
                    <p className="text-muted/60 text-xs font-mono mt-1">
                      {job.platforms}
                    </p>
                  )}
                </div>
                <span
                  className={`shrink-0 px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full ${
                    job.status === 'Active'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-ink/5 text-muted'
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <ul className="space-y-2 mb-5">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-ink/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-ink/5 text-ink/70 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right — Certifications */}
        <div className="lg:col-span-5">
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 sticky top-24">
            <h3 className="font-display font-semibold text-lg mb-6">
              Certifications
            </h3>
            <ul className="space-y-3">
              {CERTS.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 text-[15px] text-ink/80"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {cert}
                </li>
              ))}
              <li className="flex items-start gap-3 text-[15px] font-semibold text-accent-hot">
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
