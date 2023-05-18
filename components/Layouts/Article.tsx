import { Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { ReactNode } from "react";
type ArticleLayoutType ={
  children: ReactNode,
  headTitle?: string,
  pageTitle?:string
}
const Layout = ({ children, headTitle, pageTitle }:ArticleLayoutType) => {
  const t = `${headTitle} - Tomás Macía`;
  return (
    <motion.article      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      {headTitle && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      <Container>
        <Heading size="lg" pb={1}>
          {pageTitle}
        </Heading>
        {children}
      </Container>
    </motion.article>
  );
};
export default Layout;
