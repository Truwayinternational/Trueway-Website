import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/Web_cgfns_delhi.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/Mob_delhi_cgfns.webp'

import ContactForCgfns from '../ContactForCgfns'


function DelhiCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS delhi council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS delhi Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> CGFNS Delhi </b> Nursing Council Verification is easy now </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                If New Zealand migration is your purpose, then CGFNS is the thing. Only after doing the CGFNs verification is the candidate set to go. Through this verification, it has been proven that the certificates candidates produced before the CGFNS departments are genuine and authentic, so that without hurdles, they can move on to the next stage of the procedure.
                To make this process easy and tension-free, you need the assistance of a consultant, and that is Trueway International. We have excellently trained and experienced team members who are ready to work around the clock. All the verifications will be done by our staff by personally visiting the institutions, so we are sure that no process will go unnoticed. All the procedures will be followed correctly by us, and the work will be done within a minimum working days.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default DelhiCgfnsHero