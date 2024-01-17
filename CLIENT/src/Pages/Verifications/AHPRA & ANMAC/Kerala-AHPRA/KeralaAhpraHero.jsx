import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/WEB_AHPRA KERALA.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA KERALA.webp'
import ContactForAhpra from '../ContactForAhpra'


function KeralaAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>Trusted AHPRA & ANMAC Verification Services by Trueway: Facilitating<b className='text-green-500'> Kerala Nursing Council</b> Processes</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                  Trueway stands as a beacon of reliability and efficiency, making the verification process smooth and perfect. For nurses who aspire to migrate to Australia, we streamline the process and facilitate the migration. To enter the healthcare domain in Australia, you have to verify your nursing qualifications and documents. For that, a consultancy is needed to ensure a seamless verification process. For a career transition to Australia, we will be a guiding force. From documentation to document submission, everything will be smoothly done by Trueway.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default KeralaAhpraHero