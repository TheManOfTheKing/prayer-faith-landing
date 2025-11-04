import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  suffix = "",
  prefix = "",
  duration = 2,
  className = ""
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (latest) => 
    `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
