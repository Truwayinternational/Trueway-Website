import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function PurposesOfHRD() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the <b className='text-green-500'> Purpose of</b><br/><p className='text-green-500'> HRD Attestation ?</p></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p >
                        HRD attestation is mainly used for migration purposes. If you are planning to migrate to your dream country for education, employment, or such matters, then attestation of your documents is mandatory. 
                        </p>
                        <b>The following are the main purposes of HRD attestation:</b>
                        <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-3 mt-3'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>For higher education in overseas nations.</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To migrate abroad.   </li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To secure a job permit abroad. </li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To obtain a visa.</li> 
                        </ol>
                        <p>
                        HRD attestation is primarily used to attest educational certificates such as degree certificates, diploma certificates, SSLC certificates, and so on. To confirm the authenticity and legitimacy of your certificates, you should complete this. Then only you can enter foreign nations.
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-50px] my-8'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposesOfHRD