import { useLanguage, useSetlanguage } from "@/context/languageContext";
import {
  FormControl,
  FormLabel,
  Icon,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
export const LanguageSwitch = () => {
  const language = useLanguage();
  const setLanguage = useSetlanguage();
  const handleSwitch = () => {
    setLanguage(language === "English" ? "Español" : "English");
  };
  return (
    <FormControl alignItems="center" display="flex" gap={1}>
      <Icon
        as={MdLanguage}
        color={useColorModeValue("blackAlpha.600", "gray.400")}
        fontSize="lg"
      />

      <FormLabel fontSize="18px" m={0}>
        En
      </FormLabel>
      <Switch
        onChange={handleSwitch}
        colorScheme="blue"
        isChecked={language === "Español"}
      />
      <FormLabel fontSize="18px" m={0}>
        Es
      </FormLabel>
    </FormControl>
  );
};
