"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.5], [100, 0, 0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  return (
    <section 
      id="story" 
      ref={containerRef} 
      className="relative min-h-[150vh] w-full bg-black py-32"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center">
        
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            The Internet Speaks.
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
            Podcasts, live streams, video essays, interviews. The creator economy is driven by voice.
          </p>
          <div className="flex gap-4 justify-center opacity-30 blur-[2px] scale-95 pointer-events-none grayscale">
            <div className="w-32 h-40 glass rounded-xl border border-white/10" />
            <div className="w-40 h-48 glass rounded-xl border border-white/10 -mt-8" />
            <div className="w-32 h-40 glass rounded-xl border border-white/10" />
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Not Everyone Can.
          </h2>
          <p className="text-xl md:text-2xl text-electric-blue mb-12 max-w-2xl mx-auto font-medium">
            Sign-first creators are often invisible in speech-first platforms.
          </p>
          <div className="w-full max-w-lg mx-auto h-64 border border-white/5 bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_70%)]" />
            <div className="relative z-10 flex flex-col gap-4 h-full justify-center">
               <div className="w-3/4 h-4 rounded bg-white/10" />
               <div className="w-full h-4 rounded bg-white/10" />
               <div className="w-5/6 h-4 rounded bg-white/10" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
