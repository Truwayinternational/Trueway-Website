import React from 'react'

import AndhraNursingWeb from '../../../../Assets/goodstanding/Andra predesh web.png'
import AndhraNursingMOB from '../../../../Assets/mobile banners/Andra predesh MOB.png'

function AndhraNursingHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AndhraNursingWeb} alt="andhra nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={AndhraNursingMOB} alt=" andhra nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Fast and secure verification of the <b className='text-green-500'> Andhra Pradesh Nursing Council's</b> Good Standing Certificate
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                A certificate of good standing is required for nurses from Andhra Pradesh who wish to move abroad to work. Since the candidate's state will require them to present a certificate of good standing on landing in their target council. One can verify the candidate's strong background with a certificate of good standing. You may apply for a good standing certificate only if you are a registered nurse who is currently employed.
                </p>
            </div>    
      </div>
    </>
  )
}

export default AndhraNursingHero