import React from 'react'

import NMC_Andhra_BANNER from '../../../../Assets/NMC/NMC Andhra Pradesh Nursing Council Verification.webp'
import NMC_Andhra_MobileBanner from '../../../../Assets/NMC/MOB_NMC Andhra Pradesh.webp'

import ContactForNMC from '../ContactForNMC'

function AndhraNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_Andhra_BANNER} alt="NMC andhra council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_Andhra_MobileBanner} alt="NMC andhra Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted third-party verification agency for NMC UK from <b className='text-green-500'> Andhra Pradesh Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Are you seeking to immigrate to the UK as a medical professional? Begin your journey to the UK with Trueway International, the leading third-party verification consultant for the NMC UK and the Andhra Pradesh Nursing Council. Trueway is the go-to option for nurses in Andhra Pradesh because of its years of specialised experience and assurance of a reliable and easy verification process. Being without a doubt the best consultancy, we are committed to easing the transition for healthcare professionals and offering a secure and efficient route to success in the UK job market.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default AndhraNmcHero