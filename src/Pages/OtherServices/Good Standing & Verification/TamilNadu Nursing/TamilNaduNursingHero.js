import React from 'react'


import tamilNaduNursingWeb from '../../../../Assets/goodstanding/Web Tamil Nadu Nursing Council.png'
import tamilNaduNursingMob from '../../../../Assets/mobile banners/tamil nadu nursing.png'

function TamilNaduNursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={tamilNaduNursingWeb} alt="tamil nadu nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={tamilNaduNursingMob} alt="mobile tamilnadu nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Fast and Secure Good Standing Certificate & verification from <br/><b className='text-green-500'>  Tamilnadu Nursing Council </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    Nurses who plan to migrate from Tamil Nadu for jobs abroad should need a good standing certificate. Because when they reach their destination council, they will be asked for a good standing certificate from the candidate’s state. A good standing certificate asserts that the candidate has a good background. You can apply for a good standing certificate only if you are currently working as a registered nurse.
                </p>
            </div>    
      </div>
    </>
  )
}

export default TamilNaduNursingHero