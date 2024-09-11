import { motion } from "framer-motion";

export default function AnimatedParagraph({ children }) {
  return (
    <div className="inline-block overflow-hidden">
      {children.split(" ").map((word, i) => {
        return (
          <span className="" key={i}>
            <div className="inline-flex overflow-hidden leading-8">
              <motion.span
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                  transition: {
                    delay: 0.5 + i * 0.008,
                    ease: "easeInOut",
                    type: "spring",
                    damping: 70,
                    stiffness: 300,
                  },
                }}
                className="inline-flex overflow-hidden"
              >
                {word}
              </motion.span>
            </div>

            {i < children.length - 1 && " "}
          </span>
        );
      })}
    </div>
  );
}
