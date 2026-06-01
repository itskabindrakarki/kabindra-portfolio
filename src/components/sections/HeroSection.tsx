"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background"
      id="hero"
    >
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-full pt-12 lg:pt-0 relative z-10"
        >
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Hello !
            </h2>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              I am KABINDRA KARKI
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-wide mt-6">
              Think Deeply But Do Simple
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute -bottom-24 left-0 flex items-center gap-4 text-muted-foreground"
          >
            <span className="text-sm font-medium tracking-widest">Scroll</span>
            <div className="w-4 h-4 border-b-2 border-r-2 border-muted-foreground transform rotate-45 animate-bounce mt-[-8px]" />
          </motion.div>
        </motion.div>

        {/* Right Content - Image and Gradient Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px] lg:h-[700px]"
        >
          {/* Outer thin circle */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-border/50 -translate-x-4 translate-y-4"></div>

          {/* Inner gradient circle */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-accent via-[#6366f1] to-[#ec4899] opacity-90 overflow-hidden shadow-2xl">
            {/* Placeholder for actual person image. We will use a generic shape/color for now */}
            <div className="w-full h-full bg-foreground/5 backdrop-blur-sm mix-blend-overlay"></div>
          </div>

          {/* The Person Cutout Image would go here. We use an empty div as placeholder */}
          <div className="relative z-10 w-[280px] h-[400px] md:w-[400px] md:h-[550px] bg-foreground/10 rounded-b-full rounded-t-[200px] border-b-0 hidden">
            <img src="./avatar.jpg" alt="Kabindra karki" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
