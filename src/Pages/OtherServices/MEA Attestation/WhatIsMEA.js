import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png' 

function WhatIsMEA() {
  return (
    <div>
<div className='max-w-[1240px] mx-auto place-content-center my-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><p className='text-green-500'>MEA attestation ?</p></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg  text-gray-500 font-poppins pr-3 lg:p-0 text-justify'>
            <b> MEA </b> is a department of the central government that deals with all foreign affairs. MEA attestation stands for Ministry of External Affairs attestation. To prove the authenticity of documents issued in one country for use in another country MEA is mandatory. This process is generally used in many countries including India. For handling matters related to foreign affairs in India, the MEA department is responsible. For international use of your official documents and certificates MEA attestation is crucial and must do process. 
            </p>
          </div>    
        </div>                          
      </div>
    </div>
  )
}

export default WhatIsMEA