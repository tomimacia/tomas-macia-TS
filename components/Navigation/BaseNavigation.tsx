import { NavigationChild } from "@/types/Datatype";
import { Flex, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoLogoGithub } from "react-icons/io5";
import { LinkItem } from "./LinkItem";

export const BaseNavigation = ({ data }: NavigationChild) => {
  const router = useRouter();

  return (
    <HStack
      display={{ base: "none", sm: "flex", md: "flex" }}
      mr={3}
      fontSize={18}
      spacing={4}
    >
      {data?.Links?.map((link) => {
        const { Title, href } = link;
        const active = href === router.route;
        return (
          <LinkItem active={active} href={href} key={"BaseLink" + Title}>
            {Title}
          </LinkItem>
        );
      })}
      <LinkItem
        href={data?.Source?.href}
        target={data?.Source?.target}
        rel={data?.Source?.rel}
      >
        <Flex align="center" gap={2}>
          <IoLogoGithub />
          {data?.Source?.Title}
        </Flex>
      </LinkItem>
    </HStack>
  );
};
