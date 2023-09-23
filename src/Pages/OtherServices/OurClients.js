import React from 'react'
import TestimonialCard from '../../Components/TestimonialCard'

function OurClients() {
  return (
    <div>
        <div className='w-full h-full flex justify-between'>
            <div className="max-w-[1240px] m-auto">
                <div className='flex justify-center md:items-center w-full px-2 py-4'>
                    <div className='text-3xl md:text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont'>Straight from the source:  <br/><span className='text-green-500 font-bold'> Our clients speak out</span>
                    </div>
                </div>
            </div>
        </div>

        {/* adding testimonial cards*/}
        <div className='max-w-[1240px] mx-auto place-content-center'>
          <TestimonialCard />
        </div>
    </div>
  )
}

export default OurClients