import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-cyan-300 font-bold">
              VOICEBOX AI PORTFOLIO
            </Link>

            <div className="flex gap-6 text-xs uppercase text-cyan-700">
              <Link href="#intro">Intro</Link>
              <Link href="#process">Process</Link>
              <Link href="#system">AI System</Link>
              <Link href="#collab">Samarbete</Link>
              <Link href="#time">Tid</Link>
              <Link href="#sources">Källor</Link>
              <Link href="#ethics">Etik</Link>
              <Link href="#reflection">Reflektion</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-28 pb-40 space-y-40">

          {/* ================= INTRO ================= */}
          <section id="intro" className="space-y-10">
            <h1 className="text-5xl font-bold text-white">
              VOICEBOX — Enemy AI System
            </h1>

            <p className="text-cyan-100/70 text-lg leading-relaxed">
              VOICEBOX är ett co-op pusselspel där spelarens röst och proximity chat är en central
              mekanik. Spelet utspelar sig i en procedurgenererad nöjespark där spelare måste
              samarbeta för att lösa pussel och undvika fiender.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Min roll i projektet har varit att utveckla spelets fiende-AI. Systemet bygger på
              Behavior Trees och A*-pathfinding i Unity. Fokus har varit att skapa fiender som är
              funktionella, responsiva och anpassningsbara till spelets iterativa designprocess.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet är inte bara en teknisk komponent, utan en central del av spelets
              spelupplevelse. Fienderna styr tempo, stressnivå och hur spelare kommunicerar
              med varandra i co-op-situationer.
            </p>
          </section>

          {/* ================= PROCESS ================= */}
          <section id="process" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-400 font-bold">
              Utvecklingsprocess
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Utvecklingen följde en iterativ arbetsmetod där AI-systemet byggdes i flera steg:
              först enkla prototyper, sedan utökad funktionalitet och slutligen stabilisering
              inför speltest.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              I den första fasen implementerades grundläggande patrullering och direkt förföljelse.
              Syftet var inte kvalitet utan snabb validering av att AI-systemet fungerade i spelmiljö.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              I nästa fas introducerades ljudsystem, förbättrad state-logik och A* pathfinding.
              Detta ökade komplexiteten kraftigt och ledde till flera iterationer av Behavior Trees
              där noder behövde refaktoreras för modularitet.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett konkret exempel är “investigate sound”-noden som initialt saknade fallback.
              Detta ledde till att fiender fastnade i ett tillstånd. Problemet löstes genom
              tidsbaserade transitions och säkerhetsvillkor.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En viktig lärdom från processen är att spel-AI inte kan designas isolerat.
              Systemet måste kontinuerligt testas i faktisk spelmiljö eftersom emergent beteende
              uppstår först när system interagerar med andra delar av spelet.
            </p>
          </section>

          {/* ================= AI SYSTEM ================= */}
          <section id="system" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              AI System & Implementation
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet är uppbyggt kring Behavior Trees i Unitys Behavior-paket.
              Detta möjliggör modulär design där varje nod representerar ett isolerat beteende.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den mindre fienden fungerar som ett konstant tryck i spelvärlden. Den använder
              patrullering, spelar-detektion och enkel pathfinding. Trots enkelhet är den viktig
              för pacing och spelspänning.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den mer avancerade “elefantspindel”-fienden är ett temporärt hot-system. Den triggas
              av ljud, söker i ett område och försvinner om spelaren inte hittas inom en viss tid.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              A*-pathfinding används på en grid-baserad karta där varje tile har en passability-flagga.
              Ett centralt problem var att fiender ibland valde ogiltiga mål, vilket löstes genom
              extra validering innan path calculation.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En viktig designprincip har varit modularitet. Flera noder återanvänds mellan fiender,
              vilket minskar kodduplicering och gör systemet mer skalbart.
            </p>
          </section>

          {/* ================= COLLAB ================= */}
          <section id="collab" className="space-y-10">
            <h2 className="text-3xl text-yellow-400 font-bold">
              Samarbete med andra discipliner
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet utvecklades i nära samspel med andra discipliner såsom 2D-grafik, animation
              och level design. Detta påverkade implementationen direkt.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett tydligt exempel är elefantspindelns animationer, där implementationen behövde
              anpassas efter hur animationssystemet byggdes av grafikern. Detta ledde till justeringar
              i state transitions i Behavior Tree.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Level design påverkade också AI:n eftersom procedurgenererade banor krävde robust
              pathfinding och fallback-logik när fiender inte kunde nå vissa tiles.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ljuddesignen integrerades direkt i AI-systemet genom eventbaserad kommunikation.
              Detta gjorde att fiender kunde reagera på spelare utan direkt visuell kontakt.
            </p>
          </section>

          {/* ================= TIME ================= */}
          <section id="time" className="space-y-10">
            <h2 className="text-3xl text-purple-400 font-bold">
              Tid, prioritering och arbetsfördelning
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Den största delen av tiden lades på debugging och iteration snarare än ny funktionalitet.
              AI-system tenderar att generera oväntade edge cases som kräver kontinuerlig justering.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En uppskattning av arbetsfördelning:
              cirka 40% implementation, 40% debugging och iteration, 20% design och planering.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En tydlig lärdom är att initial tidsplanering underskattade komplexiteten i
              Behavior Tree-debugging och integration med andra system.
            </p>
          </section>

          {/* ================= SOURCES ================= */}
          <section id="sources" className="space-y-10">
            <h2 className="text-3xl text-yellow-400 font-bold">
              Källor och teori
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Projektet bygger på både akademiska och branschnära källor för att kombinera teori
              och praktisk implementation.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Gugliermo et al. (2024) användes för att analysera Behavior Trees utifrån modularitet,
              korrekthet och robusthet. Dessa begrepp användes direkt i designbeslut kring AI-arkitektur.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Rabin (2014) gav praktisk industrikontext kring hur spel-AI implementeras i verkliga projekt.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Simpson (2014) användes som introduktion till Behavior Trees och för att förstå
              grundläggande struktur och flöde.
            </p>
          </section>

          {/* ================= ETHICS ================= */}
          <section id="ethics" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Etiska och designmässiga överväganden
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-designen påverkar direkt spelarens emotionella upplevelse. Därför har balans
              mellan utmaning och rättvisa varit central.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Spelet riktar sig till 15+ och designen tar hänsyn till stressnivåer i co-op-miljöer.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Fiender är abstrakta och fiktiva för att undvika problematiska representationer.
            </p>
          </section>

          {/* ================= REFLECTION ================= */}
          <section id="reflection" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Reflektion och lärdomar
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Det viktigaste resultatet är att AI i spel måste vara speltestdrivet snarare än
              teoretiskt perfekt. Systemet utvecklas genom iteration snarare än förplanering.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En annan lärdom är att “good enough AI” ofta är mer effektivt än överkomplexa system
              som är svåra att underhålla och debugga.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Om projektet gjordes om skulle en egen implementation av Behavior Trees övervägas
              för att få full kontroll över systemets flexibilitet.
            </p>
          </section>

        </main>
      </div>
  );
}