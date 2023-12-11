import React from 'react'
import avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function HowToApplyOmanPcc() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>How to apply for<br/><b className='text-green-500'> Oman Police Clearance <br/> Certificate?</b></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_1} alt="avatar_1" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p>The following documents must be in possession of the candidates in order to obtain a Saudi PCC. In order to start the process, they should provide these to the relevant authorities.</p>
                        <b>These documents are required: </b>
                        <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Oman Civil ID</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Visa Stamped page</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Photo</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Purpose of Migration</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Passport Copy</li> 
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-150px] mt-[-50px] my-8'>
                    <img src={avatar_1} alt="avatar_1" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowToApplyOmanPcc