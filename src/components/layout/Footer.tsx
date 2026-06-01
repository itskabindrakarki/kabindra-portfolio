"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none" 
           style={{ background: "radial-gradient(ellipse at bottom, var(--accent) 0%, transparent 70%)" }} />

      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-foreground">
                KK.
              </span>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base max-w-sm mb-6 leading-relaxed">
              Building scalable digital products that millions love. Transforming complex problems into elegant, premium web experiences.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/kabindrakarki" icon={<FaGithub size={20} />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/kabindrakarki" icon={<FaLinkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com/kabindrakarki" icon={<FaTwitter size={20} />} label="Twitter" />
              <SocialLink href="mailto:hello@kabindrakarki.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              <FooterLink href="#about" label="About" />
              <FooterLink href="#skills" label="Skills" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#experience" label="Experience" />
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="#" label="Full Stack Development" />
              <FooterLink href="#" label="UI/UX Engineering" />
              <FooterLink href="#" label="Performance Optimization" />
              <FooterLink href="#" label="API Development" />
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kabindra Karki. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-foreground font-medium">Next.js</span>
            <span>&</span>
            <span className="text-foreground font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 flex items-center justify-center rounded-full border border-border/50 bg-secondary/50 text-foreground/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-foreground text-sm transition-colors relative group">
        <span>{label}</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}
