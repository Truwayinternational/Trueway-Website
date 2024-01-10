import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Andhra Pradesh.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Andhra Pradesh.webp'

import ContactForNMBI from '../ContactForNMBI'

function AndhraNmbiHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi Andhra pradesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi Andhra pradesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'> India's Trusted NMBI verification Agency  from <b className='text-green-500'> Andhra Pradesh Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Set out on your journey to Ireland with complete assurance, guided by Trueway International, the leading consulting firm with a wealth of knowledge regarding NMBI verification for nurses in Andhra Pradesh.  Recognized as India's trusted agency by the Andhra Pradesh Nursing Council, TrueWay International assures seamless and reliable verification processes. With years of experience, we have established ourselves as the top consultancy for Andhra Pradesh nurses, helping them relocate effortlessly. Put your trust in Trueway International, your partner in creating a safe and effective pathway to Ireland.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default AndhraNmbiHero