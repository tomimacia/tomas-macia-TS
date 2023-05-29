import { useLanguage } from "@/context/languageContext";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
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
  return (
    <Flex gap={3} flexDir="column">
      <Flex mt={2} w="100%" align="center" justify="space-between">
        <Flex gap={[4, 5, 6, 7]}>
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
                          ? `0 0 10px ${iconColor[colorMode]}`
                          : `0 0 0px ${iconColor[colorMode]}`,
                    }
                  }
                >
                  <MediaIcon
                    title={title}
                    fontSize={18}
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
        <Flex align="center" gap={4}>
          {ContactData.map((data) => {
            return (
              <Link
                href={data.href}
                key={data.href}
                rel="noreferred noopener"
                target="_blank"
              >
                <data.MediaIcon
                  fontSize={18}
                  style={{ color: data.iconColor[colorMode] }}
                  title={data.title}
                  cursor="pointer"
                />
              </Link>
            );
          })}
          <Text>{ContactText[language]}</Text>
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
