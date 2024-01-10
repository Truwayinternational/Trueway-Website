import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web-saudi-cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/mob-saudi-cgfns.webp'

import ContactForCgfns from '../ContactForCgfns'

function SaudiCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS saudi arabia council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS saudi arabia Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted <b className='text-green-500'> CGFNS Saudi Arabia </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Put your New Zealand dreams and hopes in the hands of Trueway International, the leading consultant known for being India's best agency for CGFNS verification with the Saudi Nursing Council. Trueway International has extensive experience and is committed to helping Kerala nurses have a smooth and customised CGFNS verification process. We offer unparalleled knowledge and reliability to make sure that your relocation to New Zealand is secure and supported by the guarantee of an established industry leader. For a safe and effective route to achieving your professional goals, choose Trueway International.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default SaudiCgfnsHero