import { useSetIsPresent } from "@/context/articleContext";
import { Container, Heading } from "@chakra-ui/react";
import { motion, useIsPresent } from "framer-motion";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
type ArticleLayoutType = {
  children: ReactNode;
  headTitle: string;
  pageTitle?: string;
};
const variants = {
  hidden: { zIndex: 0, x: 20, opacity: 0 },
  visible: { zIndex: 0, x: 0, opacity: 1 },
  exit: { zIndex: 1, x: 20, opacity: 0 },
};
const Layout = ({ children, headTitle, pageTitle }: ArticleLayoutType) => {
  const t = `${headTitle} - Tomás Macía`;
  const setIsPresent = useSetIsPresent();
  const isPresent = useIsPresent();
  useEffect(() => {
    setIsPresent(isPresent);
  }, [isPresent, setIsPresent]);
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Container>
        {headTitle && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}

        <Heading as='h1' size="lg" pb={1}>
          {pageTitle}
        </Heading>
        {children}
      </Container>
    </motion.article>
  );
};
export default Layout;
