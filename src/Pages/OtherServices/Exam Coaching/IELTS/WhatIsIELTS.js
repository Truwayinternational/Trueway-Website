import React from 'react'
import Avatar_1 from '../../../../Assets/certificate attestation/avatar_1.png'

function WhatIsIELTS() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3 pt-10 md:pt-0'>
            <img className='md:hidden grid  w-[100px]  mt-[-5rem]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide pr-10 '>What is <b className='text-green-500'> IELTS?</b></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 mt-[-30px] lg:mt-[-5rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-10 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0'>
            The International English Language Testing System (IELTS) is the most well known English Language Proficiency Test worldwide. The University of Cambridge, British Council, and IDP collaborate to operate it.  The International English Language Testing System, or IELTS, is a mandatory exam for the English language and one of the most well-known varieties of English used in education and immigration around the globe. IELTS training is a system for evaluating English language proficiency in four categories like Listening,  Reading,  Writing and Speaking that is recognized internationally and is designed for non-native speakers who wish to study or work in an English-speaking environment. Over 8,000 institutions, employers, and immigration organisations throughout the world now accept IELTS preparation, making it one of the most reliable ways to test one's English language proficiency.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsIELTS