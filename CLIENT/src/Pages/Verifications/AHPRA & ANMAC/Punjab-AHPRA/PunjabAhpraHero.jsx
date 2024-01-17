import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/AHPRA _PUNJAB.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets//AHPRA-ANMAC/APHRA & ANMAC Punjab_MOB.webp'
import ContactForAhpra from '../ContactForAhpra'

function PunjabAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA PUNJAB council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA PUNJAB Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>India's Trusted AHPRA & ANMAC verification Agency from<b className='text-green-500'> Punjab Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway International is known for its proficiency in AHPRA and ANMAC verification, specially designed for nurses from the Punjab Nursing Council. With a great track record and wealth of expertise, Trueway International became the leading consultancy in India. We are proud to be your dependable partner, facilitating an easy transition for nurses who are pursuing their dreams in Ireland. Renowned as the No. 1 consultancy, Trueway International is a beacon of assurance for healthcare professionals seeking opportunities abroad.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default PunjabAhpraHero