import '@/public/prism-onedark.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import MainLayout from '@/components/MainLayout';

const mainTheme = extendTheme({
  config: {
    initialColorMode: `dark`,
    useSystemColorMode: false,
  },
  shadows: {
    outline: `none`,
  },
  colors: {
    brand: theme.colors.green,
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
