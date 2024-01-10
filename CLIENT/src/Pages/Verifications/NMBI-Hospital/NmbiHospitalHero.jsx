import React from 'react'

import NMBI_BANNER from '../../../Assets/NMBI/NMBI Hospital Verification.webp'
import NMBI_MOB_BANNER from '../../../Assets/NMBI/MOB_NMBI Hospital Verification.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function NmbiHospitalHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="NMBI hospital bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MOB_BANNER} alt="NMBI hospital Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Fast, Secure, Affordable <b className='text-green-500'> NMBI Hospital Verification </b> Services in India Provided by Trueway</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                For a nurse seeking employment opportunities in Ireland, verifications are crucial. This is a bit of a time-consuming and herculean task. Trueway streamlines and simplifies this process by ensuring a hassle-free verification process. Our specialised services, which cater to nurses, facilitate the process with speed, security, and affordability.
                Trueway takes care of verification by personally visiting the hospitals. After you handed over your task to us, there is no need to worry. Trueway completes the task within a limited timeframe. From documentation to document submission to your migration, our assistance and guidance will be available. Dedicated staff work round-the-clock and are available for your queries and needs.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                For inquiries or assistance, reach out to us
                </h6>
                <div className='flex items-center my-3 mx-auto'>
                    <div className='bg-white rounded-full mx-5 p-3 hover:shadow-xl'>
                         <a href='tel:+918327626262' target='_blank' rel="noopener noreferrer">
                            <PiPhoneCallFill className='text-green-500 text-5xl'/>
                         </a>
                    </div>
                    <div className='bg-white rounded-full mx-5 p-3 hover:shadow-xl'>
                         <a href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer">
                            <IoLogoWhatsapp className='text-green-500 text-5xl' />
                         </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NmbiHospitalHero