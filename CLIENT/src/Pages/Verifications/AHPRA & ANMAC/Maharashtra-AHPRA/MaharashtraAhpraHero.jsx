import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/Maharashtra-AHPRA WEB.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB MAHARASHTRA AHPRA.webp'
import ContactForAhpra from '../ContactForAhpra'

function MaharashtraAhpraHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA maharashtra council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA maharashtra Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>Top Agency for AHPRA & ANMAC Verification From<b className='text-green-500'> Maharashtra Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Your credentials and experience must fulfil the requirements set by ANMAC and AHPRA in order for you to be eligible for Australian immigration as a nurse. Our committed team offers you a smooth and trustworthy verification process in collaboration with the Maharashtra Nursing Council. Our organisation can guide you precisely because of its established track record and in-depth knowledge of the verification procedure. We provide customised help and support to meet the needs of the candidate, making sure there is clarity and direction at every turn. For a successful move to Australia, collaborate with our consultancy. Trueway is a dependable entry point for migration to Australia.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default MaharashtraAhpraHero