"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "1",
    title: "NexFinance Platform",
    description: "A comprehensive financial dashboard for enterprise resource planning, featuring real-time analytics, automated reporting, and secure transaction handling.",
    problem: "Existing solutions lacked real-time synchronization and were too complex for daily operational staff.",
    image: "/api/placeholder/800/600",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "2",
    title: "Lumina AI Editor",
    description: "An AI-powered content creation tool that helps marketers generate, edit, and optimize long-form content with context-aware suggestions.",
    problem: "Marketers spent too much time switching between drafting tools, SEO analyzers, and AI prompters.",
    image: "/api/placeholder/800/600",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Framer Motion"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "3",
    title: "Vela E-Commerce",
    description: "A high-performance headless e-commerce storefront with sub-second page loads, global edge caching, and seamless checkout.",
    problem: "Legacy monolithic architecture resulted in slow load times leading to high cart abandonment rates.",
    image: "/api/placeholder/800/600",
    techStack: ["Next.js", "Shopify Storefront API", "Redis", "Vercel"],
    githubLink: "#",
    liveLink: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 md:mb-32 text-center md:text-left"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects that showcase my approach to solving complex problems through elegant engineering and thoughtful design.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={containerRef} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}>
      {/* Project Image */}
      <motion.div 
        style={{ y: y1 }}
        className="w-full md:w-1/2 relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl aspect-[4/3] bg-secondary"
      >
        <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </motion.div>

      {/* Project Info */}
      <motion.div 
        style={{ y: y2 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <div className="inline-flex mb-6">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">Project 0{index + 1}</span>
        </div>
        
        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-6 shadow-lg relative -ml-4 md:ml-0 md:-ml-12 lg:-ml-24 z-20 hover:bg-secondary/50 transition-colors">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="pt-4 border-t border-border/50">
            <span className="block text-xs uppercase tracking-wider text-foreground font-semibold mb-2">The Challenge</span>
            <p className="text-muted-foreground text-sm italic">{project.problem}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 pl-4 md:pl-0">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-background font-mono text-xs text-foreground/80">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-6 pl-4 md:pl-0">
          <Link href={project.githubLink} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
            <FaGithub size={18} /> View Source
          </Link>
          <Link href={project.liveLink} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-highlight transition-colors">
            <ExternalLink size={18} /> Live Demo
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
