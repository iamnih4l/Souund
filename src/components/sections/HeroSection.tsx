"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import VoiceWaveField from "@/components/ui/VoiceWaveField";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
          <VoiceWaveField />
        </Canvas>
      </div>

      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)]" />

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

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-lg">
          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-8 py-4 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 font-medium w-full text-center"
            >
              🎉 You're on the waitlist!
            </motion.div>
          ) : (
            <form onSubmit={handleJoinWaitlist} className="relative w-full sm:w-auto flex-1">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-electric-blue transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {isLoading ? "..." : "Join"}
              </button>
            </form>
          )}
          
          <button 
            onClick={() => window.location.href = '/asl'}
            className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all border border-white/20 whitespace-nowrap"
          >
            How ASL Mode Works
          </button>
        </div>
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
