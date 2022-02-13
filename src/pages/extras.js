import React from 'react';
import Layout from '../components/layout'
import { Box } from '@chakra-ui/react';
import HeroExtras from '../components/HeroExtras';

const extras = () => {
  return (
    <Layout pageTitle="extras">
      <Box>
        <HeroExtras />
      </Box>
    </Layout>
  )
}
export default extras;