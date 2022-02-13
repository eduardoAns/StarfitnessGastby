import React, { useState } from 'react';
import { v4 } from 'uuid';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    useColorModeValue,
    VStack,
    Select,
  } from '@chakra-ui/react';


const Formulario = ({crearTarea}) => {

   const [tarea, setTarea]= useState({
      peso:'',
      altura:'',
      edad:'',
      actividad:'',
   })

   const {peso, altura, edad} = tarea;

   const handleInput = (e) => {


       
       setTarea({
           ...tarea,
           [e.target.name]:e.target.value
       })


   }

   const handleSubmit = (e) => {
    
        
    
        e.preventDefault()

        crearTarea(tarea);

        tarea.id = v4();

        setTarea({
            peso:'',
            altura:'',
            edad:'',
            actividad:'',
        })
   }



    return ( 
        <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: 'column', md: 'row' }}>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base">
              <VStack spacing={5}>

              <form
                onSubmit={handleSubmit}
              >
                
                <FormControl isRequired>
                  <FormLabel>Peso Kg </FormLabel>

                  <InputGroup>
                    <Input 
                      name="peso"
                      value={peso}
                      type={'number'}             
                      placeholder="peso Kg" 
                      onChange={handleInput}                        
                    />
                  </InputGroup>
                </FormControl>


                <FormControl isRequired>
                  <FormLabel>Altura Cm </FormLabel>

                  <InputGroup>
                    <Input 
                      name="altura"
                      value={altura}
                      type={'number'}             
                      placeholder="Altura Cm" 
                      onChange={handleInput}                        
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Edad </FormLabel>

                  <InputGroup>
                    <Input 
                      name="edad"
                      value={edad}
                      type={'number'}             
                      placeholder="edad" 
                      onChange={handleInput}                        
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>

                <FormLabel>Actividad </FormLabel>
                <Select 
                  placeholder='Seleccionar'
                  onChange={handleInput}     
                  name="actividad"  
                >
                    <option value="1.2">Sedentario</option>
                    <option value="1.375">Poca Actividad</option>
                    <option value="1.55">Actividad moderada</option>
                    <option value="1.725">Actividad intensa</option>
                    <option value="1.9">Profesional</option>

                </Select>
                </FormControl>
                

                <Button
                  marginTop={1}
                  type="submit"  
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isFullWidth
                  mt={1}
                  >
                  Calcular
                </Button>

              </form>
              </VStack>
            </Box>
          </Stack>

     );
}
 
export default Formulario;