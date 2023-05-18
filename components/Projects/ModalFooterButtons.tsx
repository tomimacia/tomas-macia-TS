import { ModalFooterButtonsType } from "@/types/ProjectsTypes";
import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import Link from "next/link";


export const ModalFooterButtons = ({ project }:ModalFooterButtonsType) => {
  return (
    <ModalFooter>
      <Flex gap={3}>
        <Button
          size={["xs", "xs", "sm", "sm"]}
          as={Link}
          target="blank"
          rel="noreferred noopener"
          href={project.source.href}
        >
          {project.source.button}
        </Button>
        <Button
          bg="blue.400"
          _hover={{ bg: "blue.200" }}
          size={["xs", "xs", "sm", "sm"]}
          as={Link}
          target="blank"
          rel="noreferred noopener"
          href={project.site.href}
        >
          {project.site.button}
        </Button>
      </Flex>
    </ModalFooter>
  );
};
