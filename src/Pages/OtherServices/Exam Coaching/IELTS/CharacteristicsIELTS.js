import React from 'react'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function CharacteristicsIELTS() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h5 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Characteristics of <br/><b className='text-green-500'> Trueway IELTS coaching </b>
                </h5>
            </div>
            <div className=' lg:px-24 px-5 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Don't waste your time searching for the best IELTS exam coaching anymore. Trueway International offers an advanced syllabus with special guidance from experienced faculty. Here, you can achieve the best results.
                </p>

                <ul className='list-none text-green-500 font-semibold text-lg md:text-xl md:ml-24 lg:ml-16 px-4 py-6'>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Special Consideration for IELTS Candidates</li> 
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Advanced Technology Learning</li>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Updated IELTS Syllabus</li>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Anytime availability</li> 
                </ul>
            </div>
        </div>
    </>
  )
}

export default CharacteristicsIELTS