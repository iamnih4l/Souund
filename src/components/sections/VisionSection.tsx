"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Mic, Eye, Sparkles } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function ParticleField(props: any) {
  const ref = useRef<any>(null);
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

export default function VisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const profiles = [
    { icon: <Users size={20} />, label: "Sign Creators", color: "bg-electric-blue/20 text-electric-blue", position: "top-10 left-[15%]" },
    { icon: <Mic size={20} />, label: "Voice Engine", color: "bg-soft-purple/20 text-soft-purple", position: "top-[40%] right-[10%]" },
    { icon: <Eye size={20} />, label: "Global Audience", color: "bg-white/10 text-white", position: "bottom-20 left-[25%]" }
  ];

  return (
    <section id="vision" ref={ref} className="py-40 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[120vh]">
      
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="w-[800px] h-[800px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,rgba(0,0,0,0)_70%)] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]" />
        <Globe size={120} className="absolute text-electric-blue/30" />
      </motion.div>

      {/* Floating Interactive Human Profiles */}
      <div className="absolute inset-0 max-w-6xl mx-auto w-full h-full pointer-events-none z-10 hidden md:block">
        {profiles.map((profile, i) => (
          <motion.div
            key={i}
            className={`absolute ${profile.position} flex items-center gap-3 glass-panel px-6 py-4 rounded-full pointer-events-auto border border-white/10 hover:border-white/30 hover:scale-105 transition-all cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (i * 0.2), type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${profile.color}`}>
              {profile.icon}
            </div>
            <span className="text-white font-medium tracking-wide">{profile.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
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
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light text-white/70 mb-12"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => window.location.href = '/asl'}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/20 backdrop-blur-md"
          >
            <Sparkles size={20} className="text-electric-blue" />
            Learn How ASL Mode Works
          </button>
        </motion.div>
      </div>

    </section>
  );
}
