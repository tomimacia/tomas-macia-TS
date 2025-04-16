import { useLanguage } from '@/context/languageContext';
import {
  filter,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  ContactData,
  ContactText,
  SocialMediaData,
} from '../../data/SocialMediaData';
import TypeWriterComponent from './TypeWriterComponent';
import { useWebType } from '@/context/webTypeContext';
import CvComponent from './CvComponent';
export const SocialMedia = () => {
  const [currentType, setCurrentType] = useState('Instagram');
  const language = useLanguage();
  const colorMode = useColorModeValue(0, 1);
  const baseColor = useColorModeValue('#aaa', '#ccc');
  const iconSizes = useBreakpointValue([15, 17, 18, 19]);
  const webType = useWebType();
  return (
    <Flex gap={3} flexDir='column'>
      <Flex mt={2} w='100%' align='center' justify='space-between'>
        <Flex gap={[3.5, 5, 6, 7]}>
          {SocialMediaData.map((media) => {
            const { href, iconColor, title, MediaIcon } = media;
            const match = currentType === title && webType === 'Modern';
            const animation = {
              color: match ? iconColor[colorMode] : baseColor,
              filter: `drop-shadow(0 0 ${match ? '10px' : '0px'} ${
                iconColor[colorMode]
              })`,
              // boxShadow: `0 0 ${currentType === title ? '15px' : '0px'} ${
              //   iconColor[colorMode]
              // }`,
            };
            return (
              <Link
                href={href}
                key={title + 'Icon'}
                rel='noreferred noopener'
                target='_blank'
              >
                <motion.div
                  style={{ borderRadius: '50%' }}
                  whileHover={{
                    scale: 1.1,
                    color: iconColor[colorMode],
                    filter: `drop-shadow(0 0 10px ${iconColor[colorMode]})`,
                  }}
                  animate={animation}
                >
                  <MediaIcon
                    title={title}
                    fontSize={iconSizes}
                    cursor='Pointer'
                  />
                </motion.div>
              </Link>
            );
          })}
        </Flex>

        <Flex align='center' gap={[2, 2.5, 3, 4]}>
          {webType !== 'Modern' && (
            <Flex justify='flex-end'>
              <CvComponent />
            </Flex>
          )}
          {ContactData.map((data) => {
            const { href, MediaIcon, title, iconColor } = data;
            return (
              <motion.div
                style={{ borderRadius: '50%' }}
                key={href}
                whileHover={{
                  scale: 1.1,
                  color: iconColor[colorMode],
                  boxShadow: `0 0 15px ${iconColor[colorMode]}`,
                }}
              >
                <Link href={href} rel='noreferred noopener' target='_blank'>
                  <MediaIcon
                    fontSize={iconSizes}
                    style={{
                      color:
                        webType === 'Modern' ? iconColor[colorMode] : undefined,
                    }}
                    title={title}
                    cursor='pointer'
                  />
                </Link>
              </motion.div>
            );
          })}
          <Text fontSize={{ base: 13, md: 18 }}>{ContactText[language]}</Text>
        </Flex>
      </Flex>
      {webType === 'Modern' && (
        <TypeWriterComponent
          currentType={currentType}
          setCurrentType={setCurrentType}
        />
      )}
    </Flex>
  );
};
