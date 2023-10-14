import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsForOman() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] pt-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                        <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required For <br/> </b> Oman Dataflow </h1>
                        <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                        In the context of Oman's Dataflow process, healthcare professionals seeking employment or licensure are required to submit specific documents for verification. These documents are important in confirming the credibility of their qualifications and professional documents.<br/> <b> The following documents are needed for the Oman Dataflow procedure :- </b>
                        </p>
                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Degree / Diploma certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Registration Certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Experience Certificate<span className='font-normal'>( Min 3 years)</span>
                                </li>
                                <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> All year Mark sheets & Course Completion Certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Transcript & Updated Resume
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Passport size Photo
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Passport copy
                                </li>
                                <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Mail id & Mobile Number 
                                </li>
                                <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Address 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' my-auto'>
                        <img className='lg:w-[400px] px-14 py-4 mx-auto' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
            <div className='grid max-w-5xl mx-auto place-content-center '>
                <p className='text-gray-600 font-poppins md:text-lg mb-10 px-6 md:px-8 lg:px-0'>
                    <b>Please note: </b> Only scanned copies of documents are required.
                </p>
            </div>
        </div>
    </>
  )
}

export default DocumentsForOman

