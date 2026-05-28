import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/your-repo-name" : "";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-cyan-300 font-bold tracking-widest">
              AI PORTFOLIO // ENEMY SYSTEM
            </Link>

            <div className="flex gap-6 text-xs uppercase text-cyan-700">
              <Link href="#intro">Intro</Link>
              <Link href="#process">Process</Link>
              <Link href="#ai">AI System</Link>
              <Link href="#sources">Sources</Link>
              <Link href="#ethics">Ethics</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-28 pb-40 space-y-44">

          {/* ===================== INTRO ===================== */}
          <section id="intro" className="space-y-12">
            <h1 className="text-5xl font-bold text-white">
              Enemy AI System <span className="text-cyan-400">/ Behavior Trees + A*</span>
            </h1>

            <p className="text-cyan-100/70 leading-relaxed text-lg">
              Detta projekt utgör en central del av ett större spelutvecklingsprojekt där jag ansvarat
              för implementationen av fiende-AI-systemet. Systemet är byggt kring Behavior Trees och
              A*-pathfinding i Unity och syftar till att skapa responsiva, speltestbara och modulära
              fiender som kan reagera dynamiskt på spelaren.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Redan i tidiga designfaser identifierades AI som en kritisk komponent för spelets upplevelse,
              eftersom fienderna inte bara fungerar som hinder utan också som system som styr tempo,
              spänning och spelarens rörelsemönster. Detta innebar att AI-designen behövde balansera
              teknisk korrekthet med spelupplevelse och “feel”.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Projektet har genomförts iterativt med flera omarbetningar av både beteendeträd och
              pathfinding-logik, där varje iteration baserats på speltestresultat och interna tester.
              Detta har gjort att AI-systemet utvecklats i takt med spelets behov snarare än enligt
              en fast plan, vilket är typiskt för spel-AI-utveckling.
            </p>

            <div className="border border-cyan-800 p-4">
              <p className="text-xs text-cyan-500 mb-2">[GIF: Full enemy loop gameplay]</p>
              <div className="h-64 bg-cyan-950/30 flex items-center justify-center text-cyan-700">
                INSERT GAMEPLAY GIF HERE
              </div>
            </div>
          </section>

          {/* ===================== PROCESS ===================== */}
          <section id="process" className="space-y-12">
            <h2 className="text-3xl text-fuchsia-400 font-bold">
              // Development Process & Iteration
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Utvecklingsprocessen kan delas in i tre huvudsakliga faser: prototypfas, expansionsfas
              och stabiliseringsfas. I prototypfasen implementerades enkla beteenden såsom patrullering
              och direkt förföljelse för att snabbt uppnå en testbar version av AI-systemet.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              I expansionsfasen introducerades mer komplex logik såsom ljudbaserad perception,
              förbättrad state-hantering och A*-pathfinding. Detta innebar en tydlig ökning i systemets
              komplexitet, där fler beroenden mellan noder i beteendeträdet skapades.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              En återkommande utmaning under utvecklingen var att undvika överdesign. Eftersom systemet
              byggdes parallellt med speltestning uppstod ofta situationer där nya problem introducerades
              samtidigt som gamla problem löstes. Detta gjorde att jag behövde prioritera stabilitet
              framför perfektion.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett konkret exempel är “investigate sound”-noden, som initialt saknade fallback-logik.
              Detta ledde till att fiender ibland fastnade i undersökningslägen. Lösningen blev att
              införa tidsbaserade transitions och säkerhetsvillkor i beteendeträdet.
            </p>

            <div className="border border-fuchsia-900 p-4">
              <p className="text-xs text-fuchsia-400 mb-2">[GIF: Behavior tree debugging + node switching]</p>
              <div className="h-64 bg-fuchsia-950/20"></div>
            </div>
          </section>

          {/* ===================== AI SYSTEM ===================== */}
          <section id="ai" className="space-y-12">
            <h2 className="text-3xl text-cyan-400 font-bold">
              // AI Architecture & Technical Implementation
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemet är uppbyggt kring Behavior Trees, vilket möjliggör en hierarkisk struktur
              där beslut delas upp i små, återanvändbara noder. Detta ger en tydlig separation mellan
              perception, beslutslogik och handlingar, vilket underlättar felsökning och vidareutveckling.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den mindre fienden fungerar som ett grundläggande trycksystem i spelet och består av
              relativt enkla beteenden: patrullera mellan punkter, upptäcka spelaren inom synfält,
              samt övergå till förföljelse via pathfinding. Trots sin enkelhet är denna AI kritisk
              för att skapa konstant spelspänning.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Hybridfienden är mer komplex och fungerar som ett temporärt “hot-system”. Den triggas
              av ljudsignaler och söker ett område under en begränsad tidsperiod. Om ingen spelare
              hittas avbryts jakten automatiskt, vilket förhindrar att fienden blir övermäktig eller
              stör spelets pacing.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              A*-pathfinding används för att säkerställa att fiender kan navigera i en grid-baserad
              miljö där varje tile har en passability-flagga. En central teknisk utmaning var att
              undvika “dead paths”, vilket löstes genom extra validering av måltiles innan pathfinding
              initieras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-cyan-800 p-3">
                <p className="text-xs text-cyan-500">[GIF: AI chasing player]</p>
                <div className="h-48 bg-cyan-950/20"></div>
              </div>

              <div className="border border-fuchsia-800 p-3">
                <p className="text-xs text-fuchsia-400">[GIF: Sound investigation state]</p>
                <div className="h-48 bg-fuchsia-950/20"></div>
              </div>
            </div>
          </section>

          {/* ===================== SOURCES ===================== */}
          <section id="sources" className="space-y-12">
            <h2 className="text-3xl text-yellow-400 font-bold">
              // Theory, Research & Critical Evaluation
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Källorna i detta projekt består av både akademiska publikationer och branschmaterial
              för att ge en balans mellan teori och praktisk implementation. Detta är särskilt viktigt
              inom spel-AI där industriella lösningar ofta skiljer sig från akademiska modeller.
            </p>

            <div className="space-y-8 text-cyan-100/70">
              <div>
                <p className="text-cyan-300 font-bold">Gugliermo et al. (2024)</p>
                <p>
                  Denna peer-reviewed artikel användes som teoretisk grund för att förstå hur
                  Behavior Trees kan utvärderas systematiskt. Särskilt viktiga begrepp var modularitet,
                  korrekthet och robusthet. Dessa användes direkt i designval kring nodstruktur och
                  teststrategier.
                </p>
                <p>
                  En viktig insikt från artikeln var att modularitet inte bara handlar om kodstruktur,
                  utan också om hur enkelt systemet kan ändras utan att skapa oväntade sidoeffekter.
                </p>
              </div>

              <div>
                <p className="text-cyan-300 font-bold">Rabin (2014)</p>
                <p>
                  Användes som praktisk referens för implementering av spel-AI. Boken innehåller
                  konkreta exempel från industrin och har varit central för förståelsen av hur
                  beteendebaserad AI används i riktiga spelproduktioner.
                </p>
              </div>

              <div>
                <p className="text-cyan-300 font-bold">Simpson (2014)</p>
                <p>
                  Användes främst som en introduktion till Behavior Trees och hjälpte till att
                  visualisera hur noder interagerar i enklare system. Trots att den inte är peer-reviewed
                  gav den en viktig konceptuell grund.
                </p>
              </div>
            </div>
          </section>

          {/* ===================== ETHICS ===================== */}
          <section id="ethics" className="space-y-12">
            <h2 className="text-3xl text-purple-400 font-bold">
              // Ethical, Societal & Design Considerations
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              AI-systemets design påverkar direkt spelupplevelsen och därmed också spelarens
              emotionella respons. En viktig designprincip har därför varit att undvika både
              överväldigande och passiv AI. Detta kräver en balans mellan förutsägbarhet och dynamik.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Eftersom spelet riktar sig till en yngre vuxen målgrupp (15+), har hänsyn tagits
              till hur stress och press upplevs i co-op-situationer. Förlustmekanik och fiendebeteenden
              är därför designade för att skapa spänning utan att upplevas som orättvisa.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Co-op-dynamiken innebär också att AI indirekt påverkar social interaktion mellan spelare.
              Fiendernas beteenden är därför utformade för att uppmuntra kommunikation och samarbete
              snarare än individuell prestation.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Ett medvetet etiskt val har varit att använda abstrakta och fiktiva fiender istället för
              realistiska eller kulturellt laddade representationer. Detta minskar risken för problematisk
              tolkning och gör systemet mer universellt.
            </p>
          </section>

          {/* ===================== CONCLUSION ===================== */}
          <section className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              // Final Reflection & Conclusion
            </h2>

            <p className="text-cyan-100/70 leading-relaxed">
              Sammanfattningsvis har projektet resulterat i ett fungerande men iterativt utvecklat
              AI-system baserat på Behavior Trees och A*-pathfinding. Systemet uppfyller kraven på
              funktionalitet och spelbarhet, men har medvetet inte överoptimerats för perfektion
              på grund av tidsbegränsningar.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den viktigaste tekniska lärdomen är att AI-utveckling i spel kräver kontinuerlig
              testning i verklig miljö, eftersom teoretiskt korrekta system ofta beter sig oväntat
              när de interagerar med spelmekanik.
            </p>

            <p className="text-cyan-100/70 leading-relaxed">
              Den viktigaste designmässiga lärdomen är att “good enough AI” ofta är bättre än
              “perfect AI” i spelutveckling, eftersom spelupplevelse och pacing väger tyngre än
              teknisk perfektion.
            </p>
          </section>

        </main>
      </div>
  );
}