import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">

        {/* ================= NAV ================= */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-cyan-300 font-bold tracking-widest">
              VOICEBOX // ENEMY AI PORTFOLIO
            </Link>

            <div className="flex gap-6 text-xs uppercase text-cyan-700">
              <Link href="#intro">Intro</Link>
              <Link href="#context">Context</Link>
              <Link href="#process">Process</Link>
              <Link href="#ai">AI System</Link>
              <Link href="#time">Time</Link>
              <Link href="#collab">Collaboration</Link>
              <Link href="#alternatives">Alternatives</Link>
              <Link href="#sources">Sources</Link>
              <Link href="#ethics">Ethics</Link>
              <Link href="#reflection">Reflection</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-28 pb-40 space-y-44">

          {/* ================= INTRO ================= */}
          <section id="intro" className="space-y-10">
            <h1 className="text-5xl font-bold text-white">
              VOICEBOX <span className="text-cyan-400">Enemy AI System</span>
            </h1>

            <p className="text-lg text-cyan-100/70 leading-relaxed">
              VOICEBOX är ett co-op-baserat pussel- och stealthspel där spelare navigerar
              en procedurellt genererad nöjespark med hjälp av proximity voice chat.
              Min roll i projektet har varit att designa och implementera spelets fiende-AI,
              som fungerar som en central mekanik för spänning, pacing och spelarrörelse.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet är byggt i Unity och kombinerar Behavior Trees och A*-pathfinding
              för att skapa fiender som kan patrullera, reagera på ljud, söka efter spelare
              och anpassa sitt beteende beroende på situation. Målet har varit att skapa ett
              system som är modulärt, speltestbart och tillräckligt robust för ett dynamiskt
              multiplayer-scenario.
            </p>

            <div className="h-64 border border-cyan-800 flex items-center justify-center text-cyan-700">
              GAMEPLAY / AI OVERVIEW CLIP
            </div>
          </section>

          {/* ================= CONTEXT ================= */}
          <section id="context" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-400 font-bold">
              Projektkontext & spelidé
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Spelet utspelar sig i en procedurellt genererad nöjespark där spelare måste
              samarbeta för att lösa pussel och undvika fiender. En viktig designprincip
              är att kommunikationen sker via proximity voice chat, vilket gör att ljud
              inte bara är ett socialt verktyg utan även en gameplay-mekanik.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Detta skapade ett direkt designkrav på AI-systemet: fiender måste kunna
              reagera på ljud på ett trovärdigt sätt och samtidigt vara balanserade för
              co-op-spel. AI:n fungerar därför inte bara som en “motståndare” utan som
              en systemisk regulator av speltempo.
            </p>
          </section>

          {/* ================= PROCESS ================= */}
          <section id="process" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Utvecklingsprocess & iteration
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Utvecklingen följde en strikt iterativ process där jag först implementerade
              enkla versioner av varje fiendesystem för att möjliggöra tidig speltestning.
              Denna strategi prioriterades framför fullständig design eftersom AI-beteenden
              är starkt beroende av faktisk spelmiljö.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den första versionen av småfienden bestod enbart av patrullering och direkt
              förföljelse. Därefter adderades perception (syn och ljud), följt av A*
              pathfinding och mer avancerade transitions i Behavior Tree-strukturen.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett återkommande problem var att vissa noder i Behavior Tree saknade fallback-logik,
              vilket ledde till att fiender kunde fastna i specifika states. Detta löstes genom
              tidsbaserade transitions och defensiva checks i varje kritisk nod.
            </p>
          </section>

          {/* ================= AI ================= */}
          <section id="ai" className="space-y-10">
            <h2 className="text-3xl text-cyan-300 font-bold">
              AI-arkitektur & implementation
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Systemet är byggt kring Behavior Trees, vilket möjliggör en hierarkisk och
              modulär struktur där varje nod representerar ett isolerat beteende. Detta gör
              systemet lätt att debugga, testa och vidareutveckla.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Småfienden fungerar som ett konstant tryck i spelvärlden och använder en
              relativt enkel AI-loop: patrullera → upptäck → förfölja → undersöka ljud.
              Trots enkelheten är denna AI central för att skapa spänningskurvor i spelet.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Hybridfienden är mer komplex och fungerar som ett temporärt hot-system.
              Den triggas av ljud, söker i ett område under begränsad tid och försvinner
              om ingen spelare hittas. Detta förhindrar överexponering och håller spelets
              pacing stabil.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              A*-pathfinding används på ett tile-baserat system där varje tile har en
              passability-flagga. En viktig teknisk förbättring var att införa validering
              av måltiles för att undvika ogiltiga pathfinding-mål och fastnade agenter.
            </p>
          </section>

          {/* ================= TIME ================= */}
          <section id="time" className="space-y-10">
            <h2 className="text-3xl text-yellow-300 font-bold">
              Tidsfördelning & arbetsinsats
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Den största delen av arbetstiden lades på iteration av AI-beteenden och
              felsökning av edge cases i Behavior Trees. Ungefär hälften av tiden gick
              åt till debugging snarare än ny implementation.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Pathfinding och integration med procedurellt genererade kartor var också
              tidskrävande eftersom systemet behövde anpassas till föränderliga nivåer.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En mindre men viktig del av tiden gick till speltestanalys där beteenden
              observerades i verklig miljö, vilket ofta ledde till omdesign av tidigare
              “korrekta” lösningar.
            </p>
          </section>

          {/* ================= COLLAB ================= */}
          <section id="collab" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-300 font-bold">
              Samarbete & beroenden
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet var starkt beroende av andra discipliner. Grafiker bidrog med
              animationer som direkt påverkade hur state transitions designades, särskilt
              i “capture”-sekvensen där animation och logik måste synkas exakt.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ljuddesignen påverkade också AI:n eftersom ljudsignaler inte bara var
              feedback utan också triggers i Behavior Trees. Detta krävde ett gemensamt
              system för event-hantering mellan programmering och audio.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Level design hade också en direkt påverkan eftersom pathfinding och AI
              måste fungera i en procedurellt genererad miljö där inga banor är fasta.
            </p>
          </section>

          {/* ================= ALTERNATIVES ================= */}
          <section id="alternatives" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Alternativa lösningar & designval
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett alternativ till Behavior Trees hade varit en FSM (Finite State Machine),
              vilket hade varit enklare men mindre skalbart. FSM blev dock snabbt otillräcklig
              när fler samtidiga beteenden krävdes.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Utility AI övervägdes för mer dynamiskt beslutsfattande, men valdes bort
              eftersom projektets scope krävde mer deterministiska och debugbara system.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En hybridlösning (BT + Utility AI) hade varit den mest avancerade lösningen,
              men ansågs för tidskrävande inom projektets ramar.
            </p>
          </section>

          {/* ================= SOURCES ================= */}
          <section id="sources" className="space-y-10">
            <h2 className="text-3xl text-cyan-300 font-bold">
              Källor & teoretisk grund
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Projektet bygger på en kombination av akademiska och industriella källor.
              Den viktigaste akademiska referensen är Gugliermo et al. (2024) som
              definierar begrepp som modularitet, korrekthet och robusthet i Behavior Trees.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Dessa begrepp användes direkt i designen av AI-systemet, särskilt vid
              val av nodstruktur och vid teststrategier för att säkerställa stabilitet
              i olika spelmiljöer.
            </p>
          </section>

          {/* ================= ETHICS ================= */}
          <section id="ethics" className="space-y-10">
            <h2 className="text-3xl text-purple-300 font-bold">
              Etiska & sociala aspekter
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet påverkar direkt spelarens känslomässiga upplevelse. Därför
              designades fienderna för att skapa spänning utan att bli orättvisa eller
              oförutsägbara på ett frustrerande sätt.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Eftersom spelet använder social kommunikation via voice chat, kan AI:n
              indirekt påverka social dynamik mellan spelare. Detta har beaktats i
              designen av fiendernas aggression och frekvens.
            </p>
          </section>

          {/* ================= REFLECTION ================= */}
          <section id="reflection" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Reflektion & slutsats
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Projektet resulterade i ett fungerande AI-system som uppfyller sina
              funktionella krav, men inte når full polishnivå. Den största lärdomen
              är att spel-AI kräver kontinuerlig iteration i faktisk spelmiljö.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En annan viktig insikt är att “good enough AI” ofta är mer värdefullt
              än teoretiskt perfekt AI, eftersom spelupplevelse och pacing är viktigare
              än intern teknisk elegans.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              I framtida projekt skulle jag troligen bygga ett eget Behavior Tree-system
              istället för att använda ett färdigt paket, för att få större kontroll över
              debug och skalbarhet.
            </p>
          </section>

        </main>
      </div>
  );
}