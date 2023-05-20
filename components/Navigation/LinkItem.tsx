import { LinkItemType } from "@/types/LinkTypes";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

export const LinkItem = ({
  href,
  target,
  children,
  ...props
}: LinkItemType) => {
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={1}
      color={inactiveColor}
      target={target}
      borderRadius="5px"
      {...props}
    >
      <motion.button whileHover={{ scale: 1.05 }}>{children}</motion.button>
    </Link>
  );
};
