import React from 'react'
import { IconSearch } from '@tabler/icons-react'
import axios, { Axios, } from 'axios'

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value
    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))



  }


  return (
    <div>
       <div className=''>
         <img  className=' ' src="./nombreyportal.png-removebg-preview.png" alt="portal" />
        </div>
      <section className='mb-6  mx-7 md:mx-6 lg:mx-12 p-10 '>
        <form onSubmit={handleSubmit} className=' p-1  border border-green-500  rounded-lg  flex   justify-between '>
          <input placeholder='type a location id...' name='idLocation' className='text-white bg-black w-full p-2
           text-center placeholder-center mb-2 md:mb-0' type="number" />
          <button type='submit' className=' md:mb-1 flex justify-center items-center bg-green-500 p-0 w-20  '
          >Search <IconSearch />
          </button>
 
        </form>
       
      </section>


      <section className='w-500 h-30 flex-shrink-0 flex flex-col justify-center items-center border
     border-green-600 p-1'>
        <h3 className='text-green-500 mb-4 text-lg animate-bounce'> ¡Wellcome to {location?.name}! </h3>
        <ul className='flex gap-'>
          <li className='w-1/3 text-gray-500 text-sm text-start'>Type: {location?.type}</li>
          <li className='w-1/9 text-gray-500 text-sm text-center'>Dimension: {location?.dimension}</li>
          <li className='w-1/3 text-gray-500 text-sm text-end'>population: {location?.residents.length}</li>
        </ul>
      </section>
    </div>

  )
}

export default Location
