import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/AHPRA TAMILNADU.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA TAMILNADU.webp'
import ContactForAhpra from '../ContactForAhpra'

function TamilnaduAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA tamil ndadu council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA tamil ndadu Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>Trusted AHPRA & ANMAC Verification Services Accredited by the<b className='text-green-500'> Tamil Nadu Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is recognized as the top consultant with years of experience in offering reliable AHPRA and ANMAC verification services approved by the Tamil Nadu Nursing Council. We guarantee an easy and efficient verification procedure for nurses. Our proven track record and dedication to excellence make us the number-one choice for nurses seeking assistance in their pursuit of opportunities abroad. Choose Trueway for a hassle-free experience, and let us pave the way for your successful career.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default TamilnaduAhpraHero