import { DisplayLogosType } from "@/types/Skills";
import {
  Flex,
  Heading,
  Image,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useLanguage } from "../context/languageContext";

const ChakraImg = chakra(motion.img, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const DisplayLogos = ({
  logos,
  englishTitle,
  spanishTitle,
  startingTime = 0,
}: DisplayLogosType) => {
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
            <ChakraImg
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: `${(i + startingTime + 1) * 0.2}` }}
              h={[45, 50, 50, 59]}
              w={[45, 50, 50, 59]}
              title={logo.alt.split("-")[0]}
              objectFit="contain"
              objectPosition="center"
              alt={logo.alt}
              src={logo.imageProps.src}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DisplayLogos;
