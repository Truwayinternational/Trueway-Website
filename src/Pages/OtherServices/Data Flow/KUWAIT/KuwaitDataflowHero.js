import React from 'react'

import Kuwait_Banner from '../../../../Assets/dataflow/Dataflow KUWAIT.png'
import Kuwait_Banner_MobileBanner from '../../../../Assets/mobile banners/MOB Dataflow - KUWAIT.webp'


function KuwaitDataflowHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={Kuwait_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={Kuwait_Banner_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>The Leading <b className='text-green-500'> Dataflow Verification Service in India </b> for Kuwait </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway is India's most promising and fastest dataflow verification service. We specialize in providing dataflow services for healthcare professionals going abroad, including Nurses, Doctors, MLTs, Dentists, Pharmacists, and more. Trueway leads the verification process among our competitors. The Kuwait dataflow process sets itself apart as a challenging one, but our professionals are here to simplify and streamline it for you, making the process easy and hassle-free.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KuwaitDataflowHero