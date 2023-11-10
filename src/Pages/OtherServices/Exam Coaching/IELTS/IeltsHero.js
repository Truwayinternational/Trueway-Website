import React from 'react'


import IELTSbanner from '../../../../Assets/examCoaching/IELTS Coaching.png'
import MOBIELTSbanner from '../../../../Assets/mobile banners/MOB IELTS BANNER.png'


function IeltsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={IELTSbanner} alt="IELTS exam coaching banner" />
                {/* mobile banner here */}
                <img className='lg:hidden w-screen ' src={MOBIELTSbanner} alt="mobile IELTS banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Join the Best <b className='text-green-500'> IELTS online & OET coaching centre </b> in Kerala
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                IELTS is a requirement for all students and professionals in the major English-speaking nations. One of the essential stages you must complete before moving abroad is passing the IELTS exam. Trueway International can offer you the greatest and most promising IELTS coaching in the area if you're eagerly looking for the top IELTS tutoring in Kerala. We are well-equipped to guide you and provide excellent coaching with current study materials thanks to our years of experience and highly skilled faculty. Our coaching program focuses on teaching non-native speakers who want to study or work in an English-speaking environment language skills in four categories, such as Listening, Reading, Writing, and Speaking.
                </p>
            </div>    
      </div>
    </>
  )
}

export default IeltsHero