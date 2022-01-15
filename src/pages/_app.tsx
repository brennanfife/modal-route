import { ChakraProvider, Flex } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Flex>
  )
}

export default MyApp
