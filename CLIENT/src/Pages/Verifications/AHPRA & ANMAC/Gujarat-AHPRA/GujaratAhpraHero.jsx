import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/AHPRA GUJARAT.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA GUJARAT.webp'
import ContactForAhpra from '../ContactForAhpra'

function GujaratAhpraHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA kerala Mobile banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>India's Best AHPRA & ANMAC verification Agency from<b className='text-green-500'> Gujarat Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is a leading consultant with years of experience in providing dependable AHPRA and ANMAC verification services that are approved by the Gujarat Nursing Council. We guarantee that the verification process for nurses will be simple and efficient. Our proven track record and passion to quality make us the number-one choice for nurses seeking support in their pursuit of opportunities abroad. Choose Trueway for a hassle-free experience, and let us pave the way for your successful career in Australia.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default GujaratAhpraHero