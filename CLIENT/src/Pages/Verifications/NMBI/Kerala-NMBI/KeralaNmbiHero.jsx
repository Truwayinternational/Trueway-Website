import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Kerala .webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Kerala.webp'

import ContactForNMBI from '../ContactForNMBI'

function KeralaNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted NMBI verification Agency From <b className='text-green-500'> Kerala Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Verification through the Kerala Nursing Council is pivotal for migration. For confirming the authenticity and validity of your documents and nursing qualifications, this verification is irreplaceable. Nurses from Kerala who are planning to migrate strictly follow this procedure. To make sure that this is not consuming more time, you need the aid of an agency, and that is Trueway. It is a premier verification consultancy in India that offers services worldwide. Our team dedicatedly does verifications by visiting each organisation. Right mannerly complete the process within a limited time swiftly at an affordable rate. The meticulous examination of your documents and their process will be taken care of by Trueway, and you are out of worry.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default KeralaNmbiHero