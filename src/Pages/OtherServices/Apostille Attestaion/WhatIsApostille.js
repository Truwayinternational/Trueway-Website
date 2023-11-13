import React from 'react'

import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png' 


function WhatIsApostille() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><b className='text-green-500'> Apostille Attestation ?</b></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-10rem] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-10 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
            Apostille is a form of foreign paperwork primarily used by countries that have signed the Hague Convention. Apostille attestation is a way of verifying legal documents, typically to prevent unauthorised foreign documents from being used by individuals seeking to study or work in Hague Convention countries. The Apostille attestation format is accepted in more than 116 countries, primarily in Europe and the Americas. In India, a Ministry of External Affairs sticker is affixed to the document, and a stamp is applied in such a way that it partially covers the sticker and partially the document.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsApostille