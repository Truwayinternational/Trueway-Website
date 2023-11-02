import React from 'react'


import EducationalCertificate from '../../../../Assets/embassy attestation/qatar/educational_certificate.png'
import personalCertificate from '../../../../Assets/embassy attestation/qatar/personal_certificate.png'
import commercialDocument from '../../../../Assets/embassy attestation/qatar/commercial_document.png'


function SiginificanceOfQatarEmbassy() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-4 '>
                <h2 className='md:text-5xl text-4xl py-5  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4 lg:px-'>Significance of<b className='text-green-500'><br/> Qatar Embassy Attestation </b>
                </h2>
                <div className='w-full lg:px-10 px-5 '>
                    <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins '>
                    Documents issued in one nation and intended for use in Qatar have to be authenticated and legalised by the Qatari embassy there. This process ensures that the papers are authentic and can be recognized as valid legal or official documents under Qatari law. It is mandatorily required for various purposes, such as employment, education, business transactions, and residency, as Qatar authorities need to verify the authenticity or genuineness of foreign documents before accepting them.
                    </p>
                </div> 

                {/* NEED OF EDUCATIONAL CERTIFICATES ATTESTATION  pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Educational <br/> Certificates Attestation </h2>
                    <hr className=' w-3/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={EducationalCertificate} alt="pie chart of Educational certificate attestation" />
                </div>

                {/* Need of Personal Certificates Attestation  pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Personal<br/> Certificates Attestation </h2>
                    <hr className=' w-3/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={personalCertificate} alt="pie chart of Personal Certificates Attestation " />
                </div>

                {/* Need of Commercial Documents Attestation pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Commercial <br/> Documents Attestation</h2>
                    <hr className=' w-3/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={commercialDocument} alt="pie chart of Need of Commercial Documents Attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default SiginificanceOfQatarEmbassy