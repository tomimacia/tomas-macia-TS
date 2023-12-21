import { ModalFooterButtonsType } from "@/types/ProjectsTypes";
import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import Link from "next/link";

export const ModalFooterButtons = ({ project }: ModalFooterButtonsType) => {
  const { source, site } = project;
  const isPrivate = source.href === "private";
  return (
    <ModalFooter>
      <Flex gap={3}>
        <Button
          size={["xs", "xs", "sm", "sm"]}
          as={Link}
          target="_blank"
          rel="noreferred noopener"
          href={source.href}
          _hover={!isPrivate ? { bg: "gray.300" } : undefined}
          isDisabled={isPrivate}
          pointerEvents={isPrivate ? "none" : undefined}
        >
          {source.button}
        </Button>
        <Button
          bg="blue.400"
          _hover={{ bg: "blue.200" }}
          size={["xs", "xs", "sm", "sm"]}
          as={Link}
          target="_blank"
          rel="noreferred noopener"
          href={site.href}
        >
          {site.button}
        </Button>
      </Flex>
    </ModalFooter>
  );
};
