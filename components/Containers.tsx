import { useWebType } from '@/context/webTypeContext';
import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const MainContainer = ({ children }: { children: ReactNode }) => {
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && (
        <Container
          overflow='hidden'
          h='100%'
          pb='4rem'
          pt='35px'
          maxW='container.md'
        >
          {children}
        </Container>
      )}
      {webType === 'Minimalist' && (
        <Flex h='100%' pb='4rem' pt='35px' flexDir='column'>
          {children}
        </Flex>
      )}
    </>
  );
};
export const ArticleContainer = ({ children }: { children: ReactNode }) => {
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && <Container>{children}</Container>}
      {webType === 'Minimalist' && (
        <Flex px={2} mx='auto' maxW='1500px' flexDir='column'>
          {children}
        </Flex>
      )}
    </>
  );
};
export const NavigationContainer = ({ children }: { children: ReactNode }) => {
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && (
        <Container
          h='100%'
          maxW='container.md'
          alignItems='center'
          display='flex'
        >
          {children}
        </Container>
      )}
      {webType === 'Minimalist' && (
        <Flex align='center'  h='100%' px={2} mx='auto' maxW='1500px'>
          {children}
        </Flex>
      )}
    </>
  );
};
export const ProjectsContainer = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && (
        <Flex key={title} flexDir='column' gap={3}>
          {children}
        </Flex>
      )}
      {webType === 'Minimalist' && (
        <Flex key={title} flexWrap='wrap' gap={3}>
          {children}
        </Flex>
      )}
    </>
  );
};
export const NavTitleContainer = ({ children }: { children: ReactNode }) => {
  const webType = useWebType();
  return (
    <>
      {webType === 'Modern' && (
        <Container mt={5} p={3}>
          {children}
        </Container>
      )}
      {webType === 'Minimalist' && (
        <Flex w='100%' mx='auto' flexDir='column' mt={5} p={3} maxW='1500px'>
          {children}
        </Flex>
      )}
    </>
  );
};
