import { Flex } from "@chakra-ui/react";
type CarouselArrotType = {
  onClick: () => void;
  isLeft?: boolean;
};

export const CarouselArrow = ({ onClick, isLeft }: CarouselArrotType) => {
  return (
    <Flex
      top="calc(55%)"
      pos="absolute"
      bg="white"
      color="black"
      _hover={{ bg: "whiteAlpha.700" }}
      borderRadius="30px"
      w="40px"
      h="40px"
      justifyContent="center"
      alignItems="center"
      userSelect="none"
      cursor="pointer"
      fontWeight="bold"
      fontSize="18px"
      zIndex={2}
      right="10px"
      onClick={onClick}
      left={isLeft ? "10px" : undefined}
      transform={isLeft ? "scale(-1)" : undefined}
    >
      {"‣"}
    </Flex>
  );
};
