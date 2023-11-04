import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function PurposesofUaePcc() {
  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the  <br/><b className='text-green-500'>Purpose of UAE PCC?</b></h2>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <b>PCC from UAE is needed for the following reasons</b>
                        <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5  py-5'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Migration to any other country from UAE</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>To take a family visa</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>To start a new business in other country</li> 
                        </ol>
                        <p>
                        UAE PCC will get if the relevant government feels that the candidate is less harmful and a good citizen.
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-150px] mt-[-50px] my-8'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposesofUaePcc