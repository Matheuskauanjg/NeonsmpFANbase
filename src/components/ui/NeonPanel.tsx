import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface NeonPanelProps {
  children: ReactNode;
  variant?: "blue" | "purple";
  className?: string;
  glow?: boolean;
}

export const NeonPanel = ({ 
  children, 
  variant = "blue", 
  className,
  glow = true 
}: NeonPanelProps) => {
  const colorClass = variant === "blue" ? "border-neon-blue" : "border-neon-purple";
  const glowClass = variant === "blue" ? "shadow-[0_0_15px_rgba(0,207,255,0.3)]" : "shadow-[0_0_15px_rgba(157,77,255,0.3)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative glass-panel border-l-2 p-6 overflow-hidden",
        colorClass,
        glow && glowClass,
        className
      )}
    >
      {/* Decorative corners */}
      <div className={cn("absolute top-0 right-0 w-2 h-2 border-t border-r", colorClass)} />
      <div className={cn("absolute bottom-0 left-0 w-2 h-2 border-b border-l", colorClass)} />
      
      {/* Inner blur/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
