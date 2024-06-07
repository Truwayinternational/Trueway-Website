import React from 'react'
import Avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

function WhyChooseMedical() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3 pt-10 md:pt-10'>
            <img className='md:hidden grid  w-[100px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide '>Why Choose Our<b className='text-green-500'> Medical Coding Training Class</b></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 lg:mt-[-14rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-10 lg:pr-16 px-4 pl-6'>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0'>
            Our medical coding classes at Trueway International stands out due to our experienced faculties, comprehensive curriculum, and dedicated placement assistance. With our structured approach and practical training, you'll be well-equipped to pass your certification exams and secure a rewarding job in the healthcare sector.
            </p>
          </div>    
        </div>                          
      </div>
    </div>
  )
}

export default WhyChooseMedical