"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

export default function VisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="vision" ref={ref} className="py-40 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none"
      >
        <div className="w-[800px] h-[800px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,rgba(0,0,0,0)_70%)] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]" />
        <Globe size={120} className="absolute text-electric-blue/30" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Building the <br/>
          <span className="text-gradient bg-gradient-to-r from-electric-blue to-soft-purple">Communication Layer</span><br/>
          for Sign-First Creators.
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light text-white/70"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span>Sign</span>
          <span className="text-electric-blue">→</span>
          <span>Speech</span>
          <span className="text-electric-blue">→</span>
          <span>Audience</span>
          <span className="text-soft-purple">→</span>
          <span className="text-white font-medium">Global Reach</span>
        </motion.div>
      </div>

    </section>
  );
}
