import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'

// flow chart images added here
import EducationalCertificate from '../../../../Assets/embassy attestation/qatar/educational_certificate.webp'
import personalCertificate from '../../../../Assets/embassy attestation/qatar/personal_certificate.webp'
import commercialDocument from '../../../../Assets/embassy attestation/qatar/commercial_document.webp'


function PurposeOfKuwaitEmbassy() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
                <h2 className='md:text-5xl lg:px-6  lg:w-2/3 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide'> Purpose of<b className='text-green-500'> Kuwait Embassy Attestation</b></h2>
                <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md  md:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                            Is Kuwait Embassy attestation easy to do? Are you searching for the best consultancy to handle the attestation work with accuracy? Trueway provides fast, accurate, and hassle-free attestation services at an affordable price. Kuwait Embassy attestation is compulsory to verify the certificates you submit for employment or studies. It is necessary for gaining admission to Kuwait's schools and universities, obtaining work permits, starting a business, and acquiring a business licence. Please note that without authentic embassy attestation, your application may be rejected.
                        </p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:w-[15%] xl:mt-[-100px] my-10'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>

        {/* some flow chart for kuwait embassy attestaion mentioned below */}

            {/* NEED OF EDUCATIONAL CERTIFICATES ATTESTATION  pie chart format */}
            <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Educational <br/> Certificates Attestation </h2>
                    <hr className=' w-1/2 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={EducationalCertificate} alt="pie chart of Educational certificate attestation" />
                </div>

                {/* Need of Personal Certificates Attestation  pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Personal<br/> Certificates Attestation </h2>
                    <hr className=' w-1/2 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={personalCertificate} alt="pie chart of Personal Certificates Attestation " />
                </div>

                {/* Need of Commercial Documents Attestation pie chart format */}
                <div className='flex flex-col justify-center my-10'>
                    <h2 className='font-HeadingFont text-2xl md:text-3xl  font-bold  text-center '>Need of Commercial <br/> Documents Attestation</h2>
                    <hr className=' w-1/2 rounded bg-green-500 mx-auto h-[2px] my-3'/> 
                    <img className='w-[330px] md:w-[600px] mx-auto py-5' src={commercialDocument} alt="pie chart of Need of Commercial Documents Attestation" />
                </div>
      </div>
    </>
  )
}

export default PurposeOfKuwaitEmbassy