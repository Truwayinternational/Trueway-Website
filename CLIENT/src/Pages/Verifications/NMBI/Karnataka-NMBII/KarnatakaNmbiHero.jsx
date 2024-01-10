import React from 'react'

import NMBI_BANNER from '../../../../Assets/NMBI/NMBI Karnataka.webp'
import NMBI_MobileBanner from '../../../../Assets/NMBI/MOB_NMBI Karnataka.webp'

import ContactForNMBI from '../ContactForNMBI'

function KarnatakaNmbiHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="nmbi kerala council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MobileBanner} alt="nmbi kerala Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> Karnataka Nursing Council's </b>
               Accredited NMBI Verification Agency in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is the best advisor for Karnataka nurses looking to verify their immigration to Ireland because of its extensive knowledge. Trueway, the authorised NMBI verification firm in India, is committed to making sure that the accreditation procedure with the Karnataka Nursing Council goes smoothly. Trueway International, a leading consultancy in the sector, ensures that nurses hoping to work in Ireland have a seamless and confident transfer.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMBI/>
    </>
  )
}

export default KarnatakaNmbiHero