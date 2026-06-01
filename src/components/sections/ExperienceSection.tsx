"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "Google",
    role: "Senior Full Stack Engineer",
    period: "2021 - Present",
    description: "Led the core architecture team for a new enterprise product. Scaled the microservices architecture to handle 5M+ daily active users while improving API response times by 40%.",
  },
  {
    id: "2",
    company: "Stripe",
    role: "Frontend Engineer",
    period: "2018 - 2021",
    description: "Developed highly accessible and performant UI components for the merchant dashboard. Spearheaded the migration from a legacy monolithic frontend to Next.js.",
  },
  {
    id: "3",
    company: "Vercel",
    role: "Software Engineer",
    period: "2015 - 2018",
    description: "Contributed to core open-source tools and built internal developer tooling that increased team deployment velocity by 3x.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-background border-t border-border/50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center md:text-left flex items-center gap-4"
        >
          <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center hidden md:flex">
            <Briefcase className="text-accent h-6 w-6" />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-2">
              Career <span className="text-highlight">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A timeline of my professional experience and the impact I've made.
            </p>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background z-10 mt-2" />

      {/* Date (Mobile: shown inside card, Desktop: shown opposite side) */}
      <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start pl-[40px] md:pl-0' : 'md:justify-end pl-[40px] md:pl-0'} hidden md:flex mt-1`}>
        <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50">
          {experience.period}
        </span>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-1/2 pl-[40px] md:pl-0">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-secondary/50 transition-colors shadow-sm group">
          <div className="md:hidden mb-4">
            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase bg-background px-3 py-1 rounded-full border border-border/50">
              {experience.period}
            </span>
          </div>
          
          <h3 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
            {experience.role}
          </h3>
          <h4 className="text-lg text-highlight font-medium mb-4">{experience.company}</h4>
          
          <p className="text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
