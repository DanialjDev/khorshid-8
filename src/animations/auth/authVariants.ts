import { Variants } from "framer-motion";

export const authVariant: Variants = {
  initial: {
    scale: 0.4,
    opacity: 0,
  },
  animate: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
