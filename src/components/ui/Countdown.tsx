import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const targetDate = new Date("2026-05-22T20:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted || !timeLeft) return <div className="h-28" />; // Placeholder to prevent layout shift

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-16 h-20 md:w-24 md:h-28 glass-panel border border-neon-blue/30 flex items-center justify-center mb-2 overflow-hidden group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors" />
        
        <span className="font-orbitron text-2xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,207,255,0.5)]">
          {value.toString().padStart(2, "0")}
        </span>
        
        {/* Subtle scanline on the box */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,207,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
      </motion.div>
      <span className="font-exo text-[8px] md:text-[10px] text-neon-blue/60 uppercase tracking-[0.2em] font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Dias" />
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
};
