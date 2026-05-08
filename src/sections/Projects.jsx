import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "CariPay — Cross-Border Payment Platform",
    description:
      "A full-stack, production-grade payment platform built entirely solo. Supports card payments, crypto payments, cash withdrawals via code, and crypto-to-fiat conversion. Features a 3-tier payment processing engine, referral and affiliate system, multi-layer security architecture, and a real-time admin dashboard. Deployed on Cloudflare with full transaction handling and on-chain ↔️ off-chain data flows.",
    image: "ProjectImg.PNG",
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Blockchain",
      "Crypto Payments",
      "Fiat Payments",
      "ethers.js",
      "Cloudflare",
      "React",
      "Tailwind CSS",
      "JWT Authentication",
      "System Design",
      "Full-Stack",
    ],
    link: "https://caripay.app",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Real-world, production-grade systems built and deployed from scratch
          </p>
        </div>

        {/* Project Grid — single project, centered */}
        <div className="flex justify-center">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-b-2xl overflow-hidden animate-fade-in w-full max-w-2xl"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GrGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 px-6 pb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    key={tagIdx}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Live CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://caripay.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View Live Project
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
