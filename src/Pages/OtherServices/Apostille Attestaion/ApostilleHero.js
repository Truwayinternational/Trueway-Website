import React from 'react'

import Apostille_banner from '../../../Assets/MOFA : HOME/Apostille Banner.webp'
import banner_mob from '../../../Assets/mobile banners/Mob Apostille.webp'

import HeroSidebar from '../HeroSidebar';

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'


function ApostilleHero() {
  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20'>
              <img className='object-cover ' src={Apostille_banner} alt="page_banner" />
            </div>

            {/* responsive banner of MOFA attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 lg:text-start text-center md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Best <b className='text-green-500'> Apostille Attestation Service agency </b> in India </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins my-10 px-4 lg:p-0'>
                If you are looking for a visa for planning a long-term stay, it could be for higher education, employment, or temporary or permanent residency, then you must hear about apostille. This is because document legalisation is a mandatory procedure to be followed. The main purpose of certificate apostille and document apostille is typically the legalisation of the submitted documents and certificates. However, there are different stages of verification and validation before final legalisation by the central government. With the proper guidelines from our experienced team, you can learn everything about the entire process of apostille attestation, its cost, and the time it takes in India to be done.
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

export default ApostilleHero