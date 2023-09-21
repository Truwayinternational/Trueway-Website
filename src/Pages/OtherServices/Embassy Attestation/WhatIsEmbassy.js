import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png'

function WhatIsEmbassy() {
  return (
    <>
      <div className='h-full w-max-1240px py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h3 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is<br/><p className='text-green-500'>Embassy Attestation ?</p></h3>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
            Embassy attestation is the ultimate and mandatory step to be done on the certificates of medical professionals who are going to migrate abroad. Embassy attestation is applicable in personal, educational, and commercial documents issued in your country. Primary certificate attestation or authentication and embassy attestation has to be done by the country from where the certificate is issued. In some cases, consulate attestation may be an alternative to embassy attestation, but not all countries accept consulate attestation for all types of documents.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsEmbassy