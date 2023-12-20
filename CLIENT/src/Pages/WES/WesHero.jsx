import React from 'react'

import WES_BANNER from '../../Assets/wes : migration/WesWeb.webp'
import WES_MobileBanner from '../../Assets/mobile banners/wesMobile.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function WesHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={WES_BANNER} alt="WES bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={WES_MobileBanner} alt="WES Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India's No.1 <b className='text-green-500'> WES Attestation & Verification Agency</b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                WES is an organisation that helps people who want to work or study in foreign countries attain PR (permanent residence). The full form of WES is World Education Services. The organisation of WES operates in New York, US, and Toronto, Canada, which was founded in 1974. WES verification makes migration to international countries much easier.
                To apply for immigration, citizenship, and related things, an ECA is required. ECA means Educational Credential Assessment. WES helps you provide ECA for degree and diploma certificates.
                </p>
            </div>    
        </div> 

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                To get the WES verification done, Call us now
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
    </>
  )
}

export default WesHero