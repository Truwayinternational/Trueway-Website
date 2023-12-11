import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.webp'


function WhyNeedOmanPcc() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h2 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>Why do you need<br/> <b className='text-green-500'> Oman PCC ?</b> </h2>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 md:mt-[-30px] lg:mt-[-120px] xl:mt-[-180px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        A Police Clearance Certificate (PCC), which is a crucial document in preventing criminals from entering other countries, is needed for a number of things, including higher education, migration, and obtaining a family visa. Eligibility for an Oman PCC is granted to those who have not engaged in any criminal activity.
                    </p>
                </div>    
            </div>
        </div>
    </>
  )
}

export default WhyNeedOmanPcc