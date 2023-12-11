import React from 'react'

import saudi_Banner from '../../../../Assets/dataflow/dataflow saudi web.webp'
import saudi_MobileBanner from '../../../../Assets/mobile banners/Dataflow-saudiMOBbanner.webp'


function SaudiDataflowHero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={saudi_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={saudi_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>Reliable <b className='text-green-500'> Dataflow Verification Services in India </b>for Saudi Commission Health Specialties </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Are you planning to move abroad for higher studies, employment, or any other purpose? Dataflow verification is mandatory to fly overseas.
                Dataflow is a Dubai-based company. The primary services they provide are primary source verification solutions, background screening, and immigration compliance services. Dataflow verification is done to prove the validity of the documents that the candidates submit. The main reason for data verification is to avoid the migration of non-qualified candidates and also to prevent the use of fake and illegal documents. Dataflow verification safeguards the migration process.
                The Dataflow report is required for employment in countries including Oman, Saudi Arabia, Bahrain, Qatar, and the United Arab Emirates. Dataflow is a separate process for nations like Oman, Saudi Arabia, Bahrain, and Qatar; however, it is included in the test process for UAE exams like HAAD, DHA, and UAE MOH

                </p>
            </div>    
      </div>
    </>
  )
}

export default SaudiDataflowHero