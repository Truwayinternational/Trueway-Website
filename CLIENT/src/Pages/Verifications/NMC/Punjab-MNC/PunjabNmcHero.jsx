import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Punjab Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Punjab.webp'

import ContactForNMC from '../ContactForNMC'

function PunjabNmcHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC punjab council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC punjab Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted third-party verification agency for NMC UK from <b className='text-green-500'> Punjab Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Are you a medical professional who wants to migrate to the UK? With Trueway International, the premier third-party verification consultancy for the Punjab Nursing Council and NMC UK, start your journey to the UK. With years of specialised expertise, Trueway is the go-to solution for Kerala nurses, guaranteeing a trustworthy and simple verification process. As an unquestioned top consultancy, we are dedicated to helping healthcare professionals make a smooth transition and providing a safe and effective pathway to career success in the UK.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default PunjabNmcHero