import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/KARNATAKA-CGFNS.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/WEB_KARNATAKA-CGFNS.webp'

import ContactForCgfns from '../ContactForCgfns'

function KarnatakaCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS Tamilnadu council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS KARNATAKA Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Secure <b className='text-green-500'> CGFNS Karnataka </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Place your New Zealand ambitions and goals in the hands of Trueway International, India's premier agency for CGFNS verification with the Karnataka Nursing Council. Trueway International has considerable experience and is dedicated to ensuring that the CGFNS verification procedure for Kerala nurses is as smooth and customised as possible. We provide unrivalled experience and dependability to ensure that your move to New Zealand is secure and backed by the assurance of a well-established industry leader. Choose Trueway International for a secure and efficient path to your professional objectives. TrueWay International, with years of experience, specialises in CGFNS verification for Kerala nurses, so you can travel to New Zealand with confidence.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default KarnatakaCgfnsHero