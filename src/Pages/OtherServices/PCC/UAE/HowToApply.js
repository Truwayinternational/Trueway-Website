import React from 'react'
import avatar_1 from '../../../../Assets/certificate attestation/avatar_1.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function HowToApply() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>How to apply for<br/><b className='text-green-500'> UAE Police Clearance <br/> Certificate?</b></h2>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_1} alt="avatar_1" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p>PCC is needed if you are now a resident of UAE and planning to migrate to any other country. To get the PCC process done you have the following documents.</p>
                        <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Emirates ID</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>UAE Visa tamped page</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Passport copy old & new</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Purpose of migration</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Photo</li> 
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

export default HowToApply