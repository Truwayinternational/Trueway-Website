import React from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function ProcedureOfMEA() {


  return (
    <>
       <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
            <h4 className='md:text-5xl lg:px-52 text-3xl pb-5 font-HeadingFont font-extrabold text-green-500  md:tracking-wide '> The Procedure for <br/><p className='text-black'>Attesting MEA Documents is as follows: </p></h4>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg  text-gray-500 font-poppins pr-3 lg:p-0  max-w-2xl'>
            The original certificate is the only one that can be considered for every attestation, including MEA attestation. MEA attestation is the second step of the attestation process. It is necessary that the applicant properly completes all attestation procedures. The applicant must provide each and every document which is required for the MEA attestation without fail. The country's foreign relations are dealt with by the Ministry of External Affairs. When travelling internationally, a person's documents have to be verified and recognized as their own, demanding MEA attestation. MEA attestation verifies the authenticity of the documents.
            </p>
            <div className='max-w-2xl py-4 font-HeadingFont'>
                <h4 className='md:text-2xl text-xl  font-bold'>The procedure of attestation goes like this:</h4>
                <ul className='text-green-500 font-semibold text-lg md:text-xl lg:px-5 md:pr-20  mt-5'>
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>SDM (Sub-Divisional Magistrate) / HRD (Human Resource Development) </li>
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>MEA (Ministry of External Affairs)</li> 
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Embassy Attestation</li> 
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>MOFA (Ministry of Foreign Affairs) </li> 
                </ul>
                <h4 className='md:text-2xl text-xl  font-bold'>Required documents for MEA attestation:</h4>
                <ul className='text-green-500 font-semibold text-lg md:text-xl lg:px-5 md:pr-20 mt-5 '>
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Original certificate</li>
                  <BiSolidChevronRightCircle />
                  <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Passport copy</li>
                </ul>
            </div>
          </div>    
        </div>     
      </div> 
    </>
  )
}

export default ProcedureOfMEA