import { Box, Container, Divider, useColorModeValue } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import HeaderLogo from '../../public/logos/HeaderLogo.png';
import Footer from '../Footer';
import NavTitle from '../NavTitle';
import Navigation from '../Navigation';
import Script from 'next/script';
type MainLayoutType = {
  children: ReactNode;
};
const Layout = ({ children }: MainLayoutType) => {
  return (
    <Box
      pos='relative'
      minH='100vh'
      bg={useColorModeValue('#D6CEAE', 'gray.800')}
      h='100%'
      as='main'
      pl={{ xl: 'calc(100vw - 100%)' }}
      overflowX='hidden'
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Tomas Macia is a React & Next JS developer'
        />
        <meta name='author' content='Tomas Macia' />
        <meta name='twitter:title' content='Tomas Macia' />
        <meta name='twitter:site' content='@tomimacia' />
        <meta name='twitter:creator' content='@tomimacia' />
        <meta
          name='twitter:image'
          content='/images/ProfileImages/DescriptionProfileOG.png'
        />

        <meta property='og:site_name' content='Tomas Macia' />
        <meta name='og:title' content='Tomas Macia' />
        <meta property='og:image:type' content='image/jpeg'></meta>
        <meta
          property='og:image'
          content='/images/ProfileImages/DescriptionProfileOG.png'
        />
        <meta
          name='google-site-verification'
          content='48E8wrz8ZLqrjJDfbW7r6B5wugEeAxmDtusOPT-xGQE'
        />
        <meta property='og:type' content='Website Homepage' />
        <link
          href='https://tomasmacia.com.ar/favicon.ico'
          rel='apple-touch-icon'
        />
        <link rel='icon' href={HeaderLogo.src} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Navigation />
      <Container
        overflow='hidden'
        h='100%'
        pb='4rem'
        pt='35px'
        maxW='container.md'
      >
        <NavTitle />
        <Divider maxW='90%' m='auto' mb={6} mt={5} orientation='horizontal' />
        {children}
        <Analytics />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
