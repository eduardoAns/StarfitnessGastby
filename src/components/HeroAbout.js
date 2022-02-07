import React from 'react';
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Avatar,
    Box,
    Center,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';
  
  export default function HeroAbout() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} justifyContent={'center'}>
            <Center >
                <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'} >
                    Estrella Ansa
                </Heading>
                <Text fontFamily={'body'} fontWeight={'semibold'} pb={'1rem'}>
                  Calama
                </Text>
               
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Entrenadora especializada en la mujer{' '}
                    
                </Text>
        
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #Fitness
                    </Badge>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #ViveSano
                    </Badge>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #ComeSano
                    </Badge>
                </Stack>
        
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                        bg: 'gray.200',
                    }}>
                    Mensaje
                    </Button>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Instagram
                    </Button>
                </Stack>
                </Box>
            </Center>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              <Text color={'pink.600'} as={'span'}>
                Entrenadora especializada en la mujer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Si estas lista para cambiar tu cuerpo y la forma en que lo tratas y no es un "yo quisiera" "me gustaría" "si pudiera",    si tus palabras son estas ultimas entonces aún no estás preparada. No gastes tu dinero ni tu tiempo. 
              Pero si sientes un deseo real y no estás dispuesta a seguir con ese inconformismo ni un día más, si te ves en un futuro actuando como esa mujer que tiene el cuerpo que se merece... entonces estás en el lugar correcto. 
              Juntas podemos trabajar por una figura que te represente y haga tu vida mas plena.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Conozco muy bien ese camino, he pasado por muchos obstáculos, años probando, investigando, formándome en teoría y en práctica, probando distintas formas de trabajo, especializándome en el entrenamiento para la mujer, en la alimentacion, suplementacion y todo los que se requiere para esculpir un fisico. Un desafío personal fue llevar mi cuerpo a otro nivel, preparándome para competir como atleta de bikini fitness en la Federación de fisicoculturismo y fitness de Chile, siendo mi propia preparadora consiguiendo excelente resultados. <br/>
              Todas estas experiencias me han llevado a conocer muy bien como funciona el cuerpo femenino, además siendo mujer comprendo las necesidades físicas y también psicológicas que más nos importan. Mi pasion es trabajar con el cuerpo, mi mision y deseo es que muchas mujeres sientan el beneficio y la planitud
              de vivir en una piel que las haga felices.
            </Text>

            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Te gustaria elevar tus estandares fisicos?
              <br/>Trabajemos juntas para esas metas.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    );
  }


  
  