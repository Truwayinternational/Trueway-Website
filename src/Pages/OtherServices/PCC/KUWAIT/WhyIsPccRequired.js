import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'


import {BiSolidChevronRightCircle} from 'react-icons/bi'


function WhyIsPccRequired() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_1"/>
                <h2 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>Why is<b className='text-green-500'> PCC <br/> required from Kuwait ?</b></h2>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:ml-6 xl:mt-[-80px] py-4 lg:w-[25%]'>
                    <img src={Avatar_3} alt="avatar_1" />
                </div>
                <div className='w-full lg:pl-5 lg:pr-28 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    Today, every country carefully demands a police clearance certificate from visitors in order to protect their country from illegitimate and criminal activities.  Police clearance certificates have limited credibility and depend on the country that issued them. Kuwait PCC helps the target country's stance by thoroughly understanding the candidate.
                    </p>
                    <div className='py-2'>
                        <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-3'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>They can demonstrate that they were not damaged with the aid of PCC.</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Individuals can streamline and simplify their immigration procedure by using a PCC.</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>They can use the testimony or the authority of the target country to show their character.</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Other nations' primary motivation for bringing up PCC is to protect their nation from nefarious activities.</li> 
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    </>
  )
}

export default WhyIsPccRequired