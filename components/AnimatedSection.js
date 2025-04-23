import { motion } from "framer-motion";

const variants = {
  left: {
    initial: { opacity: 0, x: -100, scale: 0.95, rotate: -2 },
    animate: { opacity: 1, x: 0, scale: 1, rotate: 0 },
  },
  right: {
    initial: { opacity: 0, x: 100, scale: 0.95, rotate: 2 },
    animate: { opacity: 1, x: 0, scale: 1, rotate: 0 },
  },
};

const transition = {
    duration: 1.6,
    ease: [0.6, 0.05, 0.01, 0.99], // valid for both framer-motion and native
  };
  

const AnimatedSection = ({ children, direction = "left", delay = 0 }) => (
  <motion.div
    initial={variants[direction].initial}
    whileInView={variants[direction].animate}
    transition={{ ...transition, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
