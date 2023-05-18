import { Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypeWriterComponent = () => {
  return (
    <Flex>
      <Typewriter
        options={{
          strings: ["instagram", "github", "twitter"],
          autoStart: true,
          loop: true,
        }}
      />
      <span>.com/tomimacia</span>
    </Flex>
  );
};

export default TypeWriterComponent;
