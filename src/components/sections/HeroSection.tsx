import { motion } from "framer-motion";
import { NeonButton } from "../ui/NeonButton";
import { Terminal, ShieldAlert } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/80 to-deep-black z-0" />
      
      {/* Animated Scanlines effect for this section */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-orbitron text-neon-blue tracking-[0.5em] text-xs md:text-sm uppercase mb-2 block animate-pulse-slow">
            Estabelecendo Conexão Neural...
          </span>
          <h1 className="font-orbitron text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] relative">
            NEON <span className="text-neon-purple animate-glitch inline-block">SMP</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl font-rajdhani text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed"
        >
          DOIS MUNDOS. UMA RUPTURA. <br />
          <span className="text-sm tracking-widest text-gray-600 mt-2 block font-exo uppercase">
            A tecnologia foi longe demais. O ritual começou.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <a href="https://discord.gg/GpqcEFwcjf" target="_blank" rel="noopener noreferrer">
            <NeonButton variant="blue" className="group w-full md:w-auto">
              <Terminal className="w-4 h-4 group-hover:animate-pulse" />
              Entrar no Servidor
            </NeonButton>
          </a>
          <NeonButton variant="purple" glitch onClick={() => document.getElementById('lore')?.scrollIntoView({ behavior: 'smooth' })}>
            <ShieldAlert className="w-4 h-4" />
            Ler a Lore
          </NeonButton>
        </motion.div>
      </div>

      {/* Floating HUD elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block text-neon-blue/30 font-mono text-[10px] space-y-1 z-20">
        <p>{">"} STATUS: SISTEMA INSTÁVEL</p>
        <p>{">"} LOCAL: SETOR 04 - HAIJIMA</p>
        <p>{">"} ENTROPIA: 84.2% [!]</p>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block text-neon-purple/30 font-mono text-[10px] text-right space-y-1 z-20">
        <p>CONVERGÊNCIA RITUALÍSTICA {"<"}</p>
        <p>SINAIS OCULTOS DETECTADOS {"<"}</p>
        <p>REFÚGIO_PROTOCOLO: ATIVO {"<"}</p>
      </div>
    </section>
  );
};
