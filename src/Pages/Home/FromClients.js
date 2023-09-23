import React from 'react'

import TestimonialCard from '../../Components/TestimonialCard'


function FromClients() {
  return (
    <div>
       <div className='w-full lg:my-20 mt-20'>
        <div className='max-w-[1240px] mx-auto place-content-center'>
            <div className='text-center'>
                <h2 className='px-3 md:text-5xl text-4xl font-bold font-HeadingFont'>Know From   <b className='text-green-500'>  Our Clients </b></h2>
            </div>
                <div className='my-10'>
                    <TestimonialCard />
                </div>
            </div>
        </div>
    </div>
  )
}



export default FromClients

