import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function PurposeOfQatarPcc() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the  <br/><b className='text-green-500'>Purpose of Qatar PCC?</b></h2>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To make the migration smooth and fast</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To prove that the applicant has good conduct and no criminal background</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>To prove that they have not done any illicit activities that are harmful for the country or other people</li> 
                        </ul>
                        <p>
                        After getting a PCC, it is easy to relocate or migrate to other countries. People who are 18 years of age or older should apply for PCC.
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-130px] mt-[-50px] my-8'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposeOfQatarPcc