import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [{
    nombre:'Inicio',
    path:'/'
},{
    nombre:'Planes',
    path:'/planes'
},{
    nombre:'Sobre mi',
    path:'/about'
}];

const NavLink = ({ children, path }) => (
  <Link
    href={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={'5rem'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box pr={{ base: '2rem', md: '1rem' }}>
              <Heading size={'lg'} color={'pink.600'}>
                Starfitness
              </Heading>  
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink path={link.path} key={link.nombre}>{link.nombre}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.ibb.co/VxqWdFp/rostro.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link 
                    _hover={{
                        textDecoration: 'none',
                    }} 
                    href={'https://www.facebook.com/starfitness.estrellaansa.1'}>Facebook</Link>
                </MenuItem>
                <MenuItem>
                  <Link 
                    _hover={{
                      textDecoration: 'none',
                    }} 
                    href={'https://instagram.com/estrella_natali?utm_medium=copy_link'}>Instagram</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link 
                    _hover={{
                      textDecoration: 'none',
                    }} 
                    href={'https://api.whatsapp.com/send?phone=+56966634262'}>Whatssap</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
                <NavLink path={link.path} key={link.nombre}>{link.nombre}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}