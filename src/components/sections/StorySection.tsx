"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scene 1:
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0.05, 0.25], [0.8, 1]);

  // Scene 2: 
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  // Scene 3:
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 1]);
  const scale3 = useTransform(scrollYProgress, [0.75, 0.95], [0.8, 1]);

  return (
    <section 
      id="story" 
      ref={containerRef} 
      className="relative min-h-[300vh] w-full bg-black py-32"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ opacity: opacity1 }} className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1920&q=80" alt="Microphone" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: opacity2 }} className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?auto=format&fit=crop&w=1920&q=80" alt="Crowd" className="w-full h-full object-cover opacity-10 grayscale mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: opacity3 }} className="absolute inset-0">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15)_0%,rgba(0,0,0,1)_70%)]" />
          </motion.div>
        </div>

        {/* Text Layer */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center w-full h-full flex flex-col justify-center items-center">
          
          {/* Scene 1 */}
          <motion.div style={{ opacity: opacity1, scale: scale1, pointerEvents: 'none' }} className="absolute flex flex-col items-center w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
              The Creator Economy <br/> Runs on Voice.
            </h2>
            <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
              Podcasts. Live streams. Video essays. The digital world is increasingly audio-first, assuming everyone can simply turn on a microphone and speak.
            </p>
          </motion.div>

          {/* Scene 2 */}
          <motion.div style={{ opacity: opacity2, scale: scale2, pointerEvents: 'none' }} className="absolute flex flex-col items-center w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
              But I watched millions <br/> get left behind.
            </h2>
            <p className="text-xl md:text-2xl text-electric-blue mb-12 max-w-2xl mx-auto font-medium">
              Incredible sign-first creators with profound stories, forced to remain invisible on platforms that don't speak their language.
            </p>
          </motion.div>

          {/* Scene 3 */}
          <motion.div style={{ opacity: opacity3, scale: scale3, pointerEvents: 'auto' }} className="absolute flex flex-col items-center w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
              That's why I built Souund.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Not just another transcription tool, but a fundamental communication layer designed to give sign-first creators their voice back.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
