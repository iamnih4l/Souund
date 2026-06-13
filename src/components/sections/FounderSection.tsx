"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function FounderSection() {
  return (
    <section className="py-24 bg-black relative flex justify-center px-6">
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 overflow-hidden">
          {/* Subtle hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-soft-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-black/80 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 border border-white/5">
            
            {/* Avatar / Photo Placeholder */}
            <div className="flex-shrink-0 relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-shadow duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=400&q=80" 
                  alt="Mohammed Nihal"
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-electric-blue/20 border border-electric-blue/50 flex items-center justify-center backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-col text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
                Built by a Creator. <span className="text-white/50">Engineered by an AI Builder.</span>
              </h3>
              <p className="text-white/60 font-light leading-relaxed mb-6 max-w-2xl text-[15px] md:text-base">
                Souund is being built by <span className="text-white">Mohammed Nihal</span>, a computer science student, filmmaker, and creator-focused builder passionate about making communication accessible for sign-first creators. The mission is simple: help creators communicate without barriers and participate fully in the creator economy.
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
