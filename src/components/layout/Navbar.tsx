"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaBehance, FaDribbble } from "react-icons/fa";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 py-8"
    >
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group">
          <div className="font-serif font-bold text-3xl tracking-tight text-foreground flex flex-col items-center">
            <span className="leading-none border-b-2 border-foreground pb-1">K</span>
            <span className="leading-none -mt-1 ml-4">K</span>
          </div>
        </Link>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <span className="text-muted-foreground mr-2 font-medium">Follow me on :</span>
          <Link href="#" className="text-foreground hover:text-accent transition-colors"><FaFacebookF size={14} /></Link>
          <Link href="#" className="text-foreground hover:text-accent transition-colors"><FaTwitter size={14} /></Link>
          <Link href="#" className="text-foreground hover:text-accent transition-colors"><FaPinterestP size={14} /></Link>
          <Link href="#" className="text-foreground hover:text-accent transition-colors"><FaBehance size={14} /></Link>
          <Link href="#" className="text-foreground hover:text-accent transition-colors"><FaDribbble size={14} /></Link>
        </div>

        {/* Menu Icon */}
        <button
          className="relative z-50 p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-8 shadow-xl flex flex-col space-y-6 items-center"
            >
              <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">About Me</Link>
              <Link href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Skills</Link>
              <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Projects</Link>
              
              <div className="flex space-x-6 pt-6 border-t border-border w-full justify-center">
                <Link href="#" className="text-foreground hover:text-accent"><FaFacebookF size={18} /></Link>
                <Link href="#" className="text-foreground hover:text-accent"><FaTwitter size={18} /></Link>
                <Link href="#" className="text-foreground hover:text-accent"><FaPinterestP size={18} /></Link>
                <Link href="#" className="text-foreground hover:text-accent"><FaBehance size={18} /></Link>
                <Link href="#" className="text-foreground hover:text-accent"><FaDribbble size={18} /></Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
