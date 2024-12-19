import Header from '@/components/Header/Header'
import React from 'react'

function page() {
  return (
    <div className=' dark:bg-[url(/bg.webp)] dark:bg-cover bg-[url(/bg-team-light.webp)]  bg-cover h-auto my-auto mx-[1%] sm:mx-0 overflow-hidden'>
        <Header/>
        <div className='invert dark:filter-none pt-[7rem] max-w-[40rem] mx-auto my-auto px-auto'>
          <img className='object-cover w-full' src="/about.svg" alt="OUR TEAM" />
        </div> 

        <div className='UNDERLINE  place-content-center items-center mx-auto w-[40%] sm:w-[20%] h-[7px] dark:bg-white bg-black mt-10 rounded-lg'></div>
       
           <div className=''>
            

           </div>



    </div>
  )
}

export default page