import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/Web_telangana_cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/Mob_telangana_cgfns.webp'

import ContactForCgfns from '../ContactForCgfns'

function TelanganaCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS telangana council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS telangana Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> CGFNS Telangana </b> Nursing Council Verification Agency is Easy Now</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Verification is pivotal in the case of migration. The Telangana Nursing Council's CGFNS verification is also significant. You require full-time assistance from Trueway International, a reputable and prominent agency, in order to complete this verification quickly and easily. Being the top consultant in India, Trueway has a committed team that works nonstop to finish your processes. We personally perform the necessary verifications by visiting the required institutions, so nothing needs to be overlooked and everything will be in good condition. Our staff is solely focused on performing CGFNS Telangana council verifications. As a result, there is no need for you to deal with stress or obstacles. Everything will go quickly, easily, and within a reasonable spending limit.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default TelanganaCgfnsHero