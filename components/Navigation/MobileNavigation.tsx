import { LinkType, NavigationChild } from "@/types/Datatype";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import ColorModeSwitch from "./ColorModeSwitch";

export const MobileNavigation = ({ data }: NavigationChild) => {
  return (
    <Flex flexDir="row">
      <ColorModeSwitch />
      <Box ml={2} display={{ md: "none", sm: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            fontSize={18}
            outlineColor={useColorModeValue("blackAlpha.400", "gray.400")}
            size="sm"
            bg='transparent'
            icon={<HamburgerIcon />}
          />
          <MenuList>
            {data?.Links?.map((link: LinkType) => {
              return (
                <MenuItem
                  key={"MobileLink" + link.Title}
                  as={Link}
                  href={link.href}
                >
                  {link.Title}
                </MenuItem>
              );
            })}
            <MenuItem
              as={Link}
              href={data?.Source?.href}
              target={data?.Source?.target}
              rel={data?.Source?.rel}
              gap={1}
            >
              {data?.Source?.Title}
              <IoLogoGithub />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
