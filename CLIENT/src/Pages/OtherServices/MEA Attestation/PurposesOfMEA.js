import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function PurposesOfMEA() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the <b className='text-green-500'> Purpose of</b> <br/><b className='text-green-500'>MEA Attestation ?</b></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-lg lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5 md:pr-20 py-3 '>
                            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/> For higher education. </li>
                            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>For migration.</li> 
                            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>For employment. </li> 
                            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>To get a resident visa. </li> 
                        </ol>
                        <p>
                            The original certificate is the only document that can be considered for every attestation, including MEA attestation. MEA attestation is the second step of the attestation process. It is necessary that the applicant properly completes all attestation procedures. The applicant must provide each and every document required for MEA attestation without fail. The country's foreign relations are managed by the Ministry of External Affairs. When travelling internationally, a person's documents have to be verified and recognized as their own, necessitating MEA attestation. MEA attestation verifies the authenticity of the documents.
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[100rem] lg:w-1/3 h-full md:mr-10 xl:mt-[-50px] my-8'>
                    <img className='' src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposesOfMEA