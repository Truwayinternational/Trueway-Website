import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.webp'


function ScopeOfMedical() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
            <h3 className='md:text-5xl lg:px-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '> Scope of<br/><b className='text-green-500'> Medical Coding</b></h3>
          </div>
        <div className='flex'>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
            Medical coding offers vast career opportunities in various healthcare settings, including hospitals, clinics, surgery centres, and insurance companies. As the healthcare sector continues to grow, the demand for skilled medical coders rises, providing job stability and potential for career advancement.Medical coding is an excellent choice for those seeking a lucrative job in a short time. It’s ideal for nurses and other healthcare professionals seeking better salaries and job satisfaction. Trueway International, with over 18 years of experience, ensures a secure future and career, providing top-notch classes and support to help you pass the exam on the first attempt. We also offer placement assistance.</p>
          </div>    
        </div>     
      </div>
    </div>
  )
}

export default ScopeOfMedical