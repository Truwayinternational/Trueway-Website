import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentRequiredForBahrain() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-10'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10'>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                <h4 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required for<br/> </b> Bahrain Embassy Attestation</h4>
                    <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                    Inorder to start the actual embassy attestation process of Bahrain you have to gather some certificates and to submit to us.
                    </p>
                    <div className='max-w-2xl my-4 font-HeadingFont'>
                        <h4 className='md:text-2xl text-xl  font-semibold'>Main documents needed are:</h4>
                        <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                            <li className='bg-transparent rounded-full hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Original Certificate
                            </li>
                            <li className='bg-transparent rounded-full hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Passport Copy
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-auto'>
                    <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        </div>
    </> 
  )
}

export default DocumentRequiredForBahrain