import { useMemo } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const skills = [
  "Node.js",
  "NestJS",
  "REST APIs",
  "WebSockets",
  "Event driven architecture",
  "Solidity",
  "Hardhat",
  "ethers.js",
  "Smart contract development",
  "On chain / Off chain integration",
  "PostgreSQL",
  "MongoDB",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Vercel",
  "Render",
  "Railway",
  "AWS (basics)",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/Hero1.JPG"
          alt="Hero image"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s 
              ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-52 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Backend Engineer, APIs, System & Blockchain
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building scalable
                <br />
                <span className="text-primary glow-text">systems </span>
                and blockchain powered
                <br />
                <span className="font-serif italic font-normal text-white">
                  applications.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Backend engineer focused on secure, high performance APIs and
                real-world system reliability. Specializing in event-driven
                architectures and on-chain ↔ off-chain integrations.
              </p>
            </div>

            {/* Call To Action "CTA" */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="/Akorede_Olasunkanmi_Backend_Engineer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/codekoreh" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/akorede-o-523ba0396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                },
                {
                  icon: FaTiktok,
                  href: "https://www.tiktok.com/@codekoreh?_r=1&_t=ZP-95T397stLkU",
                },
                { icon: FaTwitter, href: "https://x.com/korehcode_?s=21" },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/share/184CmBrQEj/?mibextid=wwXIfr",
                },
                {
                  icon: FaYoutube,
                  href: "https://youtube.com/@brightcodekids?si=yrZx_tCTDnHtCCUF",
                },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-400">
            {/* Profile Image */}
            {/* <div
              className="absolute inset-0 
            rounded-4xl bg-gradient-to-br 
            from-primary/10 via-transparent 
            to-primary/2 blur-2xl animate-pulse"
            /> */}
            <div className="relative max-w-sm mx-auto">
              <div className="relative glass rounded-4xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Prince Akorede"
                  className="w-full object-cover rounded-2xl opacity-90"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open for collaborations
                    </span>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {/* flex animate-marquee */}
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
