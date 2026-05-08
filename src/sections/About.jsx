import { Code2, Lightbulb, Rocket, User } from "lucide-react";
import { FaCode, FaLightbulb, FaRocket, FaUser } from "react-icons/fa";

const highlights = [
  {
    Icon: FaCode,
    title: "Full-Stack Engineering",
    description:
      "Building end-to-end products — from backend APIs to frontend delivery.",
  },
  {
    Icon: FaRocket,
    title: "Fintech & Payments",
    description:
      "Designing and deploying production payment systems handling fiat and crypto.",
  },
  {
    Icon: FaUser,
    title: "System Reliability",
    description:
      "Building systems that handle errors and real-world conditions under pressure.",
  },
  {
    Icon: FaLightbulb,
    title: "Blockchain & Web3",
    description:
      "Bridging on-chain events and transactions with off-chain backend services.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Full-stack systems built for the real world,
              <span className="font-serif italic font-normal text-white">
                {" "}
                not just demos.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Full-stack Software Engineer with a backend-first approach —
                building production-grade fintech and Web3 systems using
                Node.js, TypeScript, and PostgreSQL.
              </p>
              <p>
                I own products end-to-end — from API design and database
                architecture to frontend delivery, deployment, and SEO. I think
                in systems: performance, failure handling, security, and
                long-term maintainability are core to how I build.
              </p>
              <p>
                I have hands-on experience integrating blockchain into live
                production systems — covering on-chain ↔️ off-chain data flows,
                event indexing, crypto payment processing, and transaction
                handling.
              </p>
              <p>
                Most recently, I architected and deployed CariPay — a complete
                cross-border payment platform built solo, supporting fiat and
                crypto payments, 3-tier processing, referral systems, and
                Cloudflare deployment.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My goal is to build reliable, scalable systems that solve
                real-world problems — from fintech infrastructure to Web3
                integrations — with clean architecture and full ownership from
                day one.
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
