import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLanguage } from "@/context/languageContext";

const NotFound = () => {
  const language = useLanguage();
  const data =
    language === "English"
      ? {
          title: "Not found",
          text: "The page you're looking for was not found.",
          back: "Return to home",
        }
      : {
          title: "No encontrado",
          text: "La página que estas buscando no fue encontrada.",
          back: "Volver al inicio",
        };
  return (
    <Container>
      <Heading as="h1">{data.title}</Heading>
      <Text>{data.text}</Text>

      <Box my={6} alignContent="center">
        <Button
          as={NextLink}
          href="/"
          colorScheme={useColorModeValue("teal", "blue.400")}
        >
          {data.back}
        </Button>
      </Box>
    </Container>
  );
};
export default NotFound;
