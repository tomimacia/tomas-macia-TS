import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NavProfileImage from "../public/images/ProfileImages/NavProfileImage.jpg";
import { SocialMedia } from "./LayoutComps/SocialMedia";
const NavTitle = () => {
  return (
    <Container mt={5} p={3}>
      <Flex justify="space-between">
        <Box>
          <Heading w="100%">Tomás Macía</Heading>
          <Text w="100%" fontSize="lg" fontWeight="bold">
            Full-stack React developer
          </Text>
        </Box>
        <Image
          borderRadius="full"
          h={100}
          alt="main-profile-img"
          src={NavProfileImage.src}
        />
      </Flex>
      <SocialMedia />
    </Container>
  );
};

export default NavTitle;
