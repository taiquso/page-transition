import Inner from "@/components/Layout/Inner";
import { motion } from "framer-motion";
import AnimatedParagraph from "@/components/AnimatedParagraph";
import StaggerLetters from "@/components/StaggerLetters";

export default function ContactPage() {
  return (
    <Inner>
      <motion.div className="inline-flex overflow-hidden">
        <StaggerLetters>CONTACT</StaggerLetters>
      </motion.div>
      <div className="grid grid-cols-3">
        <div className="col-start-2 p-8">
          <AnimatedParagraph>
            Welcome to my website. I am very happy and proud to have done this,
            mamacita cita cita cita ooooho oh oh ho ho
          </AnimatedParagraph>
        </div>
      </div>
    </Inner>
  );
}
