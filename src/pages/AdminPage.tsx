import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Trophy, Users, Settings, RefreshCcw } from "lucide-react";
import { NeonPanel } from "../components/ui/NeonPanel";
import { NeonButton } from "../components/ui/NeonButton";

const AdminPage = () => {
  const [winnerDate, setWinnerDate] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [bets, setBets] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  const fetchBets = async () => {
    try {
      const res = await fetch('/api/bets');
      const data = await res.json();
      setBets(data.bets || []);
      setStats(data);
    } catch (err) {
      console.error("Erro ao buscar apostas:", err);
    }
  };

  useEffect(() => {
    fetchBets();
  }, []);

  const handleSetWinner = () => {
    if (!winnerDate) return;
    setIsSaving(true);
    // Em uma implementação real, salvaríamos isso em uma tabela 'settings' ou similar
    setTimeout(() => {
      alert(`VENCEDOR DEFINIDO: ${winnerDate}. O protocolo de distribuição foi ativado.`);
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-deep-black text-white p-6 pt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Settings className="w-8 h-8 text-neon-purple animate-spin-slow" />
            <h1 className="font-orbitron text-4xl font-bold tracking-tighter">TERMINAL DE <span className="text-neon-purple">CONTROLE</span></h1>
          </div>
          <NeonButton variant="blue" onClick={fetchBets} className="h-10 px-4">
            <RefreshCcw className="w-4 h-4 mr-2" /> Atualizar Dados
          </NeonButton>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Seletor de Vencedor */}
          <NeonPanel variant="purple" className="space-y-6">
            <h3 className="font-orbitron text-lg flex items-center gap-2">
              <Trophy className="text-yellow-500 w-5 h-5" /> Definir Resultado Real
            </h3>
            <p className="text-sm text-gray-500 font-rajdhani">
              Selecione o dia em que o servidor REALMENTE voltou para processar os ganhadores.
            </p>
            
            <div className="space-y-3">
              {["28 de Maio", "29 de Maio", "30 de Maio"].map((date) => (
                <button
                  key={date}
                  onClick={() => setWinnerDate(date)}
                  className={`w-full p-4 border text-left font-orbitron text-xs tracking-widest transition-all ${
                    winnerDate === date 
                    ? "bg-neon-purple/20 border-neon-purple text-white" 
                    : "bg-white/5 border-white/10 text-gray-500 hover:border-neon-purple/40"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            <NeonButton 
              variant="purple" 
              className="w-full h-12"
              disabled={!winnerDate || isSaving}
              onClick={handleSetWinner}
            >
              {isSaving ? "PROCESSANDO..." : "CONFIRMAR RESULTADO"}
            </NeonButton>
          </NeonPanel>

          {/* Monitor de Apostas */}
          <NeonPanel variant="blue" className="space-y-6">
            <h3 className="font-orbitron text-lg flex items-center gap-2">
              <Users className="text-neon-blue w-5 h-5" /> Monitor de Apostas ({bets.length})
            </h3>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {bets.length > 0 ? bets.map((bet, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white/5 border-l border-neon-blue/30">
                  <div>
                    <span className="block font-orbitron text-[10px] text-white">{bet.nickname}</span>
                    <span className="text-[8px] font-mono text-gray-500 uppercase">{bet.bet_date}</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-neon-blue text-xs">{bet.points.toLocaleString()} PTS</span>
                    <span className="text-[8px] text-gray-700">{new Date(bet.created_at).toLocaleString()}</span>
                  </div>
                </div>
              )) : (
                <div className="text-center py-12 text-gray-600 font-orbitron text-xs">
                  NENHUMA APOSTA REGISTRADA NO SISTEMA
                </div>
              )}
            </div>
            
            {stats && (
              <div className="pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-orbitron text-gray-500 uppercase mb-2">
                  <span>Câmbio Atual:</span>
                  <span className="text-white">1 RED = {stats.exchangeRate?.value} DIA</span>
                </div>
              </div>
            )}
          </NeonPanel>
        </div>

        <div className="mt-12 bg-red-500/5 border border-red-500/20 p-6 flex items-start gap-4">
          <ShieldAlert className="text-red-500 w-6 h-6 flex-shrink-0" />
          <div>
            <h4 className="font-orbitron text-xs text-red-500 uppercase mb-1">Aviso de Protocolo</h4>
            <p className="text-xs text-gray-500 font-rajdhani">
              A definição do resultado é irreversível e afetará a economia de todos os jogadores registrados. 
              Certifique-se de que os dados de log do Sifão Divino estão corretos antes de prosseguir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
