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
    Link,
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
                    'https://i.ibb.co/VxqWdFp/rostro.jpg'
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
                    <Link 
                    _hover={{
                      textDecoration: 'none',
                    }} 
                    href={'https://api.whatsapp.com/send?phone=+56966634262'}
                    >Whatssap</Link>
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
                      <Link 
                        _hover={{
                          textDecoration: 'none',
                        }} 
                        href={'https://instagram.com/estrella_natali?utm_medium=copy_link'}
                    >Instagram</Link>
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
              Si estas lista para cambiar tu cuerpo y la forma en que lo tratas y no es un "yo quisiera" "me gustar??a" "si pudiera",    si tus palabras son estas ultimas entonces a??n no est??s preparada. No gastes tu dinero ni tu tiempo. 
              Pero si sientes un deseo real y no est??s dispuesta a seguir con ese inconformismo ni un d??a m??s, si te ves en un futuro actuando como esa mujer que tiene el cuerpo que se merece... entonces est??s en el lugar correcto. 
              Juntas podemos trabajar por una figura que te represente y haga tu vida mas plena.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Conozco muy bien ese camino, he pasado por muchos obst??culos, a??os probando, investigando, form??ndome en teor??a y en pr??ctica, probando distintas formas de trabajo, especializ??ndome en el entrenamiento para la mujer, en la alimentacion, suplementacion y todo los que se requiere para esculpir un fisico. Un desaf??o personal fue llevar mi cuerpo a otro nivel, prepar??ndome para competir como atleta de bikini fitness en la Federaci??n de fisicoculturismo y fitness de Chile, siendo mi propia preparadora consiguiendo excelente resultados. <br/>
              Todas estas experiencias me han llevado a conocer muy bien como funciona el cuerpo femenino, adem??s siendo mujer comprendo las necesidades f??sicas y tambi??n psicol??gicas que m??s nos importan. Mi pasion es trabajar con el cuerpo, mi mision y deseo es que muchas mujeres sientan el beneficio y la planitud
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


  
  