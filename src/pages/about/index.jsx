import Inner from "@/components/Layout/Inner";
import { motion } from "framer-motion";
import StaggerLetters from "@/components/StaggerLetters";

export default function AboutPage() {
  return (
    <Inner>
      <motion.div className="inline-flex overflow-hidden">
        <StaggerLetters>ABOUT</StaggerLetters>
      </motion.div>
    </Inner>
  );
}
