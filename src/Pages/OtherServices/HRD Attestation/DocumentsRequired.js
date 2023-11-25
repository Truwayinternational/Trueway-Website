import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function DocumentsRequired() {
  return (
    <div className='bg-zinc-100 h-full w-full my-10'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For <br/> </b> HRD Attestation</h1>
                    <p className='text-gray-500 font-poppins md:text-xl lg:text-lg'>
                    To obtain attestation from the HRD office, you are required to submit the authentic original degree certificate, along with copies of the mark sheet, the offer letter, your passport, and two passport-size photos.<br/>
                    Attestation by the State Human Resource Department is the process used to certify educational documents. Additionally, the legitimacy of the certificate is verified through an authentication procedure. An attestation stamp, commonly referred to as an HRD certificate, is acquired to confirm the authenticity of the document. Furthermore, multiple educational documents are required to be submitted to Trueway International in order to initiate the State Human Resource Department attestation procedure.<br/>
                    <b>Here is the list of certificates required for the attestation of educational documents:</b> 
                    </p>
                </div>
                <div className='md:pt-10 lg:pl-20 py-auto'>
                    <img className='lg:w-[400px] px-14 py-8 mx-auto lg:my-20' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        <div className='flex justify-center md:px-20  pl-1 md:mx-auto  max-w-[1280px] pb-10 '>
                <div className='flex md:w-1/2 '>
                    <ul className='lg:text-xl md:text-lg text-sm  text-green-500'>
                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             Degree Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             PG Degree Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             BE Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             Diploma Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             Nursing Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'>
                             SSC Certificate
                        </li>
                        </div>
                    </ul>
                </div>
                <div className='flex  md:w-1/2  md:pl-10 pl-0'>
                    <ul className='text-sm lg:text-xl md:text-lg text-green-500 '>
                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> HSC Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> MBBS Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Inter Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Pharmacy Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Engineering Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 md:mt-[-40px] mt-[-33px] mb-[-20px]'> Mark Certificate
                        </li>
                        </div>
                    </ul>
                </div>
        </div>
            <div className='flex justify-center items-center text-center pb-20 max-w-2xl mx-auto px-4'>
                <p className='text-gray-500 font-poppins md:text-xl lg:text-lg'>
                Once the authentic attestation procedure with the aforementioned documents is completed by the HRD, we will securely courier the attested educational certificate to the candidate using their preferred method.
                </p>
            </div>
    </div>
  )
}

export default DocumentsRequired