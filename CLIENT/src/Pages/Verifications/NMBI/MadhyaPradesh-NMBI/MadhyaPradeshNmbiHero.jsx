import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Madhya Pradesh.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Madhya Pradesh.webp'

import ContactForNMBI from '../ContactForNMBI'

function MadhyaPradeshNmbiHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi madhya pradesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi madhya pradesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted Partner for NMBI <b className='text-green-500'> Madhya Pradesh Nursing Council Verification</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Considering Ireland as your migration destination? The verification process is crucial, but it doesn't have to be daunting. Trueway International, a prominent agency in India, specializes in verifications, ensuring a seamless process for you. We personally visit institutions, guaranteeing 100% genuine document verification submitted to councils and that sets us apart.
                Navigate this process confidently with Trueway's capable and experienced team, making your migration journey smoother. Trust Trueway as your go-to consultancy for swift and accurate verification needs in India.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default MadhyaPradeshNmbiHero