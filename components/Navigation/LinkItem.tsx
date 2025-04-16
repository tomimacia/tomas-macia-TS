import { useWebType } from '@/context/webTypeContext';
import useGetFont from '@/hooks/useGetFont';
import { LinkItemType } from '@/types/LinkTypes';
import { Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

export const LinkItem = ({
  href,
  target,
  children,
  ...props
}: LinkItemType) => {
  const { font } = useGetFont();
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const webType = useWebType();
  const hovers = {
    Modern: { scale: 1.05 },
    Minimalist: { textDecoration: 'underline' },
  };

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={1}
      color={inactiveColor}
      target={target}
      borderRadius='5px'
      {...props}
      fontFamily={font}
    >
      <motion.button whileHover={hovers[webType]}>{children}</motion.button>
    </Link>
  );
};
