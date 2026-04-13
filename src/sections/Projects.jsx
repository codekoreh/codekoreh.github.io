import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Transaction Processing API",
    description:
      "A backend service for handling user transactions, including account balances, transaction history, and secure processing workflows. Designed with a focus on data integrity, error handling, and reliable state management.",
    image: "project1.JPG",
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Authentication",
      "Data Integrity",
      "Backend Architecture",
      "Docker",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Blockchain Event Indexer",
    description:
      "A backend service that listens to blockchain smart contract events and stores them in a structured database for querying and analysis. Bridges on-chain activity with off-chain systems.",
    image: "project2.jpg",
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Blockchain",
      "Ethereum",
      "ethers.js",
      "Event Processing",
      "Data Synchronization",
      "Web3 Integration",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Background Job Processing System",
    description:
      "A backend system for handling asynchronous tasks such as email sending, data processing, and scheduled jobs using queues and workers.",
    image: "project3.jpg",
    tags: [
      "Node.js",
      "TypeScript",
      "Redis",
      "BullMQ",
      "Background",
      "Jobs Queue",
      "Systems Scalable",
      "System Design",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Authentication & Authorization Service",
    description:
      "A secure backend service for handling user authentication and role based access control. Implements JWT based authentication, refresh token workflows, password hashing, and protected API routes. Designed with a focus on security best practices, scalability, and clean architecture for real-world applications. Implements production style authentication using JWT, refresh tokens, and role-based access control.",
    image: "project4.jpg",
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "JWT Authentication",
      "Authorization Security",
      "API Design",
      "Backend Architecture",
    ],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className=" container mx-auto px-6 relative z-10">
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
            A selection of my recent work, from complex backend engineering to
            innovative tools that solve real world problems
          </p>
        </div>

        {/* Project Grid */}
        {/* Here */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-b-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt="project.title"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50 
                to-transparent opacity-60"
                />
                {/* Main Issue */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
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
                {/* issue stops here */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary 
                  group-hover:translate-x-1 group-hover:translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
              {/* Content stopped */}
              {/* Error */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    key={tagIdx}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Error End*/}
            </div>
          ))}
        </div>
        {/* View All Call To Action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
        {/* View All Call To Action Ends */}
      </div>
    </section>
  );
};
