import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentSaudiCgfns() {
  return (
    <>
        <div className='bg-zinc-100 h-full w-full my-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                        <h2 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'><b className='text-black'> Documents Required For </b> CGFNS Saudi Arabia Nursing Council Verification</h2>

                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <h6 className='md:text-2xl text-xl  font-semibold'>For Candidates Before 2018, the required Documents are:</h6>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Accreditation Certificate
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Saudi Council License details
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Re Classification Certificate
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white md:w-max w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Saudi License Card
                                </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Original PDF of CGFNS Form
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Certificate of Examination Passed
                            </li>
                            </div>
                        </ul>
                        </div>

                        {/* after 2018 */}
                        <div className='max-w-2xl font-HeadingFont'>
                            <h6 className='md:text-2xl text-xl  font-semibold'>And for the candidates after 2018, the required Documents are:</h6>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Examination Passed Certificate in Mumaris Plus (Bluish Green Colour Certificate)
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Provisional Re Registration Certificate
                                    </li>
                                </div>

                            </ul>
                                <div className='w-fit p-2 list-none md:text-lg font-semibold'>
                                    <li className='p-4'> (Updated Version of Accreditation and License details)
                                    </li>
                                </div>
                        </div>
                    </div>
                <div className='my-auto'>
                    <img className='lg:w-[400px] px-14 mx-auto lg:my-10' src={section_img} alt="section_img" />
                </div>
                </div>
            </div>

            <div className='grid max-w-5xl mx-auto place-content-center '>
            <p className='text-gray-600 font-poppins md:text-lg mb-10 px-6 md:px-8 lg:px-0'>
                Duration : 25 Working Days
                </p>
            </div>
        </div>
    </>
  )
}

export default DocumentSaudiCgfns