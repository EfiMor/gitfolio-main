import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            GITFOLIO
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Spelintro Section */}
        <section className="py-20 md:py-32 space-y-8">
          <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400"/>
            SPELPROJEKT 3 — HIS 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            VOICEBOX <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      FIENDE AI
            </span>
          </h1>
          <p className="text-lg text-cyan-100/70 max-w-2xl leading-relaxed border-l-2 border-fuchsia-500/50 pl-6">
            Ett co-op smygspel där spelarna måste återta sina röstlådor från farliga fiender.
            Jag ansvarade för all fiende-AI: beteendeträd, A*-pathfinding och integration
            med animationer och ljudsystem.
          </p>
          {/* GIF från spelet */}
          <div className="relative w-full aspect-video border border-cyan-900/30 overflow-hidden">
            <Image src={`${basePath}/gameplay.gif`} alt="VOICEBOX gameplay" fill className="object-cover"/>
          </div>
          {/* Gruppssammansättning */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              {roll: "Programmering", namn: "Du + 1 till"},
              {roll: "2D-grafik", namn: "1 grafiker"},
              {roll: "Musik/ljud", namn: "1 musiker"},
              {roll: "Game writing", namn: "1 writer"},
            ].map(({roll, namn}) => (
                <div key={roll} className="p-4 border border-cyan-900/30 bg-cyan-950/10">
                  <p className="text-xs text-cyan-600 tracking-widest uppercase">{roll}</p>
                  <p className="text-sm text-cyan-200 mt-1">{namn}</p>
                </div>
            ))}
          </div>
        </section>

        {/*  Graph */}
        <section id="ai" className="py-20 space-y-12 border-t border-cyan-900/30">
          <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400">
            // FIENDE_AI
          </h2>

          {/* Liten fiende */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-cyan-300 tracking-widest">Liten fiende — beteendeträd</h3>
            <div className="p-6 border border-cyan-900/30 bg-[#0a0a1a] overflow-x-auto">
              <BehaviorTreeNode label="Selector (rot)" color="purple">
                <BehaviorTreeNode label="Sequence: jaga" color="fuchsia">
                  <BehaviorTreeNode label="Ser spelare?"/>
                  <BehaviorTreeNode label="Förfölj"/>
                  <BehaviorTreeNode label="Skicka ljud­signal"/>
                </BehaviorTreeNode>
                <BehaviorTreeNode label="Sequence: undersök" color="fuchsia">
                  <BehaviorTreeNode label="Hör ljud?"/>
                  <BehaviorTreeNode label="Gå till ljud"/>
                </BehaviorTreeNode>
                <BehaviorTreeNode label="Patrullera" color="cyan"/>
              </BehaviorTreeNode>
            </div>
            {/* GIF på liten fiende */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-cyan-600 tracking-widest uppercase mb-2">Patrullering</p>
                <div
                    className="aspect-video border border-cyan-900/30 bg-cyan-950/10 flex items-center justify-center text-cyan-700 text-xs">
                  [ patrol.gif ]
                </div>
              </div>
              <div>
                <p className="text-xs text-cyan-600 tracking-widest uppercase mb-2">Förföljning</p>
                <div
                    className="aspect-video border border-cyan-900/30 bg-cyan-950/10 flex items-center justify-center text-cyan-700 text-xs">
                  [ chase.gif ]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Samarbete */}
        <section id="samarbete" className="py-20 space-y-8 border-t border-cyan-900/30">
          <h2 className="text-2xl font-bold tracking-widest text-cyan-400">
            // SAMARBETE_MED_ANDRA
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                roll: "2D-grafiker",
                bidrag: "Animationer för elefantspindeln",
                mitt: "Integrerade animationer i beteendenoderna, synkade 'fånga spelare'-noden med animation state machine",
                color: "fuchsia" as const,
              },
              {
                roll: "Musiker",
                bidrag: "Ljud­effekter för fiender och mekaniker",
                mitt: "Lade till Unity Events i hylla-mekaniken och fiende-noderna så musikern kunde koppla på ljud utan att ändra min kod",
                color: "cyan" as const,
              },
              {
                roll: "Speltestare",
                bidrag: "Feedback efter speltest vecka 19",
                mitt: "Justerade synvinkel, hörseldistans och buggar i 'undersök ljud'-noden baserat på testfeedback",
                color: "purple" as const,
              },
            ].map(({roll, bidrag, mitt, color}) => (
                <div key={roll} className={`p-6 border bg-[#0a0a1a] space-y-4 ${
                    color === "fuchsia" ? "border-fuchsia-900/30" :
                        color === "purple" ? "border-purple-900/30" : "border-cyan-900/30"
                }`}>
                  <p className={`text-xs font-bold tracking-widest uppercase ${
                      color === "fuchsia" ? "text-fuchsia-500" :
                          color === "purple" ? "text-purple-500" : "text-cyan-500"
                  }`}>{roll}</p>
                  <div>
                    <p className="text-xs text-cyan-700 mb-1">Deras bidrag</p>
                    <p className="text-sm text-cyan-200">{bidrag}</p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-700 mb-1">Min integration</p>
                    <p className="text-sm text-cyan-200/70">{mitt}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="py-20 space-y-8 border-t border-cyan-900/30">
          <h2 className="text-2xl font-bold tracking-widest text-yellow-400">
            // ALTERNATIV_OCH_KÄLLOR
          </h2>
          <div className="space-y-4">
            <p className="text-cyan-100/70 border-l-2 border-yellow-500/50 pl-6">
              Jag valde beteendeträd via Unitys Behavior-paket framför en enkel tillståndsmaskin (FSM)
              eftersom beteendeträd erbjuder bättre modularitet — noder kunde återanvändas
              av båda fienderna (Gugliermo m.fl., 2024). En FSM hade blivit svårare att utöka
              med nya beteenden utan att bryta befintlig logik.
            </p>
            <p className="text-cyan-100/70 border-l-2 border-fuchsia-500/50 pl-6 mt-4">
              För mer komplex AI (likt Alien: Isolation) hade en hybrid med Utility AI
              behövts — beteendeträd klarar inte dynamisk viktning av mål lika väl
              (Champandard & Dunstan, 2013).
            </p>
          </div>
          {/* Källkort */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            {[
              {
                typ: "Vetenskaplig artikel",
                namn: "Gugliermo m.fl. (2024)",
                syfte: "Ramverk för utvärdering av beteendeträd — modularitet, korrekthet, robusthet"
              },
              {
                typ: "Branschnära bok",
                namn: "Champandard & Dunstan (2013)",
                syfte: "Game AI Pro — grundläggande förståelse av beteendeträd i spelkontext"
              },
              {
                typ: "Branschblogg",
                namn: "Simpson (2014)",
                syfte: "Kompletterande förklaring av sekvens- och selektornoder, lägre tillförlitlighet"
              },
            ].map(({typ, namn, syfte}) => (
                <div key={namn} className="p-4 border border-cyan-900/30 bg-[#0a0a1a] space-y-2">
                  <p className="text-xs text-cyan-600 tracking-widest uppercase">{typ}</p>
                  <p className="text-sm font-bold text-cyan-200">{namn}</p>
                  <p className="text-xs text-cyan-400/60">{syfte}</p>
                </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with ❤️ by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer"
                              className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub
          for Beginners</a> and <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer"
                                   className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub
          Copilot</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({title, description, tags, color, href}: {
  title: string,
  description: string,
  tags: string[],
  color: "cyan" | "fuchsia" | "purple" | "yellow",
  href: string
}) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;

  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
      <Link href={href}
            className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function BehaviorTreeNode({ label, children, color = "cyan" }: {
  label: string;
  children?: React.ReactNode;
  color?: "cyan" | "fuchsia" | "purple"
}) {
  const colors = {
    cyan: "border-cyan-500/50 text-cyan-300 bg-cyan-950/20",
    fuchsia: "border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-950/20",
    purple: "border-purple-500/50 text-purple-300 bg-purple-950/20",
  };
  return (
      <div className="flex flex-col items-center gap-2">
        <div className={`px-4 py-2 border text-xs font-bold tracking-widest uppercase ${colors[color]}`}>
          {label}
        </div>
        {children && (
            <div className="flex gap-6 relative pt-4 border-t border-cyan-900/30">
              {children}
            </div>
        )}
      </div>
  );
}
