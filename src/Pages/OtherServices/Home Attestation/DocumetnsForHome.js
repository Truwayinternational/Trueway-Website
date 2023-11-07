import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumetnsForHome() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-12'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                    <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For <br/> </b> Home Department Attestation</h1>
                        <p className='text-gray-500 font-poppins md:text-xl lg:text-lg'>
                        The ministry responsible for setting up and maintaining the nation's internal security is known as the Home Department. The Home Department has complete authority to uphold national law and order. The ministry will help its citizens by attesting their documents for legitimacy through the Home Department. The home department's attestation is a crucial step in the certification process; however, it only requires non-educational certificates. Any non-educational document can be submitted with the home department's attestation for an international verification process. 
                        </p>
                        <h6 className='text-center py-5 lg:pb-0 text-lg md:text-2xl font-HeadingFont font-bold'>List of non-educational certificates:</h6>
                    </div>
                    <div className='md:pt-10 lg:pl-20 py-auto'>
                        <img className='md:w-[300px] w-[200px] mx-auto lg:py-20' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
            <div className='flex justify-start max-w-3xl md:mx-auto md:px-20 lg:px-0 pb-10'>
                    <div className='grid grid-cols-1'>
                        <ul className='lg:text-xl md:text-lg text-sm  text-green-500'>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Birth certificate
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Marriage certificate
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Death certificate
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Transfer certificate
                            </li>
                            </div>

                        </ul>
                    </div>
                    <div className='flex  md:pl-16 pl-0'>
                        <ul className='text-sm lg:text-xl md:text-lg text-green-500 '>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Experience certificate
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Single status certificate
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Divorce certificate, etc.
                            </li>
                            </div>
                        </ul>
                    </div>
            </div>
    </div>
    </>
  )
}

export default DocumetnsForHome