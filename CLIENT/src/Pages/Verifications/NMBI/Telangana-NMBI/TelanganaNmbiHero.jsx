import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Telangana.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Telangana.webp'

import ContactForNMBI from '../ContactForNMBI'

function TelanganaNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi talangana council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi talangana Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Get NMBI Verification from <b className='text-green-500'> Telangana Nursing Council </b>Through Trueway</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                NMBI Telangana nursing council verification is the most crucial part for nurses who seek employment in Telangana state. Through this process, your documents will be verified, proving that you are eligible to work there and that your documents are in compliance with regulatory standards.
                Trueway is a recognised and premier verification agency in India that offers unparalleled assistance in facilitating verifications from any state. We streamline the process with reliability, commitment, and accuracy. We simplify this complex and time-consuming process. Trueway’s excellence will help you to the core, and within limited days, at a reasonable cost, we will finish your procedures.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default TelanganaNmbiHero