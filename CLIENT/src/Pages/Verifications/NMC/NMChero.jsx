import React from 'react'

import NMC_BANNER from '../../../Assets/NMC/NMC-Nursing .webp'
import NMC_MOB_BANNER from '../../../Assets/NMC/NMC_Mob.webp'

import ContactForNMC from './ContactForNMC'

function NMChero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMC_BANNER} alt="NMC bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMC_MOB_BANNER} alt="NMC Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Trustworthy and Fast <b className='text-green-500'> NMC UK Third-party Verification</b> Agency in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Starting a career in the UK is your goal now? For that you need to finish NMC (Nursing and Midwifery) Council UK verification. The procedure takes a while and is a little complicated. However, Trueway International, the top verification agency in India, helped streamline the procedure. By offering you the greatest support and guidance, we can make the process easier for you. Our team will successfully complete your entire process in a timely manner and at a reasonable cost. Following your initial meeting with us, we will handle your needs. We will provide the support and solutions required during the process. A fast and secure process tailored to meet your migration needs is our assurance.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForNMC/>
    </>
  )
}

export default NMChero