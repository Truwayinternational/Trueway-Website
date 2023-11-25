import React from 'react'
  
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'

// import 3 pie chart picture format
import Educational_piechart from '../../../Assets/embassy attestation/Edu.webp'
import Commercial_piechart from '../../../Assets/embassy attestation/Com.webp'
import personal_piechart from '../../../Assets/embassy attestation/Per.webp'

function HowDoIGet() {

  return (
        <>
            <div className=' max-w-[1240px] mx-auto place-content-center my-10'>
                <div className='flex mx-4 lg:px-14 px-3'>
                    <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3" />
                    <h4 className='md:text-5xl lg:px-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '> How do I get <br/><p className='text-green-500'>Embassy Attestation in India?</p></h4>
                </div>
                <div className='flex justify-center'>
                    <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-140px] py-4'>
                        <img src={Avatar_3} alt="avatar_3"/>
                    </div>
                    <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                        <p className='text-md md:text-xl lg:text-lg  text-gray-500 font-poppins pr-3 lg:p-0'>
                        You must submit certain paperwork and follow certain steps to obtain an attestation from the Indian embassy. The process for attesting educational materials varies depending on whether they are business or personal documents. However, Trueway offers simple, quick, and secure document attestation services. Trueway will provide fast assistance and direction for all of these documents. At any point, you won't experience any pain. 24/7, Trueway will provide full assistance.
                        </p>
                    </div>
                </div>
                    {/* Educational Documents Attestation Procedure  pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <div>
                        <h2 className='font-HeadingFont text-3xl font-bold lg:px-72 text-center'>Educational Documents Attestation Procedure </h2>
                        <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins p-4 md:px-8   lg:px-72'>
                        The procedure for educational document attestation is as follows: The candidate has to do HRD attestation first, followed by MEA attestation and Embassy attestation.
                        </p>
                        <img className='w-[350px] md:w-[500px] mx-auto py-5' src={Educational_piechart} alt="pie chart of commercial document attestation" />
                    </div>

                    {/* commercial Documents Attestation Procedure  pie chart format */}
                    <div>
                        <h2 className='font-HeadingFont text-3xl font-bold lg:px-72 text-center'>Commercial Documents Attestation Procedure </h2>
                        <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins p-4 md:px-8 lg:px-72'>
                        For the attestation of commercial documents, the procedure is slightly different from that for educational documents. Here, primarily, the applicant has to complete chamber of commerce attestation. Then MEA and Embassy attestation.
                        </p>
                        <img className='w-[350px] md:w-[500px] mx-auto py-5' src={Commercial_piechart} alt="pie chart of Personal document attestation" />
                    </div>

                    {/* personal Documents Attestation Procedure  pie chart format */}
                    <div>
                    <h2 className='font-HeadingFont text-3xl font-bold lg:px-[310px] text-center'>Personal Documents Attestation Procedure </h2>
                        <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins p-4 md:px-8   lg:px-72'>
                        After completing state home attestation, the candidate should appear for MEA attestation and finally Embassy attestation. Thus, he or she can attest to his or her personal documents.
                        </p>
                        <img className='w-[350px] md:w-[500px] mx-auto py-5' src={personal_piechart} alt="pie chart of Personal document attestation" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowDoIGet;