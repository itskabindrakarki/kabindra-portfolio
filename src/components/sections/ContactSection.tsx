"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container max-w-screen-md mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">extraordinary.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Currently available for freelance opportunities and consulting. If you have a project that needs some creative engineering, I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-secondary/20 border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" required placeholder="John Doe" className="bg-background/50 h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" required placeholder="john@example.com" className="bg-background/50 h-12 rounded-xl" />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
              <Input id="subject" required placeholder="Project Inquiry" className="bg-background/50 h-12 rounded-xl" />
            </div>
            
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <Textarea 
                id="message" 
                required 
                placeholder="Tell me about your project..." 
                className="bg-background/50 min-h-[150px] rounded-xl resize-none" 
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full h-14 rounded-xl text-base font-medium shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
            >
              {status === "idle" && (
                <>Send Message <Send className="ml-2 h-4 w-4" /></>
              )}
              {status === "loading" && (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-background border-t-transparent animate-spin" /> Sending...
                </span>
              )}
              {status === "success" && (
                <span className="flex items-center gap-2 text-success-foreground">
                  <CheckCircle2 className="h-5 w-5" /> Message Sent!
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" /> Error sending message
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
