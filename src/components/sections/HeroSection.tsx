"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ParticleField(props: any) {
  const ref = useRef<any>(null);
  // Generate random points in a sphere
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,rgba(0,0,0,1)_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass border border-white/10 text-sm text-electric-blue mb-6 font-medium tracking-wide">
            Creator Infrastructure for Sign-First Communication
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Sign. Create. <br />
          <span className="text-gradient bg-gradient-to-r from-white via-electric-blue to-soft-purple">
            Be Heard.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Transform sign-language videos into natural speech, subtitles, and creator-ready content using AI.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Join Waitlist
          </button>
          <button className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all border border-white/20">
            Watch Vision
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
