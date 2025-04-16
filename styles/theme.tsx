import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import '@fontsource/montserrat/400.css';
const fonts = {
  ...chakraTheme.fonts,
  body: 'montserrat',
  heading: 'montserrat',
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};
const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '62em',
  xl: '64em',
};
const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};
const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px',
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
  config,
};

export const customTheme = extendTheme(overrides);
