import React from 'react';
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
  
  export default function HeroPlanes() {
    return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} pb={'2rem'}>
        <Flex flex={1}>
        <StaticImage
          alt={'plan1'}
          src={
            '../images/plan1.jpeg'
          }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
              <Text color={'pink.600'} as={'span'}>
                Plan mujer autonoma
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

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={'center'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'pink.600',
              }}>
              Comprar
            </Button>
          </Stack>
          </Stack>
          
        </Flex>
        
      </Stack>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} pb={'2rem'}>
        <Flex flex={1}>
        <StaticImage
          alt={'plan2'}
          src={
            '../images/plan2.jpeg'
          }
          />
        </Flex>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
              <Text color={'pink.600'} as={'span'}>
                Plan mujer autonoma integral
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

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={'center'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'pink.600',
              }}>
              Comprar
            </Button>
          </Stack>
          </Stack>
          
        </Flex>
        
      </Stack>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} pb={'2rem'}>
        <Flex flex={1}>
        <StaticImage
          alt={'plan3'}
          src={
            '../images/plan3.jpeg'
          }
          />
        </Flex>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
              <Text color={'pink.600'} as={'span'}>
                Coaching mujer integral
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

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={'center'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'pink.600',
              }}>
              Comprar
            </Button>
          </Stack>
          </Stack>
          
        </Flex>
        
      </Stack>



    </>

      

      
    );
  }