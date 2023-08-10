import React, { useEffect, useState } from 'react'
import ListingItem from '../components/listings/ListingItem'
import { useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { collection, getDocs, where, query } from 'firebase/firestore'
import ScaleSpinner from '../components/feedback/ScaleSpinner'
import { Heading } from '@chakra-ui/react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

const Listings = () => {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState(null)
  const params = useParams()  


  useEffect(() => {

    const fetchCars = async () => {
        try {
            const carsRef = collection(db, 'cars')

            const q = query(
                carsRef,
                where('type', '==', params.categoryName) 
                )
            const qSnap = await getDocs(q)
    
            const carsArray = []
            qSnap.forEach((car) => {
                return carsArray.push({
                    id: car.id,
                    data: car.data()
                })
            })
            setCars(carsArray)
            setLoading(false)
        } catch (error) {
            console.log(error)
            
        }
       
      }
    fetchCars()
  }, [params.categoryName])

  return (
    <>
        <Heading as='h2' size='xl' mb='2rem' ml='6rem'>
            {params.categoryName === 'Wanted' 
                ? 'Cars, Tractors, Machinery, Spares WANTED'
                : 'Cars, Tractors, Machinery, Spares For Sale'
            }
        </Heading>
        {loading ? <ScaleSpinner /> : cars && cars.length > 0 ?
        <>
           {React.Children.toArray(
            cars.map(car => {
                    return (
                        <ListingItem 
                            id={car.id}
                            data={car.data}
                        />
                    )
                })
            )}
        </> : <Alert 
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'                    
                textAlign='center'
                height='200px'
              >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>Error occured!</AlertTitle>
                <AlertDescription maxWidth='sm'>We are resolving Google Cloud Database issues in <span className='font-bold'>KENYA</span> Kindly send us details of what you are buying or selling by whatsapp +254 724 052 417.</AlertDescription>
              </Alert>
          
        }
       
    </>
  )
}

export default Listings