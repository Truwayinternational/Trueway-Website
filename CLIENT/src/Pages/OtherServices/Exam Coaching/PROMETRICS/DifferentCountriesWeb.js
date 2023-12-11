import React from 'react'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

// images added here
import saudiPrometric from '../../../../Assets/examCoaching/prometric/saudi prometric.webp'
import qatarPrometric from '../../../../Assets/examCoaching/prometric/qatar prometric.webp'
import omanPrometric from '../../../../Assets/examCoaching/prometric/oman prometric.webp'
import KuwaitPrometric from '../../../../Assets/examCoaching/prometric/kuwait prometric.webp'
import bahrainPrometric from '../../../../Assets/examCoaching/prometric/bahrain prometric.webp'
import DHAprometric from '../../../../Assets/examCoaching/prometric/DHA prometric.webp'
import MohPrometric from '../../../../Assets/examCoaching/prometric/MOH prometric.webp'
import HaadPrometric from '../../../../Assets/examCoaching/prometric/HAAD prometric.webp'


function DifferentCountriesWeb() {
  return (
    <>
        <div className='hidden md:flex flex-col justify-center items-center my-10'>
        {/* 1st card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={saudiPrometric} alt="saudiPrometricBanner" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 lg:pl-2  pt-3 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span>  Saudi Prometric Exam coaching in kerala </h4>
            <p className='flex absolute lg:w-[500px] w-[400px] text-sm lg:text-base font-poppins font-light text-gray-700 lg:pl-14 pl-10 pt-10 lg:pt-20'>
            The top Prometric coaching facility in Kerala can help you prepare for the Saudi Prometric Exam. A career in Saudi Arabia's healthcare industry can be started by passing this important exam with the assistance of our qualified professors and in-depth study materials.
            </p>
        </div>

        {/* 2nd card   */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover' src={qatarPrometric} alt="qatar prometric" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 pl-[38%] pt-4 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span> Qatar Prometric Exam coaching in kerala </h4>
            <p className='flex absolute  text-sm lg:text-base font-poppins font-light text-gray-700  pl-[43%] pr-14  pt-10 lg:pt-20'>
            You can achieve your dreams with our specialist tutoring for the Qatar Prometric Exam and start working in the Qatar healthcare industry. You will gain the skills and self-assurance needed to perform well on this test from our committed teachers and exam-focused materials.
            </p>
        </div>

        {/* 3rd card */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={omanPrometric} alt="OmanPrometric" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 lg:pl-2  pt-3 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span>  Oman Prometric Exam coaching in kerala </h4>
            <p className='flex absolute lg:w-[500px] w-[400px] text-sm lg:text-base font-poppins font-light text-gray-700 lg:pl-14 pl-10 pt-10 lg:pt-20'>
            Our Prometric Exam tutoring in Kerala is the best option for people who want to work as healthcare professionals in Oman. Our program is intended to pass the Oman Prometric Exam with a high mark, so you can be confident that you'll be ready for success.
            </p>
        </div>

        {/* 4th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover' src={KuwaitPrometric} alt="kuwait prometric" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 lg:pl-[37%] pl-[38%] pt-4 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span> Kuwait Prometric Exam coaching in Kerala </h4>
            <p className='flex absolute  text-sm lg:text-base font-poppins font-light text-gray-700 lg:pl-[42%] pl-[43%] pr-14  pt-12 lg:pt-20'>
            Start your career in the healthcare sector in Kuwait with our excellent Kuwait Prometric Exam coaching. You'll pass this important test with the help of our professional advice and study guides.
            </p>
        </div>

        {/* 5th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={bahrainPrometric} alt="bahrain prometric" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 pt-3 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span>Bahrain Prometric Exam coaching in Kerala </h4>
            <p className='flex absolute lg:w-[500px] w-[400px] text-sm lg:text-base font-poppins font-light text-gray-700 lg:pl-12 pl-10 pt-10 lg:pt-20'>
            At our coaching centre in Kerala, you may confidently prepare for the Bahrain Prometric Exam. With the help of our power of materials and expert instructors, you will be able to do your best on this test.
            </p>
        </div>

        {/* 6th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover' src={DHAprometric} alt="DHA prometric"/>
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 pl-[38%] pt-4 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span> DHA Prometric Exam coaching in Kerala </h4>
            <p className='flex absolute  text-sm lg:text-base font-poppins font-light text-gray-700  pl-[43%] pr-14  pt-10 lg:pt-20'>
            With our specialist instruction in Kerala, you may ace the Dubai Health Authority (DHA) Prometric Exam. The material we provide is made to fully prepare you for this significant exam, which will lead to opportunities in Dubai's healthcare industry.
            </p>
        </div>

        {/* 7th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={MohPrometric} alt="MOH prometric" />
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 lg:pl-2  pt-3 lg:pt-8'><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span>  MOH Prometric Exam Coaching in Kerala </h4>
            <p className='flex absolute lg:w-[500px] w-[400px] text-sm lg:text-base font-poppins font-light text-gray-700 lg:pl-14 pl-10 pt-10 lg:pt-20'>
            With the help of our experienced coaching facility in Kerala, begin preparing for the Ministry of Health (MOH) Prometric Exam. Our tutors and study materials are designed to support you in passing this important test and pursuing a fulfilling career in healthcare.
            </p>
        </div>
        
        {/* 8th card */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover' src={HaadPrometric} alt="HAAD prometric"/>
            <h4 className='flex absolute lg:text-2xl text-base font-HeadingFont font-bold text-green-500 pl-[38%] pt-4 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 m-1"/></span> HAAD Prometric Exam Coaching in Kerala </h4>
            <p className='flex absolute  text-sm lg:text-base font-poppins font-light text-gray-700  pl-[43%] pr-14  pt-10 lg:pt-20'>
            Our preparation for the Health Authority of Abu Dhabi (HAAD) Prometric Exam is ideal for individuals who want to work in the healthcare industry in Abu Dhabi. Our all-inclusive coaching package will help you succeed in this important test.
            </p>
        </div>
      </div> 
    </>
  )
}

export default DifferentCountriesWeb