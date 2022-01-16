import { ChakraProvider, Flex } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Flex>
  );
}
