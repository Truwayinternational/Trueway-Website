import React from 'react'
import PopularContriesCards from './PopularContriesCards'

function PopulerContries() {
  return (
    <div>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-20 ">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h2 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3'> Attestation for Embassies in <p className='text-green-500'>Popular Countries</p>
                    </h2>
                </div>

                {/* Attestation for embassies in popular Countries */}
                <PopularContriesCards />
            </div>
        </div>
    </div>
  )
}

export default PopulerContries