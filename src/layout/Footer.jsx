import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/codekoreh",
    label: "GitHub",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/akorede-o-523ba0396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_ap",
    label: "LinkedIn",
  },
  {
    Icon: FaTwitter,
    href: "https://x.com/korehcode_",
    label: "Twitter",
  },
  {
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@codekoreh?_r=1&_t=ZP-95T397stLkU",
    label: "TikTok",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/share/184CmBrQEj/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    Icon: FaYoutube,
    href: "https://youtube.com/@brightcodekids",
    label: "YouTube",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Koreh<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              ©️ {currentYear} Koreh. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.Icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary hover:text-primary transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
