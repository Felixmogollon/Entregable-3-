import axios from 'axios'
import React, { useEffect,useState } from 'react'


const ResidentCard = ({residentEndpoint}) => { 
    const [resident, setResident] = useState(null)
    //TODO ('ALIVE', 'DEAD',  OR 'unknow')
    const characterStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }


    console.log(residentEndpoint)
    useEffect(() => {
     axios.get(residentEndpoint)
     .then(({data}) => setResident(data))
     .catch((err) => console.log(err))
    
      
    }, [])
    
  return (
    <article className='border border-green-600 p-4'>
        <header className='relative '>
            <img  src={resident?.image} alt="person"   />
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80
            text-white px-5 py-2 rounded-md flex items-center gap-2'>
                <div className={`h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <div className='border-t border-green-500 pt-4 text-start'>
            <h4 className='text-xl font-semibold mb-2'>{resident?.name}</h4>
            <ul className='text-white  space-x-'>
                <li><span className='text-gray-400 mr-1 text-start'>Species</span> {resident?.species}</li>
                <li><span className='text-gray-400 mr-1 text-start'>Origin</span> {resident?.origin.name}</li>
                <li><span className='text-gray-400 mr-1 text-start'>times appear</span> {resident?.episode.length} time</li>
            </ul>
        </div>
    </article>
  )
}

export default ResidentCard
