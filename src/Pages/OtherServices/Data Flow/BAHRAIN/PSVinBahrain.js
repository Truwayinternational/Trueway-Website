import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'


function PSVinBahrain() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
                <h2 className='md:text-5xl lg:w-2/3 lg:px-6 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is<b className='text-green-500'> Primary Source Verification(PSV)</b> significant in Bahrain ?</h2>
                <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        There is a substantial risk of fraud practises and scams taking place if proper verification is not done before the actual dataflow procedure. That is why primary source verification is required. The authorities can thoroughly examine the documents submitted by the candidates using PSV, allowing them to confirm and demonstrate the documents' legitimacy. No forged or unauthorised certifications will be sent further in the process because this is the first stage. We'll get rid of the phoney ones as quickly as we can.
                        </p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:w-[15%] xl:mt-[-140px] my-auto'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PSVinBahrain