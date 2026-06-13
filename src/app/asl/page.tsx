"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Hand, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import { ASLText } from "@/components/ASLInterpreter";

export default function ASLDocsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-32 mt-16">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/30 text-electric-blue text-sm font-medium mb-6">
            <Sparkles size={16} />
            Feature Documentation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Interactive ASL Mode
          </h1>
          
          <p className="text-xl text-white/60 leading-relaxed mb-16 max-w-2xl">
            Souund is built with accessibility and deep understanding at its core. We've implemented a global interactive layer that allows you to instantly translate any text into American Sign Language (ASL).
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div 
            className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-electric-blue/20 text-electric-blue flex items-center justify-center mb-6">
              <Hand size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We've created a custom React hook that passively tracks your mouse pointer across the entire application. When you hover over any text on the page, the system precisely extracts the exact word beneath your cursor using the `caretRangeFromPoint` API.
            </p>
            
            <div className="bg-black/50 border border-white/5 rounded-2xl p-6 text-center">
              <p className="text-white/50 mb-2 text-sm uppercase tracking-wider font-semibold">Try it right now</p>
              <ASLText className="text-2xl font-medium text-white cursor-help">
                Hover over this sentence to see the ASL Interactive Interpreter in action!
              </ASLText>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            className="glass-panel p-8 md:p-12 rounded-[2rem] border border-soft-purple/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-soft-purple/20 text-soft-purple flex items-center justify-center mb-6">
              <Wand2 size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-4">The Floating Interpreter</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Once a word is targeted, the global `ASLInterpreter` component mounts a beautiful floating glass UI exactly at your cursor's position. It dynamically generates high-quality images of the ASL hand signs corresponding to each letter of the targeted word, providing immediate, context-aware sign language translation without ever leaving the page.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
