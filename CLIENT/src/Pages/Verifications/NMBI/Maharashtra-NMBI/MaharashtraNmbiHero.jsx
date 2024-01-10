import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Maharashtra.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Maharashtra.webp'

import ContactForNMBI from '../ContactForNMBI'

function MaharashtraNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi maharashtra council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi maharashtra Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> Maharashtra Nursing Council's </b>Accredited NMBI Verification Agency in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                With a wealth of experience, Trueway International stands out as the premier consultancy for Maharashtra nurses seeking verification for their migration to Ireland. As the accredited NMBI verification agency in India, Trueway is dedicated to ensuring a seamless accreditation process through the Maharashtra Nursing Council. Renowned as the top consultancy in the field, Trueway International guarantees a smooth and confident transition for nurses aspiring to work in Ireland.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default MaharashtraNmbiHero