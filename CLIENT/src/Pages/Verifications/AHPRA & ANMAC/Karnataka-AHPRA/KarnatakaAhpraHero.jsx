import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/WEB_AHPRA KARNATAKA.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA KARNATAKA.webp'
import ContactForAhpra from '../ContactForAhpra'

function KarnatakaAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>AHPRA & ANMAC Verification: <b className='text-green-500'> Karnataka Nursing Council's</b> Trusted Source- Trueway</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway is the trusted agency dedicated to facilitating seamless AHPRA and ANMAC verification processes for healthcare professionals in India. By ensuring accuracy in each step, we complete the verification within a limited timeframe. From scratch to document submission to migration, all work will be accurately followed and done by our Trueway team. Our team has members who are specialised in verification. They do verifications by personally visiting the institutions. Until the end of the process, proper guidance will be given by our team.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </> 
  )
}

export default KarnatakaAhpraHero