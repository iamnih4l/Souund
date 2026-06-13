"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-300 ${
            scrolled ? "glass px-6 py-3" : "px-2 py-2"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-electric-blue transition-colors">
              Souund
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="#story" className="hover:text-white transition-colors">Story</Link>
            <Link href="#solution" className="hover:text-white transition-colors">Product</Link>
            <Link href="#vision" className="hover:text-white transition-colors">Vision</Link>
          </div>

          <button className="relative overflow-hidden rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold tracking-wide transition-transform hover:scale-105 active:scale-95 group">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-soft-purple opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
