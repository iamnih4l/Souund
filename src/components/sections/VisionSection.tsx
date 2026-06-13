"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { Globe, Users, Mic, Eye, Sparkles } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function VoiceWaveField(props: any) {
  const ref = useRef<any>(null);
  const count = 100;
  
  // Create a flat grid of points on the XZ plane
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        // Center the grid around 0,0
        const x = (i - count / 2) * 0.15;
        const z = (j - count / 2) * 0.15;
        const y = 0; 
        const index = (i * count + j) * 3;
        pos[index] = x;
        pos[index + 1] = y;
        pos[index + 2] = z;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        const x = positions[index];
        const z = positions[index + 2];
        
        // Calculate distance from center to create outward radiating waves
        const distance = Math.sqrt(x * x + z * z);
        
        // Complex wave function simulating voice frequencies/ripples
        const y = Math.sin(distance * 2 - time * 3) * 0.4 + Math.cos(x * 1.5 + time) * 0.2;
        
        positions[index + 1] = y;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire field
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]} position={[0, -2, -3]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
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
    { icon: <Users size={20} />, label: "Sign Creators", color: "bg-electric-blue/20 text-electric-blue", angle: -145, radius: 450 },
    { icon: <Mic size={20} />, label: "Voice Engine", color: "bg-soft-purple/20 text-soft-purple", angle: -35, radius: 450 },
    { icon: <Eye size={20} />, label: "Global Audience", color: "bg-white/10 text-white", angle: 90, radius: 350 }
  ];

  return (
    <section id="vision" ref={ref} className="py-40 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[120vh]">
      
      {/* 3D Voice Wave Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
          <VoiceWaveField />
        </Canvas>
      </div>

      {/* Brighter, Larger Concentric Circles & Globe */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-80"
      >
        <div className="w-[1000px] h-[1000px] rounded-full border border-soft-purple/30 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,rgba(0,0,0,0)_60%)] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-electric-blue/40 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/20 animate-[spin_20s_linear_infinite]" />
        <Globe size={180} className="absolute text-electric-blue/50" />
      </motion.div>

      {/* Floating Interactive Human Profiles on Radial Orbit */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block overflow-hidden">
        {profiles.map((profile, i) => {
          const rad = (profile.angle * Math.PI) / 180;
          const x = Math.cos(rad) * profile.radius;
          const y = Math.sin(rad) * profile.radius;

          return (
            <motion.div
              key={i}
              className={`absolute flex items-center gap-3 glass-panel px-6 py-4 rounded-full pointer-events-auto border border-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all cursor-pointer bg-black/40 backdrop-blur-md`}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, x: "-50%", y: "-50%" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.2), type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${profile.color}`}>
                {profile.icon}
              </div>
              <span className="text-white font-medium tracking-wide whitespace-nowrap">{profile.label}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20 p-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Building the <br/>
          <span className="text-gradient bg-gradient-to-r from-electric-blue to-soft-purple drop-shadow-2xl">Communication Layer</span><br/>
          for Sign-First Creators.
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light text-white/90 mb-12 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span>Sign</span>
          <span className="text-electric-blue font-bold">→</span>
          <span>Speech</span>
          <span className="text-electric-blue font-bold">→</span>
          <span>Audience</span>
          <span className="text-soft-purple font-bold">→</span>
          <span className="text-white font-bold drop-shadow-2xl">Global Reach</span>
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
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-black/50 hover:bg-black/80 text-white font-semibold transition-all border border-electric-blue/50 backdrop-blur-xl shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.5)] hover:scale-105"
          >
            <Sparkles size={20} className="text-electric-blue" />
            Learn How ASL Mode Works
          </button>
        </motion.div>
      </div>

    </section>
  );
}
