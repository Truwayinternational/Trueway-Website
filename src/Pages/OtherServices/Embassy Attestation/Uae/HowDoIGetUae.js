import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'


import EducationalAttestation from '../../../../Assets/embassy attestation/uae/Educational embassy.webp'
import personalAttestation from '../../../../Assets/embassy attestation/uae/Personal embassy.webp'
import CommercialAttestation from '../../../../Assets/embassy attestation/uae/commercial attestation.webp'


function HowDoIGetUae() {
  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How do I get a <b className='text-green-500'> UAE embassy <br/>attestation in India ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        Start by having the Indian Ministry of External Affairs (MEA) certify your documents. These verified documents should then be delivered to the UAE Embassy in India, together with the necessary funds and application forms. After the embassy receives your documents, it will verify and authenticate them so that they can be used in the UAE. In the UAE, there are three different kinds of documents that can be used: educational, personal, and commercial. UAE attestation is the process of having the appropriate department stamp or sign a document. In the UAE, it is required for visas for employment, family, and education.
                    </p>
                </div>    
            </div>

            {/* flow chart in added below  */}
            <div className='flex flex-col lg:mx-4 lg:px-4 '>
                {/* Steps in Educational embassy attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Steps in<br/> Educational Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                        It is usually necessary to go through a multi-step attestation process to verify the validity of educational credentials before using them abroad. Type-1 documents, such as those needed for work visas, work permits, and student visas, require the attestations of the State Education Department's HRD, the Ministry of External Affairs' MEA, and the UAE Embassy. For Type-2 documents like SDM, MEA, and UAE Embassy Attestations, the same procedures are necessary. 
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={EducationalAttestation} alt="flow chart of  Steps in Educational embassy attestation" />
                </div>

                {/* Steps in Personal embassy attestation flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Personal Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                        To certify personal documents for use in the UAE, there are two different ways to complete the attestation process. Type 1: To confirm the legality of the documents, the State Home Department first attests to them. The Ministry of External Affairs (MEA) then certifies the documents, further proving their legitimacy. The final attestation for personal documents is then provided by the UAE Embassy, attesting to their acceptance for use in the UAE. For Type-2 documents like SDM, MEA, and UAE Embassy Attestations, the same procedures are necessary. This lengthy process ensures the legitimacy and acceptability of personal documents in the UAE.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={personalAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>

                {/* Steps in Commercial Attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Commercial Attestation</h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    To obtain business document attestation from the UAE Embassy, a three-step procedure is followed. The commercial documents are initially certified by and attested to by the Chamber of Commerce. After that, the Ministry of External Affairs (MEA) issues the attestation. The UAE Embassy eventually completes the attestation process. For dependable and efficient attestation services, think about getting in touch with a knowledgeable group like Trueway International.
                    </p>
                    <img className='w-[350px] md:w-[750px] mx-auto py-5' src={CommercialAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoIGetUae