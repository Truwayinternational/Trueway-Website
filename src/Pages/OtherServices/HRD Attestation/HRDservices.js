import React from 'react'
import ServicesCard from './ServicesCard'

function HRDservices() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-20 ">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h2 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3'> HRD Attestation <br/> <p className='text-green-500'> Services </p>
                    </h2>
                </div>

                {/* HRD attestation services in  large screen */}
                <ServicesCard />
            </div>
        </div>
    </>
  )
}

export default HRDservices