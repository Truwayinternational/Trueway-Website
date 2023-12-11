import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function ProcedureOfCA() {

    const [readMore, setReadMore] = useState(false)

    const extraContent =<div>
          <p className='lg:hidden flex text-md md:text-xl font-poppins pr-2 pt-2 text-gray-500'>
          For educational documents like degrees and certificates, the process starts with notarization, followed by checks by departments and authorities in Mumbai and Delhi. Then, the embassy verifies them. For non-educational documents like birth, marriage, and employment certificates, the steps are similar, but embassy verification is replaced by consulate verification. For commercial documents, like certificates of origin or incorporation, it involves verification by the Chamber of Commerce, Ministry of External Affairs, and embassy.
          <br/>
          Attestation is important to show documents are real and valid as per Indian rules. Certificate attestation ensures the documents are legal and helps individuals when travelling abroad. It also prevents the use of fake documents by immigrants in destination countries.
          </p>
        </div>

    const linkName = !readMore && 'Read More...'

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
            <div className='flex mx-4  lg:px-16 px-3'>
                <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
                <h3 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-normal  '> Procedures of <br/><b className='text-green-500'> Certificate Attestation </b></h3>
            </div>
            <div className='lg:w-full ml-3 lg:pl-20 px-4 '>
                <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-2 lg:p-0  max-w-4xl'>
                Getting your certificates attested is a must for getting a visa. Whether you're going abroad to work or study, this process is essential. In India, the attestation procedure is a series of steps. The most crucial one is the Ministry of Foreign Affairs attestation, which comes after getting attestations from all departments. This step holds extra significance.India offers attestation services of three types:
                </p>
            </div>

            {/* middle content */}
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-20 lg:my-auto md:my-5'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 py-3'>
                    <ul className='list-none text-green-500 font-semibold text-lg md:text-xl my-3  ml-3 font-HeadingFont'>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>  Educational certificates </li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Non-educational certificates </li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Commercial certificates </li>
                    </ul>
                      <p className=' text-md  lg:text-lg md:text-xl text-start text-gray-500 font-poppins pr-2 lg:p-0'>
                        Certificate attestation requires the original certificates and passport copies. These documents are verified by relevant authorities based on the type of attestation needed. Certificate attestation is a way to prove that educational, non-educational, and commercial documents are genuine. It's crucial for people planning to work or study abroad.
                      </p>
                      {/* readMore add in paragraph */}
                      <div className='lg:hidden flex'>
                        <p  onClick={()=> {setReadMore (!readMore)}}>
                        <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                        </p>
                        { readMore && extraContent }
                      </div>
                      <p className='hidden lg:flex text-md  lg:text-lg md:text-xl text-start text-gray-500 font-poppins pr-2 lg:p-0'>
                      For educational documents like degrees and certificates, the process starts with notarization, followed by checks by departments and authorities in Mumbai and Delhi. Then, the embassy verifies them. For non-educational documents like birth, marriage, and employment certificates, the steps are similar, but embassy verification is replaced by consulate verification. For commercial documents, like certificates of origin or incorporation, it involves verification by the Chamber of Commerce, Ministry of External Affairs, and embassy.
                      <br/>
                      Attestation is important to show documents are real and valid as per Indian rules. Certificate attestation ensures the documents are legal and helps individuals when travelling abroad. It also prevents the use of fake documents by immigrants in destination countries.
                    </p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ProcedureOfCA


