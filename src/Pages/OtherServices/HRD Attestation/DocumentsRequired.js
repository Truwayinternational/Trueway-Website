import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function DocumentsRequired() {
  return (
    <div className='bg-zinc-200 h-full w-full my-10'>
        <div className='flex justify-center items-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='flex flex-col lg:pl-16 md:px-10 lg:px-0  px-5'>
                <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold '> <b className='text-green-500'> Documents Required For <br/> </b> HRD Attestation</h1>
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
                    <ul className='md:text-xl  text-sm  text-green-500'>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Degree Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> PG Degree Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> BE Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Diploma Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Nursing Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> SSC Certificate
                        </li>
                    </ul>
                </div>
                <div className='flex  md:w-1/2  md:pl-10 pl-0'>
                    <ul className='text-sm md:text-xl text-green-500 '>
                        <li className='bg-transparent rounded-full md:md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> HSC Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> MBBS Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Inter Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Pharmacy Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex  md:mx-2'/> Engineering Certificate
                        </li>
                        <li className='bg-transparent rounded-full md:hover:bg-white py-2 cursor-pointer '>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Mark Certificate
                        </li>
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