import { customTheme } from '@/styles/theme'
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
  } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { ReactNode } from 'react'
  
type ChakraType = {
    cookies:string,
    children: ReactNode
}

  export default function Chakra({ cookies, children }:ChakraType) {
    const colorModeManager =
      typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
  
    return (
      <ChakraProvider theme={customTheme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    )
  }
  
  export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    return {
      props: {
        cookies: req.headers.cookie ? '' : undefined
      }
    };
  };