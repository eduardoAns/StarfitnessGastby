import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroPlanes from '../components/HeroPlanes';
import Layout from '../components/layout';


const planes = () => {
  return (
    <Layout pageTitle="Planes">
      <Box>
        <HeroPlanes />
      </Box>
    </Layout>
  )
}

export default planes
