import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Gujarat.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Gujarat.webp'

import ContactForNMC from '../ContactForNMC'

function GujaratNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC gujrat council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC gujrat Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Prime NMC UK Third party verification Agency From <b className='text-green-500'> Gujarat Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                In order to migrate to the UK, nurses from Gujarat should complete the NMC third-party verification process through the Gujarat Nursing Council. Trueway International is the reliable organisation that can assist you in these situations. One of the top agencies in India, Trueway has a team of professionals who specialise in verifications of the Gujarat Nursing Council. Our help and support will be there all the way through. Once you hand over the task, we will take care of the document submission, verification, and other paperwork. It is our duty to assist you with your migration as soon as you become one of our clients. It's something we've done for years.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default GujaratNmcHero