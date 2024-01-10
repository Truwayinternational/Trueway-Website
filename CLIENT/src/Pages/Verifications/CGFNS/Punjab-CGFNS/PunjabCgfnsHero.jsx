import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web-punjap-cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/mob-punjab-cgfns.webp'

import ContactForCgfns from '../ContactForCgfns'

function PunjabCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS punjab council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS punjab Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted <b className='text-green-500'> CGFNS Punjab </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway International, the leading provider of CGFNS verification in India through the Punjab Nursing Council, has established itself as a trusted partner with years of experience helping Kerala nurses with CGFNS verification. Trueway is a top choice for individuals looking for a dependable partner to help them succeed professionally in New Zealand because of its years of experience, track record, and dedication to quality. We are committed to providing the best possible assistance and knowledge to ensure a safe and seamless transition.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default PunjabCgfnsHero