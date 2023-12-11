import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.webp' 


function WhatisDataflow() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10'>
            <div className='flex mx-4 lg:px-16 px-3'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
                <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><p className='text-green-500'>Dataflow Verification ?</p></h2>
            </div>
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-10 lg:mt-[-12rem] py-4'>
                    <img src={Avatar_1} alt="avatar_1" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                    Dataflow is a mandatory step before you go abroad. It is the process of verifying the authenticity and accuracy of data related to a person's credentials, such as education, employment history, and professional qualifications. Employers, educational institutions, government agencies, and other organizations commonly utilize this verification process to make sure that the information provided by a person is reliable and accurate.
                    </p>
                </div>    
            </div>                          
        </div>  
    </>
  )
}

export default WhatisDataflow