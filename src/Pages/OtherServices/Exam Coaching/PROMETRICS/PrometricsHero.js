import React from 'react'


import PrometricsBanner from '../../../../Assets/examCoaching/Prometric coaching.png'
import MobPrometrics from '../../../../Assets/mobile banners/MOB PROMETRIC BANNER.png'

function PrometricsHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={PrometricsBanner} alt="Prometrics exam coaching banner" />
                {/* mobile banner here */}
                <img className='lg:hidden w-screen ' src={MobPrometrics} alt="mobile Prometrics banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Top <b className='text-green-500'> Prometric coaching<br/>centre </b> in Kerala
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is one of Kerala's best coaching centres for prometric exam preparation. With a successful track record, we are devoted to assisting aspiring healthcare professionals to do well on various metric exams.
                <br/>
                Trueway International offers the best syllabus to guarantee your success. You will receive professional assistance from highly qualified staff with 15 years of experience in daily one-hour lessons. We offer thorough study guides and notes that may be sent to you effortlessly via email and WhatsApp. We provide practice sessions with more than 1500 questions.
                <br/>
                Our coaching is mainly focused on the exam's viewpoint, and we are dedicated to your success. We proudly provide a 100 percent success guarantee, giving you the assurance and tools needed to succeed on your Prometric exam.
                </p>
            </div>    
      </div>
    </>
  )
}

export default PrometricsHero