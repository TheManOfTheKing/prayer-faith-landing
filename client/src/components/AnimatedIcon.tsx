import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  variant?: "pulse" | "bounce" | "rotate" | "glow";
  delay?: number;
}

export default function AnimatedIcon({ 
  icon: Icon, 
  size = 48,
  className = "",
  variant = "pulse",
  delay = 0
}: AnimatedIconProps) {
  
  const variants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "linear"
      }
    },
    glow: {
      filter: [
        "drop-shadow(0 0 2px currentColor)",
        "drop-shadow(0 0 8px currentColor)",
        "drop-shadow(0 0 2px currentColor)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      animate={variants[variant]}
      whileHover={{ scale: 1.2 }}
      className={`inline-block ${className}`}
    >
      <Icon size={size} />
    </motion.div>
  );
}
