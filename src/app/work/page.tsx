import CardLatestBuzz from '@/components/elements/CardLatestBuzz'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col md:flex-row mx-[20%] md:mx-24 items-center '>
        <CardLatestBuzz/>
        <CardLatestBuzz/>
        <CardLatestBuzz/>
    </div>
  )
}

export default page