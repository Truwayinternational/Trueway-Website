import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web-oman-cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/mob-oman=cgfns.webp'

import ContactForCgfns from '../ContactForCgfns'

function OmanCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS oman council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS oman Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Get <b className='text-green-500'> Oman CGFNS </b> swiftly and migrate to New Zealand</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Migration may be a dream for many, but the effort and time that have to be invested in it are much more. Only with agency support can you cease the process and fly to New Zealand with ease. For that, Trueway International is the solution. Your CGFNS verification can be done by us within a limited number of working days at a reasonable cost. We have an expert team of professionals in this field, and they do the process with perfection. For verifications, our dedicated team will visit the institutions personally and do the process perfectly. So that you don’t have to worry about anything in CGFNS. Everything will be perfect and right; that is our assurance.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default OmanCgfnsHero