import '@fontsource/rubik';
import '@fontsource/fira-code';
import '@/public/prism-onedark.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import MainLayout from '@/components/MainLayout';

const mainTheme = extendTheme({
  config: {
    initialColorMode: `dark`,
    useSystemColorMode: false,
  },
  fonts: {
    body: `Rubik, sans-serif`,
    heading: `Rubik, sans-serif`,
    mono: `Fira Code, ` + theme.fonts.mono,
  },
  shadows: {
    outline: `none`,
  },
  colors: {
    brand: {
      50: `#ebe9ff`,
      100: `#c4c1f3`,
      200: `#a197e7`,
      300: `#7f6edd`,
      400: `#5f45d2`,
      500: `#4b2cb9`,
      600: `#3e2190`,
      700: `#2f1868`,
      800: `#180d40`,
      900: `#07041a`,
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
