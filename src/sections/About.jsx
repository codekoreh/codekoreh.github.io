import { Code2, Lightbulb, Rocket, User } from "lucide-react";
import { FaCode, FaLightbulb, FaRocket, FaUser } from "react-icons/fa";

const highlights = [
  {
    Icon: FaCode,
    title: "System Design",
    description: "Designing clean, maintainable backend architectures..",
  },

  {
    Icon: FaRocket,
    title: "Data Integrity",
    description: "Ensuring accurate and reliable data handling across systems.",
  },

  {
    Icon: FaUser,
    title: "Reliability",
    description:
      "Building systems that handle errors and real world conditions.",
  },

  {
    Icon: FaLightbulb,
    title: "Blockchain Integration",
    description: "Bridging on chain data with backend services.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className=" container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Backend system built for reliability,
              <span className="font-serif italic font-normal text-white">
                {" "}
                not just code.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Backend Engineer building reliable APIs and backend systems
                using Node.js, TypeScript, and PostgreSQL.
              </p>
              <p>
                I design and implement backend services with a focus on clean
                architecture, data integrity, and system reliability. My work
                includes building APIs, handling authentication, structuring
                databases, and managing real world data flows in production
                style environments.
              </p>
              <p>
                I integrate blockchain components into backend systems,
                connecting on chain events and transactions with off chain
                services through event processing and data synchronization.
              </p>
              <p>
                I approach engineering with a systems mindset, thinking in terms
                of performance, failure handling, and long term maintainability
                rather than just code.
              </p>
              <p className="text-muted-foreground">
                Experience integrating blockchain into backend systems (on chain
                ↔ off chain data flows).
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to design and build backend systems that are
                reliable, maintainable, and built for real world use, focusing
                on clean architecture, data integrity, and systems that hold up
                under pressure.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
