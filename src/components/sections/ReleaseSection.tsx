import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Countdown } from "../ui/Countdown";
import { Radio } from "lucide-react";

export const ReleaseSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050510]">
      {/* Background Layers */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black z-10" />
      
      {/* Digital Rain Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-[-10%] w-[1px] h-[20%] bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random() * 1.5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-8 text-neon-blue/80 font-orbitron text-[10px] md:text-xs tracking-[0.4em] uppercase"
        >
          <Radio className="w-3 h-3 animate-pulse" />
          <span>Sincronização em Progresso</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <h2 className="font-orbitron text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,207,255,0.4)] relative">
            22 DE <span className="text-neon-purple animate-glitch inline-block">MAIO</span>
            {/* Holographic ghost effect */}
            <span className="absolute inset-0 text-neon-blue/10 translate-x-1 -z-10 blur-[2px]">22 DE MAIO</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-16"
        >
          <span className="font-orbitron text-7xl md:text-[10rem] font-bold text-white leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(157,77,255,0.3)]">
            20:00
          </span>
        </motion.div>

        <div className="mb-16">
          <Countdown />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-xl"
        >
          <p className="font-rajdhani text-gray-400 text-lg md:text-xl italic mb-4">
            "Quando o cronômetro zerar, a verdade será revelada. O Sifão Divino voltará a abrir-se."
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
            <span>-.-. --- --- .-. -.. . -. .- -.. .- ...</span>
            <span>||</span>
            <span>DIVINDADES TAMBÉM ERRAM?</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent z-10" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent z-10" />
      
      {/* Hidden Kikongo word in the background (very faint) */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] font-orbitron text-white text-xs pointer-events-none select-none">
        MPUNGU TULENDO
      </div>
    </section>
  );
};
