import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.webp'

import EducationalAttestation from '../../../../Assets/embassy attestation/qatar/educationalattestation.webp'
import personalAttestation from '../../../../Assets/embassy attestation/qatar/personalattestaion.webp'
import CommercialAttestation from '../../../../Assets/embassy attestation/qatar/Commercial Attestation.webp'

function HowDoIGetQatar() {
  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>In India, how do I get a <b className='text-green-500'><br/> Qatar Embassy Attestation ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        The process of getting documents verified by the Qatar embassy makes them eligible for use in Qatar. It is a mandatory procedure to conduct business from or within Qatar or get a visa for long-term stays. Trueway International will help you to get the process of Qatar Embassy Attestation through the three steps. To obtain a Qatar Embassy attestation in India, you should <b>follow these three steps:</b>
                    </p>
                </div>    
            </div>

            {/* flow chart in added below  */}
            <div className='flex flex-col lg:mx-4 lg:px-4 '>
                {/* Steps in Educational embassy attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Steps in<br/> Educational Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-72'>
                        The candidate should get their educational certificates to check the further procedures.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={EducationalAttestation} alt="flow chart of  Steps in Educational embassy attestation" />
                </div>

                {/* Steps in Personal embassy attestation flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Personal Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-72'>
                    All of your personal certificates or documents are necessary to be attested at this step. After the attestation, the documents should be submitted to the MEA.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={personalAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>

                {/* Steps in Commercial Attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Commercial Attestation</h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-72'>
                    In this step, your documents have to be verified by the Chamber of commerce, and this is the final step of this procedure.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={CommercialAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoIGetQatar


