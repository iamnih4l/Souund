"use client";

import { motion } from "framer-motion";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { useState } from "react";

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience Souund.</h2>
          <p className="text-xl text-white/50">A premium interface designed for creators, not just translators.</p>
        </div>

        {/* Mockup Container */}
        <div className="relative rounded-2xl border border-white/10 bg-black/50 p-2 md:p-4 backdrop-blur-xl shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-[600px]">
            {/* Main Video Area */}
            <div className="md:col-span-2 rounded-xl border border-white/5 bg-charcoal-900 overflow-hidden relative group flex flex-col">
              <div className="flex-1 relative bg-black flex items-center justify-center">
                {/* Simulated Video Content */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,1)_100%)]" />
                <motion.div 
                  animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center blur-sm"
                />
                
                {/* Floating Captions */}
                <div className="absolute bottom-12 left-0 right-0 text-center">
                  <motion.span 
                    className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white font-medium text-lg border border-white/10 shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    Welcome to my new video!
                  </motion.span>
                </div>
              </div>

              {/* Controls */}
              <div className="h-16 bg-charcoal-800 border-t border-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-electric-blue transition-colors">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-electric-blue"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "30%" }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                  </div>
                  <span className="text-xs text-white/50 font-mono">01:23 / 04:56</span>
                </div>
                <div className="flex items-center gap-4 text-white/50">
                  <Volume2 size={18} className="hover:text-white cursor-pointer transition-colors" />
                  <Maximize size={18} className="hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            {/* Right Sidebar - Transcript & Settings */}
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-xl border border-white/5 bg-charcoal-900 p-4 flex flex-col">
                <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Transcript</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                  {[
                    { time: "00:00", text: "Hey everyone, welcome back to the channel." },
                    { time: "00:05", text: "Today we are discussing the new update." },
                    { time: "00:12", text: "It completely changes the workflow.", active: true },
                    { time: "00:18", text: "Let me show you how it works." },
                  ].map((item, i) => (
                    <div key={i} className={`p-3 rounded-lg border transition-colors cursor-pointer ${item.active ? 'bg-electric-blue/10 border-electric-blue/30 text-white' : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white/80'}`}>
                      <span className="text-xs text-electric-blue mb-1 block font-mono">{item.time}</span>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-32 rounded-xl border border-white/5 bg-charcoal-900 p-4 flex flex-col justify-between group cursor-pointer hover:border-soft-purple/50 transition-colors">
                <div>
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Voice Profile</h3>
                  <p className="text-white font-medium">Natural Warm (English)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-1 bg-soft-purple rounded-full h-4 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors">Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
