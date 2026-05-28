import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MessageSquare as Discord, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Lore", href: "#lore" },
    { name: "Facções", href: "#factions" },
    { name: "Apostas", href: "#betting" },
    { name: "Arquivos", href: "#secrets" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-deep-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-orbitron text-xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 border border-neon-blue flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,207,255,0.5)] transition-all">
            <span className="text-neon-blue text-xs">N</span>
          </div>
          <span className="text-white">NEON <span className="text-neon-purple">SMP</span></span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-orbitron text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-neon-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue transition-all group-hover:w-full" />
            </a>
          ))}
          
          <a 
            href="https://discord.gg/GpqcEFwcjf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/20 transition-all group"
          >
            <Discord className="w-4 h-4 text-neon-purple group-hover:animate-pulse" />
            <span className="font-orbitron text-[10px] uppercase tracking-widest text-white">Entrar no Discord</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-deep-black border-b border-white/10 p-6 flex flex-col gap-6 z-40"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-orbitron text-sm uppercase tracking-[0.2em] text-gray-400"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://discord.gg/GpqcEFwcjf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-4 border border-neon-purple/50 bg-neon-purple/5"
          >
            <Discord className="w-5 h-5 text-neon-purple" />
            <span className="font-orbitron text-xs uppercase tracking-widest text-white">Discord</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
};
