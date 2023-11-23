import React from 'react'

import KeralaDentalWEB from '../../../../Assets/goodstanding/Web Kerala Dental Council.png'
import KeralaDentalMOB from '../../../../Assets/mobile banners/KeralaDentalMOB.png'

function KeralaDentalHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={KeralaDentalWEB} alt="kerala dental council banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={KeralaDentalMOB} alt=" kerala dental council MOB banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10 md:mx-10 font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'> Get <b className='text-green-500'> Kerala Dental Good Standing Certificates</b> quickly through Trueway
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway is an agency in India that offers hassle-free and swift services to its clients to meet their needs. A good standing certificate is an essential document for dentists who are practising in Kerala. If they are planning a migration, then this will help them with visa applications, credential verification, and so on. Without consuming much time, Trueway completes the process to get a good standing certificate.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KeralaDentalHero