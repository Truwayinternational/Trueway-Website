import React from 'react'
import avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function HowToApplyKuwaitPcc() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide'>How to apply for<br/> <b className='text-green-500'>Kuwait Police Clearance Certificate? </b></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_1} alt="avatar_1" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p>
                        Getting a Police Clearance Certificate (PCC) without the assistance of an agency can be a tough process. However, with Trueway, you can trust the experts who will seamlessly handle everything from document submission to obtaining the clearance certificate, allowing you to enjoy peace of mind throughout the entire journey.
                        </p>
                        <p>
                        To get a Kuwait police clearance certificate the candidate should present some obligatory documents.
                        </p>
                        <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  pt-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Passport</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Visa </li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>ID copy</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Passport size photo</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Kuwait Civil ID Number</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Permanent Address</li> 
                        </ul>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[140vh] lg:w-1/3 h-full  lg:mr-10  mt-[-50px] my-8'>
                    <img src={avatar_1} alt="avatar_1" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowToApplyKuwaitPcc