"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Souund
          </Link>
          <p className="text-white/50 text-sm max-w-xs">
            Creator infrastructure for sign-first communication. Sign. Create. Be Heard.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white font-medium mb-1">Company</span>
            <Link href="#story" className="text-white/50 hover:text-white transition-colors">Story</Link>
            <Link href="#solution" className="text-white/50 hover:text-white transition-colors">Product</Link>
            <Link href="#vision" className="text-white/50 hover:text-white transition-colors">Vision</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white font-medium mb-1">Legal</span>
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/50 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <FaXTwitter size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:hello@souund.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Souund Inc. All rights reserved.
        </p>
        <p className="text-xs text-white/30 mt-2 md:mt-0">
          Designed with purpose. Built for creators.
        </p>
      </div>
    </footer>
  );
}
