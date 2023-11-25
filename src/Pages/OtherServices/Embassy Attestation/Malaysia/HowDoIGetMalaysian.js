import React, {useState} from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'

import EducationalAttestation from '../../../../Assets/embassy attestation/malaysia/EducationalAttestation.webp'
import personalAttestation from '../../../../Assets/embassy attestation/malaysia/personalAttestation.webp'
import CommercialAttestation from '../../../../Assets/embassy attestation/malaysia/Commercial attestation.webp'


function HowDoIGetMalaysian() {

    const [readMore, setReadMore] = useState(false);

  const extraContent = <div>
        <p className='md:hidden text-md md:text-xl text-gray-500 font-poppins mb-10 pr-3 pt-2'>
            The Home Ministry and the Ministry of External Affairs must first review the document as part of Malaysia's document attestation process. The document can finally be made valid for usage in Malaysia by the local Malaysian Consulate. It is known as the Malaysian Embassy Verification Certificate. Alternatively, if you are unable to obtain a verification certificate from the Malaysian Embassy, obtain one through the Indian embassy for Malaysia.
        </p>
    </div>

const linkName = readMore ? '' : 'Read More...'


  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How do I get a <b className='text-green-500'> Malaysian Embassy <br/> Attestation in India ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    The process of obtaining Malaysian embassy certification in India is time-consuming and generally expensive. The procedure aids in authenticating the documentation of the person who will be entering the nation. Depending on the reason for the transfer, appropriate paperwork is checked by the authorities, and users are given permission for the move in accordance with their findings.
                    <br/>
                    Trueway International has accurate knowledge of the procedure and promises to get your work done at its best at an affordable price. All you need to do is share the documents required with us. Our experts will assist you with the process. After handing over the documents, it’s our responsibility to take care of them.
                    </p>
                        {/* readMore add in paragraph */}
                        <div className='md:hidden flex'>
                            <p  onClick={()=> {setReadMore (!readMore)}}>
                            <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                            </p>
                            { readMore && extraContent }
                        </div>
                    <p className='hidden md:flex text-md lg:text-lg md:text-xl  text-gray-500 font-poppins mb-10 pr-3 lg:p-0'>
                    The Home Ministry and the Ministry of External Affairs must first review the document as part of Malaysia's document attestation process. The document can finally be made valid for usage in Malaysia by the local Malaysian Consulate. It is known as the Malaysian Embassy Verification Certificate. Alternatively, if you are unable to obtain a verification certificate from the Malaysian Embassy, obtain one through the Indian embassy for Malaysia.
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
                    When a person is applying for or going to join a job in Malaysia, educational documents need Malaysian Embassy attestation. The process for attestation of educational documents is a little complicated because it necessitates inspecting educational documents at their source of issue. Obtaining an Embassy Attestation is a legal process for validating educational documents, including degree certificates, diploma certificates, HSE certificates, SSE certificates, educational mark sheets, transcripts, etc. 
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={EducationalAttestation} alt="flow chart of  Steps in Educational embassy attestation" />
                </div>

                {/* Steps in Personal embassy attestation flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Personal Embassy Attestation </h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    When a person applies for a resident or dependent visa for Malaysia, personal documents like a marriage certificate, birth certificate, police clearance certificate, power of attorney, and medical certificate must be attested. An attested personal document guarantees that all of your personal information is accurate and true.
                    </p>
                    <img className='w-[350px] md:w-[700px] mx-auto py-5' src={personalAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>

                {/* Steps in Commercial Attestation  flow chart format */}
                <div className='flex flex-col justify-center mt-10 mx-2'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center'>Steps in <br/> Commercial Attestation</h2>
                    <hr className=' w-2/4 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <p className='text-md md:text-xl lg:text-lg text-center text-gray-500 font-poppins px-4 py-1 md:px-8   lg:px-20'>
                    When an Indian company plans to sell its goods in the province of Malaysia, the paperwork pertaining to trade and commerce need to be attested by the Malaysia Embassy. Additionally, if an Indian company opens a branch in Malaysia and registers a trademark, attested commercial documents may be needed. The Certificate of Origin, Commercial Invoice, Free Sale Certificate, GMP Certificate, Product List, Products Specification, Phytosanitary Certificate, etc. are included in the category of commercial papers.
                    </p>
                    <img className='w-[350px] md:w-[750px] mx-auto py-5' src={CommercialAttestation} alt="flow chart of Steps in Personal embassy attestation" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoIGetMalaysian