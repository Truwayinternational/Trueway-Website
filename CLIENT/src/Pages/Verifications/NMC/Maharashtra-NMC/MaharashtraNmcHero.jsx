import React from 'react'

import NMC_BANNER from '../../../../Assets/NMC/NMC Maharashtra Nursing Council Verification.webp'
import NMC_MobileBanner from '../../../../Assets/NMC/MOB_NMC Maharashtra.webp'

import ContactForNMC from '../ContactForNMC'

function MaharashtraNmcHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC maharashtra council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MobileBanner} alt="NMC maharashtra Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Prime NMC UK Third party verification Agency From <b className='text-green-500'> Maharashtra Nursing Council </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    For Maharashtra nurses who are looking for migration to the UK, you should complete NMC third-party verification from the Maharashtra Nursing Council. To help you out in these circumstances, a trustworthy agency is needed, and that is Trueway International. Trueway is a leading agency in India that has an expert team that specialises in Maharashtra nursing council verifications. From scratch to the end, our support and assistance will be there. Document submission, its verification, and all other paperwork will be taken care of by us once you hand over the task. Once you are our client, it is our responsibility to aid you in migration. We have been doing it for years.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default MaharashtraNmcHero