import React from 'react'

import AHPRA_ANMAC_BANNER from '../../../../Assets/AHPRA-ANMAC/AHPRA DELHI.webp'
import AHPRA_ANMAC_MobileBanner from '../../../../Assets/AHPRA-ANMAC/MOB_AHPRA DELHI.webp'
import ContactForAhpra from '../ContactForAhpra'

function DelhiAhpraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_ANMAC_BANNER} alt="AHPRA kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_ANMAC_MobileBanner} alt="AHPRA kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-3'>Best <b className='text-green-500'> Delhi Nursing Council-Approved Agency</b> for AHPRA & ANMAC Verification in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International has positioned itself as a reliable consultant for Delhi nurses seeking for verification procedures. With years of experience, we have emerged as the undisputed leader in the industry, ensuring accuracy and efficiency in AHPRA and ANMAC verification, along with unparalleled assistance throughout the entire process. What sets us apart from our competitors is our professionalism and expertise. As the approved agency by the Delhi Nursing Council, Trueway's dedication to excellence is evident in its meticulous approach to AHPRA and ANMAC verification, offering nurses the assurance they require for a successful relocation.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default DelhiAhpraHero