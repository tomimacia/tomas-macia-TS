import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { MailData, SocialMediaData } from "../../data/SocialMediaData";
import { useLanguage } from "@/context/languageContext";
export const SocialMedia = () => {
  const language = useLanguage();
  return (
    <Flex gap={3} flexDir="column">
      <Flex mt={2} w="100%" align="center" justify="space-between">
        <Flex gap={[4,5,6,7]}>
          {SocialMediaData.map((media) => {
            const { href, title, MediaIcon } = media;
            return (
              <Link
                href={href}
                key={title + "Icon"}
                rel="noreferred noopener"
                target="_blank"
              >
                <MediaIcon title={title} cursor="Pointer" />
              </Link>
            );
          })}
        </Flex>
        <Flex align="center" gap={2}>
          <Link href={MailData.href} rel="noreferred noopener" target="_blank">
            <MailData.MediaIcon title={MailData.title} cursor="pointer" />
          </Link>
          <Text>{MailData.text[language]}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Typewriter
          options={{
            strings: ["instagram", "github", "twitter"],
            autoStart: true,
            loop: true,
          }}
        />

        <span>.com/tomimacia</span>
      </Flex>
    </Flex>
  );
};
