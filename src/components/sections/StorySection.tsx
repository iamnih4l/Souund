"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scene 1: Fades in early, fades out completely before Scene 2
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [100, 0, 0, -100]);

  // Scene 2: Fades in after Scene 1 is gone, fades out before Scene 3
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [100, 0, 0, -100]);

  // Scene 3: Fades in at the end and stays
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.75, 0.85], [100, 0]);

  return (
    <section 
      id="story" 
      ref={containerRef} 
      className="relative min-h-[300vh] w-full bg-black py-32"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 max-w-5xl mx-auto text-center">
        
        {/* Scene 1 */}
        <motion.div style={{ opacity: opacity1, y: y1, pointerEvents: 'none' }} className="absolute flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            The Creator Economy <br/> Runs on Voice.
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Podcasts. Live streams. Video essays. The digital world is increasingly audio-first, assuming everyone can simply turn on a microphone and speak.
          </p>
        </motion.div>

        {/* Scene 2 */}
        <motion.div style={{ opacity: opacity2, y: y2, pointerEvents: 'none' }} className="absolute flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            But I watched millions <br/> get left behind.
          </h2>
          <p className="text-xl md:text-2xl text-electric-blue mb-12 max-w-2xl mx-auto font-medium">
            Incredible sign-first creators with profound stories, forced to remain invisible on platforms that don't speak their language.
          </p>
        </motion.div>

        {/* Scene 3 */}
        <motion.div style={{ opacity: opacity3, y: y3, pointerEvents: 'auto' }} className="absolute flex flex-col items-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            That's why I built Souund.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Not just another transcription tool, but a fundamental communication layer designed to give sign-first creators their voice back.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
