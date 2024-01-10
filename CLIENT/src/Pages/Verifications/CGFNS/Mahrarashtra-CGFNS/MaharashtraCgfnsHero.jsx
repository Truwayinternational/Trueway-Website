import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/WEB_CGFNS-MAHARASHTRA.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/MOB_CGFNS-MAHARASHTRA.webp'

import ContactForCgfns from '../ContactForCgfns'

function MaharashtraCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS maharashtra council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS maharashtra Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trusted <b className='text-green-500'> CGFNS Maharashtra </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway International established its standing as a leading consultant helping Kerala nurses with CGFNS verification with years of experience and unwavering trust. Trueway International, the top supplier of CGFNS verification in India through the Maharashtra Nursing Council, ensures that the process for future nurses is simple and effective. Trueways years of expertise, track record, and commitment to quality make it a top option for anyone searching for a trustworthy partner to help them succeed professionally in New Zealand. Our dedication lies in offering the highest calibre of support and expertise to guarantee a secure and smooth transfer.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default MaharashtraCgfnsHero