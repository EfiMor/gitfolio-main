import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono overflow-x-hidden">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-cyan-300 font-bold tracking-widest">
              VOICEBOX // ENEMY AI PORTFOLIO
            </Link>

            <div className="flex gap-6 text-xs uppercase text-cyan-700">
              <Link href="#intro">Intro</Link>
              <Link href="#context">Project</Link>
              <Link href="#process">Development</Link>
              <Link href="#ai">AI</Link>
              <Link href="#time">Time</Link>
              <Link href="#collab">Collab</Link>
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

            <p>
              VOICEBOX is a casual co-op puzzle game in which players navigate a
              procedurally generated themepark with the help of proximity voice chat.
              My responsibility in the project has been to design and implement the game's enemy AI,
              which is a central part of the game.
            </p>

            <p>
              The AI is created in Unity and combines Behavior Trees and A* pathfinding.
              The goal was to create two different enemies that would behave according to
              the designed goals my group had created at the beginning of this project.
            </p>

            <p>
              This project shows how I work iteratively with the enemies AI in order to create
              the desired behaviours. The enemies are an important part of VOICEBOX, which is
              why I have tested them early in the project and tweaked their behaviour logic when
              playtesters found bugs or undesired behaviours.
            </p>

            <p>
              In the portfolio below, I am not only showing how the enemy AI works but also how
              I have tried to ensure it is of good quality. For me, quality means that the AI is
              modular, robust, correct and possible to further develop.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-cyan-500">GAMEPLAY OVERVIEW</p>
              <div className="h-72 border border-cyan-800 rounded-sm flex items-center justify-center text-cyan-700 bg-cyan-950/10">
                <img
                    src="/gifs/enemy-loop.gif"
                    alt="Enemy behaviour"
                    className="w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Project */}
          <section id="context" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-400 font-bold">
              Project
            </h2>

            <p>
              The game takes place in a procedurally generated themepark where players must
              work together in order to solve puzzles and avoid enemies. The proximity chat no longer
              is simply used as a communication tool but also as a game mechanic that players can
              use to solve puzzles and to which enemies react to.
            </p>

            <p>
              I praktiken betydde det att varje fiende behövde kunna reagera på både synliga och ljudbaserade
              stimuli, men utan att skapa ett system som blev för komplext att felsöka. Eftersom banorna är
              procedurellt genererade kan inte AI:n vara beroende av fasta kartvägar eller statiskt placerade
              navpunkter. Den måste i stället fungera i olika layout-varianter och ändå behålla samma grundlogik.
            </p>

            <p>
              The map is procedurally generated which means that the enemies can not rely on navigation
              points. Instead, the enemies must be able to work in different variations of the game map 
              without choosing the wrong behaviour or getting stuck. This has caused me to test the
              enemies as often as possible in order for the enemies to be robust so that
              they can handle a few unexpected situations.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-cyan-500">[ AI SYSTEM DIAGRAMS ]</p>
              <div className="h-72 border border-cyan-800 rounded-sm flex items-center justify-center text-cyan-700 bg-cyan-950/10">
                <Image
                    src="/images/behavior-tree-small-enemy.png"
                    alt="Small Enemy Behavior Tree visualization"
                    fill
                    className="object-contain"
                />
                <Image
                    src="/images/behavior-tree-hybrid-enemy.png"
                    alt="Hybrid Enemy Behavior Tree visualization"
                    fill
                    className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Development process
            </h2>

            <p>
              During development I worked iteratively, meaning I created simple but working versions
              of the enemies first before trying to improve them. This choice allowed for early 
              playtesting, which helped me find bugs and other things to improve upon.
            </p>

            <p>
              The first version of the small enemy only consisted of two actions: patrol and chase.
              The enemy was able to see the players but it could not send a noise signal or
              navigate the map in a proper way. It was only after that A* pathfinding and the
              noise signal where added to it's behaviour tree.
            </p>

            <p>
              I also had to reprioratize a lot during development. For example when certain playtesters
              found that enemies were getting stuck or reacting incorectly, I had to focus on fixing
              those issues instead of adding new behaviours. This meant that certain behaviours had to wait,
              but it made the new enemy version more usable for testing.
            </p>

            <p>
              Another important part of the process was that I worked on making a few nodes more modular.
              This allowed the same nodes to be reused between the two enemy types. This reusability
              was imporant because it reduced development time and the risk of unexepected bugs.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-cyan-500">[ HYBRID ENEMY ]</p>
              <div className="h-72 border border-cyan-800 rounded-sm flex items-center justify-center text-cyan-700 bg-cyan-950/10">
                <Image
                    src="/images/Hybrid.png"
                    alt="hybrid enemy"
                    fill
                    className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* AI */}
          <section id="ai" className="space-y-10">
            <h2 className="text-3xl text-cyan-300 font-bold">
              AI architecture & implementation
            </h2>

            <p>
              The AI system is built using Behavior Trees specifically Unitys Behavior package,
              as this approach allows for fine control of the enemies behaviour and modularity.
              This choice allowed for quick iteration during development and effective debugging.
            </p>

            <p>
              The small enemy follows a continuous behavioral loop: patrol → detect → 
              chase → investigate sound → return to patrol. The small enemy has this 
              behavioral loop so that players do not feel too relax while playing the game.
            </p>

            <p>
              The hybrid enemy is more advanced and acts as a temporary threat. It is triggered 
              by sound events, performs a local area search, and despawns if no player is found.
              This is a deliberate design choice in order to avoid overwhelming the player.
            </p>

            <p>
              A* pathfinding was implemented on a tile-based grid where each tile contains a boolean.
              An important issue that arose was that in certain cases the goal was in a place the
              enemy could not go to, which caused it to get stuck in place trying to go somewhere
              it could not. This was resolved through some extra checks added to the code.
            </p>

            <p>
              As I mentioned before I was using Unitys Behavior package for the creation of the enemies
              Behaviour Trees. This provided a visual of the behaviour, which made it easier to debug 
              when a node did not transition to the expected node. At the same time it introduced
              limitations, as the package did not always allow me to do as I wanted. Meaning that
              I had to create scripts that could run certain logic for me before their results
              where passed along to the behaviour tree.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-cyan-500">[ ENEMY PATHFINDING]</p>
              <div className="h-72 border border-cyan-800 rounded-sm flex items-center justify-center text-cyan-700 bg-cyan-950/10">
                <img
                    src="/gifs/Enemy-Navigation.gif"
                    alt="Enemy navigation"
                    className="w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* TIME */}
          <section id="time" className="space-y-10">
            <h2 className="text-3xl text-yellow-300 font-bold">
              Division of my time
            </h2>

            <p>
              Approximately half of the work time was spent on the games systems,
              such as puzzles, the player, networking etc. The other half was spent
              implementing the enemies Behavior Trees and testing them.
            </p>

            <p>
              The first half of the project focused on establishing a functional game while
              the second half was spent on finishing the enemy behaviours for example.
              This meant that my time was not evenly distributed between planning, implementation,
              and polishing, but instead changed depending on which sort of issues where encountered
              that day or week.
              I deliberately chose to keep certain parts of the enemy simpler but functional, rather
              than attempting to increase the amount of behaviours that would not have time to be tested.
            </p>
          </section>

          {/* COLLAB */}
          <section id="collab" className="space-y-10">
            <h2 className="text-3xl text-fuchsia-300 font-bold">
              Collaboration
            </h2>

            <p>
              The AI system was highly dependent on animation and level design.
              AI-systemet var starkt beroende av animationer, ljud och level design.
              Animations created by my groups 2D artist required precise synchronization 
              with state transitions, which if not syncronized properly it would look 
              weird.
            </p>
            
            <p>
              Because the levels are procedurally generated, the AI needed to function 
              independently of static level design, which increased the demands on
              pathfinding and fallback logic.
            </p>

            <p>
              I also collaborated with the other programmer by trying to make sure that
              the enemies AI was sending certain events during for example capture of the player
              or by communicating on how the enemy was going to navigate the map.
            </p>

            <p>
              Collaboration with other disciplines directly influenced my implementation. When 
              art, animation or sound changed, I often needed to either replan certain behaviours
              or add a few events. One time I had to replan certain behaviours because one of the 
              enemies entire design was changed. Thankfully, it was changed before I started 
              implementing it.
            </p>
          </section>

          {/* ALTERNATIVES*/}
          <section id="alternatives" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Alternative Design Choices
            </h2>

            <p>
              FSM (Finite State Machine) was considered but rejected because the system quickly
              became too complex when multiple behaviors were required.
            </p>

            <p>
              Utility AI was another option for more dynamic decision-making, but it was not chosen
              because it was simply not a desired thing for the project.
            </p>

            <p>
              Using two methods such as Behavior Trees and Utility AI would have allowed for more 
              interesting behaviours, but was considered too time-consuming.
            </p>

            <p>
              In retrospect, several alternative solutions were possible. For example, I could have 
              built a fully custom Behavior Tree system instead of using Unity’s Behavior Package.
              This would have provided greater flexibility, however it would also have required 
              more time to set up. That would have impacted the ability to create enemies that were
              working in time for example a playtest.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="space-y-10">
            <h2 className="text-3xl text-cyan-300 font-bold">
              Sources
            </h2>

            <p>
              The project is primarily based on Gugliermo et al. (2024), which defines different 
              key properties for evaluating behavior trees. A few of these properties were
              modularity, correctness and robustness.
            </p>

            <p>
              These concepts were directly applied in the design of the AI architecture, particularly
              in structuring the nodes and in testing the enemies to ensure that they work correctly.
              I also used industry related sources to gain a practical understanding of how Behavior
              Trees work.
            </p>

            <p>
              The academic source provided a framework for evaluating quality, particularly in terms of
              modularity, correctness, and robustness though there were a few more properties. This made
              it possible not only to say that a behaviour tree “works,” but also to reason about why 
              it is good or not.
            </p>
          </section>

          {/* ETHICS */}
          <section id="ethics" className="space-y-10">
            <h2 className="text-3xl text-purple-300 font-bold">
              Ethics
            </h2>

            <p>
              The AI is designed to create tension rather than frustration. This means that
              enemy behaviours are made to be predictable.
            </p>

            <p>
              Because the game uses social voice chat, the AI indirectly affects social dynamics.
              This has been considered by balancing threat levels and recovery after capture.
            </p>

            <p>
              An important ethical aspect is that the game targets a young adult audience. Enemy
              behavior should therefore create tension and pressure without feeling unbalanced
              or excessively stressful. If enemies are too aggressive, the game risks feeling 
              unfair, while overly weak enemies would reduce tension.
            </p>

            <p>
              There is also a the fact that players can lose their voice box. Since this affects 
              group communication, it can create frustration,but also strengthen cooperation as
              players must adapt. I have therefore aimed to ensure that this type of loss feels 
              temporary and recoverable, rather than permanent.
            </p>

            <p>
              We have also deliberately chosen fantastical enemies rather than realistic ones.
              This reduces the risk of problematic representation and keeps the focus on gameplay 
              mechanics rather than stereotypes.
            </p>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="space-y-10">
            <h2 className="text-3xl text-cyan-400 font-bold">
              Reflection
            </h2>

            <p>
              The project resulted in a functional AI system that meets its core requirements 
              but is not fully polished. The main takeaway is that game AI requires
              continuous iteration.
            </p>

            <p>
              In future projects, a custom-built Behavior Tree system would provide better control
              over scalability and integration with other systems in the game.
            </p>

            <p>
              If I summarize my key takeaways, it is important to start simple, test as early as possible,
              and then improve with clear goals in mind. I will also try to make the nodes more modular 
              quicker next time as that saves a lot of time.
            </p>
          </section>
        </main>
      </div>
  );
}