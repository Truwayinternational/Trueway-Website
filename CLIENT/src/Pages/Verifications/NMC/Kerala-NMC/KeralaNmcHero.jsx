import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Kerala Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Kerala.webp'

import ContactForNMC from '../ContactForNMC'

function KeralaNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted NMC UK Third party verification Agency from <b className='text-green-500'> Kerala Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                With the help of Trueway International's expert services, you can set off to the UK with no worries. Trueway International is the go-to consultant for Kerala nurses looking for third-party verification from the reliable NMC UK. We specialise in simplifying the Kerala Nursing Council verification procedure, providing a trustworthy and straightforward path for nurses wanting to work in the UK. Have your trust in our expertise and commitment as we efficiently and rapidly handle the complexities of the verification process. You can rely on us to be your reliable partner, as it helps you make the easiest possible transition to your nursing profession in the UK.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default KeralaNmcHero