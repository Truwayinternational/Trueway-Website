import React, {useState} from 'react'
import questionMark from '../../../Assets/certificate attestation/Question mark_.png'


function WhatIsAttestation() {

  const [readMore, setReadMore] = useState(false);

  const extraContent =<div>
          <p className='lg:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
          Attestation often entails the signing of documents or confirming the data included in records, such as academic transcripts, contracts, legal agreements, and medical reports. The signature or seal of the attesting person indicates that they have reviewed the data and can certify its authenticity. By adding an additional layer of accountability and trust, attestation ensures that important documents are not fake or misleading. It is essential for verifying the reliability of various communications and transactions in both personal and professional contexts.
          </p>
  </div>

  const linkName = !readMore && 'Read More...'

  return (
    <div>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is<br/><p className='text-green-500'>Attestation ?</p></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={questionMark} alt="question_mark" />
            </div>
          <div className='flex '>
            <div className='w-full ml-3 lg:px-16 px-4 '>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
              Attestation is the process of verifying documents when a person is going abroad. It is mainly used for legal, financial, and administrative contexts where the credibility of documents and claims is significant. This authentic process of affirming or validating the authenticity, and accuracy of documents, and information by providing a signature, seal, or other form of verification. A third-party organisation should confirm that the submitted information is genuine and reliable.
              </p>
              {/* readMore add in paragraph */}
              <div className='lg:hidden flex'>
              <p  onClick={()=> {setReadMore (!readMore)}}>
                <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
              </p>
              { readMore && extraContent }
            </div>
              <p className='hidden lg:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 lg:p-0'>
              Attestation often entails the signing of documents or confirming the data included in records, such as academic transcripts, contracts, legal agreements, and medical reports. The signature or seal of the attesting person indicates that they have reviewed the data and can certify its authenticity. By adding an additional layer of accountability and trust, attestation ensures that important documents are not fake or misleading. It is essential for verifying the reliability of various communications and transactions in both personal and professional contexts.
              </p>
            </div>    
            <div className='hidden md:grid h-full mr-5 lg:mr-10 xl:mt-[-50px] my-8'>
              <img src={questionMark} alt="question_mark" />
            </div>
          </div>                          
        </div>
    </div>
  )
}

export default WhatIsAttestation