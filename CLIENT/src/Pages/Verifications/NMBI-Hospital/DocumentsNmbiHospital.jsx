import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsNmbiHospital() {
  return (
    <>
        <div className='bg-zinc-100 h-full w-full mb-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                        <h3 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'><b className='text-black'> Documents Required For </b> NMBI Hospital Verification</h3>

                        <div className='max-w-2xl my-4 font-HeadingFont'>
                            <h6 className='md:text-2xl text-xl  font-semibold'>Main documents needed are:</h6>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Employment form
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Experience certificate
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'> Passport copy
                                    </li>
                                </div>

                                <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px] p-4'>Request letter
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='my-auto'>
                        <img className='lg:w-[400px] px-14 mx-auto lg:my-10' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DocumentsNmbiHospital