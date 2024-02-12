import React from 'react'

import MIgrationIreland_web from '../../../../Assets/wes : migration/WEB_migration newziland.webp'
import MigrationIreland_mob from '../../../../Assets/wes : migration/MOB_Migration_newziland.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function NewzilandMigrationHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MIgrationIreland_web} alt="migration-newziland bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={MigrationIreland_mob} alt="Migration-newziland banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>India’s leading<b className='text-green-500'> New Zealand immigration</b> consultancy for registered nurses</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway is your gateway to New Zealand’s nursing opportunities. For nurses who aspire to relocate to New Zealand and start employment in health care centres there, Trueway is a premier consultancy. We have a dedicated team that specialises in the procedures of New Zealand migrations and each step of the immigration process. We give you personalised guidance for each candidate by understanding that each candidate’s needs are different. Assistance for a smooth and tailored immigration process will be ensured by us. We are the top immigration agency in India for registered nurses migrating to New Zealand.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                Contact us for smooth New Zealand migration
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

export default NewzilandMigrationHero