import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/85 backdrop-blur-md border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
                href="#top"
                className="text-cyan-300 font-bold tracking-[0.25em] uppercase text-sm"
            >
              VOICEBOX // Enemy AI Portfolio
            </Link>
            <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-[0.2em] text-cyan-700">
              <Link href="#intro">Intro</Link>
              <Link href="#context">Context</Link>
              <Link href="#process">Process</Link>
              <Link href="#implementation">AI</Link>
              <Link href="#time">Time</Link>
              <Link href="#visuals">Visuals</Link>
              <Link href="#collaboration">Collaboration</Link>
              <Link href="#alternatives">Alternatives</Link>
              <Link href="#sources">Sources</Link>
              <Link href="#ethics">Ethics</Link>
              <Link href="#reflection">Reflection</Link>
            </div>
          </div>
        </nav>

        <main id="top" className="max-w-5xl mx-auto px-6 pt-28 pb-40 space-y-36">
          {/* HERO */}
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              PORTFOLIO // PROGRAMMING COMPONENT
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              VOICEBOX
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">
              Enemy AI System
            </span>
            </h1>

            <p className="text-lg md:text-xl text-cyan-100/70 max-w-3xl leading-relaxed border-l-2 border-fuchsia-500/50 pl-6">
              VOICEBOX är ett casual co-op pusselspel där spelarna navigerar en procedurellt
              genererad nöjespark med hjälp av proximity chat och röstbaserad interaktion.
              Min del av projektet var att utveckla fiende-AI:n, alltså den komponent som
              styr hur spelets fiender upptäcker, jagar, undersöker och fångar spelaren.
              Det gjorde att mitt arbete blev direkt kopplat till spelets tempo, spänning,
              svårighetsgrad och upplevelsen av att samarbeta under press.
            </p>
          </section>

          {/* INTRO */}
          <section id="intro" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-fuchsia-400">
              // INTRODUCTION TO PROJECT & COMPONENT
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Portföljen handlar om den fiende-AI-komponent jag utvecklat för VOICEBOX.
              Spelet i sin helhet är ett co-op pusselspel med en tydlig social kärna: spelarna
              måste kommunicera, läsa av situationer tillsammans och fatta snabba beslut i en
              miljö som aktivt försöker störa deras planering. Spelidén bygger på att röst
              inte bara är ett kommunikationsmedel utan också en mekanik som påverkar hur
              spelaren tar sig fram och hur kartan uppfattas. Det gör att fiendernas beteende
              inte kan vara slumpmässigt eller isolerat från resten av spelets system, utan
              måste vara nära kopplat till både ljud och spelrytm.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Jag valde fiende-AI som komponent eftersom den påverkar flera andra delar av
              spelet samtidigt. En fiende är inte bara ett objekt som rör sig mot spelaren;
              den bestämmer hur säkert ett område känns, hur ofta spelaren tvingas ändra väg,
              när gruppen behöver kommunicera och hur mycket press spelet ska skapa.
              Därför blev mitt mål att bygga ett system som både fungerar tekniskt och går att
              justera för att stödja spelets designmål. Det här är också anledningen till att
              jag arbetade iterativt och testade tidigt, i stället för att försöka skriva ett
              färdigt system i ett enda steg.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MediaSlot title="Gameplay GIF" caption="Visa hur fienderna beter sig i spelmiljö." />
              <MediaSlot title="Behavior Tree GIF" caption="Visa nodstruktur och decision flow." />
              <MediaSlot title="A* Pathfinding GIF" caption="Visa navigation i procedurgenererad bana." />
            </div>

            <p className="text-cyan-100/75 leading-relaxed">
              I en portfölj som riktar sig till andra utvecklare är det viktigt att snabbt ge
              sammanhang, så här presenterar jag därför både spelet och min komponent i samma
              ram. Mottagaren ska förstå varför systemet finns, vad det ska bidra med och hur
              det relaterar till helheten. Den här kopplingen är central för att visa att AI:n
              inte är ett fristående teknikexperiment utan en del av ett spel med ett tydligt
              mål: att skapa samarbete, spänning och återspelbarhet.
            </p>
          </section>

          {/* CONTEXT */}
          <section id="context" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-cyan-400">
              // GAME CONTEXT & PLAYER EXPERIENCE
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              VOICEBOX utspelar sig i en nöjespark och använder en procedurellt genererad karta
              för att skapa variation mellan omgångar. Det betyder att spelaren inte kan lära sig
              en enda fast bana och sedan spela mekaniskt på minne; i stället måste spelaren läsa
              miljön, kommunicera och anpassa sig till föränderliga situationer. Fiende-AI:n blev
              därför ett viktigt verktyg för att understödja den upplevelsen. Om fienderna är för
              passiva försvinner spänningen, men om de är för aggressiva försvinner också känslan
              av rättvisa. Jag behövde alltså balansera hot och begriplighet.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Spelets upplevelse bygger på att spelarna hela tiden växlar mellan utforskning,
              problemlösning och riskhantering. Fienderna ska skapa tillräcklig osäkerhet för att
              spelarna ska känna sig pressade att samarbeta, men inte så mycket att de blir
              handlingsförlamade. Det innebär att AI:n måste vara konsekvent i sina regler,
              förutsägbar i sina grundprinciper och ändå tillräckligt dynamisk för att kännas levande.
              Denna kombination av tydlighet och variation var en av de viktigaste designfrågorna i
              mitt arbete.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Eftersom spelet bygger på proximity chat fick fiendernas ljudsystem en särskild roll.
              Ljud är inte bara feedback till spelaren, utan ett direkt signalmedium för AI:n.
              Det gjorde att ljuddesign och programmering behövde samverka tätt. När ett ljudevent
              skickas i spelet måste fienden kunna tolka det, prioritera det och välja ett beteende
              som passar. Detta gjorde att mitt arbete påverkades av andra discipliner redan från
              början av projektet.
            </p>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-yellow-300">
              // DEVELOPMENT PROCESS
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Utvecklingsprocessen började med att jag definierade vad fienderna skulle göra på en
              grundläggande nivå. Jag delade upp arbetet i små mål som gick att testa separat:
              patrullering, detektion, förföljelse, ljudreaktion, pathfinding och fångstlogik.
              Den här uppdelningen var viktig eftersom jag arbetade ensam med komponenten och därför
              behövde ha delmål som gick att verifiera utan att hela systemet redan var färdigt.
              Min strategi var att först få fram en enkel men fungerande version, och därefter
              förbättra logiken baserat på testning och återkoppling.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Tidigt i processen implementerade jag en enklare version av den mindre fienden.
              Den kunde patrullera och förfölja spelaren, vilket räckte för att börja testa
              fiendens grundläggande roll i spelet. När det fungerade lade jag till fler delar av
              beteendet, bland annat ljudreaktioner och mer modulära noder. Under samma period
              började jag också bygga den mer avancerade elefantspindel-fienden. Den fienden fick
              ett bredare beteendeträd där den inte bara kunde upptäcka och jaga, utan också söka
              av ett område under en begränsad tid och sedan försvinna om den inte hittade någon.
              Det var viktigt eftersom fienden annars riskerade att stanna kvar för länge i kartan
              och dominera spelupplevelsen.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              En stor del av min process handlade om att hantera buggar och oväntade beteenden.
              Jag märkte till exempel att fiender ibland fastnade i undersök-ljud-läget eller att
              de tog fel beslut i vissa kartsektioner. Sådana problem går sällan att lösa enbart
              genom att läsa teori; de måste upptäckas i praktisk testning. Därför blev speltesterna
              en central del av min process. De gav mig konkret feedback om var AI:n fungerade och
              var den behövde bli mer robust. Det gjorde också att jag vågade förenkla vissa delar
              när tidsramen krävde det.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MediaSlot title="BT debug GIF" caption="Visa hur noder byter tillstånd under test." />
              <MediaSlot title="In-game chase GIF" caption="Visa den färdiga fienden i faktisk spelmiljö." />
            </div>

            <p className="text-cyan-100/75 leading-relaxed">
              Processen var alltså inte linjär. I stället gick jag fram och tillbaka mellan
              design, implementation, testning och omdesign. Det är också där jag tycker att
              projektet visar kvalitet: jag nöjde mig inte med att bara få något att fungera,
              utan försökte förstå varför ett visst beteende uppstod och om det verkligen stödde
              spelets mål. Den här typen av arbetssätt är enligt min erfarenhet viktig i spelutveckling,
              eftersom AI nästan alltid behöver anpassas efter helheten snarare än efter enskilda
              tekniska ideal.
            </p>
          </section>

          {/* IMPLEMENTATION */}
          <section id="implementation" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-cyan-300">
              // AI SYSTEM & TECHNICAL IMPLEMENTATION
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Kärnan i komponenten är Behavior Trees, eftersom de ger en tydlig struktur för
              beslut och handlingar. Varje beteende i fienden ligger i en nod, och noderna kan
              kombineras så att fienden först kontrollerar om den ser spelaren, därefter om den
              hör spelaren, och sedan väljer om den ska patrullera, undersöka eller jaga.
              För mig var det viktigt att använda en struktur som gick att läsa och felsöka.
              Därför valde jag Unitys Behavior-paket i stället för att skriva hela trädstrukturen
              från noll. Det gav en visuell modell som gjorde det enklare att se varför en fiende
              gjorde ett visst val.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Den mindre fienden är designad för att skapa ett konstant tryck på spelaren.
              Den patrullerar, upptäcker spelaren, förföljer vid behov och reagerar på ljud.
              Dess roll i spelet är inte att vara det mest avancerade hotet, utan att hålla
              spelaren i rörelse och skapa en grundläggande risknivå i varje område. Den
              elefantspindel-liknande fienden är mer komplex och bygger på en tidsbegränsad
              sökfas. Den triggas av ljud, söker runt i ett område, och avbryter om den inte
              hittar spelaren inom sin tidsram. Om den hittar spelaren går den över i förföljelse
              och kan sedan fånga spelaren. Den här designen gör att fienden känns mer
              dramaturgisk än konstant närvarande, vilket passade spelets pacing bättre.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              För navigation implementerade jag A* pathfinding. Den algoritmen valdes eftersom
              den är ett etablerat sätt att hitta effektiva vägar i en grid-baserad miljö.
              I spelet används tiledata för att avgöra om en viss tile är gångbar eller inte,
              vilket gör att fienden kan anpassa sig till den genererade banan. Det var särskilt
              viktigt eftersom kartan inte är statisk. När jag märkte att fiender ibland försökte
              nå områden de egentligen inte kunde nå, lade jag till extra kontroller innan sökningen
              kördes. Det minskade risken för att AI:n fastnade eller gick in i ett dödläge.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Ett viktigt designval var att göra vissa noder modulära så att de kunde återanvändas
              mellan båda fienderna. Det sparade tid och gjorde systemet lättare att underhålla.
              Det gjorde också att jag kunde ändra ett beteende på ett ställe och sedan återanvända
              lösningen i en annan fiende, i stället för att duplicera logik. Den typen av återanvändning
              är ett konkret exempel på modularitet, och det var en av de kvaliteter jag ville uppnå
              i projektet.
            </p>
          </section>

          {/* TIME */}
          <section id="time" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-yellow-300">
              // TIME, PLANNING & OUTCOME
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Arbetet planerades utifrån kursens delrapporter och de veckomål jag satte för varje
              period. Det gjorde att jag hela tiden kunde bryta ner komponenten i hanterbara delar.
              Jag prioriterade att få fram fungerande versioner framför att försöka göra allt perfekt
              direkt. Det var ett medvetet val eftersom AI bara går att bedöma ordentligt när den
              faktiskt går att köra i spelet. Med andra ord var mitt arbetssätt starkt kopplat till
              tid och tillgång till resurser, och jag behövde hela tiden väga ambitiös design mot
              vad som faktiskt gick att hinna genomföra.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              En stor del av min tid gick åt till att lösa buggar, framför allt sådana som uppstod
              i gränslandet mellan beteendeträd, pathfinding och animation. Jag upptäckte att det
              som ser enkelt ut på papper ofta blir mer komplicerat när flera system samverkar.
              Exempelvis kunde ett tillstånd fungera isolerat men ändå skapa problem när det
              kopplades till animationer eller när fienden bytte mål mitt under ett pågående beteende.
              Därför blev felsökning inte ett sidospår utan en central del av själva utvecklingsarbetet.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Om jag uppskattar min arbetsinsats i relation till projektets programmering så var
              min andel tydligast inom de delar som direkt rörde fiende-AI och dess tekniska integration.
              Jag uppskattar att jag stod för en stor del av den programmering som rörde just fienderna,
              särskilt struktur, beslutslogik och navigation. Det viktiga här är inte en exakt procentsiffra,
              utan att det framgår att jag arbetade självständigt med en komponent som var både stor och
              tekniskt central för spelets spelbarhet.
            </p>
          </section>

          {/* VISUALS */}
          <section id="visuals" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-fuchsia-300">
              // VISUALIZATION OF THE COMPONENT
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              I en portfölj för programmering är visualisering viktig eftersom den visar hur
              komponenten faktiskt ser ut och fungerar i praktiken. För fiende-AI:n skulle jag
              därför visa både spelets resultatskikt och utvecklingsskikt. På resultatsidan skulle
              det vara relevant med GIF:ar där fiender patrullerar, upptäcker spelaren, förföljer
              och fångar. På utvecklingssidan skulle jag visa screenshots från Behavior Tree-vyn,
              gärna med tydligt markerade noder, och bilder från A* pathfinding där man kan se hur
              fienden väljer väg över en tile-baserad karta.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Jag skulle också visa hur systemets tillstånd ser ut i ett diagram, eftersom det gör
              det lättare för en annan utvecklare att förstå hur logiken är uppbyggd. Det är särskilt
              värdefullt när en komponent bygger på flera beslutslager. För min fiende-AI betyder det
              att en mottagare ska kunna se skillnaden mellan perception, sökning, förföljelse och
              fångst. Visualiseringarna ska inte bara vara dekorativa; de ska förklara varför systemet
              beter sig som det gör.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MediaSlot title="Behavior Tree image" caption="Lägg in en bild av nodträdet." />
              <MediaSlot title="A* grid image" caption="Lägg in en bild av pathfinding på tilekarta." />
              <MediaSlot title="Capture sequence video" caption="Lägg in videolänk till fångstsekvensen." />
            </div>

            <p className="text-cyan-100/75 leading-relaxed">
              Relation mellan text och bild är viktig. Därför bör varje bild först introduceras
              i text, sedan visas visuellt, och därefter förklaras igen utifrån vad bilden faktiskt
              visar. Det gör portföljen lättare att läsa och hjälper mottagaren att koppla samman
              designbeslut med konkret implementation. Det är också därför jag skulle undvika att
              lägga in bilder utan kontext; i en portfolio måste bilden tjäna en pedagogisk funktion.
            </p>
          </section>

          {/* COLLABORATION */}
          <section id="collaboration" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-purple-300">
              // COLLABORATION WITH OTHER DISCIPLINES
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Även om portföljen primärt handlar om min programmeringskomponent, behövde jag hela
              tiden ta hänsyn till andra discipliner i gruppen. Grafikernas animationer påverkade
              direkt hur jag byggde fiendens states, eftersom en fångstsekvens inte bara måste vara
              logiskt korrekt utan också visuellt sammanhängande. När en animation ändras måste ibland
              logiken anpassas för att undvika att fienden byter till nästa state för tidigt eller för sent.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Ljuddesignen påverkade också mitt arbete mycket tydligt. Fiendernas reaktioner på ljud
              är en viktig del av spelet, och det betydde att jag behövde bygga system som kunde
              ta emot events från andra delar av projektet. På samma sätt påverkade level design
              min kod eftersom procedurgenererade miljöer ställer krav på att navigationen fungerar
              även när kartan varierar. Det här visar att min komponent inte utvecklades i isolation,
              utan i ett nätverk av beroenden mellan flera yrkesroller i projektet.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Om man ser på projektets programmering som helhet var det också viktigt att kunna
              samarbeta med andra programmerare kring gränssnitt och ansvarsfördelning. Jag behövde
              ibland anpassa min lösning för att passa in i andras system eller för att undvika dubbelarbete.
              Det är en realistisk del av spelutveckling: en tekniskt bra lösning är inte tillräcklig
              om den inte fungerar i teamets gemensamma arbetsflöde.
            </p>
          </section>

          {/* ALTERNATIVES */}
          <section id="alternatives" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-cyan-300">
              // ALTERNATIVE SOLUTIONS & FUTURE IMPROVEMENTS
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              En alternativ lösning hade varit att använda en klassisk finite state machine för hela
              fiende-AI:n. Det hade sannolikt varit enklare att komma igång med, men också mer begränsande
              när flera beteenden behöver samexistera och återanvändas. Därför var Behavior Trees ett
              bättre val för just det här projektet, eftersom de är lättare att bygga ut modulärt och
              ger en tydligare struktur för hierarkiska beslut.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Ett annat alternativ hade varit att bygga ett helt eget Behavior Tree-system från grunden.
              I efterhand tror jag att det hade gett mig mer kontroll över implementationen och kanske
              gjort vissa delar lättare att debugga, men det hade också tagit mer tid än vad projektet
              tillät. Unitys färdiga Behavior-lösning gav mig snabbare iteration, men med vissa begränsningar.
              Det är därför jag ser detta val som ett medvetet avvägande mellan kontroll och effektivitet.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              För framtida förbättringar skulle jag prioritera två saker: bättre polering av animationer
              i capture-sekvensen och ännu tydligare separation mellan perception och handling i vissa
              noder. Jag skulle också vilja testa hybridlösningar, till exempel att kombinera Behavior
              Trees med en mer dynamisk beslutsmodell för vissa fiendetyper. Det skulle kunna ge mer
              varierande beteenden i ett större spel, men skulle kräva mer tid, mer testning och mer
              avancerad balans.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-yellow-300">
              // SOURCES & KNOWLEDGE CONNECTIONS
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Mina källor består av både vetenskapliga och branschnära texter, vilket var viktigt
              för att få både teoretisk förankring och praktisk förståelse. Den vetenskapliga artikeln
              av Gugliermo med flera användes som stöd för att förstå hur Behavior Trees kan utvärderas
              utifrån egenskaper som modularitet, korrekthet och robusthet. Det gjorde att jag kunde
              tänka på kvalitet inte bara som “fungerar eller fungerar inte”, utan som hur lätt systemet
              är att förändra, testa och lita på.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Rabin användes som en bredare spel-AI-referens för att förstå hur professionella spelutvecklare
              brukar resonera kring AI-design. Simpson gav mig en mer lättillgänglig genomgång av hur
              Behavior Trees fungerar i praktiken. Champandard och Dunstan hjälpte mig särskilt med
              förståelsen av nodstruktur och med tanken att ett träd kan byggas av återanvändbara delar.
              Tillsammans gav dessa källor mig både språk och struktur för att motivera mina val.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Det viktiga i portföljen är att visa hur jag faktiskt använde kunskapen, inte bara att
              jag läste den. Därför kopplar jag källorna direkt till val som modulara noder,
              fallback-logik, avgränsade sökperioder och pathfindingkontroller. Det är också så jag
              visar kvalitet: genom att kunna förklara varför en lösning är rimlig, inte bara genom
              att visa att den existerar.
            </p>
          </section>

          {/* ETHICS */}
          <section id="ethics" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-fuchsia-300">
              // SOCIETAL & ETHICAL ASPECTS
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              VOICEBOX riktar sig främst till en ung vuxen publik, ungefär 15 år och uppåt.
              Det innebär att spelets fiender måste skapa spänning utan att bli onödigt obehagliga
              eller orättvisa. En viktig etisk aspekt i min komponent har därför varit att balansera
              stress och kontroll. Fienderna ska upplevas som hotfulla nog för att skapa motivation,
              men inte så starka att spelaren känner att spelet straffar dem utan möjlighet att förstå
              vad som händer.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Co-op-dimensionen gör detta extra viktigt, eftersom en fiendesystem som är för hårt
              kan slå sönder gruppens sociala upplevelse. När en spelare blir tagen eller förlorar
              sin voicebox påverkas inte bara den spelaren utan hela gruppens dynamik. Därför var det
              viktigt för mig att bygga beteenden som är tydliga, reversibla och begripliga. Det gör
              att spelet kan skapa nerv utan att bli känslomässigt överväldigande.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Jag tycker också att det är relevant att reflektera över representation. Genom att
              använda fantasifulla fiender i stället för realistiska människorepresentationer minskar
              risken för problematisk stereotypering. Det är ett medvetet designval som gör att fokus
              kan ligga på spelmekanik, stämning och samarbete i stället för på laddad symbolik.
            </p>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-widest text-cyan-400">
              // REFLECTION, QUALITY & CONCLUSION
            </h2>

            <p className="text-cyan-100/75 leading-relaxed">
              Om jag summerar arbetet så tycker jag att fiende-AI:n blev funktionell, användbar
              och tillräckligt flexibel för att stödja spelets design. Den blev inte fullständigt
              polerad, men den nådde en nivå där den gick att spela med och vidareutveckla.
              Det i sig är viktigt, eftersom spelutveckling ofta handlar om att leverera en fungerande
              och förståelig lösning inom givna ramar snarare än att skapa ett tekniskt perfekt system.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Min största lärdom är att kvalitet i spel-AI inte bara handlar om hur avancerad
              tekniken är, utan om hur väl systemet stöder upplevelsen. Modularitet, robusthet och
              tydliga transitions var därför lika viktiga som själva pathfindingen eller beteendeträdet.
              Jag lärde mig också att tidig testning sparar mycket tid senare, eftersom flera problem
              blir tydligare först när systemet körs i riktig spelmiljö.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Jag skulle också sammanfatta min egen arbetsprocess som relativt självständig.
              Jag planerade, implementerade, testade och utvärderade fiende-AI:n främst på egen hand,
              samtidigt som jag behövde anpassa mig till teamets övriga discipliners behov och till
              förändringar i spelets design. Det är just den kombinationen som gör portföljen relevant
              i ett utvecklarsammanhang: den visar hur jag arbetar när jag både behöver driva en komponent
              själv och samtidigt få den att fungera i ett större projekt.
            </p>

            <p className="text-cyan-100/75 leading-relaxed">
              Om jag skulle fortsätta efter kursen skulle jag fokusera på att förbättra polishnivån,
              stabilisera fångstsekvenserna och eventuellt utveckla en egen BT-lösning för att få större
              kontroll över debug och skalbarhet. Men redan nu visar komponenten den kärnkompetens som
              portföljen ska förmedla: att jag kan planera, genomföra, utvärdera och förbättra en
              spelprogrammeringskomponent med hänsyn till både tid, kvalitet och samarbete.
            </p>
          </section>
        </main>
      </div>
  );
}

function MediaSlot({
                     title,
                     caption,
                   }: {
  title: string;
  caption: string;
}) {
  return (
      <div className="border border-cyan-900/40 bg-[#0a0a1a] rounded-sm overflow-hidden">
        <div className="h-44 bg-cyan-950/30 flex items-center justify-center text-cyan-600 text-xs uppercase tracking-widest px-4 text-center">
          {title}
        </div>
        <div className="p-4 border-t border-cyan-900/30">
          <p className="text-cyan-100/65 leading-relaxed text-sm">{caption}</p>
        </div>
      </div>
  );
}