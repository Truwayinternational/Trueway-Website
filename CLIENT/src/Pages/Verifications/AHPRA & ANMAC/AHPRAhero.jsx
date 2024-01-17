import React from 'react'

import AHPRA_BANNER from '../../../Assets/AHPRA-ANMAC/AHPRA_WEB.webp'
import AHPRA_MOB_BANNER from '../../../Assets/AHPRA-ANMAC/AHPRA_MOB.webp'

import ContactForAhpra from './ContactForAhpra'

function AHPRAhero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AHPRA_BANNER} alt="AHPRA bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden' src={AHPRA_MOB_BANNER} alt="AHPRA Mobile banner"/>
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Fast & Secure <b className='text-green-500'> ANMAC & AHPRA Council Verification </b> Services for Indian Nurses</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International provides support to Indian aspirant nurses who wish to work as a nurse in Australia with our extensive services, including quick, secure, and reasonably priced ANMAC and AHPRA council verification. We are aware of the complexities involved in relocation, especially for medical professionals. Our devoted team of professionals is committed to offering you reliable assistance and direction, creating a smooth and uncomplicated route to fulfilling your dream of becoming a nurse in Australia.
                Why choose Trueway? What makes us unique is our expertise. Many Indian nurses have benefited from our successful assistance in navigating the intricate ANMAC and AHPRA verification procedures, which has streamlined the process and reduced delays. We prioritise your objectives and work diligently to ensure that every demand is fulfilled on time. Trueway International is not just a service provider; we are your trusted partner in migration success. Our commitment to excellence, coupled with a customer-centric approach, ensures that your experience with us is positive and stress-free. 
                To begin your successful migration, get in touch with Trueway International right now. Our experienced staff is here to address your questions, offer advice, and ensure a smooth transition into the Australian healthcare system.
                </p>
            </div>    
        </div>

        {/* quick contact for verification */}
        <ContactForAhpra/>
    </>
  )
}

export default AHPRAhero