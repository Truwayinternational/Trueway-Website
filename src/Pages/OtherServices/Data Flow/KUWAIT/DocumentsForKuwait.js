import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsForKuwait() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] pt-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                        <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required For<br/> </b> Dataflow in Kuwait </h1>
                        <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                            To do dataflow in Kuwait the candidate has to submit some documents. So prior to the actual process, you should gather the documents and submit them before Trueway. These are the documents needed:
                        </p>
                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Degree  certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Registration Certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Experience Certificate<span className='font-normal'>(Min 2 years)</span>
                                </li>
                                <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> All year Mark sheets & Course Completion Certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Good Standing Certificate
                                </li>
                                <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Transcript
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
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Address Proof
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' my-auto'>
                        <img className='lg:w-[400px] px-14 py-4 mx-auto' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default DocumentsForKuwait