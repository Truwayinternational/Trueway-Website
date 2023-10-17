import React from 'react'

import Qatar_Banner from '../../../../Assets/dataflow/qatarWebBanner.png'
import Qatar_MobileBanner from '../../../../Assets/mobile banners/qatarMobBanner.png'

function QatarDataflowHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={Qatar_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={Qatar_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>India's<b className='text-green-500'> Leading Dataflow Verification Services</b> for Qatar Council for Healthcare Practitioners (QCHP)</h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Are you looking for the best dataflow verification service? Then your search will end here. Trueway International is the fastest and leading dataflow verification service in India for the Qatar Council for Healthcare Practitioners(QCHP). We are providing services to help you get a fast, accurate, and hassle-free dataflow verification process. We have experienced team members to ensure speed up your application and verification process in a short time.
                </p>
            </div>    
      </div>
    </>
  )
}

export default QatarDataflowHero