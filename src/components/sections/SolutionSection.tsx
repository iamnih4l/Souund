"use client";

import { motion } from "framer-motion";
import { Upload, Brain, FileText, Mic, MessageSquare, Download } from "lucide-react";

export default function SolutionSection() {
  const steps = [
    { icon: <Upload />, title: "Upload", desc: "Sign-language video" },
    { icon: <Brain />, title: "Analyze", desc: "AI understands intent" },
    { icon: <FileText />, title: "Transcribe", desc: "Transcript generated" },
    { icon: <Mic />, title: "Synthesize", desc: "Natural speech created" },
    { icon: <MessageSquare />, title: "Subtitle", desc: "Dynamic captions" },
    { icon: <Download />, title: "Export", desc: "Creator-ready content" },
  ];

  return (
    <section id="solution" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1)_0%,rgba(0,0,0,1)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Souund Workflow.
          </motion.h2>
          <motion.p 
            className="text-xl text-white/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A seamless, AI-native pipeline that transforms your expression into a universal voice.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-electric-blue to-soft-purple -translate-y-1/2 hidden md:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-electric-blue mb-6 relative group">
                  <div className="absolute inset-0 bg-electric-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
