import React from 'react'


import UaePccBanner from '../../../../Assets/pcc/PCC for UAE.png'
import MobUaePcc from '../../../../Assets/mobile banners/MOB PCC - UAE.png'


function UaePccHero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={UaePccBanner} alt="UaePcc banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobUaePcc} alt="mobile pcc banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-green-500  tracking-normal text-center px-4'>Fastest PCC Service <br/><b className='text-black'> In Nominal Rate </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Planning to migrate and want a police clearance certificate? Then Trueway is the solution. If you are living or working in the UAE, Abu Dhabi, Dubai, Sharjah, Fujairah, Razal Khaimah, or Ajman, then you have to get a PCC from the UAE. To get a job, people simply migrate or relocate, but they need a PCC to prove themselves real and free from any illegal activities.
                To get your PCC done smoothly in an affordable package, contact us and avail of our services. PCC from the UAE is uncomplicated after you connect with us.
                </p>
            </div>    
      </div>
    </>
  )
}

export default UaePccHero