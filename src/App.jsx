import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/ramdon'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import './styles.css'
import { CodePenAnimation } from './components/CodePenAnimation'

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err)) 
    
  }, [])
  

  return (
    <>
    
    <main className='px-4 min-h-screen text-white bg-dots'>
      
      <Location location={location}  setLocation={setLocation}/>
      <ResidentList residents={location?.residents ?? []}/>
      </main>
   
    </>
  )
}

export default App

