import Image from "next/image";
import Header from "@/components/Header";
import { CONFIG } from "@/config";

const projects = [
  {
    title: "Opensense server",
    image: "/opensense_router_optimized.webp",
    description:
      "Een uitgebreid dashboard voor het beheren van online bestellingen en voorraad.",
    tags: ["Opensense", "Pi Hole"],
    link: {
      href: "https://github.com/olavgryson/Portfolio_Olav_Gryson-Modaert",
      label: "Bekijk stappenplan",
    },
  },
  {
    title: "Proxmox server",
    image: "/proxmox_server.webp",
    description:
      "Een krachtige Proxmox virtualisatie server met meerdere services zoals VPN, AI (Ollama), storage (TrueNAS) en deployment (Coolify) op ZFS.",
    tags: ["Proxmox", "Netbrid VPN", "Ollama", "TrueNas", "Coolify", "ZFS"],
  },
  {
    title: "Offsite backup server",
    image: "/backup_server.webp",
    description:
      "Een offsite backup server met redundante UPS systemen voor maximale uptime en data bescherming. Draait op Proxmox met geautomatiseerde backup oplossingen.",
    tags: ["Proxmox", "UPS", "Backup", "Redundancy"],
  },
];

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-body to-body" />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for hire
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Portfolio
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                Olav Gryson-Modaert
              </span>
              <br />
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ik ben een gemotiveerde student in mijn laaste jaar AI en Data Science in Vives Business School
              Kortrijk. Als sinds jongs af ben ik altijd geïnteresseerd in technologie en programmeren.
              Deze website is gemaakt om mijn projecten en werk te presenteren.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                Geniet ervan!
              </span>
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-[#7ab53e] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto"
              >
                Neem contact op
              </a>
            </div>
          </div>
        </section>

        {/* GRYVE */}
        <section id="gryve" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-slate-100 md:flex group hover:shadow-2xl transition-shadow duration-300">
              <div className="md:w-1/2 bg-white relative min-h-[300px] flex items-center justify-center overflow-hidden p-8">
                <Image
                  src="/gryve_logo.png"
                  alt="Gryve Logo"
                  width={480}
                  height={480}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">GRYVE</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  GRYVE biedt maatwerkoplossingen voor cloud, cybersecurity en AI. Wij leveren veilige,
                  transparante cloudoplossingen zonder vendor lock-in, cybersecurity trainingen en audits, en
                  slimme automatiseringstools.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://gryve.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Bezoek de website
                    <ExternalIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gryve/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-[#013360]"
                    aria-label="Gryve LinkedIn"
                  >
                    <LinkedInIcon className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* olavano */}
        <section id="olavano" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-slate-100 md:flex group hover:shadow-2xl transition-shadow duration-300">
              <div className="md:w-1/2 bg-white relative min-h-[300px] flex items-center justify-center overflow-hidden p-8">
                <Image
                  src="/olavano_logo.webp"
                  alt="Olavano Logo"
                  width={480}
                  height={480}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hoofdproject</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">olavano</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  olavano is een platform voor de verkoop van gaming pc&apos;s. Wij leveren kwalitatief hoogstaande
                  gaming pc&apos;s met een uniek design, op maat samengesteld voor elke gamer.
                </p>
                <div>
                  <a
                    href="https://olavano.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Bezoek de website
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Admin Panel Focus</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">olavano.be</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Achter de schermen van olavano schuilt een georganiseerde admin structuur. Hoewel de frontend
                bewust minimalistisch is gehouden, drijft de complexe logica de volledige applicatie aan.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 aspect-video max-w-3xl mx-auto hover:scale-[1.01] transition-all duration-300">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gsvS2M5knOw?si=qU5GSMhVIgu3uyje"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Homelab projecten */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Homelab Projecten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col group"
                >
                  <div className="h-48 bg-slate-100 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-md border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-slate-600 hover:text-primary transition-colors"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        {project.link.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-footer text-slate-400 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Heb je een vraag over een project of ben je een gemotiveerde student die info wil over zelfstandig te
            beginnen? Neem dan gerust contact op!
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
              Bedankt voor uw interesse!
            </span>
          </p>
          <a
            href={`mailto:${CONFIG.email}`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-primary rounded-full hover:bg-[#7ab53e] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-12"
          >
            Stuur een bericht
          </a>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 {CONFIG.name}. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a href={CONFIG.github} target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition-colors" aria-label="GitHub">
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
