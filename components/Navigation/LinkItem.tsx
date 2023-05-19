import { Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
type LinkItemType = {
  href?: string;
  rel?: string;
  target?: string;
  active?: boolean;
  children: React.ReactNode;
};

export const LinkItem = ({
  href,
  target,
  active,
  children,
  ...props
}: LinkItemType) => {
  const bgCustomColor = useColorModeValue("teal.200", "teal");

  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={1}
      bg={active ? bgCustomColor : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      borderRadius="5px"
      {...props}
    >
      <motion.button
        animate={{ y: active ? 3 : 0 }}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        {children}
      </motion.button>
    </Link>
  );
};
