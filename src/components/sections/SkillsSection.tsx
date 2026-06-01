"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    category: "Database & ORM",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-highlight">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle gradient background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 relative z-10 border-b border-border/50 pb-4">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-3 relative z-10">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
