import React from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
  
  export default function HeroIndex() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: ({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'pink.600',
                  zIndex: -1,
                }}>
                Freelance
              </Text>
              <br />{' '}
              <Text color={'pink.600'} as={'span'}>
                Design Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>

            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <StaticImage
          src={
            '../images/fondo.jpg'
          }
          />
        </Flex>
      </Stack>
    );
  }