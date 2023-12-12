import React from 'react'
import Avatar_4 from '../../../../Assets/embassy attestation/avatar 4.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function TruewayBestForMalaysia() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-20'>
            <div className='flex  lg:px-8 px-3'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_4} alt="Avatar_1" />
                <h5 className='md:text-5xl lg:px-48  text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>Why Trueway is the best for <b className='text-green-500'> Malaysia  Embassy Attestation Services?</b></h5>
            </div>
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-10rem] py-4'>
                    <img className='w-[400px]' src={Avatar_4} alt="avatar_4" />
                </div>
                <div className=' lg:pr-12  pl-4 mx-3'>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0 '>
                    With years of experience, Trueway has been known for having the highest client satisfaction rate. With a professional and expert team, we are ready to help you out in the following ways:
                    </p>
                    <ul className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-xl py-3 font-HeadingFont mt-3'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Trustworthy and Tension-free Services</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Speedy and accurate process</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'>Services Available for PAN India</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'> 24*7 Assistance</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4'> Affordable price</li>
                    </ul>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0 '>
                    To get your document attestation from the most reliable document attestation company,<br/>
                    visit us
                    <a className='text-gray-600 font-semibold px-2' href='/'>truewayinternational.com</a> 
                    <p>Write to us at <a className='text-gray-600 font-semibold pr-2' href='mailto:tvm@truewayinternational.com'> 
                    tvm@truewayinternational.com</a>
                     OR call us at <a className='text-gray-600 font-semibold pr-2' href='tel:+918327626262'> 
                    +91 83276 26262 </a>
                    </p>
                    </p>
                </div>  
            </div>                     
        </div>
    </>
  )
}

export default TruewayBestForMalaysia