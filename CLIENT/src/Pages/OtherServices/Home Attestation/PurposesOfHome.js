import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function PurposesOfHome() {

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What are the main <br/><b className='text-green-500'>purposes of obtaining the <br/> Home Department Attestation ?</b></h3>
              <img className='md:hidden grid  h-[200px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        Home department attestation is applicable only for non-educational certificates. Not too many procedures are involved in home department attestation. Through Home Department attestation, citizens can obtain certification for their non-educational documents, making them eligible for international verification processes. List of the needed documents are mentioned below:
                        </p>
                    </div>
                    <h6 className='font-bold md:text-2xl text-lg px-3 py-5 font-HeadingFont'> List of non-educational certificates</h6>
                    <div className='md:flex pb-5'>
                        <div className='grid'>
                            <ul className='lg:text-xl md:text-lg  text-md  text-green-500'>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex '/> Birth certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex '/> Marriage certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Death certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Driving licence certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Medical certificate 
                                </li>
                            </ul>
                        </div>
                        <div className='grid'>
                            <ul className='text-md lg:text-xl md:text-lg  text-green-500 '>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Police clearance certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Transfer certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Experience certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Single status certificate
                                </li>
                                <li className='py-2 cursor-pointer font-HeadingFont '>
                                    <BiSolidChevronRightCircle className='inline-flex'/> Divorce certificate
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        Home country attestation is the initial step in certificate verification, crucial for supporting the credibility of certificates during international verification. Specifically required for the attestation process, it primarily serves citizens planning to relocate abroad.
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[100rem] lg:w-1/3 h-full md:mr-10 xl:mt-[-100px] my-8'>
                    <img className='md:mt-[-50px] lg:mt-[-60px]' src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposesOfHome