import React from 'react'

import qatarEmbassyBanner from '../../../../Assets/embassy attestation/qatar/QATAR Embassy Banner.webp'
import MobQatarEmbassy from '../../../../Assets/mobile banners/MOB QATAR Embassy.webp'

function QatarEmbassyHero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={qatarEmbassyBanner} alt="qatar embassy banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobQatarEmbassy} alt="qatar embassy Mobile " />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Choose us for<b className='text-green-500'> Qatar Embassy Attestation in India </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                People who want to move to Qatar to study, work, or for any other reason must complete the Qatar Embassy attestation to make the documents valid. So it is essential to choose the best and authorised agency, like Trueway International, to do the attestation service. We offer fast and secure embassy attestation services for all types of educational, personal, and commercial documents.
                <br />
                Trueway International helps candidates with customer support service in a fast, reliable, and affordable way. We make sure to keep the applicant's documents and data safe. Moreover, we offer an embassy attestation service that is available all over India.
                </p>
            </div>    
      </div>
    </>
  )
}

export default QatarEmbassyHero