import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Delhi.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Delhi.webp'

import ContactForNMBI from '../ContactForNMBI'


function DelhiNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi delhi council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi delhi Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'> India's Trusted NMBI verification Agency  from <b className='text-green-500'> Delhi Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    With the assistance of Trueway International, the top consulting company with extensive experience in NMBI verification for nurses in New Delhi, you can travel to Ireland with total confidence.  TrueWay International, acknowledged by the Delhi Nursing Council as a trustworthy agency in India, guarantees easy and dependable verification procedures. With years of expertise, we have made a name for ourselves as the best agency assisting nurses in Delhi with their seamless relocation. Trust Trueway International to be your partner in building a secure and efficient route to Ireland.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default DelhiNmbiHero