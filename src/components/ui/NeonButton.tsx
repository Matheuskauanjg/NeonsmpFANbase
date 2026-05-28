import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "purple";
  glitch?: boolean;
}

export const NeonButton = ({ 
  children, 
  variant = "blue", 
  glitch = false,
  className,
  ...props 
}: NeonButtonProps) => {
  const baseStyles = "relative px-6 py-2 font-orbitron text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden group";
  
  const variants = {
    blue: "border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,207,255,0.4)]",
    purple: "border border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(157,77,255,0.4)]",
  };

  // Separar as props que vão para o motion.button
  const motionProps: HTMLMotionProps<"button"> = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.button
      {...motionProps}
      className={cn(baseStyles, variants[variant], glitch && "hover:animate-glitch", className)}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Hover line animation */}
      <div className={cn(
        "absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
        variant === "blue" ? "bg-neon-blue" : "bg-neon-purple"
      )} />
    </motion.button>
  );
};
