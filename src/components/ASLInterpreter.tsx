"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Hand } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ASLContextType {
  aslMode: boolean;
  setAslMode: (mode: boolean) => void;
  hoveredWord: string | null;
  setHoveredWord: (word: string | null) => void;
}

const ASLContext = createContext<ASLContextType>({
  aslMode: false,
  setAslMode: () => {},
  hoveredWord: null,
  setHoveredWord: () => {},
});

export const useASL = () => useContext(ASLContext);

export const ASLProvider = ({ children }: { children: React.ReactNode }) => {
  const [aslMode, setAslMode] = useState(false);
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  // Global mouse interaction using caret position to extract the exact word hovered
  useEffect(() => {
    if (!aslMode) return;

    let debounceTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        let range;
        
        // @ts-ignore
        if (document.caretRangeFromPoint) {
          // @ts-ignore
          range = document.caretRangeFromPoint(e.clientX, e.clientY);
        // @ts-ignore
        } else if (document.caretPositionFromPoint) {
          // @ts-ignore
          const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
          if (pos) {
            range = document.createRange();
            range.setStart(pos.offsetNode, pos.offset);
            range.setEnd(pos.offsetNode, pos.offset);
          }
        }

        if (range && range.startContainer.nodeType === Node.TEXT_NODE) {
          const text = range.startContainer.nodeValue || '';
          const offset = range.startOffset;
          
          // find word boundaries
          let start = offset;
          while (start > 0 && /\w/.test(text[start - 1])) start--;
          let end = offset;
          while (end < text.length && /\w/.test(text[end])) end++;
          
          const word = text.slice(start, end).trim();
          if (word.length > 0) {
            setHoveredWord(word);
            return;
          }
        }
        
        // If we didn't find a word, clear it
        setHoveredWord(null);
      }, 30);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(debounceTimer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [aslMode]);

  return (
    <ASLContext.Provider value={{ aslMode, setAslMode, hoveredWord, setHoveredWord }}>
      {children}
      <ASLToggleButton />
      <ASLWidget />
    </ASLContext.Provider>
  );
};

const ASLToggleButton = () => {
  const { aslMode, setAslMode } = useASL();

  return (
    <button
      onClick={() => setAslMode(!aslMode)}
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
        aslMode 
          ? 'bg-electric-blue text-white border-electric-blue shadow-[0_0_20px_rgba(0,195,255,0.4)]' 
          : 'bg-black/50 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
      }`}
      style={{
        backgroundColor: aslMode ? '#0066FF' : 'rgba(0,0,0,0.5)',
        borderColor: aslMode ? '#0066FF' : 'rgba(255,255,255,0.1)',
      }}
    >
      <Hand size={18} />
      <span>ASL Mode {aslMode ? 'ON' : 'OFF'}</span>
    </button>
  );
};

const ASLWidget = () => {
  const { aslMode, hoveredWord } = useASL();
  const [currentLetterIdx, setCurrentLetterIdx] = useState(0);
  const word = (hoveredWord || '').replace(/[^a-zA-Z]/g, '').toLowerCase();

  useEffect(() => {
    setCurrentLetterIdx(0);
    if (!word) return;

    // Glossary of specific words with GIFs
    const glossary: Record<string, string> = {
      'souund': 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif',
      'music': 'https://media.giphy.com/media/l41YfG5pbKSBRllQc/giphy.gif',
      'sound': 'https://media.giphy.com/media/3o7TKWpuEwA8zG1U40/giphy.gif',
      'ai': 'https://media.giphy.com/media/26uf7p5vK2Qd828xy/giphy.gif',
    };

    if (glossary[word]) return;

    // Animate fingerspelling
    const interval = setInterval(() => {
      setCurrentLetterIdx((prev) => (prev + 1) % (word.length + 1));
    }, 800); // 800ms per letter

    return () => clearInterval(interval);
  }, [word]);

  if (!aslMode) return null;

  const glossary: Record<string, string> = {
    'souund': 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif',
    'music': 'https://media.giphy.com/media/l41YfG5pbKSBRllQc/giphy.gif',
    'sound': 'https://media.giphy.com/media/3o7TKWpuEwA8zG1U40/giphy.gif',
    'ai': 'https://media.giphy.com/media/26uf7p5vK2Qd828xy/giphy.gif',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-6 right-6 w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3 border-b border-white/5 flex items-center gap-2 text-white font-medium text-sm">
          <Hand size={16} className="text-blue-400" />
          ASL Interpreter
        </div>
        <div className="p-6 flex flex-col items-center justify-center min-h-[240px]">
          {!word ? (
            <p className="text-white/50 text-center text-sm italic">
              Hover over any text to see sign language translation.
            </p>
          ) : glossary[word] ? (
            <div className="flex flex-col items-center gap-4">
              <img 
                src={glossary[word]} 
                alt={`ASL sign for ${word}`} 
                className="w-32 h-32 object-cover rounded-xl bg-white p-2"
              />
              <div className="text-xl font-bold tracking-widest text-white uppercase">
                {word}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {currentLetterIdx < word.length ? (
                <motion.img 
                  key={currentLetterIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={`https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/${word[currentLetterIdx]}.gif`} 
                  alt={`ASL letter ${word[currentLetterIdx]}`} 
                  className="w-32 h-32 object-contain rounded-xl bg-white p-2"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center text-3xl text-white/30 bg-white/5 rounded-xl">
                  —
                </div>
              )}
              <div className="text-xl font-bold tracking-widest flex gap-1">
                {word.split('').map((char, i) => (
                  <span 
                    key={i} 
                    className={`${i === currentLetterIdx ? 'text-blue-400 scale-125 shadow-blue-400 drop-shadow-md' : 'text-white/70'} transition-all duration-200 uppercase`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const ASLText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const { aslMode } = useASL();
  
  if (typeof children !== 'string') return <>{children}</>;

  const words = children.split(/(\s+)/);

  return (
    <span className={className}>
      {words.map((word, i) => {
        if (!word.trim()) return <span key={i}>{word}</span>;
        return (
          <span 
            key={i} 
            className={aslMode ? "asl-hoverable cursor-pointer border-b border-dashed border-transparent hover:border-blue-400 hover:text-blue-400 transition-colors duration-200" : ""}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
};
