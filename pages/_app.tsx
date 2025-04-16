import Chakra from '@/components/Chakra';
import Layout from '@/components/Layouts/Main';
import { AnimatePresence } from 'framer-motion';

import type { AppProps } from 'next/app';
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <AnimatePresence mode='wait' initial={true}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}
