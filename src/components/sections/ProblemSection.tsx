"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Video, FileText, Scissors, MicOff, UploadCloud } from "lucide-react";

export default function ProblemSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const steps = [
    { icon: <Video size={32} />, title: "Sign Creator", desc: "Records video in native language", pain: false },
    { icon: <FileText size={32} />, title: "Manual Subtitles", desc: "Hours spent transcribing by hand", pain: true },
    { icon: <Scissors size={32} />, title: "Editing Tools", desc: "Complex workflows across apps", pain: true },
    { icon: <MicOff size={32} />, title: "Voice Workaround", desc: "Hiring voice actors or TTS", pain: true },
    { icon: <UploadCloud size={32} />, title: "Publishing", desc: "Delayed content delivery", pain: true },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-6 md:px-24 mb-16 max-w-7xl mx-auto w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Current Workflow is Broken.
          </motion.h2>
          <motion.p 
            className="text-xl text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Friction at every step.
          </motion.p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 w-[250vw] md:w-[150vw]">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-80 h-96 glass-panel rounded-3xl p-8 flex flex-col justify-between relative group transition-transform duration-500 hover:-translate-y-4
                ${step.pain ? 'border-red-500/20' : 'border-white/10'}
              `}
            >
              <div className={`p-4 rounded-full w-fit ${step.pain ? 'bg-red-500/10 text-red-400' : 'bg-white/10 text-white'}`}>
                {step.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
              
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
