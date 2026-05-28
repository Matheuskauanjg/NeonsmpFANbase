import { motion } from "framer-motion";
import { Send as Twitter, ExternalLink, FileText, Activity } from "lucide-react";

export const SecretsSection = () => {
  return (
    <section id="secrets" className="py-24 bg-deep-black border-t border-white/5 relative overflow-hidden">
      {/* Background glitch effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Intel & Links */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-orbitron uppercase tracking-widest animate-pulse">
              <Activity className="w-3 h-3" /> Conexão Decifrada
            </div>
            
            <h2 className="font-orbitron text-4xl font-bold tracking-tighter leading-tight">
              ARQUIVOS <br />
              <span className="text-neon-blue">CONFIDENCIAIS</span>
            </h2>

            <p className="font-rajdhani text-gray-400 text-lg leading-relaxed max-w-md">
              O que deciframos em live hoje. Documentos vazados, sinais de rádio e coordenadas recuperadas das sombras de Haijima.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://x.com/NeonSMP_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-all group hover:bg-neon-blue/5"
              >
                <Twitter className="w-5 h-5 text-gray-500 group-hover:text-neon-blue transition-colors" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-hover:text-gray-300">Intel Twitter</span>
                  <span className="text-[8px] font-mono text-gray-600 group-hover:text-neon-blue/60">@NeonSMP_</span>
                </div>
                <ExternalLink className="w-3 h-3 ml-auto text-gray-700 group-hover:text-neon-blue" />
              </a>

              <a 
                href="https://imgur.com/a/79QfGuL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-neon-purple/30 transition-all group hover:bg-neon-purple/5"
              >
                <FileText className="w-5 h-5 text-gray-500 group-hover:text-neon-purple transition-colors" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest group-hover:text-gray-300">Dossiê Imgur</span>
                  <span className="text-[8px] font-mono text-gray-600 group-hover:text-neon-purple/60">IMG: 79QfGuL</span>
                </div>
                <ExternalLink className="w-3 h-3 ml-auto text-gray-700 group-hover:text-neon-purple" />
              </a>
            </div>

            {/* Deciphered Morse Snippets */}
            <div className="space-y-4 pt-6">
              <h4 className="font-orbitron text-[10px] text-neon-blue uppercase tracking-[0.3em]">Fragmentos de Morse:</h4>
              <div className="font-mono text-[11px] text-gray-500 space-y-2 border-l border-neon-blue/20 pl-4 h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-neon-blue/20">
                <p className="text-neon-blue/70 animate-pulse">{"//"} QUEM SERÁ QUE VOCÊS DEVEM CONFIAR?</p>
                <p>{"//"} "O amor que escorre pelas mãos de um devoto de F."</p>
                <p>{"//"} "SANGRA O CORAÇÃO E ALMA"</p>
                <p>{"//"} "OS CHOROS E LAMENTOS ECOAM PELO AR"</p>
                <p>{"//"} "DESESPERADO E MAGOADO"</p>
                <p>{"//"} "O SILÊNCIO É SUA ÚNICA RESPOSTA"</p>
                <p>{"//"} "LUZES DE VELAS ZOMBAM EM SILENCIO"</p>
                <p>{"//"} "DEUS, OUTRORA TÃO PRÓXIMO SE FEZ AUSENTE, DISTANTE, INALCANÇÁVEL"</p>
                <p>{"//"} "O PERIGO DO HOMEM QUE PERDEU TUDO?"</p>
                <p>{"//"} "TODOS ERRAMOS E PAGAMOS O PREÇO"</p>
                <p>{"//"} "DIVINDADES TAMBÉM ERRAM?"</p>
              </div>
            </div>
          </div>

          {/* Right Side: Terminal / Analysis */}
          <div className="flex-1 w-full">
            <div className="relative glass-panel border border-white/10 overflow-hidden group min-h-[500px] flex flex-col">
              {/* Terminal Header */}
              <div className="bg-black/40 border-b border-white/10 flex items-center px-4 py-2 justify-between">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">ANÁLISE_REFINADA_V1.2.EXE</span>
              </div>

              {/* Scrollable Terminal Content */}
              <div className="flex-1 overflow-y-auto p-6 font-mono text-[10px] md:text-[11px] space-y-6 scrollbar-thin scrollbar-thumb-neon-blue/20">
                {/* Kaijin Log */}
                <div className="space-y-2">
                  <p className="text-neon-purple font-bold">{"[ARQUIVO: KAIJIN_DOSSIER]"}</p>
                  <p className="text-gray-400 leading-relaxed">
                    "No Subterrâneo, ele era chamado de Kaijin, o médico que acreditava que a luz do sol era a resposta para todos os problemas. O atual líder partiu com um nome, um lar e uma fé inabalável."
                  </p>
                </div>

                {/* The Lost Link Poem */}
                <div className="space-y-2 bg-white/5 p-3 border-l-2 border-neon-blue/40">
                  <p className="text-neon-blue">{"[POEMA: O ELO PERDIDO]"}</p>
                  <div className="text-gray-500 italic space-y-1">
                    <p>No labirinto de espelhos que a vida oferece,</p>
                    <p>Onde a dúvida cresce e o tempo se perde,</p>
                    <p>Seguimos a linha, o sinal,</p>
                    <p>Buscando clareza no desenho final...</p>
                    <p className="text-neon-blue/60 mt-2 font-bold">"Porque a chave para a resposta está nela."</p>
                  </div>
                </div>

                {/* Vigenere Results */}
                <div className="space-y-2">
                  <p className="text-red-500">{"[DECODIFICAÇÃO_VIGENERE]"}</p>
                  <p className="text-gray-400">
                    <span className="text-white">MAU FUNCIONAMENTO DO SIFÃO:</span> NOS DEU ALGO MAIS VALIOSO DO QUE ENERGIA. 
                    SUJEITOS DE TESTE NASCIDOS COM A MÁGICA. NÃO DESPERDICE O PRESENTE.
                  </p>
                </div>

                {/* Resumão Insight */}
                <div className="space-y-2 border border-neon-blue/10 p-4 bg-neon-blue/5">
                  <p className="text-neon-blue font-bold tracking-widest">{"[INSIGHT_FINAL]"}</p>
                  <p className="text-gray-400">
                    A energia que move Haijima não é neutra. É <span className="text-white">SOFRIMENTO DIVINO</span>. 
                    "Deus se torna servo da roda". O Sifão não pescou estrelas, capturou uma divindade para servir de bateria.
                  </p>
                  <p className="text-neon-purple/80 italic mt-2">
                    "O que fala mais alto quando você vê pouco?" - Medo? Fé? Instinto?
                  </p>
                </div>

                {/* Nirvana / Something in the Way */}
                <div className="text-[9px] text-gray-700 pt-4 text-center">
                  <p>"It's okay to eat fish, because they don't have any feelings."</p>
                  <p className="animate-pulse">_SISTEMA_AGUARDANDO_ENTRADA_</p>
                </div>
              </div>

              {/* Scanline for terminal */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
