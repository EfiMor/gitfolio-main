import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* NAV */}
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-cyan-900 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-cyan-300 font-bold tracking-widest">FIENDE AI PORTFOLIO</span>
            <div className="flex gap-6 text-xs uppercase">
              <Link href="#intro">Intro</Link>
              <Link href="#process">Process</Link>
              <Link href="#tech">Tech</Link>
              <Link href="#media">Media</Link>
              <Link href="#ethics">Ethics</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-28 space-y-40">

          {/* ================= INTRO ================= */}
          <section id="intro" className="space-y-6">
            <h1 className="text-5xl font-bold text-fuchsia-400">
              FIENDE AI SYSTEM – BEHAVIOR TREES + A*
            </h1>

            <p className="text-cyan-100/70 leading-relaxed text-lg">
              Denna portfölj beskriver utvecklingen av ett fiende-AI-system byggt i Unity,
              där två huvudsakliga fiendetyper implementerats: en mindre patrullerande
              AI och en mer komplex hybridfiende baserad på beteendeträd och
              ljud-/synbaserad perception.
            </p>

            <p className="text-cyan-100/60 leading-relaxed">
              Fokus i projektet har varit att skapa en modulär AI-arkitektur där
              beteenden kan kombineras och itereras snabbt. Systemet bygger på
              Behavior Trees, A* pathfinding och ett event-baserat perceptionssystem.
            </p>
          </section>

          {/* ================= PROCESS ================= */}
          <section id="process" className="space-y-10">
            <h2 className="text-3xl text-cyan-300">// UTVECKLINGSPROCESS</h2>

            <p className="leading-relaxed text-cyan-100/70">
              Utvecklingen följde en strikt iterativ modell där jag först implementerade
              grundläggande beteenden (patrullering och förföljelse) för att säkerställa
              att AI:n fungerade i spelmiljö tidigt. Detta gav mig möjlighet att identifiera
              strukturella problem innan systemet blev för komplext.
            </p>

            <p className="leading-relaxed text-cyan-100/70">
              Därefter byggdes beteendeträdet ut med fler noder såsom “investigate sound”,
              “chase player” och “capture state”. Under denna fas uppstod flera problem
              kopplade till state transitions, där AI:n ibland fastnade i undersökningsläge
              eller inte återgick korrekt till patrol.
            </p>

            <p className="leading-relaxed text-cyan-100/70">
              Dessa problem löstes genom att införa tydligare fallback-logik i trädet samt
              striktare villkor för övergångar mellan noder.
            </p>
          </section>

          {/* ================= TECH ================= */}
          <section id="tech" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-400">// TEKNISK IMPLEMENTATION</h2>

            <div className="space-y-6">

              <h3 className="text-cyan-300 text-xl">Behavior Trees</h3>
              <p className="text-cyan-100/70 leading-relaxed">
                AI-systemet är uppbyggt kring Behavior Trees vilket möjliggör modulär
                design där varje nod representerar ett specifikt beteende. Detta gör
                systemet lätt att debugga, utöka och återanvända mellan fiendetyper.
              </p>

              <p className="text-cyan-100/60">
                Jag använde selektorer för att prioritera perception (syn/ljud) och sekvenser
                för handlingar såsom “chase → attack → capture”.
              </p>

              <h3 className="text-cyan-300 text-xl mt-6">A* Pathfinding</h3>

              <p className="text-cyan-100/70 leading-relaxed">
                För navigation implementerades A* över ett grid-baserat tile-system där varje
                tile innehåller information om gångbarhet via ScriptableObjects.
              </p>

              <p className="text-cyan-100/60">
                Algoritmen använder g-score och h-score för att beräkna optimal väg till spelaren.
                Detta gjorde att fiender kunde navigera dynamiskt i miljön även vid förändrade mål.
              </p>
            </div>
          </section>

          {/* ================= MEDIA ================= */}
          <section id="media" className="space-y-10">
            <h2 className="text-3xl text-yellow-400">// VISUALISERING & GIFS</h2>

            <p className="text-cyan-100/70">
              Nedan visas exempel på hur AI:n beter sig i olika tillstånd. GIFs används
              för att demonstrera beteenden i realtid.
            </p>

            {/* GIF PLACEHOLDERS */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-cyan-900 p-4">
                <p className="text-sm text-cyan-300 mb-2">PATROL STATE (GIF)</p>
                <div className="h-48 bg-cyan-950/30 flex items-center justify-center text-cyan-700">
                  [PLACEHOLDER GIF: patrol behavior]
                </div>
              </div>

              <div className="border border-cyan-900 p-4">
                <p className="text-sm text-cyan-300 mb-2">CHASE STATE (GIF)</p>
                <div className="h-48 bg-cyan-950/30 flex items-center justify-center text-cyan-700">
                  [PLACEHOLDER GIF: chase behavior]
                </div>
              </div>

              <div className="border border-cyan-900 p-4">
                <p className="text-sm text-cyan-300 mb-2">A* PATHFINDING (GIF)</p>
                <div className="h-48 bg-cyan-950/30 flex items-center justify-center text-cyan-700">
                  [PLACEHOLDER GIF: pathfinding grid visualization]
                </div>
              </div>

              <div className="border border-cyan-900 p-4">
                <p className="text-sm text-cyan-300 mb-2">INVESTIGATE SOUND (GIF)</p>
                <div className="h-48 bg-cyan-950/30 flex items-center justify-center text-cyan-700">
                  [PLACEHOLDER GIF: sound reaction]
                </div>
              </div>

            </div>
          </section>

          {/* ================= THEORY ================= */}
          <section className="space-y-10">
            <h2 className="text-3xl text-purple-400">// TEORI & KÄLLOR</h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Den teoretiska grunden för systemet baseras på både akademiska och branschnära
              källor. Behavior Trees valdes eftersom de enligt Rabin (2014) erbjuder en
              skalbar struktur för komplex spel-AI.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Gugliermo et al. (2024) användes för att analysera egenskaper såsom modularitet
              och korrekthet i beteendeträd, vilket påverkade hur jag strukturerade mina noder
              och transitions.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Simpson (2014) användes som praktisk introduktion till hur Behavior Trees
              implementeras i spelmotorer och hjälpte mig förstå selektorer och sekvenser.
            </p>
          </section>

          {/* ================= ETHICS ================= */}
          <section id="ethics" className="space-y-10">
            <h2 className="text-3xl text-red-400">// ETIK & SAMHÄLLE</h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemets design påverkar direkt spelarupplevelsen och kan skapa frustration
              om beteenden upplevs som orättvisa eller oförutsägbara. Därför har stor vikt lagts
              vid tydliga regler för AI:ns perception och reaktioner.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En viktig etisk aspekt är balansen mellan utmaning och rättvisa. För aggressiv AI
              kan skapa stress, särskilt i co-op-miljöer, medan för svag AI minskar spelupplevelsen.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Systemet är därför designat för att vara konsekvent snarare än oförutsägbart,
              vilket stärker spelbarhet och lärbarhet för målgruppen.
            </p>
          </section>

          {/* ================= REFLECTION ================= */}
          <section className="space-y-10 pb-40">
            <h2 className="text-3xl text-cyan-400">// REFLEKTION</h2>

            <p className="text-cyan-100/70 leading-relaxed">
              En av de största lärdomarna i projektet var att AI-utveckling i spel inte är en
              linjär process utan en kontinuerlig cykel av design, testning och justering.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Jag underskattade initialt komplexiteten i state transitions och hur små fel i
              beteendeträd kan skapa stora systemiska problem. Detta ledde till flera iterationer
              av omstrukturering av nodlogik.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Nästa steg skulle vara att ytterligare modulera systemet och eventuellt kombinera
              Behavior Trees med andra AI-paradigm såsom Utility AI för mer dynamiskt beteende.
            </p>
          </section>

        </main>
      </div>
  );
}