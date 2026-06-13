"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section className="py-32 bg-[#050505] relative flex justify-center border-t border-white/5">
      <div className="max-w-3xl w-full px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the Movement.</h2>
          <p className="text-xl text-white/50">Early access for creators shaping the future of sign-first communication.</p>
        </motion.div>

        <motion.form 
          className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-purple/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/70">Name</label>
              <input 
                type="text" 
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/70">Email</label>
              <input 
                type="email" 
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-2">
            <label className="text-sm font-medium text-white/70">Role</label>
            <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all appearance-none">
              <option value="creator">Content Creator</option>
              <option value="developer">Developer</option>
              <option value="investor">Investor</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button className="relative z-10 mt-4 bg-white text-black text-lg font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
            Request Early Access
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
