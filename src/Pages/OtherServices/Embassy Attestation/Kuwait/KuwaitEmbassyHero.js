import React from 'react'

import kuwaitEmbassyBanner from '../../../../Assets/embassy attestation/kuwait/KUWAIT Embassy Banner.webp'
import MobKuwaitEmbassy from '../../../../Assets/mobile banners/MOB KUWAIT Embassy.webp'

function KuwaitEmbassyHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={kuwaitEmbassyBanner} alt="KuwaitEmbassyBanner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobKuwaitEmbassy} alt="kuwait embassy banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>The Services of <b className='text-green-500'> Kuwait Embassy Attestation in India</b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Are you seeking a 24*7 service for attestation? Trueway can help you with all attestation processes at any time. For a Kuwait Embassy attestation, you must follow the guidelines of the Kuwait Embassy. There are 3 types of documents for the process of Kuwait embassy attestation: educational, non-educational, and commercial. All these documents can be attested in India by the Kuwait embassy. It is essential to securing admission to Kuwait schools and universities, getting a work permit, acquiring a business licence in Kuwait, etc.
                <br />
                The attestation process is different in several departments. The attested documents have to be passed through various departments before the final attestation. We will ensure your documents are sent to the correct departments, and if you have any inquiries about your document's status, you can call our customer service executive.
                </p>
            </div>    
      </div>
    </>  
  )
}

export default KuwaitEmbassyHero