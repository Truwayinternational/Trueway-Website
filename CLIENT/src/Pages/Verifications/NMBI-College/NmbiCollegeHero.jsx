import React from 'react'

import NMBI_BANNER from '../../../Assets/NMBI/NMBI College Verification.webp'
import NMBI_MOB_BANNER from '../../../Assets/NMBI/MOB_NMBI College Verification.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function NmbiCollegeHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={NMBI_BANNER} alt="NMBI college bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={NMBI_MOB_BANNER} alt="NMBI college Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Fast, Secure, Affordable <b className='text-green-500'> NMBI College Verification</b> for Your Irish Nursing Dream</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                As a trusted and leading agency in India, Trueway International understands the aspirations of nurses aiming to work in Ireland and are dedicated to offering a comprehensive, complete, quick, safe, and reasonably priced solution tailored just for you. Our commitment to excellence sets us apart. We are not just a service provider; we are your partners in this significant journey. We prioritise efficiency, security, and affordability to ensure that the verification and certification process is a hassle free experience for nurses seeking opportunities in Ireland. Our team of experts is well-versed in the intricacies of NMBI college verification, and we understand the urgency and importance of your aspirations, and we're here to support you every step of the way. Contact us now to initiate the process and experience a personalised service that aligns with your goals.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                Let's work together to make your journey to Ireland as smooth as possible.
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

export default NmbiCollegeHero