import Inner from "@/components/Layout/Inner";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Inner>
      <motion.div className="inline-flex overflow-hidden">
        <Letters>Web Animation Course</Letters>
      </motion.div>
    </Inner>
  );
}

const Letters = ({ children }) => {
  return (
    <motion.div className="text-7xl font-bold pt-8">
      {children.split("").map((char, i) => {
        return (
          <motion.span
            className="inline-block bg-gradient-to-b from-black to-white bg-clip-text text-transparent"
            initial={{ y: "100%" }}
            animate={{
              y: 0,
              transition: {
                delay: 0.5 + i * 0.045,
                ease: "easeInOut",
                type: "spring",
                damping: 70,
                stiffness: 300,
              },
            }}
            key={i}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
