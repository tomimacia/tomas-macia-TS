import { Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center
      pos="absolute"
      bottom={0}
      h="4rem"
      w="100%"
      opacity={0.4}
      fontSize="sm"
    >
      &copy; {new Date().getFullYear()} Tomas Macia. All Rights Reserved.
    </Center>
  );
};

export default Footer;
