import React from 'react'

import DHA_Banner from '../../../../Assets/dataflow/Dataflow - DHA.webp'
import DHA_MobileBanner from '../../../../Assets/mobile banners/MOB Dataflow - DHA.webp'


function DHAhero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
        <div className='flex flex-col lg:mx-4 lg:px-8'>
          <img className='hidden lg:flex mx-3 mt-10' src={DHA_Banner} alt="dataflow-MOH bannner" />
            {/* mobile banner here */}
            <img className='lg:hidden ' src={DHA_MobileBanner} alt="dataFlow Mobile banner" />
            {/* content here */}
            <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>Trusted<b className='text-green-500'> Dataflow Verification Services in India</b> for Dubai Health Authority ( DHA)</h1>
        </div>
        <div className='w-full lg:px-20 px-5 '>
          <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
          Trueway International give you full-swing support for Dubai Health Authority dataflow for Doctors, dental specialists, nurses, pharmacists, physiotherapists, MLTS, radiographers etc. Our skilled and committed team members will ensure that your dataflow runs smoothly, accurately, and quickly thanks to their 15 years of experience in this process.
          </p>
        </div>    
      </div>
    </>
  )
}

export default DHAhero