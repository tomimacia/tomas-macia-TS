import { Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
type WorkCardType = {
  title: string;
  description: string;
  IMG: string;
  href: string;
  buttonText: string;
};
const WorkCard = ({
  title,
  description,
  IMG,
  href,
  buttonText,
}: WorkCardType) => {
  return (
    <Flex
      borderRadius='10px'
      p={[0.5, 1, 2, 3]}
      bg='whiteAlpha.500'
      gap={3}
      flexDir='column'
      pb={1}
    >
      <Flex
        flexDir={['column', 'column', 'row', 'row']}
        align='center'
        justify='space-around'
        gap={2}
      >
        <Heading as='h3' fontSize='2xl'>
          {title}
        </Heading>
        <Image
          alt={title.split(' ').join('-')}
          src={IMG}
          height={70}
          width='auto'
          maxW={150}
          style={{
            objectPosition: 'center',
            objectFit: 'contain',
            borderRadius: '3px',
          }}
        />
      </Flex>
      <Divider borderColor='gray' w='90%' mx='auto' />
      <Flex
        flexDir='column'
        p={1}
        pb={2}
        bg='blackAlpha.50'
        borderRadius='10px'
      >
        <Text
          fontSize={['sm', 'sm', 'md', 'md']}
          p={1}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button
          bg='blue.400'
          size={['xs', 'xs', 'sm', 'sm']}
          alignSelf='center'
          as={Link}
          href={href}
          _hover={{ bg: 'blue.200' }}
          target='_blank'
          rel='noreferred noopener'
          my={2}
        >
          {buttonText}
        </Button>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
