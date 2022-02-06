import React from 'react';
import Layout from '../components/layout'
import { Box } from '@chakra-ui/react';
import HeroAbout from '../components/HeroAbout';


const AboutPage = () => {
  return (
    <Layout pageTitle="Sobre Mi">
      <Box>
        <HeroAbout />
      </Box>
    </Layout>
  )
}
export default AboutPage;