import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/ahpra_andhrapradesh.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_andhra_AHPRA.webp'
import ContactForAhpra from '../ContactForAhpra'

function AndhraAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA ANDHRA PRADESH council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA ANDHRA PRADESH Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>India's BestAHPRA & ANMAC verification Agency from<b className='text-green-500'> Andhra Pradesh Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is well-known for its expertise in AHPRA and ANMAC verification, which is specifically intended for Andhra Pradesh Nursing Council nurses. Trueway International rose to prominence as India's foremost consultancy, thanks to its stellar track record and depth of knowledge. We are honoured to be your trusted partner, easing the transition for nurses pursuing their aspirations in Ireland. Trueway International, renowned as the leading consultant, is a light of assurance for healthcare professionals seeking chances abroad.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default AndhraAhpraHero