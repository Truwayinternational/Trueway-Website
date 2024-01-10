import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Punjab.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Punjab.webp'

import ContactForNMBI from '../ContactForNMBI'

function PunjabNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi punjab council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi punjab Mobile banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted NMBI Third-Party Verification Agency in India by <b className='text-green-500'> Punjab Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway is your reliable third-party verification agency, certified by the Punjab Nursing Council. To facilitate the migration of nurses to Ireland, Trueway is the best choice. We are dedicated to ensuring accuracy and transparency in the services we undertake. From the documentation to the final step, we will be with you as a trusted partner. We are committed to being a gateway to NMBI registration and verification. After you hand over the process to us, you can leave the burdens behind and stay hassle-free.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default PunjabNmbiHero