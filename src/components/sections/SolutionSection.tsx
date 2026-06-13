"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Brain, FileText, Mic, MessageSquare, Download, ChevronRight } from "lucide-react";

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const steps = [
    { 
      id: "upload",
      icon: <Upload size={24} />, 
      title: "Upload", 
      desc: "Sign-language video",
      details: "Drag and drop your raw sign-language footage. Souund processes high-frame-rate videos seamlessly to ensure every rapid micro-expression and gesture is captured natively.",
      color: "from-blue-500 to-cyan-400",
      bgGlow: "rgba(59, 130, 246, 0.15)"
    },
    { 
      id: "analyze",
      icon: <Brain size={24} />, 
      title: "Analyze", 
      desc: "AI understands intent",
      details: "Our proprietary vision model extracts skeletal tracking, facial expressions, and timing, decoding not just the literal signs but the emotional intent and tone of your message.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "rgba(168, 85, 247, 0.15)"
    },
    { 
      id: "transcribe",
      icon: <FileText size={24} />, 
      title: "Transcribe", 
      desc: "Transcript generated",
      details: "The visual data is converted into highly accurate contextual text transcripts. You can edit the text to refine the narrative before any audio synthesis begins.",
      color: "from-emerald-400 to-teal-500",
      bgGlow: "rgba(16, 185, 129, 0.15)"
    },
    { 
      id: "synthesize",
      icon: <Mic size={24} />, 
      title: "Synthesize", 
      desc: "Natural speech created",
      details: "We map the edited transcript to your custom AI Voice Clone. The engine matches the cadence, pacing, and emotion detected in your original sign language performance.",
      color: "from-amber-400 to-orange-500",
      bgGlow: "rgba(245, 158, 11, 0.15)"
    },
    { 
      id: "subtitle",
      icon: <MessageSquare size={24} />, 
      title: "Subtitle", 
      desc: "Dynamic captions",
      details: "Engaging, creator-ready subtitles are automatically overlaid. They are perfectly synced with the synthesized voice and animated to retain viewer retention.",
      color: "from-rose-400 to-red-500",
      bgGlow: "rgba(244, 63, 94, 0.15)"
    },
    { 
      id: "export",
      icon: <Download size={24} />, 
      title: "Export", 
      desc: "Creator-ready content",
      details: "Export directly to your favorite platforms (YouTube, TikTok, Instagram) in 4K resolution with perfectly mixed audio tracks. Your voice is ready to be heard globally.",
      color: "from-indigo-400 to-blue-600",
      bgGlow: "rgba(99, 102, 241, 0.15)"
    },
  ];

  // Auto-play the timeline
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section id="solution" className="py-32 bg-black relative overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 transition-colors duration-1000 ease-in-out" 
        style={{ background: `radial-gradient(circle at center, ${steps[activeStep].bgGlow} 0%, rgba(0,0,0,1) 60%)` }}
      />
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
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
            A seamless, highly interactive pipeline. Click any step to see how we transform your expression into a universal voice.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Interactive Stepper (Left Side on Desktop) */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:w-1/3 no-scrollbar snap-x">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(index);
                    setAutoPlay(false);
                  }}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 snap-center min-w-[240px] lg:min-w-full group ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 border border-white/20 rounded-2xl bg-white/5"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive ? `bg-gradient-to-br ${step.color} text-white` : "bg-white/5 text-white/40 group-hover:text-white/80"
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="relative z-10 hidden sm:block">
                    <h3 className={`font-bold text-lg transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors ${isActive ? "text-white/70" : "text-white/30"}`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Display Panel (Right Side on Desktop) */}
          <div className="lg:w-2/3 h-[400px] relative rounded-3xl glass-panel border border-white/10 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
              >
                {/* Huge faded background icon */}
                <div className={`absolute -right-10 -bottom-10 opacity-5 text-transparent bg-clip-text bg-gradient-to-br ${steps[activeStep].color}`}>
                   <div className="scale-[5] rotate-12 transform-gpu">
                     {steps[activeStep].icon}
                   </div>
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${steps[activeStep].color} bg-opacity-20 text-white shadow-lg`}>
                    Step {activeStep + 1} of {steps.length}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {steps[activeStep].title}.
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                    {steps[activeStep].details}
                  </p>

                  <div className="mt-10 flex items-center gap-2 text-sm text-electric-blue font-medium cursor-pointer hover:text-white transition-colors w-fit">
                    Explore technology <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Play/Pause indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono text-white/30 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">
              <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              {autoPlay ? 'AUTO-PLAYING' : 'PAUSED'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
