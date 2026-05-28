import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coins, Calculator, TrendingUp, AlertCircle, ShieldCheck, User, Percent, ArrowRightLeft } from "lucide-react";
import { NeonPanel } from "../ui/NeonPanel";
import { NeonButton } from "../ui/NeonButton";

export const BettingSection = () => {
  const [betDate, setBetBetDate] = useState<string | null>(null);
  const [nickname, setNickname] = useState("");
  const [hasBetted, setHasBetted] = useState(false);
  
  // Pontos baseados na lore fornecida
  const REDSTONE_UNIT = 10000 / 900;
  const DIAMOND_UNIT = REDSTONE_UNIT / 2;
  const COAL_UNIT = DIAMOND_UNIT * 1.5;
  const TOTEM_UNIT = 3000;
  const NANO_PARTIAL = 5000;
  const NANO_FULL = 10000;

  const [quantities, setQuantities] = useState({
    redstone: 0,
    diamond: 0,
    coal: 0,
    totem: 0,
    nanoPartial: 0,
    nanoFull: 0
  });

  const [apiStats, setApiStats] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (hasBetted) {
      fetch('/api/bets')
        .then(res => res.json())
        .then(data => setApiStats(data))
        .catch(err => console.error("Erro ao carregar stats:", err));
    }
  }, [hasBetted]);

  const totalPoints = Math.floor(
    quantities.redstone * REDSTONE_UNIT +
    quantities.diamond * DIAMOND_UNIT +
    quantities.coal * COAL_UNIT +
    quantities.totem * TOTEM_UNIT +
    quantities.nanoPartial * NANO_PARTIAL +
    quantities.nanoFull * NANO_FULL
  );

  const handleBet = async () => {
    if (!nickname || !betDate || totalPoints === 0) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname,
          betDate,
          points: totalPoints,
          items: quantities
        })
      });

      if (response.ok) {
        setHasBetted(true);
      } else {
        alert("Erro ao registrar aposta. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasBetted) {
    return (
      <section id="betting" className="py-24 bg-deep-black relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <NeonPanel variant="purple" className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-16 h-16 text-neon-purple mx-auto mb-6 animate-pulse" />
            <h2 className="font-orbitron text-3xl font-bold mb-4">APOSTA REGISTRADA</h2>
            <p className="font-rajdhani text-gray-400 mb-8">
              Obrigado, <span className="text-white font-bold">{nickname}</span>. Sua influência foi processada.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-6 border border-white/10">
                <Percent className="w-5 h-5 text-neon-blue mb-2 mx-auto" />
                <span className="block text-[10px] font-orbitron text-gray-500 uppercase mb-2">Distribuição de Apostas</span>
                <div className="space-y-3">
                  {apiStats?.stats ? Object.entries(apiStats.stats).map(([date, percentage]: any) => (
                    <div key={date}>
                      <div className="flex justify-between text-[10px] font-mono mb-1">
                        <span>{date}</span>
                        <span>{percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 overflow-hidden">
                        <div className="h-full bg-neon-blue transition-all duration-1000" style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                  )) : (
                    <div className="text-[10px] font-mono text-gray-600 animate-pulse">CALCULANDO PROBABILIDADES...</div>
                  )}
                </div>
              </div>

              <div className="bg-white/5 p-6 border border-white/10 flex flex-col justify-center">
                <ArrowRightLeft className="w-5 h-5 text-neon-purple mb-2 mx-auto" />
                <span className="block text-[10px] font-orbitron text-gray-500 uppercase mb-2">Taxa de Câmbio Local</span>
                <div className="font-mono text-xl text-white">
                  1.0 <span className="text-neon-purple">RED</span> = {apiStats?.exchangeRate?.value || "1.0"} <span className="text-neon-blue">DIA</span>
                </div>
                <p className="text-[8px] text-gray-600 mt-2">Cotação baseada na entropia do Sifão</p>
              </div>
            </div>

            <NeonButton variant="blue" onClick={() => setHasBetted(false)}>Voltar ao Terminal</NeonButton>
          </NeonPanel>
        </div>
      </section>
    );
  }

  return (
    <section id="betting" className="py-24 bg-deep-black relative border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-orbitron uppercase tracking-widest mb-4"
          >
            <TrendingUp className="w-3 h-3" /> Mercado Negro de Haijima
          </motion.div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            SISTEMA DE <span className="text-neon-purple">APOSTAS</span>
          </h2>
          
          {/* Nickname Input */}
          <div className="relative mt-6 max-w-xs w-full">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="SEU NICK NO GAME" 
              value={nickname}
              onChange={(e) => setNickname(e.target.value.toUpperCase())}
              className="w-full bg-white/5 border border-white/10 py-3 pl-12 pr-4 font-orbitron text-xs tracking-widest text-white focus:border-neon-purple focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna 1: Datas */}
          <div className="space-y-6">
            <h3 className="font-orbitron text-sm text-neon-blue uppercase tracking-widest flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4" /> Data do Retorno
            </h3>
            
            {["28 de Maio", "29 de Maio", "30 de Maio"].map((date) => (
              <motion.div
                key={date}
                whileHover={{ x: 10 }}
                onClick={() => setBetBetDate(date)}
                className={`p-6 border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                  betDate === date 
                  ? "bg-neon-blue/10 border-neon-blue shadow-[0_0_20px_rgba(0,207,255,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-neon-blue/40"
                }`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <span className={`font-orbitron text-xl ${betDate === date ? "text-white" : "text-gray-500"}`}>
                    {date}
                  </span>
                  {betDate === date && <ShieldCheck className="text-neon-blue w-6 h-6 animate-pulse" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>

          {/* Coluna 2: Calculadora de Recursos */}
          <div className="lg:col-span-2">
            <NeonPanel variant="blue" className="h-full">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="text-neon-blue w-6 h-6" />
                <h3 className="font-orbitron text-xl font-bold uppercase tracking-wider">Calculadora de Pontos</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs de Recursos */}
                <div className="space-y-4">
                  <ResourceInput 
                    label="Nano Armadura (Full)" 
                    points={NANO_FULL} 
                    value={quantities.nanoFull}
                    onChange={(v) => setQuantities({...quantities, nanoFull: v})}
                    color="purple"
                  />
                  <ResourceInput 
                    label="Nano Armadura (Parcial)" 
                    points={NANO_PARTIAL} 
                    value={quantities.nanoPartial}
                    onChange={(v) => setQuantities({...quantities, nanoPartial: v})}
                  />
                  <ResourceInput 
                    label="Totem Imortal" 
                    points={TOTEM_UNIT} 
                    value={quantities.totem}
                    onChange={(v) => setQuantities({...quantities, totem: v})}
                  />
                </div>

                <div className="space-y-4">
                  <ResourceInput 
                    label="Redstone (Unidade)" 
                    points={Math.round(REDSTONE_UNIT * 10) / 10} 
                    value={quantities.redstone}
                    onChange={(v) => setQuantities({...quantities, redstone: v})}
                  />
                  <ResourceInput 
                    label="Diamante (Unidade)" 
                    points={Math.round(DIAMOND_UNIT * 10) / 10} 
                    value={quantities.diamond}
                    onChange={(v) => setQuantities({...quantities, diamond: v})}
                  />
                  <ResourceInput 
                    label="Carvão (Unidade)" 
                    points={Math.round(COAL_UNIT * 10) / 10} 
                    value={quantities.coal}
                    onChange={(v) => setQuantities({...quantities, coal: v})}
                  />
                </div>
              </div>

              {/* Total Display */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="font-orbitron text-[10px] text-gray-500 uppercase tracking-[0.4em] block mb-1">
                    Valor Total Estimado
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-orbitron text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {totalPoints.toLocaleString()}
                    </span>
                    <span className="font-orbitron text-neon-blue text-sm">PONTOS</span>
                  </div>
                </div>

                <NeonButton 
                  variant="purple" 
                  disabled={!betDate || totalPoints === 0 || !nickname || isSubmitting}
                  onClick={handleBet}
                  className="w-full md:w-auto h-16 px-12"
                >
                  <Coins className="w-5 h-5" />
                  {isSubmitting ? "PROCESSANDO..." : "Confirmar Aposta"}
                </NeonButton>
              </div>
            </NeonPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ResourceInputProps {
  label: string;
  points: number;
  value: number;
  onChange: (v: number) => void;
  color?: "blue" | "purple";
}

const ResourceInput = ({ label, points, value, onChange, color = "blue" }: ResourceInputProps) => (
  <div className="bg-white/5 border border-white/10 p-3 flex items-center justify-between group hover:border-white/20 transition-colors">
    <div className="flex flex-col">
      <span className="text-[10px] font-orbitron text-gray-400 uppercase tracking-widest">{label}</span>
      <span className={`text-[10px] font-mono ${color === "blue" ? "text-neon-blue" : "text-neon-purple"}`}>
        {points} pts/un
      </span>
    </div>
    <div className="flex items-center gap-3">
      <button 
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-400"
      >
        -
      </button>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className="w-12 bg-transparent text-center font-mono text-white focus:outline-none"
      />
      <button 
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-400"
      >
        +
      </button>
    </div>
  </div>
);
