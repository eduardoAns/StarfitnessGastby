import React from 'react';
import Layout from '../components/layout';
import { Box, Flex } from '@chakra-ui/react';
import Slide from '../components/Slide';
import HeroIndex from '../components/HeroIndex';


const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <Flex flexDirection={"column"}>
        <Box pb={'2rem'}>
          <Flex flexDirection={"column"}>
            <HeroIndex />
          </Flex>
        </Box>
        <Box pb={'2rem'}>
          <Box >
          <Slide />
          </Box>
        </Box>
      </Flex> 
    </Layout>
  )
}

export default IndexPage
