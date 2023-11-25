import React from 'react'

import MOH_Banner from '../../../../Assets/dataflow/Dataflow - MOH.webp'
import Moh_MobileBanner from '../../../../Assets/mobile banners/dataflow-MOH.webp'



function MOHhero() {

  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MOH_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={Moh_MobileBanner} alt="dataFlow Mobile banner" />

                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center lg:px-20 px-4'>Top <b className='text-green-500'> Dataflow Verification Services in India </b>for Ministry of Health (MOH)</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Are you planning to study or work in the UAE? Then you must do the dataflow verification before moving. Dataflow is necessary for healthcare professionals, including doctors, nurses, pharmacists, dentists, allied health professionals, etc. MOH was formed to make sure that healthcare professionals are employed in the UAE to provide dependable, trustworthy, high-quality, and effective healthcare. Our professional and dedicated team members have 15 years of experience in this process, and they will make your dataflow work at high speed, accurately, and free of hassle.
                </p>
            </div>    
      </div>
    </>
  )
}

export default MOHhero