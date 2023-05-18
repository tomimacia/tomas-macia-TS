import {
  Button,
  Center,
  Image,
  ListItem,
  UnorderedList,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ProjectCardImgType } from "@/types/ProjectsTypes";

export const ProjectCardImg = ({ alt, onOpen, src, tecs }:ProjectCardImgType) => {
  const [isTapped, setIsTapped] = useState(false);
  const language = useLanguage();
  
  // variants
  const imageMotion = {
    rest: {
      opacity: 1,
    },
    hover: {
      opacity: 0.2,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const listMotion = {
    rest: {
      opacity: 0,
      x: 0,
      y: 40,
    },
    hover: (index:number) => ({
      opacity: 1,
      x: 15,
      transition: {        
        type: "tween",
        ease: "easeIn",
        delay: index / 2,
        duration: 1 / 2,
      },
    }),
  };
  const innerMotion = {
    rest: {
      opacity: 0,
      display: "none",
      y: -32,
    },
    hover: {
      opacity: 1,
      display: "flex",
      y: -50,
      transition: {        
        type: "tween",
        ease: "easeIn",
        delay: tecs.length * 0.5,
        duration: 1 / 3,
      },
    },
  };
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });  
  // Click Outside hook for mobile
  const domNode = useClickOutside(() => {
    setIsTapped(false);
  });  
  const handleTouchStart = () => {
    if (!isTapped) setIsTapped(true);
  };

  return (
    <ChakraBox
      onTouchStart={handleTouchStart}
      position="relative"
      ref={domNode}
      initial="rest"
      whileHover="hover"
      animate={isTapped ? "hover" : "rest"}
      w={[320, 360, 360, 400]}
      h={[200, 225, 225, 250]}
    >
      <ChakraBox pos="absolute" variants={imageMotion}>
        <Image
          objectFit="cover"
          objectPosition="top"
          w={[320, 360, 360, 400]}
          h={[200, 225, 225, 250]}
          zIndex={2}
          alt={alt}
          src={src}
        />
      </ChakraBox>
      <UnorderedList style={{ listStyleType: "none" }} h="100%">
        {tecs.map((tec, index) => {
          return (
            <ChakraBox key={tec} custom={index} variants={listMotion}>
              <ListItem fontWeight="medium" fontSize={17}>
                {tec}
              </ListItem>
            </ChakraBox>
          );
        })}
      </UnorderedList>
      <ChakraBox variants={innerMotion} w="100%" position="absolute">
        <Center w="100%">
          <Button
            size={["sm", "sm", "sm", "sm"]}
            bg="blackAlpha.600"
            color="white"
            _hover={{ bg: "blackAlpha.400" }}
            onClick={onOpen}
          >
            {language === "English" ? "Learn more" : "Ver mas"}
          </Button>
        </Center>
      </ChakraBox>
    </ChakraBox>
  );
};
