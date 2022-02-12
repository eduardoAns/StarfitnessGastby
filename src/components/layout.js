import React from 'react';
import {
  Box,
  Center,
  ChakraProvider, 
  Flex,
  Heading,
  
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ pageTitle, children }) => {
  return (
  <ChakraProvider>  
    <Flex>
    <Box w={"95%"} margin={"auto"}>
      <title>{pageTitle}</title>
      <Header />
      <main>
        <Center>
        <Heading color={'pink.600'} alignContent={'center'} pb={'1rem'} pt={'1rem'} >{pageTitle}</Heading>
        </Center>
        {children}
      </main>
      <Footer />
    </Box>
    </Flex>
  </ChakraProvider>
  )
}

  export default Layout
