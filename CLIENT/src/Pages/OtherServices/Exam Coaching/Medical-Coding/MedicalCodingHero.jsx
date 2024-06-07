import React from 'react'
import MedicalCodingBanner from '../../../../Assets/examCoaching/Medical Coding.webp'
import MOBbanner from '../../../../Assets/mobile banners/Mob Medical Coding.webp'
import TableDataHero from './TableDataHero'
import CalltoAction from './CalltoAction'


function MedicalCodingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MedicalCodingBanner} alt="IELTS exam coaching banner" />
                {/* mobile banner here */}
                <img className='lg:hidden w-screen ' src={MOBbanner} alt="mobile IELTS banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Best Institute for <b className='text-green-500'> Medical Coding Course</b> in Trivandrum, Kerala
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway International is excited to offer a comprehensive job assistance medical coding course in kerala. This intensive program promises employment immediately after graduation. Our medical coding course is designed for individuals in the medical field earning modest salaries and those from other fields seeking immediate, high-paying job opportunities post-graduation.Trueway International provides the Certified Professional Coder (CPC) certification, one of the most sought-after credentials in medical coding, offered by the American Academy of Professional Coders (AAPC). With over 18 years of experience, we provide the best medical coding training under the guidance of expert faculties. Enrol with us to gain the skills and credentials needed to excel in the healthcare industry.
                </p>
            </div> 
      </div>

      {/* course details table content */}
      <TableDataHero/>

      {/* calll to action */}
      <CalltoAction/>
    </>
  )
}

export default MedicalCodingHero