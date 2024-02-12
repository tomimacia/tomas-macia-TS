import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
const TitleAndButtons = ({
  prevSlide,
  nextSlide,
  title,
}: {
  prevSlide: () => void;
  nextSlide: () => void;
  title: string;
}) => {
  return (
    <Flex pos='absolute' h='100%' w='100%'>
      <Flex w='100%' align='center' justify='space-between'>
        <IconButton
          as={ChevronLeftIcon}
          bg='blackAlpha.600'
          size='sm'
          m={1}
          color='white'
          cursor='pointer'
          _hover={{ bg: 'gray.500' }}
          aria-label='prev-button'
          zIndex={1}
          onClick={prevSlide}
        >
          Prev
        </IconButton>
        <IconButton
          as={ChevronRightIcon}
          bg='blackAlpha.600'
          size='sm'
          m={1}
          color='white'
          cursor='pointer'
          _hover={{ bg: 'gray.500' }}
          aria-label='next-button'
          zIndex={1}
          onClick={nextSlide}
        >
          Next
        </IconButton>
      </Flex>
      <Flex w='100%' mx='auto' pos='absolute' bottom='20%'>
        <Box
          borderRadius='10px'
          mx='auto'
          p={[1, 2, 3, 4]}
          zIndex={1}
          flexDir='column'
          bg='rgba(0, 0, 0, 0.5)' // Fondo semi-transparente
          color='white' // Color del texto blanco para mayor contraste
          backdropFilter='blur(10px)'
          boxShadow='0 2px 10px rgba(0, 0, 0, .6)'
          maxW={`calc(min(600px, 90%))`}
        >
          <Heading
            fontSize={['xl', '2xl', '3xl', '30px']} // Ajusta el tamaño del texto según el breakpoint
            fontWeight='normal' // Asegura que el texto sea audaz para mayor énfasis
            fontStyle='italic'
          >
            {title}
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TitleAndButtons;
