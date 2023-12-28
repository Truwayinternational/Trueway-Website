import React from 'react'

import CGFNS_BANNER from '../../../../Assets/CGFNS/web-gujrat-cgfns.webp'
import CGFNS_MobileBanner from '../../../../Assets/CGFNS/mob-gujrat-cgfns.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function GujratCfgnsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={CGFNS_BANNER} alt="CGFNS gujrat council bannner"/>
                {/* mobile banner here */}
                <img className='lg:hidden' src={CGFNS_MobileBanner} alt="CGFNS gujrat Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Top <b className='text-green-500'> CGFNS Gujarat </b> Nursing Council Verification in kerala</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Choose Trueway International, the top consultant with a track record in CGFNS verification for Kerala nurses, to confidently migrate to New Zealand. As a reputable organisation in India, we guarantee smooth verification procedures with the Saudi Nursing Council, giving nurses the assurance they require for their international undertakings. Trueway is the leading consultant with years of experience, committed to supporting the goals of healthcare professionals in Kerala and beyond.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                Contact us for CGFNS verification, Call us now
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

export default GujratCfgnsHero