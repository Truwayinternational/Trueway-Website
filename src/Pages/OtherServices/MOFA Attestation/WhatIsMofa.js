import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png' 


function WhatIsMofa() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center my-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><p className='text-green-500'>MOFA Attestation ?</p></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-12rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
            MOFA stands for <b>Ministry of Foreign Affairs,</b>  which is a government authorization responsible for overseeing all international matters. MOFA attestation is mandatory for a person who is going to travel abroad for various reasons. When you need to use your personal, educational, or commercial documents in another country, you frequently need to go through a legalisation or document authentication process.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsMofa