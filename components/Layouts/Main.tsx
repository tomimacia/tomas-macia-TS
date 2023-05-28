import { Box, Container, Divider, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import HeaderLogo from "../../public/logos/HeaderLogo.png";
import Footer from "../Footer";
import NavTitle from "../NavTitle";
import Navigation from "../Navigation";
import { ReactNode } from "react";
type MainLayoutType = {
  children: ReactNode;
};
const Layout = ({ children }: MainLayoutType) => {
  return (
    <Box
      pos="relative"
      minH="100vh"
      bg={useColorModeValue("#D6CEAE", "gray.800")}
      h="100%"
      as="main"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomas Macia homepage portfolio" />
        <meta name="author" content="Tomas Macia" />
        <meta name="twitter:title" content="Tomas Macia" />
        <meta name="twitter:site" content="@tomimacia" />
        <meta name="twitter:creator" content="@tomimacia" />
        <meta property="og:site_name" content="Tomas Macia" />
        <meta name="og:title" content="Tomas Macia" />
        <meta name="google-site-verification" content="48E8wrz8ZLqrjJDfbW7r6B5wugEeAxmDtusOPT-xGQE" />
        <meta property="og:type" content="website homepage" />
        <link
          href="https://tomasmacia.com.ar/favicon.ico"
          rel="apple-touch-icon"
        />
        <link rel="icon" href={HeaderLogo.src} />
      </Head>
      <Navigation />
      <Container
        overflow="hidden"
        h="100%"
        pb="4rem"
        pt="35px"
        maxW="container.md"
      >
        <NavTitle />
        <Divider maxW="90%" m="auto" mb={6} mt={5} orientation="horizontal" />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
