import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function ProcessForQatar() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
            <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '>Process in Dataflow for<br/><b className='text-green-500'> Qatar Medical Professionals </b></h3>
          </div>
        <div className='flex'>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-100px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
            Dataflow starts for Qatar's medical providers with thorough data gathering from patients, including medical records and test results. Data is collected from different sources that includes patient records, medical equipment, and other details. This data is examined and classified to ensure validity and regularity, and it is analysed in order to clarify information, assist making decisions, and improve the overall healthcare services provided by patients as well as doctors in Qatar.
            </p>
            <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-xl py-3 font-HeadingFont'>
                <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Verifying Documents</li> 
                <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Dataflow process </li>
                <li className='cursor-pointer py-2 font-HeadingFont p-4'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Prometric exam booking </li>
            </ol>
          </div>    
        </div>     
      </div>
    </>
  )
}

export default ProcessForQatar