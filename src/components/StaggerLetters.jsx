import { motion } from "framer-motion";

export default function StaggerLetters({ children }) {
  return (
    <motion.div className="text-7xl font-bold pt-8 inline-flex overflow-hidden">
      {children.split("").map((char, i) => {
        return (
          <div key={i}>
            <motion.span
              className="inline-block bg-gradient-to-b from-black via-black to-white bg-[length:90%_100%] bg-clip-text text-transparent"
              initial={{ y: "100%" }}
              animate={{
                y: 0,
                transition: {
                  delay: 0.5 + i * 0.015,
                  ease: "easeInOut",
                  type: "spring",
                  damping: 70,
                  stiffness: 300,
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </div>
        );
      })}
    </motion.div>
  );
}
