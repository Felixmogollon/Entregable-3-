import React from 'react'
import ResidentCard from './ResidentCard'
import { useState,useEffect } from 'react'
import { paginationLogic } from '../utils/pagination'

const ResidentList = ({residents}) => {
const [currentPage, setCurrentPage] = useState(1)
useEffect(() => {
  setCurrentPage(1)
}, [residents])



const {pages,residentsInPage} = paginationLogic(currentPage,residents)

  return (
    <section>
    <section className='grid grid-cols-[repeat(auto-fit,_300px)] justify-center 
    gap-6 max-m-[1080px] mx-auto py-10 '>
        {
            residentsInPage.map((resident) => <ResidentCard key={resident} residentEndpoint={resident} />  ) 
        }
    </section>
    {/* //Paginacion */}
    <ul className='text-lg flex gap-3 justify-center flex-wrap pb-10'>
      {pages.map((page) => (
        <li key={page}>
          <button className={` border-2 border-green-500 text-green-500 p-2 rounded-full ${page == currentPage && "bg-green-600"}`}  
          onClick={() => setCurrentPage(page)}>{page}</button>
        </li>
      ))}

    </ul>
    </section> 
  )
}

export default ResidentList