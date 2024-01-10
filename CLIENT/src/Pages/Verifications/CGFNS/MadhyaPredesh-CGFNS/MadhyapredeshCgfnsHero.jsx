import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web_Madhyapradesh_Cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/MOB_madhyapradeshCGFNS.webp'
import ContactForCgfns from '../ContactForCgfns'



function MadhyapredeshCgfnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS madhuapradhesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS madhuapradhesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Trusted <b className='text-green-500'> CGFNS Madhya Pradesh </b> Nursing Council Verification Agency</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                With years of experience and unquestioned trust, Trueway International has secured its position as a top consultancy that assists Kerala nurses with CGFNS verification. As the leading provider of CGFNS verification in India via the Madhya Pradesh Nursing Council, Trueway International guarantees an easy and efficient procedure for aspiring nurses. Trueway is a top choice for those looking for a reliable partner to help them succeed professionally in New Zealand because of its years of experience, track record, and dedication to quality. We are committed to providing the best possible assistance and knowledge to ensure a safe and seamless transition.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForCgfns/>
    </>
  )
}

export default MadhyapredeshCgfnsHero