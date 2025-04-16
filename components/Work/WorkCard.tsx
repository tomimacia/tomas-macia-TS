import {
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

type WorkCardType = {
  title: string;
  description: string;
  IMG: string;
  href: string;
};

const WorkCard = ({ title, description, IMG, href }: WorkCardType) => {
  return (
    <ChakraLink
      href={href}
      isExternal
      rel='noopener noreferrer nofollow'
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        borderRadius='10px'
        p={[0.5, 1, 2, 3]}
        gap={3}
        flexDir='column'
        pb={1}
        border='1px solid gray'
        cursor='pointer'
        _hover={{ boxShadow: '0 0 3px' }}
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
        <Flex flexDir='column' p={1} pb={2} borderRadius='10px'>
          <Text
            fontSize={['sm', 'sm', 'md', 'md']}
            p={1}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Flex>
      </Flex>
    </ChakraLink>
  );
};

export default WorkCard;
