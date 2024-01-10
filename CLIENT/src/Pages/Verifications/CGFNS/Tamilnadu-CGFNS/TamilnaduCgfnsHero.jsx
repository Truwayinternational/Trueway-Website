import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/CGFNS-TAMILNADU.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/MOB_CGFNS-TAMILNADU.webp'

import ContactForCgfns from '../ContactForCgfns'

function TamilnaduCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS Tamilnadu council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS tamilnadu Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> CGFNS Tamil Nadu </b> Nursing Council Verification is easy now</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                When it comes to migration, verification is essential. The CGFNS accreditation from the Tamil Nadu Nursing Council is also noteworthy. To finish this certification process fast and simply, you need full-time support from Trueway International, a respectable and well-known organization. Trueway, the leading consultancy in India, offers a dedicated team that works around the clock to complete your operations. We personally visit the needed institutions to personally complete the verifications, ensuring that nothing is missed and everything is in working order. The only task that our employees focus on is completing CGFNS Tamil Nadu council verifications. You won't have to cope with tension or challenges as a result. Everything will proceed smoothly, swiftly, and within your budget.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default TamilnaduCgfnsHero