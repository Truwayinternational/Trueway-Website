import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Tamil Nadu Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Tamil Nadu.webp'

import ContactForNMC from '../ContactForNMC'

function TamilnaduNmcHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC tamilnadu council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC tamilnadu Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted NMC UK Third party verification Agency  from <b className='text-green-500'> Tamil Nadu Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway International's professional services will ensure that you have peace of mind when travelling to the UK. When looking for third-party verification from the reputable NMC UK, Tamil Nadu nurses turn to Trueway International as their go-to consultant. Our area of expertise is streamlining the Tamil Nadu Nursing Council verification process, giving nurses who wish to work in the UK a reliable and simple route. Put your faith in our knowledge and dedication as we quickly and effectively manage the intricacies of the verification process. You can count on us to be your dependable partner as we assist you in settling into your nursing career in the UK as smoothly as possible.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default TamilnaduNmcHero