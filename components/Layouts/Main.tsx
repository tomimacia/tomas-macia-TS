import { Box, Container, Divider } from "@chakra-ui/react";
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
    <Box pos="relative" minH="100vh" h="100%" as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomas Macia's homepage" />
        <meta name="author" content="Tomas Macia" />
        <meta name="twitter:title" content="Tomas Macia" />
        <meta name="twitter:site" content="@tomimacia" />
        <meta name="twitter:creator" content="@tomimacia" />
        <meta property="og:site_name" content="Tomas Macia" />
        <meta name="og:title" content="Tomas Macia" />
        <meta property="og:type" content="website" />
        <link rel="icon" href={HeaderLogo.src} />
      </Head>
      <Navigation />
      <Container h="100%" pb="4rem" pt="35px" maxW="container.md">
        <NavTitle />
        <Divider maxW="90%" m="auto" mb={6} mt={5} orientation="horizontal" />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
