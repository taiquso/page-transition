import { motion } from "framer-motion";

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slideUp = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: 0,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const slideDown = {
    initial: {
      top: 0,
    },
    enter: {
      top: "-100vh",
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <div>
      <motion.div
        {...anim(slideUp)}
        className="fixed top-0 left-0 bg-[#1f1f1f] w-screen h-screen"
      ></motion.div>
      <motion.div
        {...anim(slideDown)}
        className="fixed top-0 left-0 z-10 bg-[#1f1f1f] w-screen h-screen"
      ></motion.div>
      <motion.div {...anim(opacity)} className="flex justify-center">
        {children}
      </motion.div>
    </div>
  );
}
