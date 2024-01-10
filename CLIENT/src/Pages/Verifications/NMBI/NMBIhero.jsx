import React from 'react'

import NMBI_BANNER from '../../../Assets/NMBI/NMBI-WEB.webp'
import NMBI_MOB_BANNER from '../../../Assets/NMBI/NMBI-MOB.webp'

import ContactForNMBI from './ContactForNMBI'

function NMBIhero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="NMBI bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MOB_BANNER} alt="NMBI Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Best <b className='text-green-500'> NMBI Council Verification Services</b> in India for Nurses Migrating to Ireland</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Are you looking for a fast and secure partner for NMBI Council Verification in India? Look no further than Trueway International.  If you're a nurse with dreams of migrating to Ireland, we recognize the significance of a flawless verification process. With a focus on speed and security, we are your trusted companion for a hassle-free experience.Our expert team is here to guide you through the NMBI Council verification journey, ensuring that you are well-prepared and confident to start your professional journey in Ireland. Trust us to be your partner in realising your aspirations with professionalism, expertise, and a personalised approach.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
       <ContactForNMBI/>
    </>
  )
}

export default NMBIhero