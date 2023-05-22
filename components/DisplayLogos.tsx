import { DisplayLogosType } from "@/types/Skills";
import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/languageContext";

const DisplayLogos = ({
  logos,
  englishTitle,
  spanishTitle,
  startingTime = 0,
}: DisplayLogosType) => {
  const sizeValue = useBreakpointValue([45, 50, 50, 59]);
  const language = useLanguage();
  return (
    <Flex
      borderRadius="10px"
      bg="blackAlpha.200"
      p={3}
      mt={[6, 8, 9, 10]}
      gap={[3, 4, 5, 5]}
      flexDir="column"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: startingTime * 0.2 }}
      >
        <Heading fontFamily="mono">
          {language === "English" ? englishTitle : spanishTitle}
        </Heading>
      </motion.div>
      <Flex gap={5} p={2} wrap="wrap">
        {logos.map((logo, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i + startingTime + 1) * 0.2 }}
            >
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Image                  
                  height={sizeValue}
                  width={sizeValue}                                               
                  title={logo.alt.split("-")[0]}
                  alt={logo.alt}
                  src={logo.imageProps.src}
                />
              </Flex>
            </motion.div>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DisplayLogos;
