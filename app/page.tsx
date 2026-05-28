import Image from "next/image";
import Link from "next/link";

const basePath =
    process.env.NODE_ENV === "production" ? "/enemy-ai-portfolio" : "";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* NAV */}
        <nav className="fixed top-0 w-full z-50 bg-[#050510]/80 backdrop-blur border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="text-cyan-400 font-bold tracking-widest">
            ENEMY AI PORTFOLIO
          </span>

            <div className="flex gap-6 text-xs uppercase tracking-widest">
              <Link href="#intro">Intro</Link>
              <Link href="#process">Process</Link>
              <Link href="#systems">AI System</Link>
              <Link href="#theory">Theory</Link>
              <Link href="#ethics">Ethics</Link>
            </div>
          </div>
        </nav>

        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-32">

          {/* INTRODUCTION */}
          <section id="intro" className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              FIENDE-AI SYSTEM <br />
              <span className="text-cyan-400">Behavior Trees + A*</span>
            </h1>

            <p className="text-cyan-100/70 max-w-3xl leading-relaxed">
              Detta projekt handlar om utveckling av ett fiende-AI-system i Unity.
              Systemet består av två typer av AI-fiender som använder beteendeträd,
              perception (syn + ljud) och A*-pathfinding för navigering i spelvärlden.
            </p>

            <div className="border border-cyan-900/40 p-6 bg-cyan-950/10">
              <p className="text-sm text-cyan-200/70">
                🎯 Mål: skapa ett modulärt, skalbart och speltestbart AI-system som kan itereras snabbt.
              </p>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-8">
            <h2 className="text-3xl text-fuchsia-400 font-bold">
              // DEVELOPMENT PROCESS
            </h2>

            <div className="space-y-6 text-cyan-100/70 leading-relaxed">

              <p>
                Arbetet startade med en enkel AI-prototyp bestående av patrullering och direkt förföljelse.
                Syftet var att snabbt skapa ett testbart system för att validera beteendeträdens struktur.
              </p>

              <p>
                Därefter itererades systemet genom tre huvudfaser:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Grundläggande state-logik (patrol / chase)</li>
                <li>Introduktion av Behavior Trees</li>
                <li>Integration av A* pathfinding + ljudsystem</li>
                <li>Iterativ fix av bugs från speltest</li>
              </ul>

              <p>
                Utvecklingen var starkt iterativ och styrdes av speltestfeedback där AI-beteenden ofta
                behövde justeras efter faktisk spelmiljö.
              </p>
            </div>
          </section>

          {/* AI SYSTEM VISUALIZATION */}
          <section id="systems" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              // AI SYSTEM ARCHITECTURE
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Behavior Tree */}
              <div className="border border-cyan-900/40 p-6">
                <h3 className="text-fuchsia-400 font-bold mb-4">
                  Behavior Tree Structure
                </h3>

                <pre className="text-xs text-cyan-200/70 leading-relaxed">
Root
 ├── Perception
 │   ├── Vision Check
 │   └── Sound Detection
 ├── Selector
 │   ├── Chase Player
 │   ├── Investigate Sound
 │   └── Patrol
              </pre>

                <p className="mt-4 text-sm text-cyan-100/60">
                  Beteendeträdet separerar perception, beslut och handling.
                  Detta möjliggör modulär design och enkel iteration.
                </p>
              </div>

              {/* A* */}
              <div className="border border-cyan-900/40 p-6">
                <h3 className="text-yellow-400 font-bold mb-4">
                  A* Pathfinding System
                </h3>

                <p className="text-sm text-cyan-100/70 leading-relaxed">
                  A* används för att låta fiender navigera grid-baserade banor.
                  Varje tile kontrolleras via ScriptableObject som definierar
                  gångbarhet.
                </p>

                <ul className="mt-4 text-sm space-y-2 text-cyan-200/60">
                  <li>• Open / Closed list search</li>
                  <li>• Heuristik: Manhattan distance</li>
                  <li>• Dynamisk omräkning vid måländring</li>
                </ul>
              </div>
            </div>

            {/* IMAGE PLACEHOLDER VISUAL */}
            <div className="border border-cyan-900/30 p-6 bg-cyan-950/10">
              <p className="text-sm text-cyan-200/60">
                📊 Visualisering: Behavior Tree och pathfinding debug view (Unity Gizmos)
              </p>
            </div>
          </section>

          {/* THEORY */}
          <section id="theory" className="space-y-8">
            <h2 className="text-3xl text-purple-400 font-bold">
              // THEORETICAL FOUNDATION
            </h2>

            <div className="space-y-6 text-cyan-100/70 leading-relaxed">

              <p>
                Implementationen bygger på forskning och branschpraxis kring spel-AI,
                särskilt Behavior Trees och deras användning i realtidsapplikationer.
              </p>

              <div className="border border-cyan-900/40 p-6">
                <h3 className="text-cyan-400 font-bold mb-2">
                  Vetenskaplig källa
                </h3>
                <p className="text-sm">
                  Gugliermo et al. (2024) beskriver hur Behavior Trees erbjuder modularitet
                  och robusthet i autonoma system, men även begränsningar i komplexa beslutsmiljöer.
                </p>
              </div>

              <div className="border border-cyan-900/40 p-6">
                <h3 className="text-fuchsia-400 font-bold mb-2">
                  Branschkälla
                </h3>
                <p className="text-sm">
                  Rabin (2014) och Simpson (2014) användes för att förstå praktisk implementation
                  av AI i spel, särskilt node-baserad design och realtidsbeslut.
                </p>
              </div>
            </div>
          </section>

          {/* ETHICS */}
          <section id="ethics" className="space-y-8">
            <h2 className="text-3xl text-yellow-400 font-bold">
              // ETHICAL & SOCIAL CONSIDERATIONS
            </h2>

            <div className="space-y-6 text-cyan-100/70 leading-relaxed">

              <p>
                AI-design påverkar spelarupplevelse direkt genom svårighetsgrad och upplevd rättvisa.
                För aggressiva eller oförutsägbara fiender kan skapa frustration.
              </p>

              <p>
                Därför har systemet designats med:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Tydliga state transitions (minskar “randomness”)</li>
                <li>Konsekventa perceptionsregler</li>
                <li>Reagerbara men inte överväldigande beteenden</li>
              </ul>

              <p>
                Detta säkerställer en mer rättvis och lärbar AI-upplevelse för spelaren.
              </p>
            </div>
          </section>

          {/* REFLECTION */}
          <section className="space-y-8">
            <h2 className="text-3xl text-cyan-400 font-bold">
              // RESULT & REFLECTION
            </h2>

            <p className="text-cyan-100/70 leading-relaxed max-w-3xl">
              Resultatet är ett modulärt AI-system som kombinerar beteendeträd och A*-pathfinding.
              Systemet är stabilt nog för speltestning men kräver fortsatt polering av transitions,
              pathfinding-edge cases och perceptionsbalans.
            </p>
          </section>

        </main>

        <footer className="border-t border-cyan-900/30 py-10 text-center text-xs text-cyan-700">
          AI Enemy Portfolio – Game Development Coursework
        </footer>
      </div>
  );
}