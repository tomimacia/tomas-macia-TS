import Layout from '@/components/Layouts/Main';
import { customTheme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps,router }: AppProps) {
  return  (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
