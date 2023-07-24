import React from 'react'
import { Box, Image, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import forRentImg from '../images/rent.jpg'
import forSaleImg from '../images/sale.jpg'

const Home = () => {
 
  const property = {
    imageUrl: '',
    imageAlt: 'Image',
  }
    return (
        <Stack direction={['column', 'row']} spacing='35px' align='center' justify='center' mt='5rem'>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={forSaleImg} alt={property.imageAlt} />
              <Box p='2'>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    className='mb-3'
                  >
                  Cars, Tractors, Machinery For Sale
                  </Box>
                  <Link to='/category/sale'>
                      <Button size='sm' colorScheme='orange' variant='ghost'>
                          Explore
                      </Button>
                  </Link>
              </Box>
          </Box>
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={forRentImg} alt={property.imageAlt} />
            <Box p='2'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                  className='mb-3'
                >
                Cars, Tractors, Machinery For Rent
                </Box>
              
                <Link to='/category/rent'>
                  <Button colorScheme='orange' size='sm' variant='ghost'>Explore</Button>
                </Link> 
                
            </Box>
          </Box>

      </Stack>
  )
    
}

export default Home

