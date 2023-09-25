import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.png'



function PurposesOfMofa() {
  return (
    <div>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the <b className='text-green-500'>purpose of</b> <br/><p className='text-green-500'>MOFA Attestation ?</p></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        The purpose of MOFA attestation is to verify the genuineness and authenticity of the documents so that they can be accepted as valid and legally recognized in a foreign country. MOFA attestation is mainly required for various purposes, including employment abroad, obtaining a visa, pursuing higher education in a foreign country, and carrying out business transactions internationally. It ensures that the documents you submit are genuine, authentic, and legally acceptable in the foreign country.
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[100rem] lg:w-1/3 h-full md:mr-10 xl:mt-[-100px] my-8'>
                    <img className='md:mt-[-100px] lg:mt-[-50px]' src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PurposesOfMofa