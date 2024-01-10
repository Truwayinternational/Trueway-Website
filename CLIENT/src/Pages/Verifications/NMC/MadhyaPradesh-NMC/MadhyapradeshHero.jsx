import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Madhya Pradesh Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Madhya Pradesh.webp'

import ContactForNMC from '../ContactForNMC'

function MadhyapradeshHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC Madhya pradesh council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC Madhya pradesh Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Get NMC UK Third party verification From <b className='text-green-500'> Madhya Pradesh Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Madhya Pradesh nurses can now migrate to the UK without much hassle. Tension-free migration is possible with the assistance of the Trueway agency. Trueway is the most trusted No. 1 verification agency in India. We have a skilled team of experts and experienced staff who are dedicated to working at your disposal for the procedures of migration. At any phase, our assistance is available. From document preparation to submission, Trueway will be with you. We assure you of a worry-free migration. Without a headache, all your processes will be finished within a limited time and at an affordable price.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default MadhyapradeshHero