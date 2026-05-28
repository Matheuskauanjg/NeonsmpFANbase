import { NeonPanel } from "../ui/NeonPanel";
import { NeonButton } from "../ui/NeonButton";
import { Building2, Trees, Zap, Skull } from "lucide-react";

export const FactionsSection = () => {
  return (
    <section id="factions" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#00CFFF_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#9D4DFF_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            O MUNDO SE PARTIU
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* HAIJIMA */}
          <NeonPanel variant="blue" className="relative group hover:border-neon-blue/60 transition-colors">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-neon-blue/10 border border-neon-blue/20">
                <Building2 className="w-8 h-8 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-2 uppercase tracking-wider">
                  Haijima
                </h3>
                <p className="font-exo text-sm text-neon-blue/60 mb-4 tracking-[0.2em] uppercase font-bold">
                  A Cidade que Nunca Dorme
                </p>
                <p className="font-rajdhani text-gray-400 mb-6 leading-relaxed">
                  No centro do que restou da civilização, ergue-se Haijima. Ela não é apenas uma cidade, é um ecossistema de silício e luzes de neon que perfuram as nuvens ácidas. 
                  Aqui, o ar tem gosto de eletricidade e metal. Para os habitantes de Haijima, a carne é um erro de design.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Tecnologia", "Implantes", "Megacorporações", "Dados"].map((tag) => (
                    <span key={tag} className="text-[10px] font-orbitron px-2 py-1 border border-neon-blue/30 text-neon-blue/80 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <NeonButton variant="blue" className="w-full md:w-auto">
                  Explorar Haijima
                </NeonButton>
              </div>
            </div>
            
            {/* Background Icon */}
            <Zap className="absolute -bottom-4 -right-4 w-32 h-32 text-neon-blue/5 pointer-events-none group-hover:text-neon-blue/10 transition-colors" />
          </NeonPanel>

          {/* REFÚGIO */}
          <NeonPanel variant="purple" className="relative group hover:border-neon-purple/60 transition-colors">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-neon-purple/10 border border-neon-purple/20">
                <Trees className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-2 uppercase tracking-wider">
                  Refúgio
                </h3>
                <p className="font-exo text-sm text-neon-purple/60 mb-4 tracking-[0.2em] uppercase font-bold">
                  As Terras Baixas
                </p>
                <p className="font-rajdhani text-gray-400 mb-6 leading-relaxed">
                  Abaixo dos pilares de sustentação de Haijima, onde a luz do neon não alcança, o mundo é orgânico, cruel e místico. 
                  Eles vivem sob a égide da Magia Antiga. Não há máquinas, apenas o sussurro dos espíritos e a dureza da sobrevivência. 
                </p>
                <div className="bg-neon-purple/5 border-l-2 border-neon-purple p-4 mb-6 italic text-xs text-gray-400 font-rajdhani">
                  "Quando a última árvore for convertida em dado e o último rio em resfriamento de servidor, o Sol descerá."
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Magia Antiga", "Espíritos", "Natureza", "Profecias"].map((tag) => (
                    <span key={tag} className="text-[10px] font-orbitron px-2 py-1 border border-neon-purple/30 text-neon-purple/80 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <NeonButton variant="purple" className="w-full md:w-auto">
                  Explorar Refúgio
                </NeonButton>
              </div>
            </div>

            {/* Background Icon */}
            <Skull className="absolute -bottom-4 -right-4 w-32 h-32 text-neon-purple/5 pointer-events-none group-hover:text-neon-purple/10 transition-colors" />
          </NeonPanel>
        </div>
      </div>
    </section>
  );
};
