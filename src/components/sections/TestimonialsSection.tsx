"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "CTO",
    company: "NexFinance",
    content: "Kabindra is simply exceptional. He didn't just build what we asked for; he anticipated our needs and architected a solution that scaled flawlessly during our Series B growth phase.",
  },
  {
    id: "2",
    name: "David Chen",
    role: "VP of Engineering",
    company: "Lumina AI",
    content: "One of the most product-minded engineers I've worked with. The attention to detail in the UI and the robustness of the backend APIs set a new standard for our internal teams.",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Vela E-Commerce",
    content: "Our conversion rates jumped 40% after the platform rebuild. The speed and fluidity of the interface Kabindra developed was exactly the premium feel our brand needed.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Client <span className="text-secondary-accent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what engineering leaders and founders have to say about our collaboration.
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[350px] max-w-4xl mx-auto flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full px-4 md:px-16"
            >
              <div className="bg-background border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative text-center">
                <Quote className="absolute top-8 left-8 text-border/40 w-12 h-12 md:w-16 md:h-16" />
                
                <p className="text-lg md:text-2xl text-foreground font-medium leading-relaxed mb-10 relative z-10 pt-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary mb-4 border-2 border-accent/20 flex items-center justify-center text-accent font-bold font-heading text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-highlight font-medium">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border shadow-md hover:bg-secondary hover:text-accent transition-colors hidden sm:flex"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border shadow-md hover:bg-secondary hover:text-accent transition-colors hidden sm:flex"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
