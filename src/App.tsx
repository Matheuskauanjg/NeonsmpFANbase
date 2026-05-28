import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/sections/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { ReleaseSection } from "./components/sections/ReleaseSection";
import { LoreSection } from "./components/sections/LoreSection";
import { FactionsSection } from "./components/sections/FactionsSection";
import { SecretsSection } from "./components/sections/SecretsSection";
import { BettingSection } from "./components/sections/BettingSection";
import AdminPage from "./pages/AdminPage";

const HomePage = () => (
  <>
    <HeroSection />
    <ReleaseSection />
    <div id="lore">
      <LoreSection />
    </div>
    <FactionsSection />
    <BettingSection />
    <SecretsSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-deep-black text-white selection:bg-neon-blue selection:text-deep-black">
        {/* Global Overlays */}
        <div className="noise-bg" />
        <div className="scanline-overlay" />
        
        <main className="relative z-10">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/definir" element={<AdminPage />} />
          </Routes>
          
          {/* Simple Footer */}
          <footer className="py-12 bg-deep-black border-t border-white/5 text-center">
            <div className="container mx-auto px-6 space-y-4">
              <a 
                href="https://discord.gg/GpqcEFwcjf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-orbitron text-xs text-neon-blue hover:text-white transition-colors tracking-widest uppercase border border-neon-blue/20 px-4 py-2 inline-block"
              >
                Acessar Discord Oficial
              </a>
              <p className="font-orbitron text-[10px] text-gray-600 tracking-[0.3em] uppercase">
                © 2026 NEON SMP - TODOS OS DIREITOS RESERVADOS // TRANSMISSÃO SEGURA
              </p>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;
