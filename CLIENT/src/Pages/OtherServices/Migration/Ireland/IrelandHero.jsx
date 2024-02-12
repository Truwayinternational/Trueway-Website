import React from 'react'

import MIgrationIreland_web from '../../../../Assets/wes : migration/MIgrationIrelandWEB.webp'
import MigrationIreland_mob from '../../../../Assets/wes : migration/MIgration Ireland mob.webp'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function IrelandHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MIgrationIreland_web} alt="migration-ireland bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={MigrationIreland_mob} alt="Migration-ireland banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Your premier Consultancy Partner for Nursing Career <b className='text-green-500'> Transition to Ireland </b></h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                At Trueway International, we understand the challenges and intricacies involved in the migration process for healthcare professionals. Our dedicated team of experts is committed to providing unparalleled services customised to the specific needs of nurses seeking to make Ireland their new professional home.
                What sets us apart is our expertise and a deep understanding of the healthcare industry. We recognize that the journey of transitioning to a new country can be overwhelming, and that's why we are here every step of the way. Our team is equipped to guide you through the entire process with precision and care. As your trusted consultancy partner, we prioritise transparency, open communication, and a client-centric approach. Join hands with Trueway International and experience a smooth and efficient transition to your nursing career.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                Contact us today and let us be your bridge to a nursing career in Ireland
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

export default IrelandHero