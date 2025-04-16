import { useSetIsPresent } from '@/context/articleContext';
import { Container, Heading } from '@chakra-ui/react';
import { motion, useIsPresent } from 'framer-motion';
import Head from 'next/head';
import { ReactNode, useEffect } from 'react';
import { ArticleContainer } from '../Containers';
import { useWebType } from '@/context/webTypeContext';
import useGetFont from '@/hooks/useGetFont';
type ArticleLayoutType = {
  children: ReactNode;
  headTitle: string;
  pageTitle?: string;
};
const variants = {
  Modern: {
    hidden: { zIndex: 0, x: 20, opacity: 0 },
    visible: { zIndex: 0, x: 0, opacity: 1 },
    exit: { zIndex: 1, x: 20, opacity: 0 },
  },
  Minimalist: {
    hidden: { zIndex: 0, opacity: 0 },
    visible: { zIndex: 0, opacity: 1 },
    exit: { zIndex: 1, opacity: 0 },
  },
};
const Layout = ({ children, headTitle, pageTitle }: ArticleLayoutType) => {
  const { font } = useGetFont();
  const t = `Tomás Macía - ${headTitle}`;
  const setIsPresent = useSetIsPresent();
  const isPresent = useIsPresent();
  const webType = useWebType();
  useEffect(() => {
    setIsPresent(isPresent);
  }, [isPresent, setIsPresent]);
  return (
    <motion.article
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants[webType]}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <ArticleContainer>
        {headTitle && (
          <Head>
            <title>{t}</title>
            <meta name='twitter:title' content={t} />
            <meta property='og:title' content='Tomás Macía - Portfolio' />
          </Head>
        )}

        <Heading fontFamily={font} as='h1' size='lg' pb={1}>
          {pageTitle}
        </Heading>
        {children}
      </ArticleContainer>
    </motion.article>
  );
};
export default Layout;
