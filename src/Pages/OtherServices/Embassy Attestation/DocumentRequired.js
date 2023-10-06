import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentRequired() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full mt-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                        <h5 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required For <br/> </b> Embassy Attestation</h5>
                        <div className='md:hidden py-auto'>
                            <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                         </div>
                        <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                        To do an embassy attestation, some documents are compulsory; therefore, in order to start the process, the candidate has to gather all the required documents. Trueway can make the process go smoothly with these documents. Submit the following documents to us, and we will make the embassy attestation procedure go smoothly and quickly.
                        </p>
                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <h6 className='md:text-2xl text-xl      font-semibold'>Main documents needed are:</h6>
                            <ul className='md:text-xl  py-3 text-md  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                                <li className='bg-transparent rounded-full hover:bg-white py-2'>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Original Certificates
                                </li>
                                <li className='bg-transparent rounded-full hover:bg-white py-2 '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Copy of passport
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden md:grid py-auto'>
                        <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DocumentRequired