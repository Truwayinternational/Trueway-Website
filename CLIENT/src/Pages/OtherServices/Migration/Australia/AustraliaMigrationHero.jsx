import React from 'react'

import AustraliaMigration_WEB from '../../../../Assets/wes : migration/Australia Banner.webp'
import AustraliaMigration_MOB from '../../../../Assets/wes : migration/MOB_Ast_mig.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function AustraliaMigrationHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AustraliaMigration_WEB} alt="migration-australia bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={AustraliaMigration_MOB} alt="Migration-australia banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Best <b className='text-green-500'> Australia Migration</b> Consultancy in India</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Are you a nurse dreaming of a high-paying career in Australia?  To help you achieve your ambition, Trueway International, the top migration consultant for nurses in Australia, is here. Trueway International is dedicated to making your goal come true since we understand the special difficulties and complexities that come with the immigration procedure for nurses. Our personalised approach to taking the time to understand your unique situation, goals, and credentials.sets us apart. To ensure a simple and effective migration process, we think it is important to create a roadmap that fits your particular profile.
                <br />
                Choosing Trueway International means choosing excellence, reliability, and a partner who genuinely cares about your success. Our consultation is based on transparency, integrity, and a sincere desire to support Australian nurses in achieving professional success. Our consulting goes above and beyond, providing an unparalleled degree of individualised attention and thoroughness.  Get in touch with us right now to begin your rewarding and enlightening career trip to Australia.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                Ready to Start Your Australian Nursing Journey?
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

export default AustraliaMigrationHero