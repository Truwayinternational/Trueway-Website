import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumetnsForHome() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full mt-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                    <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For <br/> </b> Home Department Attestation</h1>
                        <p className='text-gray-500 font-poppins md:text-xl lg:text-lg'>
                        The ministry responsible for setting up and maintaining the nation's internal security is known as the Home Department. The Home Department has complete authority to uphold national law and order. The ministry will help its citizens by attesting their documents for legitimacy through the Home Department. The home department's attestation is a crucial step in the certification process; however, it only requires non-educational certificates. Any non-educational document can be submitted with the home department's attestation for an international verification process. 
                        </p>
                        <h6 className='py-5 lg:pb-0 text-lg md:text-xl font-HeadingFont font-bold'>List of non-educational certificates:</h6>
                    </div>
                    <div className='md:pt-10 lg:pl-20 py-auto'>
                        <img className='lg:w-[400px] px-14 mx-auto lg:py-20' src={section_img} alt="section_img" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:px-20  pl-1 md:mx-auto  max-w-[1280px] pb-10 '>
                    <div className='flex md:w-1/2 '>
                        <ul className='md:text-xl  text-sm  text-green-500'>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Birth certificate
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Marriage certificate
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/>Death certificate
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Transfer certificate
                            </li>
                        </ul>
                    </div>
                    <div className='flex  md:w-1/2  md:pl-10 pl-0'>
                        <ul className='text-sm md:text-xl text-green-500 '>
                            <li className='bg-transparent rounded-full md:md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/>Experience certificate
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Single status certificate
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer font-HeadingFont '>
                                <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Divorce certificate, etc.
                            </li>
                        </ul>
                    </div>
            </div>
    </div>
    </>
  )
}

export default DocumetnsForHome