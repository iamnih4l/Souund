"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Video, FileText, Scissors, MicOff, UploadCloud, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const steps = [
    { icon: <Video size={32} />, title: "Sign Creator", desc: "Records video in native language", pain: false },
    { icon: <FileText size={32} />, title: "Manual Subtitles", desc: "Hours spent transcribing by hand", pain: true },
    { icon: <Scissors size={32} />, title: "Editing Tools", desc: "Complex workflows across apps", pain: true },
    { icon: <MicOff size={32} />, title: "Voice Workaround", desc: "Hiring voice actors or TTS", pain: true },
    { icon: <UploadCloud size={32} />, title: "Publishing", desc: "Delayed content delivery", pain: true },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            The Current Workflow is <span className="text-red-500">Broken.</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/50 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <AlertTriangle className="text-red-500/70" size={20} />
            Friction at every single step.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical SVG Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-red-500 via-orange-500 to-red-900 origin-top"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node on the Line */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      className={`w-12 h-12 rounded-full border-4 border-[#050505] flex items-center justify-center z-20 ${step.pain ? 'bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'bg-white/10 text-white'}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    >
                      {step.pain ? <AlertTriangle size={16} /> : <div className="w-2 h-2 rounded-full bg-white" />}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right flex md:justify-end' : 'md:pl-16 md:text-left flex md:justify-start'}`}>
                    <motion.div 
                      className={`w-full max-w-sm glass-panel p-8 rounded-3xl relative group overflow-hidden ${step.pain ? 'border-red-500/20 hover:border-red-500/40' : 'border-white/10 hover:border-white/20'}`}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      whileHover={step.pain ? { x: [-2, 2, -2, 2, 0], transition: { duration: 0.4 } } : { y: -5 }}
                    >
                      {step.pain && (
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      
                      <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center relative z-10 ${isEven ? 'md:ml-auto' : ''} ${step.pain ? 'bg-red-500/10 text-red-400' : 'bg-white/10 text-white'}`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                      <p className="text-white/60 text-lg relative z-10">{step.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
