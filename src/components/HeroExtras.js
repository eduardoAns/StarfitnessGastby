import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
    Box,
    Center,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import Resultado from './calculadoraApp/Resultado';
import Formulario from './calculadoraApp/Formulario';




  
  export default function HeroExtras() {

    const [tareas, setTareas] = useState([])



    const crearTarea = (tarea) =>{
    setTareas([...tareas, tarea])
    }

    const eliminarTarea = (id) =>{
    setTareas(tareas.filter((tarea)=>(tarea.id !== id) ))
    }




    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} justifyContent={'center'}>
            <Center >
                <Box
                maxW={'500px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                textAlign={'center'}>
                
                <Flex
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    align="center"
                    justify="center"
                    css={{
                    backgroundAttachment: 'fixed',
                    }}
                    id="contact"
                    flexDirection={{base:'column', md:'row'}}
                    >
                    <Box
                    borderRadius="lg"
                    p={{ base: 5, lg: 16 }}
                    >
                    <Box >
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }} >
                        <Heading
                            fontSize={{
                            base: '4xl',
                            md: '5xl',
                            }}>
                            Calculadora de calorias
                        </Heading>
                        <Box >
                            <Formulario 
                                crearTarea = {crearTarea}
                            />   
                        </Box>       
                        </VStack>
                    </Box>
                    </Box>
                    
                </Flex>

                </Box>
            </Center>
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'} >
                <Box >
                <Stack  p={'2rem'}>
                        <Box >
                            {tareas.length !== 0 && <Heading>Lista de resultados</Heading> }
                        </Box>
                        <Box >
                            {
                            tareas.map( (tarea) =>(
                                <Resultado
                                key={tarea.id}
                                tarea={tarea} 
                                eliminarTarea={eliminarTarea}
                                />
                            ))
                            }
                        </Box>        

                    </Stack>
                </Box>
          </Stack>
        </Flex>
      </Stack>
    );
  }
