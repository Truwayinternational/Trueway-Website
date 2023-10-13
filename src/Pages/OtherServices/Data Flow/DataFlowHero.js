import React from 'react'


import Dataflow_banner from '../../../Assets/dataflow/dataflow_web.png'
import banner_mob from '../../../Assets/mobile banners/dataflow.png'

import HeroSidebar from '../HeroSidebar';


function DataFlowHero() {
  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
            <div className='lg:w-1/2 '>
                <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
                    <img className='object-cover' src={Dataflow_banner} alt="page_banner" />
                    <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '>Dataflow<br/> Verification</h3>
                </div>

                    {/* responsive banner of dataflow verification */}
                <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
                    <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
                </div>

            {/* web content sections */}
                <div className='m-3 lg:my-20 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Top <br/><b className='text-green-500'>Dataflow Verification <br/>Service in India</b></h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins lg:mt-10 my-5 px-4 lg:p-0'>
              <b>Trueway International</b> is the most promising dataflow consultancy in India. Trueway is known for its trustworthiness and accuracy in credential verification services. We have a presence in India and offer services for verifying educational and professional credentials. We also offer a stress-free dataflow service with an online document tracking facility. We will assist you with the dataflow process for Abu Dhabi, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.
              </p>
                </div>
            </div>

          {/* side bar navigation component*/}
            <div className='hidden lg:grid lg:w-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <HeroSidebar/>
                </div>
            </div>
      </div>
    </>
  )
}

export default DataFlowHero