import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/AHPRA TELANGANA.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA TELANGANA.webp'
import ContactForAhpra from '../ContactForAhpra'


function TelanganaAhpraHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA telangana council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA telangana Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>India's Top AHPRA & ANMAC verification Agency from<b className='text-green-500'> Telangana Nursing Council</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                The Telangana Nursing Council has accepted Trueway International as a leading consultant with years of expertise providing dependable AHPRA and ANMAC verification services. We promise that the verification process for nurses will be simple and effective. Our track record of success and unwavering commitment to quality make us the first choice for nurses looking for support when pursuing opportunities overseas. For a hassle-free experience, go with Trueway, and let us help you launch a prosperous career in Australia.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default TelanganaAhpraHero