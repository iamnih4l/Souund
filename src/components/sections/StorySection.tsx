"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mouse Tracking for 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 40, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 40, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove as any);
    return () => window.removeEventListener("mousemove", handleMouseMove as any);
  }, []);

  // Z-Axis Camera Fly-through
  // The camera moves forward from 0 to 4500px in depth as we scroll
  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, 4500]);

  // Opacities based on camera Z position (fade out as the camera passes through)
  const opacity1 = useTransform(cameraZ, [0, 800, 1200], [1, 1, 0]);
  const opacity2 = useTransform(cameraZ, [500, 1500, 2300, 2700], [0, 1, 1, 0]);
  const opacity3 = useTransform(cameraZ, [2000, 3000, 4000], [0, 1, 1]);

  return (
    <section 
      id="story" 
      ref={containerRef} 
      className="relative h-[400vh] w-full bg-[#030303]"
    >
      {/* Sticky Perspective Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-[1200px]">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,rgba(0,0,0,1)_80%)]" />

        {/* 3D World Space */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            rotateX, 
            rotateY,
            z: cameraZ,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Floating Ambient Particles (Deep Background) */}
          <div className="absolute w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[120px]" style={{ transform: "translateZ(-3000px) translateX(500px)" }} />
          <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" style={{ transform: "translateZ(-1500px) translateX(-400px)" }} />

          {/* SCENE 1: Z = 0 */}
          <motion.div 
            style={{ opacity: opacity1, transform: "translateZ(0px)" }} 
            className="absolute flex flex-col items-center w-full max-w-4xl px-6 pointer-events-none"
          >
            <div className="glass-panel p-12 md:p-16 rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-2xl text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
                The Creator Economy <br/> Runs on Voice.
              </h2>
              <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                Podcasts. Live streams. Video essays. The digital world is increasingly audio-first, assuming everyone can simply turn on a microphone.
              </p>
            </div>
          </motion.div>

          {/* SCENE 2: Z = -1500px */}
          <motion.div 
            style={{ opacity: opacity2, transform: "translateZ(-1500px)" }} 
            className="absolute flex flex-col items-center w-full max-w-4xl px-6 pointer-events-none"
          >
            <div className="glass-panel p-12 md:p-16 rounded-[3rem] border border-red-500/10 bg-black/40 backdrop-blur-2xl text-center shadow-[0_0_100px_rgba(239,68,68,0.1)]">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
                But I watched millions <br/> get left behind.
              </h2>
              <p className="text-xl md:text-2xl text-red-400/80 max-w-2xl mx-auto font-medium leading-relaxed">
                Incredible sign-first creators with profound stories, forced to remain invisible on platforms that don't speak their language.
              </p>
            </div>
          </motion.div>

          {/* SCENE 3: Z = -3000px */}
          <motion.div 
            style={{ opacity: opacity3, transform: "translateZ(-3000px)" }} 
            className="absolute flex flex-col items-center w-full max-w-4xl px-6 pointer-events-none"
          >
            <div className="glass-panel p-12 md:p-16 rounded-[3rem] border border-electric-blue/20 bg-black/40 backdrop-blur-2xl text-center shadow-[0_0_100px_rgba(14,165,233,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15)_0%,transparent_70%)]" />
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 relative z-10">
                That's why I built Souund.
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                Not just another transcription tool, but a fundamental communication layer designed to give sign-first creators their voice back.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
