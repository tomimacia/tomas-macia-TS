import { useIsPresent } from '@/context/articleContext';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { LinkItemType } from '@/types/LinkTypes';
import { usePushHandler } from '@/hooks/usePushHandler';
import { useWebType } from '@/context/webTypeContext';
import useGetFont from '@/hooks/useGetFont';
export const LinkPush = ({ href, children }: LinkItemType) => {
  const { font } = useGetFont();
  const bgCustomColor = useColorModeValue('teal', 'blue.400');
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const router = useRouter();
  const active = href === router.route;
  const isPresent = useIsPresent();
  const handlePush = () => {
    router.push({ pathname: href }, undefined, { scroll: false });
  };
  const triggerPush = usePushHandler(isPresent, handlePush);
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && (
        <Button
          onClick={triggerPush}
          p={1}
          fontWeight={active ? 'medium' : 'normal'}
          fontSize='100%'
          fontFamily={font}
          bg={active ? bgCustomColor : ''}
          color={active ? '#202023' : inactiveColor}
          _hover={{ bg: undefined }}
          borderRadius='5px'
        >
          <motion.span
            style={{ padding: 1 }}
            animate={{ y: active ? 3 : 0 }}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {children}
          </motion.span>
        </Button>
      )}
      {webType === 'Minimalist' && (
        <Button
          onClick={triggerPush}
          p={1}
          fontFamily={font}
          fontWeight='normal'
          textDecor={active ? 'underline' : 'none'}
          fontSize='100%'
          bg={'transparent'}
          _hover={{ textDecor: 'underline' }}
          _active={{ bg: undefined }}
          borderRadius='5px'
        >
          {children}
        </Button>
      )}
    </>
  );
};
