import React from 'react'

import oman_Banner from '../../../../Assets/dataflow/oman Banner.png'
import oman_MobileBanner from '../../../../Assets/mobile banners/omanMobbanner.png'

function OmanDataFlowHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={oman_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={oman_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>No. 1 <b className='text-green-500'> Dataflow Verification Services in India </b>for Oman Medical Specialty Board (OMSB) </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is your perfect partner that provides Primary Source Verification solutions, background screening and immigration compliance services.  It is a verification of the authenticity of the documents submitted by an applicant while applying for a job or a course, mainly in the GCC countries (Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, UAE). We offer a transparent and efficient verification process, with a user-friendly tracking system and 24*7 customer support. When time is of the essence and affordability is paramount, count on us for swift, cost-effective services to accelerate your career pursuits. Your success is our priority.
                </p>
            </div>    
      </div>
    </>
  )
}

export default OmanDataFlowHero