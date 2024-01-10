import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Karnataka Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Karnataka.webp'

import ContactForNMC from '../ContactForNMC'

function KarnatakaNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC karnataka council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC karnataka Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's Most Trusted NMC UK Third-party verification Agency From <b className='text-green-500'> Karnataka Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Waiting for a good opportunity to fly to the UK? Then this is the right time, and we are the right agency. Migrating to the UK is simple if you get adequate assistance from a consultancy; for that, Trueway is here. From discussing your requirements and pain points to your safe landing in the UK, we will be by your side. Your document submission, verifications, paperwork, and all related tasks will be taken care of by our expert and experienced team. We have a dedicated team whose support will be offered 24 hours a day. At no point will you be left unheard. That is our guarantee, which makes us stand out from our competitors.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default KarnatakaNmcHero