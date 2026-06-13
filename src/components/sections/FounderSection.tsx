"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function FounderSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Avatar Placeholder */}
          <div className="w-48 h-48 rounded-full overflow-hidden border border-white/10 glass flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-soft-purple/20 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full bg-charcoal-900 flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-500">
              <User size={64} />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-widest text-electric-blue uppercase mb-2">The Founder</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mohammed Nihal</h2>
            <p className="text-lg text-white/60 mb-6 max-w-lg">
              Builder. Creator. Engineer. <br />
              A mission-driven founder dedicated to building the communication layer for the next generation of creators.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
