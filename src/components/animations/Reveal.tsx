import { motion } from "framer-motion";
import React from "react";

type Direction =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "grow";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const getVariant = (direction: Direction) => {
  switch (direction) {
    case "fade-down":
      return { y: -120, opacity: 0 };
    case "fade-left":
      return { x: -120, opacity: 0 };
    case "fade-right":
      return { x: 120, opacity: 0 };
    case "grow":
      return { scale: 0.9, opacity: 0 };
    case "fade-up":
    default:
      return { y: 120, opacity: 0 };
  }
};

const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "fade-up",
  delay = 0,
  once = true,
  className = "",
}) => {
  return (
    <motion.div
      initial={getVariant(direction)}
      whileInView={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      // transition={{
      //   duration,
      //   delay,
      //   ease: "easeOut",
      // }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay,
      }}
      // viewport={{ once }}
      viewport={{ once, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;