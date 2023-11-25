import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.webp' 


function WhatisHome() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center my-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><p className='text-green-500'>Home Department Attestation ?</p></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 lg:mt-[-12rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg  text-gray-500 font-poppins pr-3 lg:p-0'>
            Home department attestation means state-level attestation. Home attestation is mainly done for non-educational documents such as birth certificates, marriage certificates, death certificates, experience certificates, etc.; it is the basic and primary procedure before any document attestation. That means only after getting your documents attested from the home department can you do further procedures.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatisHome