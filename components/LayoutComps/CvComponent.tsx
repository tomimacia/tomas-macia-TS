import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsFiletypePdf } from "react-icons/bs";

const CvComponent = () => {
  return (
    <Menu>
      <MenuButton
        bg="transparent"
        as={Button}
        _hover={{ bg: undefined, border: `1.5px solid ${useColorModeValue("black","white")}` }}
        border="1.5px solid transparent"
        p={2}
        rightIcon={<ChevronDownIcon />}
      >
        <Flex align="center" gap={1}>
          <BsFiletypePdf />
          CV
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          as={Link}
          target="_blank"
          rel="noreferrer noopener"
          href="/CVTomasMacia_ES.pdf"
        >
          Español
        </MenuItem>
        <MenuItem
          as={Link}
          target="_blank"
          rel="noreferrer noopener"
          href="/CVTomasMacia_EN.pdf"
        >
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CvComponent;
