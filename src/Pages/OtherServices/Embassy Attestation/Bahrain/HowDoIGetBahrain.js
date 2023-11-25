import React from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'

import EducationalAttestation from '../../../../Assets/embassy attestation/bahrain/EducationalAttestation.webp'
import personalAttestation from '../../../../Assets/embassy attestation/bahrain/personalAttestation.webp'
import CommercialAttestation from '../../../../Assets/embassy attestation/bahrain/CommercialAttestation.webp'


function HowDoIGetBahrain() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How do I get a <b className='text-green-500'> Bahrain embassy <br/>attestation in India ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        The attestation starts at Notary, and after that, further procedures will be done by the home department. In all stages, the authenticity of the certificates will be checked and verified. By finding it genuine, only then will it be forwarded to higher authorities. After all the verifications and attestations, you can use these documents for migration.
                    </p>
                </div>    
            </div>

            {/* flow chart in added below  */}
            <div className='flex flex-col lg:mx-4 lg:px-4 '>
                {/* Steps in Educational embassy attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Procedure For<br/> Educational Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    Educational certificates can be attested in 2 types mainly and in these two only the first step varies.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={EducationalAttestation} alt="flow chart of  Steps in Educational embassy attestation" />
                </div>

                {/* Steps in Personal embassy attestation flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Procedures For<br/> Personal Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                        Personal documents also are needed to be attested by the relevant authorities. Following are the flow of the procedure.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={personalAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>

                {/* Steps in Commercial Attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Procedures For <br/> Commercial Attestation</h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                        In the case of commercial documents you have to verify your documents by submitting it before the respective authorities.
                    </p>
                    <img className='w-[350px] md:w-[750px] mx-auto py-5' src={CommercialAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoIGetBahrain