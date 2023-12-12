import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function ProcessForDubai() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 px-3'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '>Process in Dataflow for<br/><b className='text-green-500'> DHA Dubai Medical Professionals </b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-100px] py-4'>
                <img src={Avatar_3} alt="avatar_3" />
            </div>
            <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                Dubai Medical Professionals typically involves three key steps: data collection, data transformation, and data analysis. First, data is collected from different sources including patient records, medical equipment, and other details. This data is transformed and sorted to ensure accuracy and consistency, and it is analysed to understand information, help decision-making, and improve the overall healthcare services provided by DHA to medical professionals and patients in Dubai.
                </p>
                <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-xl py-3 font-HeadingFont'>
                    <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Verifying Documents</li> 
                    <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Dataflow process </li>
                    <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Prometric exam booking </li>
                    <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Get Licence \ Credentialing </li>
                </ol>
            </div>    
        </div>     
      </div>
    </>
  )
}

export default ProcessForDubai