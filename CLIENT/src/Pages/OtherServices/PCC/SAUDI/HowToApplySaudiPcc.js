import React from 'react'
import Avatar_1 from '../../../../Assets/certificate attestation/avatar_1.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function HowToApplySaudiPcc() {

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How to apply for<br/> <b className='text-green-500'>Saudi Police Clearance Certificate?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:ml-6 xl:mt-[-150px] py-4 lg:w-[25%]'>
                    <img src={Avatar_1} alt="avatar_1" />
                </div>
                <div className='w-full lg:pl-5 lg:pr-28 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        To get a Saudi PCC, the candidates should have the following documents in hand. They should submit these to the concerned authorities to begin the process.
                    </p>
                    <div className='py-2'>
                    <b className='text-lg md:text-xl font-HeadingFont'>Documents needed are:</b>
                    <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>IQAMA copy</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Passport copy of first entry and last exit</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Passport size photo</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Visa copy</li> 
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    </>
  )
}

export default HowToApplySaudiPcc