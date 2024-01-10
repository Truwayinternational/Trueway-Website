import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Tamil Nadu.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Tamil Nadu.webp'

import ContactForNMBI from '../ContactForNMBI'

function TamilNaduNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi tamilnadu council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi tamilnadu Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Best NMBI verification Agency  from <b className='text-green-500'>Tamil Nadu Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    For nurses seeking employment in the state of Tamil Nadu, the most important step is the NMBI Tamil Nadu Nursing Council verification. Your documents will be checked during this procedure to ensure that they meet regulatory requirements and that you are authorised to work there. Trueway is a reputable and top verification company in India that provides unmatched support for enabling verifications from any state. We expedite the procedure with accuracy, dedication, and dependability. We streamline this intricate and laborious procedure. Trueway's quality will benefit you greatly, and we will complete your processes in a timely manner at a fair price.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default TamilNaduNmbiHero