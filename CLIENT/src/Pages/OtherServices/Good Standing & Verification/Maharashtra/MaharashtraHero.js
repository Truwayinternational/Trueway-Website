import React from 'react'

import MaharashtraWEB from '../../../../Assets/goodstanding/Web Maharashtra Nursing Council.webp'
import MaharashtraMob from '../../../../Assets/mobile banners/MaharashtraMOB.webp'

function MaharashtraHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MaharashtraWEB} alt="Maharashtra nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MaharashtraMob} alt=" maharashtra nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Need a Good Standing Certificate From <b className='text-green-500'> Maharashtra Nursing Council?</b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Nursing professionals who are practising in the Maharashtra state should have a good standing certificate if they are planning a migration. This certificate plays a crucial role in verifying the credentials of a nurse and maintaining a professional status in Maharashtra.
                Mainly for licence renewal, visa and immigration purposes, professional credentials verification, and employment requirements, a good standing certificate is so significant.
                </p>
            </div>    
      </div>
    </>
  )
}

export default MaharashtraHero