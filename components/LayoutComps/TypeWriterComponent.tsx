import { Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import CvComponent from "./CvComponent";
type TypeWriterType = {
  currentType: string;
  setCurrentType: (currentType: string) => void;
};
const TypeWriterComponent = ({
  currentType,
  setCurrentType,
}: TypeWriterType) => {
  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };  
  return (
    <Flex w="100%" flexDir={["column","row","row","row"]} justify="space-between">
      <Flex>
        <Typewriter
          onInit={(typewriter) => {
            const PAUSE_TIME = 2100;
            typewriter
              .typeString("instagram")
              .pauseFor(PAUSE_TIME)
              .deleteAll()
              .callFunction(() => setCurrentType("Github"))
              .typeString("github")
              .pauseFor(PAUSE_TIME)
              .deleteAll()
              .callFunction(() => setCurrentType("X"))
              .typeString("x")
              .pauseFor(PAUSE_TIME)
              .deleteAll()
              .callFunction(() => setCurrentType("LinkedIn"))
              .typeString("linkedin")
              .pauseFor(PAUSE_TIME)
              .deleteAll()
              .callFunction(() => setCurrentType("Instagram"))
              .start();
          }}
          options={{
            loop: true,
          }}
        />
        .com/
        <AnimatePresence mode="wait">
          <motion.div
            key={currentType === "LinkedIn" ? "LinkedIn" : "Other"}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween" }}
          >
            {currentType === "LinkedIn" ? "tomas-eduardo-macia" : "tomimacia"}
          </motion.div>
        </AnimatePresence>
      </Flex>
      <Flex justify="flex-end">
        <CvComponent />
      </Flex>
    </Flex>
  );
};

export default TypeWriterComponent;
