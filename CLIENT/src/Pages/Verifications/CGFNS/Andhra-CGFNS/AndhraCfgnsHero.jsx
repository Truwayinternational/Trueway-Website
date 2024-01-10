import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web-andhra-cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/mob-andhra-cgfns.webp'
import ContactForCgfns from '../ContactForCgfns'


function AndhraCfgnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS andhra pradesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS andhra pradesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted <b className='text-green-500'> CGFNS Andhra Pradesh </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                New Zealand is not far beyond your dreams if you do CGFNS. More time and days should be invested to finish CGFNS verification. But if you have sound support from an agency like Trueway International, then CGFNS will not become a herculean task. Within a minimum days, you can complete the procedures with our assistance. Our team, which gives you support 24*7, gives you proper guidance and information, and also does in-person verifications by directly visiting the required institutions. There is no need for you to overlook any stage of the process. All should be intact and right, which is guaranteed by Trueway Consultancy.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default AndhraCfgnsHero