"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function FounderSection() {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.05)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column: Image/Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-3xl overflow-hidden glass border border-white/10 group">
              {/* Aesthetic Placeholder for Founder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-black z-0" />
              <img 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=800&q=80" 
                alt="Mohammed Nihal"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-mono text-sm text-electric-blue mb-1">FOUNDER & CEO</p>
                <p className="font-bold text-xl tracking-wide">Mohammed Nihal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <User className="text-white/20 mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              "Technology should bridge gaps, <br className="hidden md:block"/>
              <span className="text-electric-blue">not build taller walls.</span>"
            </h2>
            <div className="space-y-6 text-lg text-white/60 font-light max-w-2xl">
              <p>
                As an engineer and creator, I saw a glaring blind spot in the explosion of AI tools. We were building software to clone voices, translate podcasts, and generate synthetic audio—yet we entirely ignored the millions of creators whose primary language is physical.
              </p>
              <p>
                Sign-first creators shouldn't have to hire voice actors or spend hours typing manual subtitles just to participate in the creator economy. 
              </p>
              <p className="text-white/90 font-medium">
                Souund is the infrastructure that fixes this.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <FaGithub size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
