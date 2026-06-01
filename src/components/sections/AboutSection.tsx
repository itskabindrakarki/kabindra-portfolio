"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-background border-t border-border/30">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
            About Me
          </h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Introduce
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          {/* Left Column - Image & Info */}
          <div className="w-full lg:w-5/12 flex flex-col gap-12">
            {/* Circular Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] mx-auto lg:mx-0 rounded-full bg-secondary overflow-hidden shadow-lg border-[6px] border-white"
            >
              <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply" />
            </motion.div>

            {/* Personal Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm md:text-base"
            >
              <div className="flex border-b border-border/50 pb-3">
                <span className="w-24 font-bold text-foreground">Name :</span>
                <span className="text-muted-foreground">Kabindra Karki</span>
              </div>
              <div className="flex border-b border-border/50 pb-3">
                <span className="w-24 font-bold text-foreground">Age :</span>
                <span className="text-muted-foreground">27 Years</span>
              </div>
              <div className="flex border-b border-border/50 pb-3">
                <span className="w-24 font-bold text-foreground">Email :</span>
                <span className="text-muted-foreground">info@kabindrakarki.com</span>
              </div>
              <div className="flex border-b border-border/50 pb-3">
                <span className="w-24 font-bold text-foreground">Address :</span>
                <span className="text-muted-foreground">1234, Parkstreet Newyork City</span>
              </div>
              <div className="flex border-b border-border/50 pb-3">
                <span className="w-24 font-bold text-foreground">Phone :</span>
                <span className="text-muted-foreground">(+91) 12345 95487</span>
              </div>
              <div className="flex">
                <span className="w-24 font-bold text-foreground">Website :</span>
                <span className="text-muted-foreground">www.kabindrakarki.com</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Quote & Skills */}
          <div className="w-full lg:w-7/12 flex flex-col gap-12 pt-4">
            
            {/* Quote Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <span className="absolute -top-6 -left-6 text-6xl text-border/40 font-serif leading-none">“</span>
                <p className="text-muted-foreground text-lg leading-relaxed italic relative z-10">
                  Donec tincidunt arcu a interdum efficitur. Nullam egestas bibendum tristique. Donec tincidunt arcu a interdum efficitur. Nullam egestas bibendum tristique. Quisque Donec tincidunt arcu a interdum efficitur.
                </p>
              </div>
              
              {/* Signature Placeholder */}
              <div className="mt-6 mb-8">
                <div className="font-serif text-3xl text-foreground opacity-80" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Kabindra
                </div>
              </div>

              {/* Logos */}
              <div className="flex items-center gap-6 mt-8 opacity-70">
                <div className="h-8 w-24 bg-foreground/10 flex items-center justify-center font-bold text-sm tracking-wider">SME</div>
                <div className="h-8 w-24 bg-foreground/10 flex items-center justify-center font-bold text-sm tracking-wider flex items-center gap-1"><span className="w-3 h-3 bg-foreground inline-block transform rotate-45"></span> git</div>
                <div className="h-8 w-24 bg-foreground/10 flex items-center justify-center font-bold text-sm tracking-wider">BET☆</div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 mt-4"
            >
              <SkillBar name="Photoshop" percentage={99} />
              <SkillBar name="Illustrator" percentage={90} />
              <SkillBar name="Mobile App Design" percentage={95} />
              <SkillBar name="Web Development" percentage={97} />
            </motion.div>
          </div>
        </div>

        {/* Download CV Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" className="rounded-full px-10 py-6 bg-accent text-white hover:bg-accent/90 shadow-lg text-sm tracking-wide font-medium">
            Download CV
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-accent"
        />
      </div>
    </div>
  );
}
