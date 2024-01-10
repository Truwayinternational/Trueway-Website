import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Telangana.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Telangana.webp'

import ContactForNMC from '../ContactForNMC'

function TelanganaNmcHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC telangana council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC telangana Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Leading Third-Party Verification Agency for NMC UK from <b className='text-green-500'> Telangana Nursing Council </b>in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway offers seamless verification services for the Telangana Nursing Council under the National Medical Commission (NMC), ensuring authenticity and credibility. We simplify your verification process by providing swift and accurate results. Our agency has dedicated staff to complete the verification process within the minimum number of days. Hassle-free verification is our guarantee. From documentation to document submission, every step will be thoroughly checked and coordinated by our consultancy. No matter the obstacle, there's no need to worry. Smoothly, swiftly, and at a reasonable cost, your verifications will be completed, making migrations possible.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default TelanganaNmcHero