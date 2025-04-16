import { useLanguage } from '@/context/languageContext';
import { useSetWebType, useWebType } from '@/context/webTypeContext';
import useGetFont from '@/hooks/useGetFont';
import { WebType } from '@/types/WebType';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const WebTypeSetter = ({ isMobile }: { isMobile: boolean }) => {
  const { font } = useGetFont();
  const webType = useWebType();
  const setWebType = useSetWebType();
  const webStyles: WebType[] = ['Modern', 'Minimalist'];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const language = useLanguage();
  const buttonText = {
    Español: 'Estilo',
    English: 'Style',
  };
  const titleText = {
    Español: 'Estilo de Web',
    English: 'Website Style',
  };
  const mobileDisplay = useBreakpointValue([true, false, false, false]);
  if (isMobile !== mobileDisplay) return <></>;
  return (
    <>
      <Button
        borderBottomRadius={30}
        zIndex={1000}
        onClick={onOpen}
        position='absolute'
        bg='blackAlpha.200'
        _hover={{ opacity: 0.75 }}
        top={isMobile ? '0px' : '60px'}
        size='md'
        border='1px solid gray'
        left={isMobile ? '40%' : '50%'}
        fontFamily={font}
      >
        <Flex flexDir='column'>
          <Text fontSize={10}>{webType}</Text>
          <Text>{buttonText[language]}</Text>
        </Flex>
      </Button>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay
          style={{ backdropFilter: 'blur(10px)' }}
          bg='rgba(128, 128, 128, 0.6)'
        />
        <DrawerContent fontFamily={font}>
          <DrawerHeader borderBottomWidth='1px'>
            {titleText[language]}
          </DrawerHeader>
          <DrawerBody mb={5}>
            <AnimatePresence>
              {isOpen && (
                <Flex w='fit-content' mx='auto' pt={10} flexDir='column'>
                  {webStyles.map((st, ind) => (
                    <motion.div
                      key={st}
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: ind * 0.2, duration: 0.5 }}
                    >
                      <Text
                        _hover={{ textDecor: 'underline', cursor: 'pointer' }}
                        textDecor={webType === st ? 'underline' : 'none'}
                        fontSize={25}
                        onClick={() => {
                          setWebType(st);
                          onClose();
                        }}
                      >
                        {st}
                      </Text>
                    </motion.div>
                  ))}
                </Flex>
              )}
            </AnimatePresence>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default WebTypeSetter;
