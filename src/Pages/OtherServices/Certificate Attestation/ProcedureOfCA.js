import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function ProcedureOfCA() {

    const [readMore, setReadMore] = useState(false)

    const extraContent =<div>
          <p className='lg:hidden flex text-md md:text-xl font-poppins mb-10 pr-3 pt-2 text-gray-500'>
          For educational documents like degrees and certificates, the process starts with notarization, followed by checks by departments and authorities in Mumbai and Delhi. Then, the embassy verifies them. For non-educational documents like birth, marriage, and employment certificates, the steps are similar, but embassy verification is replaced by consulate verification. For commercial documents, like certificates of origin or incorporation, it involves verification by the Chamber of Commerce, Ministry of External Affairs, and embassy.
          <br/>
          Attestation is important to show documents are real and valid as per Indian rules. Certificate attestation ensures the documents are legal and helps individuals when travelling abroad. It also prevents the use of fake documents by immigrants in destination countries.
          </p>
        </div>

    const linkName = !readMore && 'Read More...'

  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3" />
            <h3 className='md:text-5xl lg:px-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '>Procedures of<br/><p className='text-green-500'>Certificate Attestation ?</p></h3>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
            Getting your certificates attested is a must for getting a visa. Whether you're going abroad to work or study, this process is essential. In India, the attestation procedure is a series of steps. The most crucial one is the Ministry of Foreign Affairs attestation, which comes after getting attestations from all departments. This step holds extra significance. India offers attestation services of three types:
                  <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-xl py-3 font-HeadingFont'>
                  <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Educational certificates</li> 
                  <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Non-educational certificates </li> 
                  <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Commercial certificates </li> 
                  </ol>
            Certificate attestation requires the original certificates and passport copies. These documents are verified by relevant authorities based on the type of attestation needed. Certificate attestation is a way to prove that educational, non-educational, and commercial documents are genuine. It's crucial for people planning to work or study abroad.
            </p>
            {/* readMore add in paragraph */}
            <div className='lg:hidden flex'>
              <p  onClick={()=> {setReadMore (!readMore)}}>
                <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
              </p>
              { readMore && extraContent }
            </div>
            <p className='hidden lg:flex text-md  lg:text-lg md:text-xl text-start text-gray-500 font-poppins mb-10 pr-3 lg:p-0'>
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