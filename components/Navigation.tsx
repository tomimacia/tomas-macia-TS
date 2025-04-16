import { Box, Container } from '@chakra-ui/react';
import NavLinks from '../data/NavLinks.json';
import useJsonData from '../hooks/useJsonData';
import { BaseNavigation } from './Navigation/BaseNavigation';
import { LanguageSwitch } from './Navigation/LanguageSwitch';
import { MobileNavigation } from './Navigation/MobileNavigation';
import { NavigationDataType } from '@/types/Datatype';
import { NavigationContainer } from './Containers';
import WebTypeSetter from './Navigation/WebTypeSetter';
const Navigation = () => {
  const data: NavigationDataType = useJsonData(NavLinks);

  return (
    <Box
      as='nav'
      h='60px'
      bg='blackAlpha.200'
      zIndex={10}
      top={0}
      left={0}
      position='fixed'
      w='100%'
      pl={{ xl: 'calc(100vw - 100%)' }}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <NavigationContainer>
        <LanguageSwitch />
        <WebTypeSetter isMobile />
        <BaseNavigation data={data} />
        <MobileNavigation data={data} />
      </NavigationContainer>
    </Box>
  );
};

export default Navigation;
