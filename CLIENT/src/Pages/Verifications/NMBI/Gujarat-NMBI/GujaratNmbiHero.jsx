import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Gujarat.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Gujarat.webp'

import ContactForNMBI from '../ContactForNMBI'


function GujaratNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi delhi council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi delhi Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'> Reliable NMBI verification agency in India, endorsed by the <b className='text-green-500'> Gujarat Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Starting your nursing career in Ireland from Gujarat, India, is now easier than ever. Trueway International, the Gujarat Nursing Council-approved agency, has years of experience in enabling accurate NMBI verification for nurses. We are dedicated to quality, and our complete knowledge of the procedure guarantees a smooth migration. As a reliable partner, Trueway International expedites the verification procedure for nurses from Gujarat and offers unparalleled assistance as you pursue your profession in Ireland. Trust us to successfully assist you with the NMBI verification process and ease your transfer to Ireland.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default GujaratNmbiHero