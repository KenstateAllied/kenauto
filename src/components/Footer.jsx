import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Heading,
  Image,
  Button
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import MainLogo from '../images/auto4.png'

export default function Footer() {
  return (
    <footer style={{marginTop: '170px'}}>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>

        <Container as={Stack} maxW={'6xl'} py={10}>
        
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>

            <Stack spacing={6}>
                <Box>
                  <Image width='40px' height='40px' src={MainLogo} />
                </Box>
                <Text fontSize={'sm'}>
                  © 2023 KenstateAllied. All rights reserved
                </Text>
                <Stack direction={'row'} spacing={6}>
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                </Stack>
            </Stack>

            <Box>
                  <Heading as='h5' size='sm' mb={8}>Support</Heading>
                  <Stack align={'flex-start'}>
                      <Link href={'#'}>About Us</Link>
                      <Link href={'#'}>Report Fraud</Link>
                      <Link href={'#'}>Contact Us</Link>
                  </Stack>
            </Box>   
      
            <Box>
                  <Heading as='h5' size='sm' mb={8}>Kenstate Allied</Heading>
                  <Stack align={'flex-start'}>
                      <Link href={'#'}>Add An Ad</Link>
                      <Link href={'#'}>Profile</Link>
                      <Link href={'#'}>Home</Link>
                  </Stack>
            </Box>

            <Box>
                  <Heading as='h5' size='sm' mb={8}>About Us</Heading>
                  <Stack align={'flex-start'}>
                     <Text mb={3}>Kenstate Allied. +254 724 052417</Text>
                     
                  </Stack>
            </Box>

          </SimpleGrid>

        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>

          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'column' }}
            spacing={4}
            justify={{ md: 'center' }}
            align={{ md: 'center' }}>
            <Text>© {new Date().getFullYear()} Kenstate Allied. All rights reserved. By { ' ' }
              <span className='text-red-700 font-bold	'>
                <a className='uppercase' href='https://www.kenstate-web.netlify.app'>Kenstate Group</a>
              </span>
            </Text>


          </Container>
        </Box>
      </Box>
    </footer>  

  );
}
