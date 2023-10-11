import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsRequired() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full mt-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                        <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For <br/> </b>  Credentialing in DataFlow typically include:</h1>
                        <div className='max-w-2xl font-HeadingFont'>
                            <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Dataflow Report
                                </li>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2  w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Copy of passport
                                </li>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> USER ID and Password of Dataflow
                                </li>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Registered Mail ID
                                </li>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> All the other Documents submitted at the time of Dataflow
                                </li>
                                <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                                    <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> BLS Certificate<span> (Only for Nurses. This certificate is not required for Physicians.)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' my-auto'>
                        <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
            <div className='grid max-w-5xl mx-auto place-content-center '>
                <p className='text-gray-500 font-poppins md:text-lg mb-10 px-6 md:px-8 lg:px-0'>
                        It's important to note that the exact document requirements may vary depending on the specific purpose of the credentialing and the organisation conducting the verification. Applicants should check with DataFlow or the relevant authority for precise document requirements. 
                </p>
            </div>
        </div> 
    </>
  )
}

export default DocumentsRequired