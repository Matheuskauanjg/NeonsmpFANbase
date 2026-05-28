import { motion } from "framer-motion";
import { NeonPanel } from "../ui/NeonPanel";
import { BookOpen, AlertTriangle, Cpu, Sparkles } from "lucide-react";

export const LoreSection = () => {
  return (
    <section id="lore" className="py-24 bg-[#050510] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CRIAÇÃO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-neon-blue font-orbitron text-xs tracking-[0.4em] uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Arquivo: Gênese_Neural</span>
            </div>
            
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter">
              CRIAÇÃO
            </h2>

            <div className="space-y-6 font-rajdhani text-lg text-gray-400 leading-relaxed border-l border-white/10 pl-6">
              <p>
                O mundo não terminou com um estrondo, mas com uma decisão. O que antes era uma tapeçaria única de existência rasgou-se ao meio quando a humanidade cansou-se de ajoelhar para deuses silenciosos e começou a construir o seu próprio império.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="font-orbitron text-neon-blue text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
                    <Cpu className="w-3 h-3" /> Lógica
                  </h4>
                  <p className="text-sm text-gray-500">Transformou a natureza em código. Onde a carne é um erro de design.</p>
                </div>
                <div>
                  <h4 className="font-orbitron text-neon-purple text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Fé
                  </h4>
                  <p className="text-sm text-gray-500">O sussurro dos espíritos nos escombros. Aguardando a purificação.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CHEGADA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <NeonPanel variant="purple" className="border-r-2 border-l-0">
              <div className="flex items-center gap-4 text-neon-purple font-orbitron text-xs tracking-[0.4em] uppercase mb-6">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                <span>LOG_SISTEMA: #01/05/2026</span>
              </div>

              <h3 className="font-orbitron text-3xl font-bold text-white mb-6 tracking-tighter uppercase">
                A CHEGADA
              </h3>

              <div className="font-mono text-xs text-neon-purple/80 space-y-4 mb-8">
                <p className="leading-loose">
                  A transição não foi suave. Não houve um portal de luz mística ou um tapete mágico, houve um rasgo. 
                  O céu sobre suas cabeças subitamente se partiu em um padrão de interferência estática.
                </p>
                <p className="leading-loose">
                  O <span className="text-white border-b border-neon-purple">"Sifão Divino"</span> — o satélite experimental de Haijima — tentou pescar estrelas e acabou arrastando vocês. 
                </p>
                <p className="bg-neon-purple/10 p-4 border border-neon-purple/20 text-[10px] italic">
                  "Como se fosse um aviso automático projetado em um holograma colossal de 50 metros de altura dentro do laboratório central... [DADOS CORROMPIDOS]"
                </p>
              </div>

              <div className="flex justify-between items-center font-orbitron text-[8px] text-gray-600 tracking-[0.2em]">
                <span>STATUS: IRREVERSÍVEL</span>
                <span>ID_TRANS MISSÃO: NEON-77</span>
              </div>
            </NeonPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
