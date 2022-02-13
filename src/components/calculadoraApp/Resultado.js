import React from 'react';
import {
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';

  const Resultado = ({tarea, eliminarTarea}) => {

    const {peso, altura, edad, actividad} = tarea;

    
    const calculoPeso = 9.6*parseInt(peso);
    const calculoAltura = 1.8*parseInt(altura);
    const calculoEdad= 4.7*parseInt(edad);
    const calculoActividad =parseFloat(actividad);
    
    const calculo = (655 + calculoPeso + calculoAltura - calculoEdad)*calculoActividad

      return ( 
          <Stack  minH={'80px'} w={'full'} mb={'2rem'}
          _after={{
            marginTop:'1rem',  
            content: "''",
            width: 'full',
            height: ({ base: '1px', md: '2px' }),
            bg: 'pink.600',
            zIndex: -1,
          }}>
              <Text fontSize={'18px'}>Peso : {peso} </Text>
              <Text fontSize={'18px'} c>Altura : {altura} </Text>
              <Text fontSize={'18px'} c>Edad : {edad} </Text>
              <Text fontSize={'18px'} c>Las calorias que necesitas son : { Math.trunc(calculo)} </Text>



              <Button  
                bgColor={'red.500'} 
                onClick={() => eliminarTarea(tarea.id)}
                color={'white'}
                _hover={{
                bg: 'red.600',
                
              }}
                >Eliminar</Button>
          </Stack>
       );
  }
   
  export default Resultado;