"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Fingerprint, Zap } from "lucide-react";

export default function WhySection() {
  const cards = [
    {
      title: "Creator-First",
      desc: "Built for modern content creation. This isn't translation software; it's creator infrastructure.",
      icon: <Layers size={24} />,
      gradient: "from-electric-blue/20 to-transparent",
      colSpan: "md:col-span-2"
    },
    {
      title: "AI-Native",
      desc: "Powered by advanced models that understand intent, emotion, and context.",
      icon: <Sparkles size={24} />,
      gradient: "from-soft-purple/20 to-transparent",
      colSpan: "md:col-span-1"
    },
    {
      title: "Accessibility-Driven",
      desc: "We believe everyone deserves a voice. Technology should enable, not restrict.",
      icon: <Fingerprint size={24} />,
      gradient: "from-green-500/20 to-transparent",
      colSpan: "md:col-span-1"
    },
    {
      title: "Zero Friction",
      desc: "Drop your video in. Get a fully subtitled, voice-dubbed master file out. That's it.",
      icon: <Zap size={24} />,
      gradient: "from-yellow-500/20 to-transparent",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Souund?</h2>
          <p className="text-xl text-white/50 max-w-2xl">
            We are rethinking what it means to create content. Souund bridges the gap between sign and speech seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`glass-panel p-8 rounded-3xl relative overflow-hidden group ${card.colSpan}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} />
              
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{card.title}</h3>
              <p className="text-white/60 relative z-10 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
