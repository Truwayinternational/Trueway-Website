import React from 'react'

import CGFNS_BANNER from '../../../Assets/CGFNS/CGFNS_WEB.webp'
import CGFNS_MobileBanner from '../../../Assets/CGFNS/CGFNS_MOB.webp'

import ContactForCgfns from './ContactForCgfns'

function CgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Fast <b className='text-green-500'> CGFNS Council Verification in India</b> for Nurses Migrating to New Zealand</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Are you waiting to migrate to New Zealand and stuck because of the process behind this? To get rid of this issue, you need assistance from a trustworthy agency, and that is Trueway International. To make the migration to New Zealand easy and smooth, we have an expert team that is well versed in CGFNS verification.
                To make your process easy and worry-free, hand over the work to us, and we can complete it within the minimum number of days without breaking the bank. Our services are tailored to meet all your requirements and migration needs. New Zealand migration will become easier from now on.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default CgfnsHero