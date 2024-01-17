import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/madhyapredhsh_AHPRA.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA_Madhya Pradesh.webp'
import ContactForAhpra from '../ContactForAhpra'

function MadhyaPradeshAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA madhya pradesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA madhya pradesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>Your Trusted Agency for AHPRA & ANMAC Verification From<b className='text-green-500'> Madhya Pradesh Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                For Australian migration for nurses, your qualifications and experience should meet the standards set by AHPRA and ANMAC, which are crucially important. We have a dedicated team that works with the Madhya Pradesh council and provides you with a seamless and reliable verification process. With a proven track record and a deep understanding of the verification process, our agency can navigate you with precision. We offer personalised support and assistance for the candidate's needs, ensuring clarity and guidance at each stage. Partner with our consultancy for a successful relocation to Australia. Trueway can be your reliable gateway for Australian migration.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default MadhyaPradeshAhpraHero