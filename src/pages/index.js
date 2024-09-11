import Inner from "@/components/Layout/Inner";
import { motion } from "framer-motion";
import StaggerLetters from "@/components/StaggerLetters";
import AnimatedParagraph from "@/components/AnimatedParagraph";

export default function Home() {
  return (
    <Inner>
      <StaggerLetters>Web Animation Course</StaggerLetters>
      <div className="grid grid-cols-3">
        <div className="p-8">
          <AnimatedParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </AnimatedParagraph>
        </div>
        <div className="p-8">
          <AnimatedParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </AnimatedParagraph>
        </div>
        <div className="p-8">
          <AnimatedParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </AnimatedParagraph>
        </div>
      </div>
    </Inner>
  );
}
