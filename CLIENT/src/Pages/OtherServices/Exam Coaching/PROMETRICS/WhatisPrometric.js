import React from 'react'
import Avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

function WhatisPrometric() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3 pt-10 md:pt-0'>
            <img className='md:hidden grid  w-[100px]  mt-[-5rem]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide '>What is a <br/><b className='text-green-500'> Prometric exam ?</b></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 mt-[-30px] lg:mt-[-9rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-10 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0'>
            Prometric examinations are standardised evaluations to evaluate candidates' knowledge and abilities to make sure they fulfil the criteria needed for practice. We provide our coaching thorough instruction and tools to make them efficient for passing Prometric examinations in various nations.<br/>
            Whether you are preparing for the Saudi Prometric Exam, Qatar Prometric Exam, Oman Prometric Exam, Kuwait Prometric Exam, Bahrain Prometric Exam, DHA Prometric Exam, MOH Prometric Exam, or HAAD Prometric Exam, this centre has expert faculty, up-to-date study materials, and a supportive learning environment to boost your chances of success.<br/>
            Enrol today and take a step closer to reaching your career objectives in the healthcare field.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatisPrometric