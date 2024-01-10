import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Delhi Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Delhi.webp'

import ContactForNMC from '../ContactForNMC'

function DelhiNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC Delhi council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC Delhi Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted NMC UK Third-party verification Agency from <b className='text-green-500'> Delhi Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Are you ready to start your UK migration with complete assurance? Trueway International, the leading consultancy and the trusted NMC UK third-party verification agency in India by the Delhi Nursing Council is here to assist you. With a wealth of experience, Trueway specialises in facilitating the verification process for nurses in Delhi, ensuring a seamless transition to the UK. As an indisputable top consultant, we are committed to offering unparalleled help and knowledge to ensure that your journey to the UK is worry-free and easy.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default DelhiNmcHero