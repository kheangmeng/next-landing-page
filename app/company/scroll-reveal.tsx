import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  distance?: number;
  amount?: number;
}


export default function ScrollReveal ({
  children,
  direction = "up",
  delay = 0,
  distance = 50,
  amount = 0.3
}: Readonly<ScrollRevealProps>) {
  // Determine starting position based on direction
  const hiddenPosition = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...hiddenPosition[direction]
      }}
      // Trigger animation when component is in view
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      // once: false allows the animation to trigger on both scroll down AND up
      viewport={{ once: false, amount: amount }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a premium feel
      }}
    >
      {children}
    </motion.div>
  );
};
