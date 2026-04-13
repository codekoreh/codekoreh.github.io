const experience = [
  {
    period: "2025 - Present",
    role: "Backend Developer",
    company: "Independent / Freelance",
    description:
      "Designed and built scalable backend systems focused on reliability, performance, and real-world use cases. Developed multiple production style services including transaction processing, authentication systems, and job queues. Emphasized clean architecture, security best practices, and data integrity.",
    technology: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "REST",
      "APIs",
    ],
    current: true,
  },
  {
    period: "2025",
    role: "Blockchain Backend Developer",
    company: "Personal Project (Web3)",
    description:
      "Built a blockchain event indexing system that listens to smart contract events and synchronizes on chain data with off chain databases. Implemented event listeners using ethers.js and designed efficient data pipelines for querying blockchain activity.",
    technology: [
      "Node.js",
      "TypeScript",
      "Ethereum",
      "ethers.js",
      "PostgreSQL",
    ],
    current: false,
  },
  {
    period: "2025",
    role: "System Design & Infrastructure Engineer",
    company: "Independent Project",
    description:
      "Developed a background job processing system using queues and workers to handle asynchronous tasks such as email delivery and data processing. Focused on scalability, fault tolerance, and system reliability using Redis and BullMQ.",
    technology: ["Node.js", "TypeScript", "Redis", "BullMQ", "System Design"],
    current: false,
  },
  {
    period: "2024",
    role: "Backend Development Trainee",
    company: "Self-Directed Learning",
    description:
      "Focused on backend fundamentals including API design, database management, and authentication systems. Built foundational projects to understand server side architecture and data flow.",
    technology: [
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST",
      "APIs",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building systems that{" "}
            <span className="font-serif italic font-normal text-white">
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A focused journey from learning backend fundamentals to designing
            and developing production-style systems, with an emphasis on
            scalability, reliability, and clean architecture.
          </p>
        </div>
        {/* Section Header Close */}

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Timeline Dot Close */}
                {/* Timeline Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technology.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Timeline Content Close */}
              </div>
            ))}
          </div>
          {/* Experience Items close*/}
        </div>
        {/* Timeline Close */}
      </div>
    </section>
  );
};
