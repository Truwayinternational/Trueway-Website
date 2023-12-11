import React from 'react'
import Avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

const WhatIsOet = () => {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3 pt-10 md:pt-0'>
            <img className='md:hidden grid  w-[100px]  mt-[-5rem]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide pr-10 '>What is <b className='text-green-500'> OET?</b></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 mt-[-30px] lg:mt-[-10rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0'>
                OET stands for Occupational English Test and is considered the most appropriate way for medical professionals planning medical careers abroad. OET is specially designed to assess a person's communication skills in English. The test primarily evaluates a candidate's proficiency in four language skills: reading, listening, writing, and speaking. OET helps ensure a candidate's suitability for jobs in the medical industry.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsOet