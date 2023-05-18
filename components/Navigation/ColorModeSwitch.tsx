import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        aria-label="switch-icon"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        outlineColor={useColorModeValue("blackAlpha.400", "gray.400")}
        cursor="pointer"
        fontSize={18}
        mr={2}
        size="sm"
        _hover={{ color: "blackAlpha.400" }}
        bg="transparent"        
      >
        Switch Mode
      </IconButton>
    </Box>
  );
};

export default ColorModeSwitch;
