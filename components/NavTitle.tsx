import useGetFont from '@/hooks/useGetFont';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import NavProfileImage from '../public/images/ProfileImages/NavProfileImage.jpg';
import { NavTitleContainer } from './Containers';
import { SocialMedia } from './LayoutComps/SocialMedia';
const NavTitle = () => {
  const { font } = useGetFont();
  return (
    <NavTitleContainer>
      <Flex justify='space-between'>
        <Box fontFamily={font}>
          <Heading fontFamily={font} w='100%'>
            Tomás Macía
          </Heading>
          <Text w='100%' fontSize='lg' fontWeight='bold'>
            React & Next JS developer
          </Text>
        </Box>
        <Image
          borderRadius='full'
          h={100}
          alt='main-profile-img'
          src={NavProfileImage.src}
        />
      </Flex>
      <SocialMedia />
    </NavTitleContainer>
  );
};

export default NavTitle;
