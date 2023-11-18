import React from 'react'

import SaudiNursingWEB from '../../../../Assets/goodstanding/Web Saudi Nursing Council.png'
import SaudiNursingMOb from '../../../../Assets/mobile banners/SaudiNursingMOB.png'


function SaudiNursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={SaudiNursingWEB} alt="saudi arabia nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={SaudiNursingMOb} alt=" saudi nursing nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Need a Good standing certificate from <b className='text-green-500'> Saudi Arabia Nursing Council</b> securely?
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Medical professionals working in Saudi Arabia must obtain a Good Standing Certificate before they can move abroad. This certificate is essential for migrants who are healthcare professionals because it plays a significant role in verifying the genuineness of documents and professional status (whether it's restricted, suspended, or revoked). A Good Standing Certificate is important for various purposes, including licence renewal, visa and immigration requirements, and employment needs.
                </p>
            </div>    
      </div>
    </>
  )
}

export default SaudiNursingHero