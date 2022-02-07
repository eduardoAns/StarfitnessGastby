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
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
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
                Entrenadora
              </Text>
              <br />{' '}
              <Text color={'pink.600'} as={'span'}>
                Especializada en la mujer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.500'}>
            ¿Estas dispuesta a cambiar la forma en que tratas a tu cuerpo?.
            </Text>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.500'}>
            Si eres una mujer multifuncional, que quiere mejorar su cuerpo desde adentro hacia afuera, entonces INICIA TU TRANSFORMACION.
            </Text>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.500'}>
              No esperes mas y Trabajemos por tu mejor version
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