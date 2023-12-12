import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsForBahrain() {
  return (
    <>
        <div className='bg-zinc-100 h-full w-full my-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] pt-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                        <h6 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required For<br/> </b> Bahrain Dataflow </h6>
                        <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                        As dataflow verification checks the authenticity of the documents, applicants must provide the documents required for the whole process. It is mandatory for the dataflow group to ensure the authenticity and genuineness of the submitted information. The original documents are not required, but scanned copies are.
                        </p>
                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Degree / Diploma certificate
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Registration Certificate
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Experience Certificate<span className='font-normal'>( Min 3 years)</span>
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white md:w-max w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> All year Mark sheets & Course Completion Certificate
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Good Standing Certificate
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Transcript & Updated Resume
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Passport size Photo
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Passport copy
                                </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Mail id & Mobile Number 
                                </li>
                                </div>
                                
                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Address Proof
                                </li>
                                </div>
                                
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

export default DocumentsForBahrain