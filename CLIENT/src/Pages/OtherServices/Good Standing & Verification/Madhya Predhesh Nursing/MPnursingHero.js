import React from 'react'


import MPnursingWeb from '../../../../Assets/goodstanding/Web Madhya Pradesh Nursing Council.webp'
import MPnursingMob from '../../../../Assets/mobile banners/MadhyapredeshMOB.webp'

function MPnursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MPnursingWeb} alt="madhyapredesh nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MPnursingMob} alt="mobile madhya predhesh nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Quick and secure Good Standing Certificate and verification from the <b className='text-green-500'> Madhya Pradesh Nursing Council </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Nurses planning to relocate from Madhya Pradesh to work in another country need to have a good standing certificate. Because they will be asked for a good standing certificate from the candidate's state when they arrive at their destination council. A certificate of good standing certifies that the candidate has a solid background. Only if you are currently employed as a registered nurse can you apply for a good standing certificate.
                </p>
            </div>    
      </div>
    </>
  )
}

export default MPnursingHero