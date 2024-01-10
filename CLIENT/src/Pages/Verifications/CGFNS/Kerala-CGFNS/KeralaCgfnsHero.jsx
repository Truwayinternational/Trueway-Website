import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/CGFNS-KERALA.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/MOB_CGFNS-KERALA.webp'

import ContactForCgfns from '../ContactForCgfns'

function KeralaCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS kerala council bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted <b className='text-green-500'> CGFNS Kerala </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                For the purpose of migration verification, they have a pivotal role. CGFNS verification from the Kerala Nursing Council also has importance. To do this verification with ease, you need full-time support from a leading and trustworthy agency, and that is Trueway International. Trueway is the No. 1 consultancy in India, and it has a dedicated team that works round the clock to complete the tasks. They go to the needed institutions and do the verifications personally; therefore, nothing will be missed and all will be intact. We have a team that is exclusively specialising in CGFNS Kerala council verifications. Therefore, there is no need for facing any tension or hurdles. All will be smooth, quick, and completed within a reasonable budget.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default KeralaCgfnsHero