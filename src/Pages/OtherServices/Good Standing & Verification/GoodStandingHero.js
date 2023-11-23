import React from 'react'

import goodstanding_banner from '../../../Assets/goodstanding/Web Good Standing & Verification From Council.png'
import banner_mob from '../../../Assets/mobile banners/Mob Good Standing & Verification From Council.png'

import HeroSidebar from '../HeroSidebar';

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function GoodStandingHero() {
  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20'>
              <img className='object-cover ' src={goodstanding_banner} alt="page_banner" />
            </div>

            <div className='w-full top-0  relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 lg:text-start text-center md:text-5xl font-HeadingFont font-extrabold tracking-wide'>India's <b className='text-green-500'> Fast & Secure Good standing & verification services </b> from different councils </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins my-10 px-4 lg:p-0'>
              Are you searching for the fastest and most secure good-standing verification services? Trueway can assist you in obtaining a valid certificate from your authentic medical certification authorities if you are a medical professional planning to move abroad. Medical professionals often have limited time due to other responsibilities when preparing to migrate abroad. Trueway assures that the good-standing verification process will be completed for you within days all across India. We are committed to providing good standing verification services for nurses, dental professionals, and paramedical pharmacy council members.
              </p>

              {/* reach out to us --  contact button  */}

              <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5 my-5'>
                    <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                    Reach out to us now
                    </h6>
                    <div className='flex items-center my-3 mx-auto'>
                        <div className='bg-white rounded-full mx-5 p-3 hover:shadow-xl'>
                         <a href='tel:+918327626262' target='_blank' rel="noopener noreferrer">
                            <PiPhoneCallFill className='text-green-500 text-5xl' />
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
          </div>

          {/* side bar navigation component*/}
          <div className='hidden lg:grid lg:w-1/2'>
            <div className='flex flex-col justify-center items-center'>
              <HeroSidebar/>
            </div>
          </div>
      </div>
    </>
  )
}

export default GoodStandingHero