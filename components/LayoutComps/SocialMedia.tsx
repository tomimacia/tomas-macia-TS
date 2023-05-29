import { useLanguage } from "@/context/languageContext";
import {
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import {
  ContactData,
  ContactText,
  SocialMediaData,
} from "../../data/SocialMediaData";
export const SocialMedia = () => {
  const [currentType, setCurrentType] = useState("Instagram");
  const language = useLanguage();
  const colorMode = useColorModeValue(0, 1);
  const baseColor = useColorModeValue("#aaa", "#fff");
  const iconSizes = useBreakpointValue([15, 17, 18, 19]);
  return (
    <Flex gap={3} flexDir="column">
      <Flex mt={2} w="100%" align="center" justify="space-between">
        <Flex gap={[3.5, 5, 6, 7]}>
          {SocialMediaData.map((media) => {
            const { href, iconColor, title, MediaIcon } = media;
            return (
              <Link
                href={href}
                key={title + "Icon"}
                rel="noreferred noopener"
                target="_blank"
              >
                <motion.div
                  style={{ borderRadius: "8px" }}
                  animate={
                    title !== "LinkedIn" && {
                      color:
                        currentType === title
                          ? iconColor[colorMode]
                          : baseColor,
                      boxShadow:
                        currentType === title
                          ? `0 0 15px ${iconColor[colorMode]}`
                          : `0 0 0px ${iconColor[colorMode]}`,
                    }
                  }
                >
                  <MediaIcon
                    title={title}
                    fontSize={iconSizes}
                    color={
                      title === "LinkedIn" ? iconColor[colorMode] : undefined
                    }
                    cursor="Pointer"
                  />
                </motion.div>
              </Link>
            );
          })}
        </Flex>
        <Flex align="center" gap={[2, 2.5, 3, 4]}>
          {ContactData.map((data) => {
            const { href, MediaIcon, title, iconColor } = data;
            return (
              <Link
                href={href}
                key={href}
                rel="noreferred noopener"
                target="_blank"
              >
                <MediaIcon
                  fontSize={iconSizes}
                  style={{ color: iconColor[colorMode] }}
                  title={title}
                  cursor="pointer"
                />
              </Link>
            );
          })}
          <Text fontSize={{ base: 13, md: 18 }}>{ContactText[language]}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("instagram")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setCurrentType("Github"))
              .typeString("github")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setCurrentType("Twitter"))
              .typeString("twitter")
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => setCurrentType("Instagram"))
              .start();
          }}
          options={{
            loop: true,
          }}
        />

        <span>.com/tomimacia</span>
      </Flex>
    </Flex>
  );
};
