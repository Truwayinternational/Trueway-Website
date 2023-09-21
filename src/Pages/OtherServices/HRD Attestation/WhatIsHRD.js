import React from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png' 


function WhatIsHRD() {
  return (
    <>
        <div className='h-full w-max-1240px py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is <br/><p className='text-green-500'>HRD Attestation ?</p></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
            Human Resource Development (HRD) attestation is a crucial step in verifying the legitimacy of educational documents for overseas education or employment. The state's HRD department validates these papers to affirm their authenticity. This verification is a prerequisite for obtaining attestation from the Ministry of External Affairs and the embassy of the intended foreign nation. Essentially, HRD attestation confirms that the academic document is authentic, having been duly issued by the respective university and endorsed by the concerned state authority, paving the way for further international recognition.
            </p>
          </div>    
        </div>                          
      </div>
    </>
  )
}

export default WhatIsHRD