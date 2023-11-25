import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'

import EducationalAttestation from '../../../../Assets/embassy attestation/kuwait/EducationalAttestation.webp'
import personalAttestation from '../../../../Assets/embassy attestation/kuwait/personalAttestation.webp'
import CommercialAttestation from '../../../../Assets/embassy attestation/kuwait/CommercialAttestation.webp'


function HowDoIGetKuwait() {
  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How do I get a <b className='text-green-500'> Kuwait embassy <br/>attestation in India ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    Start by having your documents authenticated by the Indian Ministry of External Affairs (MEA). The Kuwaiti Consulate or Embassy in India should subsequently receive these certified documents, along with the required payments and application forms. Your documents will be verified and authenticated by the embassy after they have been received, making them acceptable for usage in Kuwait.
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
                    A multi-step attestation process is frequently needed to confirm the reliability of educational qualifications for use abroad. The State Education Department's HRD, the Ministry of External Affairs' MEA, and the Kuwait Embassy's attestations are required for Type-1 documents, such as those required for work visas, work permits, and study visas. Similar procedures are required for Type-2 documents, such as SDM, MEA, and Kuwait Embassy Attestations. For international travel and employment opportunities, these attestation procedures are critical in determining the validity of educational certificates.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={EducationalAttestation} alt="flow chart of  Steps in Educational embassy attestation" />
                </div>

                {/* Steps in Personal embassy attestation flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Personal Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    A three-step method is used to certify personal documents for usage in Kuwait. The State Home Department attests the documents first to ensure their legitimacy. After that, the Ministry of External Affairs (MEA) attests the documents, further establishing their authenticity. The Kuwait Embassy then offers the final attestation needed for personal documents, confirming that they will be recognized for usage in Kuwait. The validity and acceptance of personal documents in Kuwait are ensured by this extensive process.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={personalAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>

                {/* Steps in Commercial Attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Commercial Attestation</h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    A three-step process is conducted to get the Kuwait Embassy's business document attestation. The Chamber of Commerce first certifies and attests to the legitimacy of the commercial documents. Attestation is then given by the Ministry of External Affairs (MEA). The attestation procedure is finally concluded by the Kuwaiti Embassy. Consider contacting an expert team like Trueway International for trustworthy and effective attestation services.
                    </p>
                    <img className='w-[350px] md:w-[750px] mx-auto py-5' src={CommercialAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoIGetKuwait